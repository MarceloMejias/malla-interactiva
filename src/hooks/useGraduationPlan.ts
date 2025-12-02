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
    const semesterLevels = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12'];

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
    
    // Estudiantes de primer semestre solo pueden tomar materias de s1
    if (currentLevel === 's1') {
      return subjectIndex === 0; // Solo s1
    }
    
    // Estudiantes de segundo semestre pueden tomar s1 y s2
    if (currentLevel === 's2') {
      return subjectIndex <= 1; // s1 o s2
    }
    
    // Estudiantes de tercer semestre en adelante pueden tomar cualquier materia
    // siempre que cumplan los prerrequisitos (verificado en isSubjectAvailable)
    return true;
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
    const maxCreditsPerSemester = 32; // Límite de créditos por semestre en UTFSM

    const getSemesterName = (semesterNumber: number): string => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      let baseYear = currentYear;
      let baseSemester = 1;
      if (currentMonth >= 8) {
        baseSemester = 2;
      } else {
        baseSemester = 1;
      }
      const totalSemesters = semesterNumber - 1;
      const additionalYears = Math.floor(totalSemesters / 2);
      const semesterInYear = (totalSemesters % 2);
      const finalYear = baseYear + additionalYears;
      const finalSemester = ((baseSemester - 1 + semesterInYear) % 2) + 1;
      if (baseSemester + semesterInYear > 2) {
        return `${finalYear + 1}-${finalSemester}`;
      }
      return `${finalYear}-${finalSemester}`;
    };

    // Obtener todos los semestres posibles en orden
    const semesterLevels = Array.from(new Set(subjects.map(s => s.semester))).filter(Boolean);
    semesterLevels.sort((a, b) => {
      const numA = parseInt((a || '').replace('s', ''));
      const numB = parseInt((b || '').replace('s', ''));
      return numA - numB;
    });

    let semesterPointer = 0;


    while (remainingSubjects.length > 0 && currentSemester <= 20) {
      // Determinar el nivel académico real del alumno según ramos aprobados
      let maxApprovedSemester = 0;
      for (const s of subjects) {
        if (completedSubjects.has(s.code) && s.semester && s.semester.startsWith('s')) {
          const n = parseInt(s.semester.replace('s', ''));
          if (!isNaN(n) && n > maxApprovedSemester) maxApprovedSemester = n;
        }
      }
      const realSemester = Math.max(1, maxApprovedSemester + 1);

      // ¿Va al día? No tiene pendientes de semestres anteriores
      let vaAlDia = true;
      for (let i = 1; i < realSemester; i++) {
        if (remainingSubjects.some(s => s.semester === `s${i}`)) {
          vaAlDia = false;
          break;
        }
      }

      const semesterSubjects: Subject[] = [];
      let semesterCredits = 0;

      if (vaAlDia) {
        // Solo puede tomar ramos del semestre que le corresponde
        const currentSemesterCode = `s${realSemester}`;
        const available = remainingSubjects.filter(subject => {
          return subject.semester === currentSemesterCode && isSubjectAvailable(subject, completedSubjects);
        });
        for (const subject of available) {
          if (semesterCredits + Number(subject.sctCredits) <= maxCreditsPerSemester) {
            semesterSubjects.push(subject);
            semesterCredits += Number(subject.sctCredits);
            completedSubjects.add(subject.code);
            const index = remainingSubjects.findIndex(s => s.code === subject.code);
            if (index !== -1) {
              remainingSubjects.splice(index, 1);
            }
          }
        }
      } else if (realSemester === 1) {
        // Solo puede tomar ramos de primer semestre
        const availableFirst = remainingSubjects.filter(subject => {
          return subject.semester === 's1' && isSubjectAvailable(subject, completedSubjects);
        });
        for (const subject of availableFirst) {
          if (semesterCredits + Number(subject.sctCredits) <= maxCreditsPerSemester) {
            semesterSubjects.push(subject);
            semesterCredits += Number(subject.sctCredits);
            completedSubjects.add(subject.code);
            const index = remainingSubjects.findIndex(s => s.code === subject.code);
            if (index !== -1) {
              remainingSubjects.splice(index, 1);
            }
          }
        }
      } else if (realSemester === 2) {
        // Solo puede tomar ramos de primer y segundo semestre
        const availableFirstSecond = remainingSubjects.filter(subject => {
          return (subject.semester === 's1' || subject.semester === 's2') && isSubjectAvailable(subject, completedSubjects);
        });
        // Priorizar s2 sobre s1 para llenar créditos
        availableFirstSecond.sort((a, b) => {
          const aN = parseInt((a.semester || '').replace('s', ''));
          const bN = parseInt((b.semester || '').replace('s', ''));
          return bN - aN;
        });
        for (const subject of availableFirstSecond) {
          if (semesterCredits + Number(subject.sctCredits) <= maxCreditsPerSemester) {
            semesterSubjects.push(subject);
            semesterCredits += Number(subject.sctCredits);
            completedSubjects.add(subject.code);
            const index = remainingSubjects.findIndex(s => s.code === subject.code);
            if (index !== -1) {
              remainingSubjects.splice(index, 1);
            }
          }
        }
      } else {
        // Puede tomar cualquier ramo disponible por prerrequisito
        const adelantables = remainingSubjects.filter(subject => {
          return isSubjectAvailable(subject, completedSubjects);
        });
        adelantables.sort((a, b) => {
          const aIdx = semesterLevels.indexOf(a.semester);
          const bIdx = semesterLevels.indexOf(b.semester);
          return aIdx - bIdx;
        });
        for (const subject of adelantables) {
          if (semesterCredits + Number(subject.sctCredits) <= maxCreditsPerSemester) {
            semesterSubjects.push(subject);
            semesterCredits += Number(subject.sctCredits);
            completedSubjects.add(subject.code);
            const index = remainingSubjects.findIndex(s => s.code === subject.code);
            if (index !== -1) {
              remainingSubjects.splice(index, 1);
            }
          }
          if (semesterCredits >= maxCreditsPerSemester) break;
        }
      }

      if (semesterSubjects.length > 0) {
        plan.push({
          semester: getSemesterName(currentSemester),
          subjects: semesterSubjects,
          credits: semesterCredits
        });
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
