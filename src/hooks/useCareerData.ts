import { useState, useEffect } from 'react';
import { Subject, SubjectColors } from '@/types/curriculum';

interface Career {
  Nombre: string;
  Link: string;
  Color?: string;
}

type Campus = 'cc' | 'vm' | 'sj' | 'vc' | 'cp';

interface CareerData {
  codigo: string;
  nombre: string;
  campus: string;
  color: string;
  categorias: Array<{ id: string; nombre: string; color: string }>;
  asignaturas: Subject[];
}

export const useCareerData = (campus: Campus | undefined, careerCode: string | undefined) => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [colors, setColors] = useState<SubjectColors>({});
  const [careerName, setCareerName] = useState<string>('');
  const [careerColor, setCareerColor] = useState<string | undefined>(undefined);

  const [casaCentralCareers, setCasaCentralCareers] = useState<Career[]>([]);
  const [sanJoaquinCareers, setSanJoaquinCareers] = useState<Career[]>([]);
  const [vitacuraCareers, setVitacuraCareers] = useState<Career[]>([]);
  const [concepcionCareers, setConcepcionCareers] = useState<Career[]>([]);
  const [vinaCareers, setVinaCareers] = useState<Career[]>([]);

  const [showCareerSelector, setShowCareerSelector] = useState(false);

  // Cargar carreras disponibles desde la API
  useEffect(() => {
    const loadCareers = async () => {
      try {
        const response = await fetch('/api/careers');
        const data = await response.json();
        
        setCasaCentralCareers(data.cc || []);
        setVinaCareers(data.vm || []);
        setSanJoaquinCareers(data.sj || []);
        setVitacuraCareers(data.vc || []);
        setConcepcionCareers(data.cp || []);
      } catch (error) {
        console.error('Error cargando carreras:', error);
      }
    };
    loadCareers();
  }, []);

  // Cargar datos de la carrera específica desde la API
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
        const response = await fetch(`/api/careers/${careerCode}`);
        
        if (!response.ok) {
          console.error(`Carrera no encontrada: ${careerCode}`);
          setShowCareerSelector(true);
          return;
        }

        const carrera: CareerData = await response.json();

        // Remover "(Malla Antigua)" del nombre si existe
        const cleanName = carrera.nombre.replaceAll(/\s*\(Malla Antigua\)\s*/gi, '').trim();
        setCareerName(cleanName);
        setCareerColor(carrera.color);

        // Usar asignaturas directamente
        setSubjects(carrera.asignaturas);

        // Transformar categorías al formato esperado
        const processedColors: SubjectColors = {};
        for (const categoria of carrera.categorias) {
          processedColors[categoria.id] = [categoria.color, categoria.nombre];
        }
        setColors(processedColors);
        setShowCareerSelector(false);
      } catch (error) {
        console.error('Error loading career data:', error);
        setShowCareerSelector(true);
        setSubjects([]);
        setColors({});
        setCareerName('');
        setCareerColor(undefined);
      }
    };

    loadCareerData();
  }, [campus, careerCode]);

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
