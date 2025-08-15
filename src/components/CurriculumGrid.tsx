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
  const subjectRefs = useRef<Record<string, HTMLDivElement | null>>({});
  
  const darkMode = useDarkMode();
  
  const {
    subjects,
    colors,
    careerName,
    careerColor,
    selectedCareer,
    casaCentralCareers,
    vinaConcepcionCareers,
    showCareerSelector,
    handleCareerSelection,
    handleBackToCareerSelector,
    findSubjectByCode
  } = useCareerData();
  
  const { subjectStates, updateSubjectState, resetCalculator, calculateCredits, isLoaded } = useCalculator(subjects, selectedCareer);
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
    <div className={`min-h-screen p-2 pb-32 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="w-full mx-auto">
        {/* Contenido principal - solo mostrar si hay carrera seleccionada */}
        {selectedCareer && !showCareerSelector && (
          <>
            <div className="p-2 md:p-4">
              <CareerHeader
                careerName={careerName}
                careerColor={careerColor}
                darkMode={darkMode}
                onBackToCareerSelector={handleBackToCareerSelector}
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
      {selectedCareer && !showCareerSelector && (
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
        show={showCategoriesPopup && !!selectedCareer && !showCareerSelector}
        colors={colors}
        darkMode={darkMode}
        onClose={() => setShowCategoriesPopup(false)}
      />

      {/* Selector de carreras */}
      <CareerSelector
        show={showCareerSelector}
        casaCentralCareers={casaCentralCareers}
        vinaConcepcionCareers={vinaConcepcionCareers}
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
