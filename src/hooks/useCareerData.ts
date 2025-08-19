
import { useState, useEffect } from 'react';
import { Subject, SubjectColors } from '@/types/curriculum';

interface CareerMeta {
  nombre: string;
  codigo: string;
  color?: string;
}

type Campus = 'cc' | 'vm' | 'sj' | 'vc' | 'cp';


export const useCareerData = (campus: Campus | undefined, careerCode: string | undefined) => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [colors, setColors] = useState<SubjectColors>({});
  const [careerName, setCareerName] = useState<string>('');
  const [careerColor, setCareerColor] = useState<string | undefined>(undefined);
  const [careersByCampus, setCareersByCampus] = useState<Record<Campus, CareerMeta[]>>({ cc: [], vm: [], sj: [], vc: [], cp: [] });
  const [showCareerSelector, setShowCareerSelector] = useState(false);

  useEffect(() => {
    const loadAllCareers = async () => {
      try {
        const res = await fetch('/api/careers');
        if (!res.ok) throw new Error('No se pudo cargar la lista de carreras');
        const data = await res.json();
        setCareersByCampus(data);
      } catch (e) {
        setCareersByCampus({ cc: [], vm: [], sj: [], vc: [], cp: [] });
      }
    };
    loadAllCareers();
  }, []);

  useEffect(() => {
    const loadCareerData = async () => {
      if (!campus || !careerCode) {
        setShowCareerSelector(true);
        setSubjects([]);
        setColors({});
        setCareerName('');
        setCareerColor(undefined);
        return;
      }
      try {
        // Cargar datos de la carrera y colores juntos desde la API
        const dataRes = await fetch(`/api/careers/${campus}/${careerCode}`);
        if (!dataRes.ok) throw new Error('No se pudo cargar el plan de la carrera');
        const data = await dataRes.json();
        setCareerName(data.nombre || 'Carrera Desconocida');
        setCareerColor(data.color);
        // Procesar subjects
        const processedSubjects: Subject[] = [];
        Object.entries(data.plan).forEach(([semester, semesterSubjects]) => {
          (semesterSubjects as unknown[][]).forEach((subjectArray: unknown[]) => {
            const [name, code, usmCredits, sctCredits, type, prerequisites] = subjectArray;
            processedSubjects.push({
              name: name as string,
              code: code as string,
              usmCredits: usmCredits as string,
              sctCredits: Number(sctCredits),
              type: type as string,
              prerequisites: (prerequisites || []) as string[],
              semester
            });
          });
        });
        setSubjects(processedSubjects);
        setColors(data.colors || {});
        setShowCareerSelector(false);
      } catch (error) {
        setShowCareerSelector(true);
        setSubjects([]);
        setColors({});
        setCareerName('');
        setCareerColor(undefined);
        console.error('Error loading career data:', error);
      }
    };
    // Solo cargar si hay datos de carreras cargados y parámetros válidos
    if (campus && careerCode && careersByCampus[campus].length > 0) {
      loadCareerData();
    }
  }, [campus, careerCode, careersByCampus]);

  const handleBackToCareerSelector = () => {
    setShowCareerSelector(true);
  };

  const findSubjectByCode = (code: string): Subject | undefined => {
    return subjects.find(subject => subject.code === code);
  };

  return {
    subjects,
    colors,
    careerName,
    careerColor,
    careersByCampus,
    showCareerSelector,
    handleBackToCareerSelector,
    findSubjectByCode
  };
};
