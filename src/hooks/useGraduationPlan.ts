import { useState, useCallback } from 'react';
import { Subject, SubjectState } from '@/types/curriculum';

interface SemesterPlan {
  semester: string; // Cambio de number a string para formato "2025-1"
  subjects: Subject[];
  credits: number;
}

export const useGraduationPlan = (
  subjects: Subject[], 
  subjectStates: Record<string, SubjectState>
) => {
  const [showGraduationPlan, setShowGraduationPlan] = useState(false);
  const [graduationPlan, setGraduationPlan] = useState<SemesterPlan[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const isSubjectAvailable = (subject: Subject, completedSubjects: Set<string>): boolean => {
    return subject.prerequisites.every(prereq => completedSubjects.has(prereq));
  };

  const getCurrentAcademicLevel = (completedSubjects: Set<string>): string => {
    // Determinar el nivel académico actual basado en las materias completadas
    const semesterLevels = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8'];
    
    for (let i = semesterLevels.length - 1; i >= 0; i--) {
      const semesterSubjects = subjects.filter(s => s.semester === semesterLevels[i]);
      const completedInSemester = semesterSubjects.filter(s => completedSubjects.has(s.code));
      
      if (completedInSemester.length > 0) {
        // Si tiene materias completadas en este semestre, su nivel mínimo es el siguiente
        return semesterLevels[Math.min(i + 1, semesterLevels.length - 1)];
      }
    }
    
    // Si no tiene materias completadas, está en s1
    return 's1';
  };

  const canTakeSubjectFromSemester = (
    subjectSemester: string, 
    currentLevel: string, 
    completedSubjects: Set<string>
  ): boolean => {
    const semesterLevels = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8'];
    const currentIndex = semesterLevels.indexOf(currentLevel);
    const subjectIndex = semesterLevels.indexOf(subjectSemester);
    
    // Puede tomar materias de su semestre actual
    if (subjectIndex === currentIndex) return true;
    
    // Puede tomar materias del siguiente semestre solo si:
    // 1. Es exactamente el siguiente semestre
    // 2. Tiene prerrequisitos completos
    if (subjectIndex === currentIndex + 1) {
      return true; // Los prerrequisitos ya se verifican en isSubjectAvailable
    }
    
    // Puede tomar materias de semestres anteriores si las perdió
    if (subjectIndex < currentIndex) return true;
    
    // No puede adelantar más de un semestre
    return false;
  };

  const calculateGraduationPlan = useCallback(() => {
    // Obtener materias no aprobadas
    const pendingSubjects = subjects.filter(subject => 
      !subjectStates[subject.code]?.status || 
      subjectStates[subject.code].status !== 'approved'
    );

    if (pendingSubjects.length === 0) {
      setGraduationPlan([]);
      return;
    }

    // Materias ya completadas
    const completedSubjects = new Set(
      subjects
        .filter(subject => subjectStates[subject.code]?.status === 'approved')
        .map(subject => subject.code)
    );

    const plan: SemesterPlan[] = [];
    const remainingSubjects = [...pendingSubjects];
    let currentSemester = 1;
    const maxCreditsPerSemester = 30; // Límite de créditos por semestre en UTFSM
    const maxCreditsFirstYear = 25; // Límite de créditos para estudiantes de primer año
    const currentYear = new Date().getFullYear(); // Año actual

    const getSemesterName = (semesterNumber: number): string => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11
      
      // Determinar el año y semestre base según la fecha actual
      let baseYear = currentYear;
      let baseSemester = 1;
      
      // Si estamos en agosto o después, el próximo semestre será el segundo semestre del año actual
      // Si estamos antes de agosto, el próximo semestre será el primer semestre del año actual
      if (currentMonth >= 8) {
        // Estamos en el segundo semestre del año actual
        baseSemester = 2;
      } else {
        // Estamos en el primer semestre del año actual o entre semestres
        baseSemester = 1;
      }
      
      // Calcular el año y semestre para el semestre número 'semesterNumber'
      const totalSemesters = semesterNumber - 1;
      const additionalYears = Math.floor(totalSemesters / 2);
      const semesterInYear = (totalSemesters % 2);
      
      const finalYear = baseYear + additionalYears;
      const finalSemester = ((baseSemester - 1 + semesterInYear) % 2) + 1;
      
      // Si el semestre calculado es mayor que 2, incrementar el año
      if (baseSemester + semesterInYear > 2) {
        return `${finalYear + 1}-${finalSemester}`;
      }
      
      return `${finalYear}-${finalSemester}`;
    };

    const getMaxCreditsForLevel = (academicLevel: string): number => {
      // Estudiantes de primer año (s1 y s2) tienen límite menor
      return (academicLevel === 's1' || academicLevel === 's2') ? maxCreditsFirstYear : maxCreditsPerSemester;
    };

    while (remainingSubjects.length > 0 && currentSemester <= 20) { // Máximo 20 semestres
      // Determinar el nivel académico actual del estudiante
      const currentAcademicLevel = getCurrentAcademicLevel(completedSubjects);
      
      let availableSubjects = remainingSubjects.filter(subject => {
        // Verificar prerrequisitos
        const hasPrerequisites = isSubjectAvailable(subject, completedSubjects);
        // Verificar si puede tomar materias de este semestre según su nivel académico
        const canTakeBySemester = subject.semester ? 
          canTakeSubjectFromSemester(subject.semester, currentAcademicLevel, completedSubjects) : 
          false;
        
        return hasPrerequisites && canTakeBySemester;
      });

      if (availableSubjects.length === 0) {
        // Si no hay materias disponibles, avanzar al siguiente semestre
        currentSemester++;
        continue;
      }

      // Ordenar por prioridad: menos prerrequisitos pendientes primero
      availableSubjects.sort((a, b) => {
        const aPendingPrereqs = a.prerequisites.filter(prereq => 
          !completedSubjects.has(prereq)
        ).length;
        const bPendingPrereqs = b.prerequisites.filter(prereq => 
          !completedSubjects.has(prereq)
        ).length;
        return aPendingPrereqs - bPendingPrereqs;
      });

      // Seleccionar materias para este semestre
      const semesterSubjects: Subject[] = [];
      let semesterCredits = 0;
      const maxCreditsThisSemester = getMaxCreditsForLevel(currentAcademicLevel);

      for (const subject of availableSubjects) {
        if (semesterCredits + subject.sctCredits <= maxCreditsThisSemester) {
          semesterSubjects.push(subject);
          semesterCredits += subject.sctCredits;
          completedSubjects.add(subject.code);
          
          // Remover de materias pendientes
          const index = remainingSubjects.findIndex(s => s.code === subject.code);
          if (index !== -1) {
            remainingSubjects.splice(index, 1);
          }
        }
      }

      if (semesterSubjects.length > 0) {
        plan.push({
          semester: getSemesterName(currentSemester),
          subjects: semesterSubjects,
          credits: semesterCredits
        });

        // Verificar si el estudiante avanzó de nivel académico
        const newAcademicLevel = getCurrentAcademicLevel(completedSubjects);
        // El nivel académico se actualiza automáticamente en la siguiente iteración
      }

      currentSemester++;
    }

    setGraduationPlan(plan);
  }, [subjects, subjectStates]);

  const playGraduationAnimation = useCallback(() => {
    calculateGraduationPlan();
    setShowGraduationPlan(true);
    setIsAnimating(true);

    // Detener animación después de mostrar todos los semestres
    setTimeout(() => {
      setIsAnimating(false);
    }, graduationPlan.length * 1000 + 2000);
  }, [calculateGraduationPlan, graduationPlan.length]);

  const closeGraduationPlan = useCallback(() => {
    setShowGraduationPlan(false);
    setIsAnimating(false);
  }, []);

  return {
    showGraduationPlan,
    graduationPlan,
    isAnimating,
    playGraduationAnimation,
    closeGraduationPlan
  };
};
