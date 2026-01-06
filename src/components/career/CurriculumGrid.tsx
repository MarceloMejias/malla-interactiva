'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import CareerHeader from './CareerHeader';
import SemesterGrid from '../semester/SemesterGrid';
import Footer from '../layout/Footer';
import StatsBar from '../layout/StatsBar';
import CategoriesPopup from '../modals/CategoriesModal';
import CareerSelector from '../modals/CareerSelector';

// Lazy load modales pesados
const GraduationPlanModal = dynamic(() => import('../modals/GraduationPlanModal'), {
  ssr: false,
});
const GuideModal = dynamic(() => import('../modals/GuideModal'), {
  ssr: false,
});
const ContributeModal = dynamic(() => import('../modals/ContributeModal'), {
  ssr: false,
});

import { useCalculator } from '@/hooks/useCalculator';
import { useConfetti } from '@/hooks/useConfetti';
import { useGraduationPlan } from '@/hooks/useGraduationPlan';
import { useCareerData } from '@/hooks/useCareerData';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useState } from 'react';

interface CurriculumGridProps {
  initialCareer?: string;
}

export default function CurriculumGrid({ initialCareer }: CurriculumGridProps = {}) {
  const [showCategoriesPopup, setShowCategoriesPopup] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [showContributeModal, setShowContributeModal] = useState(false);
  const [campus, setCampus] = useState<string | undefined>(undefined);
  const [careerCode, setCareerCode] = useState<string | undefined>(undefined);
  const [showCareerSelector, setShowCareerSelector] = useState(false);
  const subjectRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const darkMode = useDarkMode();

  // Cargar última carrera seleccionada al iniciar (antes de cualquier otra cosa)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Si hay initialCareer desde la URL, úsalo
      if (initialCareer) {
        // Determinar campus basado en el código de carrera (normalizar a minúsculas)
        const normalizedCareer = initialCareer.toLowerCase();
        const campusMap: Record<string, string> = {
          'afi': 'cc', 'amb': 'cc', 'arq': 'cc', 'civ-0': 'cc', 'constru-0': 'cc',
          'ctciv': 'cc', 'eli-0': 'cc', 'eli': 'cc', 'elo-0': 'cc', 'elo': 'cc',
          'fis-0': 'cc', 'ica-0': 'cc', 'icbt': 'cc', 'icfis': 'cc', 'ici-0': 'cc',
          'ici': 'cc', 'iciv': 'cc', 'icm-0': 'cc', 'icom-0': 'cc', 'icom': 'cc',
          'icq-0': 'cc', 'icq': 'cc', 'idp': 'cc', 'inf-0': 'cc', 'inf': 'cc',
          'qui': 'cc', 'mat-0': 'cc', 'mat': 'cc', 'lmat': 'cc', 'mec': 'cc',
          'met-0': 'cc', 'met': 'cc', 'tel-0': 'cc', 'tel': 'cc',
          'fdi': 'vm', 'ibt': 'vm', 'imi': 'vm', 'inginf': 'vm', 'prla': 'vm',
          'tuconst': 'vm', 'tuinf': 'vm',
          'cind': 'vc', 'cinf': 'vc', 'eli-vc': 'vc', 'iac': 'vc', 'icom-vc': 'vc'
        };
        const detectedCampus = campusMap[normalizedCareer];
        if (detectedCampus) {
          setCampus(detectedCampus);
          setCareerCode(initialCareer.toUpperCase());
          setShowCareerSelector(false);
          return;
        }
      }
      
      const lastCampus = localStorage.getItem('last-selected-career-campus');
      const lastCode = localStorage.getItem('last-selected-career-code');
      if (lastCampus && lastCode) {
        setCampus(lastCampus);
        setCareerCode(lastCode);
        setShowCareerSelector(false);
      } else {
        setShowCareerSelector(true);
      }
    }
  }, [initialCareer]);

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
      // NO limpiar campus ni careerCode - mantener los datos de la carrera actual
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
    // NO limpiar campus ni careerCode aquí - mantener los datos hasta que se seleccione otra carrera
    if (handleBackToCareerSelector) handleBackToCareerSelector();
  };

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
        {campus && careerCode && (
          <>
            <div className="p-1 md:p-2 lg:p-4">
              <CareerHeader
                careerName={careerName}
                careerColor={careerColor}
                darkMode={darkMode}
                onBackToCareerSelector={handleBackToCareerSelectorLocal}
                onShowGuide={() => setShowGuideModal(true)}
                onShowContribute={() => setShowContributeModal(true)}
              />
            </div>
            
            <div>
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
            
            <div className="p-1 md:p-2 lg:p-4">

              <Footer darkMode={darkMode} />
            </div>
          </>
        )}
      </div>

      {/* Barra flotante de estadísticas */}
      {campus && careerCode && (
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
        show={showCategoriesPopup && !!campus && !!careerCode}
        colors={colors}
        darkMode={darkMode}
        onClose={() => setShowCategoriesPopup(false)}
      />

      {/* Selector de carreras */}
      <CareerSelector
        show={showCareerSelector}
        casaCentralCareers={casaCentralCareers}
        vinaCareers={vinaCareers}
        sanJoaquinCareers={sanJoaquinCareers}
        vitacuraCareers={vitacuraCareers}
        concepcionCareers={concepcionCareers}
        darkMode={darkMode}
        onCareerSelect={handleCareerSelection}
        onClose={() => setShowCareerSelector(false)}
        canClose={!!campus && !!careerCode}
        campus={campus}
        careerCode={careerCode}
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

      {/* Modal de guía */}
      <GuideModal
        show={showGuideModal}
        onClose={() => setShowGuideModal(false)}
        darkMode={darkMode}
      />

      {/* Modal de contribución */}
      <ContributeModal
        show={showContributeModal}
        onClose={() => setShowContributeModal(false)}
        darkMode={darkMode}
      />
    </div>
  );

}

