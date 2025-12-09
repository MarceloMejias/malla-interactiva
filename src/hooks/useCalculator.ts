
import { useState, useEffect } from 'react';
import type { Subject, SubjectState, CalculatorState } from '@/types/curriculum';
import { logger } from '@/utils/logger';

const STORAGE_KEY_PREFIX = 'curriculum-progress';

export function useCalculator(subjects?: Subject[], careerKey?: string) {
  const [subjectStates, setSubjectStates] = useState<CalculatorState>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Generar clave única para cada carrera
  const getStorageKey = (career: string) => `${STORAGE_KEY_PREFIX}-${career}`;

  // Cargar el progreso guardado al inicializar o cambiar de carrera
  useEffect(() => {
    if (!careerKey) {
      setIsLoaded(true);
      return;
    }

    try {
      const storageKey = getStorageKey(careerKey);
      const savedProgress = localStorage.getItem(storageKey);
      if (savedProgress) {
        const parsedProgress = JSON.parse(savedProgress) as CalculatorState;
        setSubjectStates(parsedProgress);
      } else {
        // Si no hay progreso guardado para esta carrera, inicializar vacío
        setSubjectStates({});
      }
    } catch (error) {
      logger.error('Error loading saved progress:', error);
      setSubjectStates({});
    } finally {
      setIsLoaded(true);
    }
  }, [careerKey]);

  // Guardar el progreso cada vez que cambie el estado
  useEffect(() => {
    if (isLoaded && careerKey && Object.keys(subjectStates).length >= 0) {
      try {
        const storageKey = getStorageKey(careerKey);
        localStorage.setItem(storageKey, JSON.stringify(subjectStates));
      } catch (error) {
        logger.error('Error saving progress:', error);
      }
    }
  }, [subjectStates, isLoaded, careerKey]);

  const updateSubjectState = (code: string, state: SubjectState) => {
    setSubjectStates((prev) => ({ ...prev, [code]: state }));
  };

  const resetCalculator = () => {
    setSubjectStates({});
    if (careerKey) {
      try {
        const storageKey = getStorageKey(careerKey);
        localStorage.removeItem(storageKey);
      } catch (error) {
        logger.error('Error clearing saved progress:', error);
      }
    }
  };

  const calculateCredits = () => {
    if (!subjects || subjects.length === 0) {
      return {
        approvedCredits: 0,
        totalCredits: 0,
        approvedSubjects: 0,
        totalSubjects: 0,
        percentage: 0,
      };
    }
    let approvedCredits = 0;
    let totalCredits = 0;
    let approvedSubjects = 0;
    let totalSubjects = subjects.length;
    subjects.forEach((subject) => {
      totalCredits += Number(subject.sctCredits) || 0;
      const state = subjectStates[subject.code];
      if (state?.status === 'approved') {
        approvedSubjects += 1;
        approvedCredits += Number(subject.sctCredits) || 0;
      }
    });
    const percentage = totalCredits > 0 ? (approvedCredits / totalCredits) * 100 : 0;
    return {
      approvedCredits,
      totalCredits,
      approvedSubjects,
      totalSubjects,
      percentage,
    };
  };

  return {
    subjectStates,
    updateSubjectState,
    resetCalculator,
    calculateCredits,
    isLoaded,
  };
}
