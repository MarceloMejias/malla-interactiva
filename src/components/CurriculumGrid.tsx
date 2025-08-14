'use client';

import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import SubjectCard from './SubjectCard';
import StatsBar from './StatsBar';
import GraduationPlanModal from './GraduationPlanModal';
import { useCalculator } from '@/hooks/useCalculator';
import { useConfetti } from '@/hooks/useConfetti';
import { useGraduationPlan } from '@/hooks/useGraduationPlan';
import { Subject, SubjectColors } from '@/types/curriculum';

export default function CurriculumGrid() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [colors, setColors] = useState<SubjectColors>({});
  const [careerName, setCareerName] = useState<string>('');
  const [careerColor, setCareerColor] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [showCategoriesPopup, setShowCategoriesPopup] = useState(false);
  const subjectRefs = useRef<Record<string, HTMLDivElement | null>>({});
  
  const { subjectStates, updateSubjectState, resetCalculator, calculateCredits, isLoaded } = useCalculator(subjects);
  const { checkAndTriggerConfetti } = useConfetti();
  const { 
    showGraduationPlan, 
    graduationPlan, 
    isAnimating, 
    playGraduationAnimation, 
    closeGraduationPlan 
  } = useGraduationPlan(subjects, subjectStates);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Cargar datos
        const dataModule = await import('@/data/data_INGINF.json');
        const colorsModule = await import('@/data/colors_INGINF.json');
  const carrerasModule = await import('@/data/carreras.json');

  const data = dataModule.default as Record<string, unknown[][]>;
  const colorsData = colorsModule.default as Record<string, string[]>;
  // Carrera puede tener un color
  const carrerasData = carrerasModule.default as Array<{Nombre: string, Link: string, Color?: string}>;

  // Obtener el nombre y color de la carrera buscando por el Link "INGINF"
  const career = carrerasData.find(carrera => carrera.Link === 'INGINF');
  const careerNameFromJson = career?.Nombre || 'Ingeniería en Informática';
  setCareerName(careerNameFromJson);
  setCareerColor(career?.Color);
        
        // Procesar datos
        const processedSubjects: Subject[] = [];
        
        Object.entries(data).forEach(([semester, semesterSubjects]) => {
          semesterSubjects.forEach((subjectArray: unknown[]) => {
            const [name, code, usmCredits, sctCredits, type, prerequisites] = subjectArray;
            processedSubjects.push({
              name: name as string,
              code: code as string,
              usmCredits: usmCredits as string,
              sctCredits: Number(sctCredits), // Asegurar conversión a número
              type: type as string,
              prerequisites: (prerequisites || []) as string[],
              semester
            });
          });
        });

        setSubjects(processedSubjects);
        setColors(colorsData);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const stats = calculateCredits();

  // Verificar si se alcanzó el 100% para lanzar confetti
  useEffect(() => {
    if (stats.percentage >= 100) {
      checkAndTriggerConfetti();
    }
  }, [stats.percentage, checkAndTriggerConfetti]);

  const getSemesterSubjects = (semester: string) => {
    return subjects.filter(subject => subject.semester === semester);
  };

  const getSemesterTitle = (semester: string) => {
    const semesterNumber = semester.replace('s', '');
    return `${semesterNumber}° Semestre`;
  };

  const getSemesterCredits = (semester: string) => {
    return getSemesterSubjects(semester).reduce((total, subject) => total + Number(subject.sctCredits), 0);
  };

  const getSemesterApprovedCredits = (semester: string) => {
    return getSemesterSubjects(semester).reduce((total, subject) => {
      const state = subjectStates[subject.code];
      return total + (state?.status === 'approved' ? Number(subject.sctCredits) : 0);
    }, 0);
  };

  const scrollToSubject = (subjectCode: string) => {
    const element = subjectRefs.current[subjectCode];
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      // Destacar brevemente la tarjeta con animación
      element.classList.add('ring-4', 'ring-blue-400', 'ring-opacity-75', 'transform', 'scale-105');
      setTimeout(() => {
        element.classList.remove('ring-4', 'ring-blue-400', 'ring-opacity-75', 'transform', 'scale-105');
      }, 2000);
    }
  };

  const findSubjectByCode = (code: string): Subject | undefined => {
    return subjects.find(subject => subject.code === code);
  };

  if (loading || !isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          <p className="text-gray-600 text-sm">
            {loading ? 'Cargando malla curricular...' : 'Restaurando progreso...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-2 pb-32">
      <div className="w-full mx-auto">
        {/* Malla por semestres - Vista en columnas */}
        <div className="p-4">
          <h2
            className="text-xl font-bold mb-6 text-center"
            style={careerColor ? { color: careerColor } : {}}
          >
            {careerName}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-2">
            {Array.from({ length: 8 }, (_, i) => `s${i + 1}`).map((semester) => {
              const semesterSubjects = getSemesterSubjects(semester);
              const semesterCredits = getSemesterCredits(semester);
              const approvedCredits = getSemesterApprovedCredits(semester);
              
              if (semesterSubjects.length === 0) return null;

              return (
                <div key={semester} className="flex flex-col w-full bg-gray-100 rounded-2xl shadow-md border border-gray-200">
                  {/* Header del semestre */}
                  <div className="bg-gray-200 rounded-t-2xl p-3 text-center border-b border-gray-300">
                    <h3 className="font-bold text-gray-800 text-sm">
                      {getSemesterTitle(semester)}
                    </h3>
                    <div className="text-xs text-gray-700 mt-1">
                      <span className="font-medium">{approvedCredits}</span>
                      <span className="mx-1">/</span>
                      <span>{semesterCredits} créditos</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2 mt-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500 shadow-sm"
                        style={{ width: `${semesterCredits > 0 ? (approvedCredits / semesterCredits) * 100 : 0}%` }}
                      />
                    </div>
                  </div>
                  
                  {/* Asignaturas del semestre */}
                  <div className="flex flex-col gap-3 p-3 rounded-b-2xl">
                    {semesterSubjects.map((subject) => (
                      <div
                        key={subject.code}
                        ref={(el) => {
                          subjectRefs.current[subject.code] = el;
                        }}
                        className="transition-all duration-300 ease-in-out"
                      >
                        <SubjectCard
                          subject={subject}
                          state={subjectStates[subject.code]}
                          onStateChange={(state) => updateSubjectState(subject.code, state)}
                          color={colors[subject.type]?.[0] || '#6B7280'}
                          categoryName={colors[subject.type]?.[1] || 'Sin categoría'}
                          onPrerequisiteClick={scrollToSubject}
                          findSubjectByCode={findSubjectByCode}
                          subjectStates={subjectStates}
                          colors={colors}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Universidad Técnica Federico Santa María</p>
          <p>Ingeniería en Informática</p>
        </div>
      </div>

      {/* Barra flotante de estadísticas */}
      <StatsBar
        stats={stats}
        onShowCategories={() => setShowCategoriesPopup(true)}
        onReset={resetCalculator}
        onPlayGraduationPlan={playGraduationAnimation}
      />

      {/* Popup de categorías */}
      {showCategoriesPopup && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-60 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 max-w-4xl w-full max-h-[80vh] overflow-hidden">
            {/* Header del popup */}
            <div className="bg-gradient-to-r from-blue-600/80 to-indigo-600/80 backdrop-blur-lg text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <FontAwesomeIcon icon={faInfoCircle} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Categorías de Asignaturas</h3>
                  <p className="text-sm text-white/80">
                    Colores utilizados para organizar las materias por área
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowCategoriesPopup(false)}
                className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-2xl backdrop-blur-sm"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            
            {/* Contenido del popup */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(colors).map(([key, colorArray]) => (
                  <div 
                    key={key} 
                    className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/60 transition-all duration-300 border border-gray-200 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-6 h-6 rounded-full shadow-lg border-2 border-white/30 flex-shrink-0"
                        style={{ backgroundColor: colorArray[0] }}
                      />
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-800">{colorArray[1]}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal del plan de graduación */}
      <GraduationPlanModal
        show={showGraduationPlan}
        graduationPlan={graduationPlan}
        isAnimating={isAnimating}
        onClose={closeGraduationPlan}
        colors={colors}
      />
    </div>
  );
}
