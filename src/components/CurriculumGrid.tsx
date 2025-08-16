'use client';

import { useEffect, useRef } from 'react';
import CareerHeader from './CareerHeader';
import SemesterGrid from './SemesterGrid';
import Footer from './Footer';
import StatsBar from './StatsBar';
import CategoriesPopup from './CategoriesPopup';
import CareerSelector from './CareerSelector';
import GraduationPlanModal from './GraduationPlanModal';
import { useCalculator } from '@/hooks/useCalculator';
import { useConfetti } from '@/hooks/useConfetti';
import { useGraduationPlan } from '@/hooks/useGraduationPlan';
import { useCareerData } from '@/hooks/useCareerData';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useState } from 'react';


export default function CurriculumGrid() {
  const [showCategoriesPopup, setShowCategoriesPopup] = useState(false);
  const [campus, setCampus] = useState<string | undefined>(undefined);
  const [careerCode, setCareerCode] = useState<string | undefined>(undefined);
  const [showCareerSelector, setShowCareerSelector] = useState(true);
  const subjectRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const darkMode = useDarkMode();

  const {
    subjects,
    colors,
    careerName,
    careerColor,
    casaCentralCareers,
    vinaCareers,
    sanJoaquinCareers,
    vitacuraCareers,
    concepcionCareers,
    showCareerSelector: showSelectorFromHook,
    handleBackToCareerSelector,
    findSubjectByCode
  } = useCareerData(campus as any, careerCode);

  // Sincronizar el estado local con el hook si el hook fuerza mostrar el selector
  useEffect(() => {
    if (showSelectorFromHook) {
      setShowCareerSelector(true);
      setCampus(undefined);
      setCareerCode(undefined);
    }
  }, [showSelectorFromHook]);

  const handleCareerSelection = (campus: string, code: string) => {
    setCampus(campus);
    setCareerCode(code);
    setShowCareerSelector(false);
    // Guardar en localStorage si se desea persistencia
    localStorage.setItem('last-selected-career-campus', campus);
    localStorage.setItem('last-selected-career-code', code);
  };

  const handleBackToCareerSelectorLocal = () => {
    setShowCareerSelector(true);
    setCampus(undefined);
    setCareerCode(undefined);
    // Limpiar localStorage si se desea
    localStorage.removeItem('last-selected-career-campus');
    localStorage.removeItem('last-selected-career-code');
    if (handleBackToCareerSelector) handleBackToCareerSelector();
  };

  // Cargar última carrera seleccionada al iniciar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lastCampus = localStorage.getItem('last-selected-career-campus');
      const lastCode = localStorage.getItem('last-selected-career-code');
      if (lastCampus && lastCode) {
        setCampus(lastCampus);
        setCareerCode(lastCode);
        setShowCareerSelector(false);
      }
    }
  }, []);

  const { subjectStates, updateSubjectState, resetCalculator, calculateCredits, isLoaded } = useCalculator(subjects, careerCode || '');
  const { checkAndTriggerConfetti } = useConfetti();
  const {
    showGraduationPlan,
    graduationPlan,
    isAnimating,
    playGraduationAnimation,
    closeGraduationPlan
  } = useGraduationPlan(subjects, subjectStates);

  const stats = calculateCredits();

  // Verificar si se alcanzó el 100% para lanzar confetti
  useEffect(() => {
    if (stats.percentage >= 100) {
      checkAndTriggerConfetti();
    }
  }, [stats.percentage, checkAndTriggerConfetti]);

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

  return (
    <div className={`min-h-screen pb-32 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="w-full mx-auto overflow-x-hidden">
        {/* Contenido principal - solo mostrar si hay carrera seleccionada */}
        {campus && careerCode && !showCareerSelector && (
          <>
            <div className="p-1 md:p-2 lg:p-4">
              <CareerHeader
                careerName={careerName}
                careerColor={careerColor}
                darkMode={darkMode}
                onBackToCareerSelector={handleBackToCareerSelectorLocal}
              />

              <SemesterGrid
                subjects={subjects}
                subjectStates={subjectStates}
                onStateChange={updateSubjectState}
                colors={colors}
                onPrerequisiteClick={scrollToSubject}
                findSubjectByCode={findSubjectByCode}
                darkMode={darkMode}
                subjectRefs={subjectRefs}
              />
            </div>

            <Footer darkMode={darkMode} />
          </>
        )}
      </div>

      {/* Barra flotante de estadísticas */}
      {campus && careerCode && !showCareerSelector && (
        <StatsBar
          stats={stats}
          onShowCategories={() => setShowCategoriesPopup(true)}
          onReset={resetCalculator}
          onPlayGraduationPlan={playGraduationAnimation}
          darkMode={darkMode}
        />
      )}

      {/* Popup de categorías */}
      <CategoriesPopup
        show={showCategoriesPopup && !!campus && !!careerCode && !showCareerSelector}
        colors={colors}
        darkMode={darkMode}
        onClose={() => setShowCategoriesPopup(false)}
      />

      {/* Selector de carreras */}
      <CareerSelector
        show={showCareerSelector}
        casaCentralCareers={casaCentralCareers}
        vinaCareers={vinaCareers}
        sanjoaquinCareers={sanJoaquinCareers}
        vitacuraCareers={vitacuraCareers}
        concepcionCareers={concepcionCareers}
        darkMode={darkMode}
        onCareerSelect={handleCareerSelection}
      />

      {/* Modal del plan de graduación */}
      <GraduationPlanModal
        show={showGraduationPlan}
        graduationPlan={graduationPlan}
        isAnimating={isAnimating}
        onClose={closeGraduationPlan}
        colors={colors}
        allSubjects={subjects}
        subjectStates={subjectStates}
      />
    </div>
  );

}

