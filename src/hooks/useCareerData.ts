import { useState, useEffect } from 'react';
import { Subject, SubjectColors } from '@/types/curriculum';
import { careersByCampus, getCareer } from '@/data/carreras';

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
  const [sanJoaquinCareers, setSanJoaquinCareers] = useState<Career[]>([]);
  const [vitacuraCareers, setVitacuraCareers] = useState<Career[]>([]);
  const [concepcionCareers, setConcepcionCareers] = useState<Career[]>([]);
  const [vinaCareers, setVinaCareers] = useState<Career[]>([]);

  const [showCareerSelector, setShowCareerSelector] = useState(false);

  // Cargar carreras disponibles
  useEffect(() => {
    setCasaCentralCareers(careersByCampus.cc);
    setVinaCareers(careersByCampus.vm);
    setSanJoaquinCareers(careersByCampus.sj);
    setVitacuraCareers(careersByCampus.vc);
    setConcepcionCareers(careersByCampus.cp);
  }, []);

  // Cargar datos de la carrera específica
  useEffect(() => {
    if (!campus || !careerCode) {
      setShowCareerSelector(true);
      setSubjects([]);
      setColors({});
      setCareerName('');
      setCareerColor(undefined);
      return;
    }

    try {
      const carrera = getCareer(careerCode);

      if (!carrera) {
        console.error(`Carrera no encontrada: ${careerCode}`);
        setShowCareerSelector(true);
        return;
      }

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
