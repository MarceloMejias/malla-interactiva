import { useState, useEffect } from 'react';
import { Subject, SubjectColors } from '@/types/curriculum';

interface Career {
  Nombre: string;
  Link: string;
  Color?: string;
}

export const useCareerData = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [colors, setColors] = useState<SubjectColors>({});
  const [careerName, setCareerName] = useState<string>('');
  const [careerColor, setCareerColor] = useState<string | undefined>(undefined);
  const [selectedCareer, setSelectedCareer] = useState<string>('');
  const [casaCentralCareers, setCasaCentralCareers] = useState<Career[]>([]);
  const [vinaConcepcionCareers, setVinaConcepcionCareers] = useState<Career[]>([]);
  const [showCareerSelector, setShowCareerSelector] = useState(false);

  // Cargar carreras disponibles y última carrera seleccionada al iniciar
  useEffect(() => {
    const loadCareers = async () => {
      try {
        const casaCentralModule = await import('@/data/carreras_casa_central.json');
        const vinaConcepcionModule = await import('@/data/carreras_vina_concepcion.json');
        
        const casaCentralData = casaCentralModule.default as Career[];
        const vinaConcepcionData = vinaConcepcionModule.default as Career[];
        
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
      } catch (error) {
        console.error('Error cargando carreras:', error);
        setShowCareerSelector(true);
      }
    };
    
    loadCareers();
  }, []);

  // Cargar datos de la carrera específica
  useEffect(() => {
    const loadCareerData = async (careerLink: string) => {
      try {
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
        console.error('Error loading career data:', error);
      }
    };

    // Solo cargar si hay una carrera seleccionada
    if (selectedCareer && (casaCentralCareers.length > 0 || vinaConcepcionCareers.length > 0)) {
      loadCareerData(selectedCareer);
    }
  }, [selectedCareer, casaCentralCareers, vinaConcepcionCareers]);

  const handleCareerSelection = (careerLink: string) => {
    setSelectedCareer(careerLink);
    localStorage.setItem('last-selected-career', careerLink);
  };

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
    selectedCareer,
    casaCentralCareers,
    vinaConcepcionCareers,
    showCareerSelector,
    handleCareerSelection,
    handleBackToCareerSelector,
    findSubjectByCode
  };
};
