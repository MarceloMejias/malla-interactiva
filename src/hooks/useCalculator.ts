
import { useState, useEffect } from 'react';
import type { Subject, SubjectState, CalculatorState } from '@/types/curriculum';

const STORAGE_KEY = 'curriculum-progress-inginf';

export function useCalculator(subjects?: Subject[]) {
  const [subjectStates, setSubjectStates] = useState<CalculatorState>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Cargar el progreso guardado al inicializar
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem(STORAGE_KEY);
      if (savedProgress) {
        const parsedProgress = JSON.parse(savedProgress) as CalculatorState;
        setSubjectStates(parsedProgress);
      }
    } catch (error) {
      console.error('Error loading saved progress:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Guardar el progreso cada vez que cambie el estado
  useEffect(() => {
    if (isLoaded && Object.keys(subjectStates).length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(subjectStates));
      } catch (error) {
        console.error('Error saving progress:', error);
      }
    }
  }, [subjectStates, isLoaded]);

  const updateSubjectState = (code: string, state: SubjectState) => {
    setSubjectStates((prev) => ({ ...prev, [code]: state }));
  };

  const resetCalculator = () => {
    setSubjectStates({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing saved progress:', error);
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
