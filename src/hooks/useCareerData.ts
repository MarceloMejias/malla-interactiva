import { useState, useEffect } from 'react';
import { Subject, SubjectColors } from '@/types/curriculum';

interface Career {
  Nombre: string;
  Link: string;
  Color?: string;
}


type Campus = 'cc' | 'vm' | 'sj' | 'vc' | 'cp';

export const useCareerData = (campus: Campus | undefined, careerCode: string | undefined) => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [colors, setColors] = useState<SubjectColors>({});
  const [careerName, setCareerName] = useState<string>('');
  const [careerColor, setCareerColor] = useState<string | undefined>(undefined);

  const [casaCentralCareers, setCasaCentralCareers] = useState<Career[]>([]);
  const [sanJoaquinCareers, setSanJoaquinCareers] = useState<Career []>([]);
  const [vitacuraCareers, setVitacuraCareers] = useState<Career[]>([]);
  const [concepcionCareers, setConcepcionCareers] = useState<Career[]>([]);
  const [vinaCareers, setVinaCareers] = useState<Career[]>([]);

  const [showCareerSelector, setShowCareerSelector] = useState(false);

  // Cargar carreras disponibles y última carrera seleccionada al iniciar
  useEffect(() => {
    const loadCareers = async () => {
      try {
        const casaCentralModule = await import('@/data/cc/carreras_casacentral.json');
        const vinaConcepcionModule = await import('@/data/vm/carreras_vina.json');
        const sanJoaquinModule = await import('@/data/sj/carreras_sanjoaquin.json');
        const vitacuraModule = await import('@/data/vc/carreras_vitacura.json');
        const concepcionModule = await import('@/data/cp/carreras_concepcion.json');

  setCasaCentralCareers((casaCentralModule.default as Career[]).sort((a, b) => a.Nombre.localeCompare(b.Nombre, 'es', { sensitivity: 'base' })));
  setVinaCareers((vinaConcepcionModule.default as Career[]).sort((a, b) => a.Nombre.localeCompare(b.Nombre, 'es', { sensitivity: 'base' })));
  setSanJoaquinCareers((sanJoaquinModule.default as Career[]).sort((a, b) => a.Nombre.localeCompare(b.Nombre, 'es', { sensitivity: 'base' })));
  setVitacuraCareers((vitacuraModule.default as Career[]).sort((a, b) => a.Nombre.localeCompare(b.Nombre, 'es', { sensitivity: 'base' })));
  setConcepcionCareers((concepcionModule.default as Career[]).sort((a, b) => a.Nombre.localeCompare(b.Nombre, 'es', { sensitivity: 'base' })));
      } catch (error) {
        console.error('Error cargando carreras:', error);
      }
    };
    loadCareers();
  }, []);

  // Cargar datos de la carrera específica
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
        const dataModule = await import(`@/data/${campus}/data_${careerCode}.json`);
        const colorsModule = await import(`@/data/${campus}/colors_${careerCode}.json`);

        // Buscar la carrera en todos los campus y sedes
        const allCareers = [
          ...casaCentralCareers,
          ...vinaCareers,
          ...sanJoaquinCareers,
          ...vitacuraCareers,
          ...concepcionCareers
        ];
        const career = allCareers.find(carrera => carrera.Link === careerCode);

        if (!career) {
          setShowCareerSelector(true);
          setSubjects([]);
          setColors({});
          setCareerName('');
          setCareerColor(undefined);
          return;
        }

        const data = dataModule.default as Record<string, unknown[][]>;
        const colorsData = colorsModule.default as Record<string, string[]>;

        const careerNameFromJson = career?.Nombre || 'Carrera Desconocida';
        setCareerName(careerNameFromJson);
        setCareerColor(career?.Color);

        const processedSubjects: Subject[] = [];
        Object.entries(data).forEach(([semester, semesterSubjects]) => {
          semesterSubjects.forEach((subjectArray: unknown[]) => {
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
        setColors(colorsData);
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
    if (campus && careerCode && (casaCentralCareers.length > 0 || vinaCareers.length > 0)) {
      loadCareerData();
    }
  }, [campus, careerCode, casaCentralCareers, vinaCareers, sanJoaquinCareers, vitacuraCareers, concepcionCareers]);


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
    casaCentralCareers,
    vinaCareers,
    sanJoaquinCareers,
    vitacuraCareers,
    concepcionCareers,
    showCareerSelector,
    handleBackToCareerSelector,
    findSubjectByCode
  };
};
