'use client';

import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTimes, faArrowLeft, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
  const [loading, setLoading] = useState(false);
  const [showCategoriesPopup, setShowCategoriesPopup] = useState(false);
  const [showCareerSelector, setShowCareerSelector] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<string>('');
  const [casaCentralCareers, setCasaCentralCareers] = useState<Array<{Nombre: string, Link: string, Color?: string}>>([]);
  const [vinaConcepcionCareers, setVinaConcepcionCareers] = useState<Array<{Nombre: string, Link: string, Color?: string}>>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const subjectRefs = useRef<Record<string, HTMLDivElement | null>>({});
  
  // Detectar modo oscuro del sistema
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(isDark);
    };

    // Verificar al cargar
    checkDarkMode();

    // Escuchar cambios en el modo del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);

    return () => {
      mediaQuery.removeEventListener('change', checkDarkMode);
    };
  }, []);
  
  // Cargar carreras disponibles y última carrera seleccionada al iniciar
  useEffect(() => {
    const loadCareers = async () => {
      try {
        const casaCentralModule = await import('@/data/carreras_casa_central.json');
        const vinaConcepcionModule = await import('@/data/carreras_vina_concepcion.json');
        
        const casaCentralData = casaCentralModule.default as Array<{Nombre: string, Link: string, Color?: string}>;
        const vinaConcepcionData = vinaConcepcionModule.default as Array<{Nombre: string, Link: string, Color?: string}>;
        
        setCasaCentralCareers(casaCentralData);
        setVinaConcepcionCareers(vinaConcepcionData);

        // Cargar la última carrera seleccionada
        const lastSelectedCareer = localStorage.getItem('last-selected-career');
        if (lastSelectedCareer) {
          // Verificar que la carrera existe en los datos
          const allCareers = [...casaCentralData, ...vinaConcepcionData];
          const careerExists = allCareers.some(career => career.Link === lastSelectedCareer);
          
          if (careerExists) {
            setSelectedCareer(lastSelectedCareer);
            setShowCareerSelector(false);
          } else {
            // Si la carrera guardada no existe, mostrar selector
            setShowCareerSelector(true);
          }
        } else {
          // Primera vez, mostrar selector
          setShowCareerSelector(true);
        }
        
        setIsInitialized(true);
      } catch (error) {
        console.error('Error cargando carreras:', error);
        setShowCareerSelector(true);
        setIsInitialized(true);
      }
    };
    
    loadCareers();
  }, []);
  
  const { subjectStates, updateSubjectState, resetCalculator, calculateCredits, isLoaded } = useCalculator(subjects, selectedCareer);
  const { checkAndTriggerConfetti } = useConfetti();
  const { 
    showGraduationPlan, 
    graduationPlan, 
    isAnimating, 
    playGraduationAnimation, 
    closeGraduationPlan 
  } = useGraduationPlan(subjects, subjectStates);

  useEffect(() => {
    const loadCareerData = async (careerLink: string) => {
      try {
        setLoading(true);
        
        // Cargar datos de la carrera específica
        const dataModule = await import(`@/data/data_${careerLink}.json`);
        const colorsModule = await import(`@/data/colors_${careerLink}.json`);
        
        // Buscar la carrera en ambos campus
        const allCareers = [...casaCentralCareers, ...vinaConcepcionCareers];
        const career = allCareers.find(carrera => carrera.Link === careerLink);

        const data = dataModule.default as Record<string, unknown[][]>;
        const colorsData = colorsModule.default as Record<string, string[]>;

        // Obtener el nombre y color de la carrera
        const careerNameFromJson = career?.Nombre || 'Carrera Desconocida';
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
        setShowCareerSelector(false);
      } catch (error) {
        console.error('Error loading career data:', error);
        setLoading(false);
      }
    };

    // Solo cargar si hay una carrera seleccionada
    if (selectedCareer) {
      loadCareerData(selectedCareer);
    }
  }, [selectedCareer]);

  // Función para seleccionar carrera
  const handleCareerSelection = (careerLink: string) => {
    setSelectedCareer(careerLink);
    // Guardar la carrera seleccionada en localStorage
    localStorage.setItem('last-selected-career', careerLink);
  };

  // Función para volver al selector de carreras
  const handleBackToCareerSelector = () => {
    setShowCareerSelector(true);
    // No limpiamos selectedCareer aquí para mantener la referencia
    // setSelectedCareer('');
    // setCareerName('');
    // setCareerColor(undefined);
    // setSubjects([]);
    // setColors({});
    // Nota: No necesitamos resetear el progreso aquí ya que se guarda por carrera
  };

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

  // Calcular el número máximo de semestres dinámicamente
  const getMaxSemesters = () => {
    if (subjects.length === 0) return 8;
    
    const semesterNumbers = subjects
      .map(subject => subject.semester)
      .filter((semester): semester is string => semester !== undefined && semester.startsWith('s'))
      .map(semester => parseInt(semester.replace('s', '')))
      .filter(num => !isNaN(num));
    
    return semesterNumbers.length > 0 ? Math.max(...semesterNumbers) : 8;
  };

  const maxSemesters = getMaxSemesters();

  if (!isInitialized || (loading && selectedCareer) || (!isLoaded && subjects.length > 0)) {
    return (
      <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="flex flex-col items-center gap-4">
          <div className={`animate-spin rounded-full h-32 w-32 border-b-2 ${darkMode ? 'border-blue-400' : 'border-blue-600'}`}></div>
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {!isInitialized ? 'Iniciando aplicación...' : loading ? 'Cargando malla curricular...' : 'Restaurando progreso...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen p-2 pb-32 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="w-full mx-auto">
        {/* Contenido principal - solo mostrar si hay carrera seleccionada */}
        {selectedCareer && !showCareerSelector && (
          <>
            {/* Malla por semestres - Vista en columnas */}
            <div className="p-4">
              {/* Header con título y botón de cambiar carrera */}
              <div className="flex items-center justify-center mb-6 gap-4">
                <button
                  onClick={handleBackToCareerSelector}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600' 
                      : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-sm'
                  }`}
                  title="Cambiar carrera"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
                  <span className="text-sm font-medium">Cambiar carrera</span>
                </button>
                
                <h2
                  className="text-3xl font-black text-center flex-1"
                  style={careerColor ? { color: careerColor } : {}}
                >
                  {careerName}
                </h2>
                
                {/* Espacio para mantener el título centrado */}
                <div className="w-32"></div>
              </div>
          
          {/* Container con scroll horizontal para semestres */}
          <div className="overflow-x-auto pb-4">
            {/* Indicador de scroll en móviles */}
            {maxSemesters > 4 && (
              <div className={`text-xs text-center mb-2 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              } md:hidden`}>
                ← Desliza para ver todos los semestres →
              </div>
            )}
            
            <div 
              className="flex gap-2 min-w-max"
              style={{
                minWidth: maxSemesters <= 8 ? '100%' : `${maxSemesters * 200}px`
              }}
            >
              {Array.from({ length: maxSemesters }, (_, i) => `s${i + 1}`).map((semester) => {
                const semesterSubjects = getSemesterSubjects(semester);
                const semesterCredits = getSemesterCredits(semester);
                const approvedCredits = getSemesterApprovedCredits(semester);
                
                if (semesterSubjects.length === 0) return null;

                return (
                  <div 
                    key={semester} 
                    className={`flex flex-col rounded-2xl shadow-md border flex-shrink-0 ${
                      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'
                    }`}
                    style={{
                      width: maxSemesters <= 4 ? 'calc((100% - 0.75rem) / 4)' :
                             maxSemesters <= 6 ? 'calc((100% - 1.25rem) / 6)' :
                             maxSemesters <= 8 ? 'calc((100% - 1.75rem) / 8)' : '200px',
                      minWidth: maxSemesters <= 8 ? '150px' : '180px'
                    }}
                  >
                  {/* Header del semestre */}
                  <div className={`rounded-t-2xl p-3 text-center border-b ${
                    darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-300'
                  }`}>
                    <h3 className={`font-bold text-sm ${
                      darkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>
                      {getSemesterTitle(semester)}
                    </h3>
                    <div className={`text-xs mt-1 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <span className="font-medium">{approvedCredits}</span>
                      <span className="mx-1">/</span>
                      <span>{semesterCredits} créditos</span>
                    </div>
                    <div className={`w-full rounded-full h-2 mt-2 overflow-hidden ${
                      darkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}>
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
                          darkMode={darkMode}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>

        {/* Footer simplificado */}
        <div className={`mt-12 text-center text-sm ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          <div className="flex items-center justify-center gap-6">
            <span>Actualizado: Agosto 2025</span>
            
            <a
              href="https://github.com/MarceloMejias/malla-interactiva"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition-colors duration-300 ${
                darkMode 
                  ? 'text-gray-400 hover:text-white' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <FontAwesomeIcon icon={faGithub} className="text-sm" />
              <span>GitHub</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
            </a>
          </div>
        </div>
        </>
        )}
      </div>

      {/* Barra flotante de estadísticas - solo mostrar si hay carrera seleccionada */}
      {selectedCareer && !showCareerSelector && (
        <StatsBar
          stats={stats}
          onShowCategories={() => setShowCategoriesPopup(true)}
          onReset={resetCalculator}
          onPlayGraduationPlan={playGraduationAnimation}
          darkMode={darkMode}
        />
      )}

      {/* Popup de categorías - solo mostrar si hay carrera seleccionada */}
      {showCategoriesPopup && selectedCareer && !showCareerSelector && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-60 flex items-center justify-center p-4">
          <div className={`backdrop-blur-lg rounded-3xl shadow-2xl border max-w-4xl w-full max-h-[80vh] overflow-hidden ${
            darkMode ? 'bg-gray-800/95 border-gray-600' : 'bg-white/95 border-white/30'
          }`}>
            {/* Header del popup */}
            <div className={`backdrop-blur-lg text-white p-6 flex items-center justify-between ${
              darkMode ? 'bg-gray-700/80' : 'bg-gradient-to-r from-blue-600/80 to-indigo-600/80'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 backdrop-blur-sm rounded-2xl flex items-center justify-center ${
                  darkMode ? 'bg-gray-600/50' : 'bg-white/20'
                }`}>
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
                className={`text-white/80 hover:text-white transition-colors p-2 rounded-2xl backdrop-blur-sm ${
                  darkMode ? 'hover:bg-gray-600/30' : 'hover:bg-white/10'
                }`}
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
                    className={`backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border hover:shadow-lg ${
                      darkMode 
                        ? 'bg-gray-700/50 hover:bg-gray-700/70 border-gray-600' 
                        : 'bg-white/50 hover:bg-white/60 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-6 h-6 rounded-full shadow-lg border-2 border-white/30 flex-shrink-0"
                        style={{ backgroundColor: colorArray[0] }}
                      />
                      <div className="flex-1">
                        <span className={`text-sm font-medium ${
                          darkMode ? 'text-gray-200' : 'text-gray-800'
                        }`}>{colorArray[1]}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup selector de carreras */}
      {showCareerSelector && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-70 flex items-center justify-center p-4">
          <div className={`backdrop-blur-lg rounded-3xl shadow-2xl border max-w-5xl w-full max-h-[80vh] overflow-hidden ${
            darkMode ? 'bg-gray-800/95 border-gray-600' : 'bg-white/95 border-white/30'
          }`}>
            {/* Header */}
            <div className={`backdrop-blur-sm border-b p-6 ${
              darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50/80 border-gray-200'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Selecciona tu Carrera
                  </h2>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Elige la carrera para ver su malla curricular interactiva
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contenido del popup */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {/* Sección Viña del Mar / Concepción */}
              <div className="mb-8">
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Viña del Mar / Concepción
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {vinaConcepcionCareers.map((career) => (
                    <button
                      key={career.Link}
                      onClick={() => handleCareerSelection(career.Link)}
                      className={`backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border hover:shadow-lg hover:scale-105 text-left ${
                        darkMode 
                          ? 'bg-gray-700/30 border-gray-600 hover:bg-gray-600/40' 
                          : 'bg-white/40 border-white/50 hover:bg-white/60'
                      }`}
                      style={{ 
                        borderColor: career.Color ? `${career.Color}40` : undefined,
                        backgroundColor: career.Color ? `${career.Color}10` : undefined
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full flex-shrink-0"
                          style={{ backgroundColor: career.Color || '#6B7280' }}
                        />
                        <div className="flex-1">
                          <span className={`text-sm font-medium ${
                            darkMode ? 'text-gray-200' : 'text-gray-800'
                          }`}>
                            {career.Nombre}
                          </span>
                          <div className={`text-xs mt-1 ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {career.Link}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sección Casa Central / San Joaquín */}
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Casa Central / San Joaquín
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {casaCentralCareers.map((career) => (
                    <button
                      key={career.Link}
                      onClick={() => handleCareerSelection(career.Link)}
                      className={`backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border hover:shadow-lg hover:scale-105 text-left ${
                        darkMode 
                          ? 'bg-gray-700/30 border-gray-600 hover:bg-gray-600/40' 
                          : 'bg-white/40 border-white/50 hover:bg-white/60'
                      }`}
                      style={{ 
                        borderColor: career.Color ? `${career.Color}40` : undefined,
                        backgroundColor: career.Color ? `${career.Color}10` : undefined
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full flex-shrink-0"
                          style={{ backgroundColor: career.Color || '#6B7280' }}
                        />
                        <div className="flex-1">
                          <span className={`text-sm font-medium ${
                            darkMode ? 'text-gray-200' : 'text-gray-800'
                          }`}>
                            {career.Nombre}
                          </span>
                          <div className={`text-xs mt-1 ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {career.Link}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
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
