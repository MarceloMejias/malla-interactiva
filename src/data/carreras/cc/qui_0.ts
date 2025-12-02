import { Carrera } from '../../types';

export const qui_0: Carrera = {
  codigo: 'QUI-0',
  nombre: 'QUI (Malla Antigua)',
  campus: 'cc',
  color: '#F59E0B',
  
  categorias: [
    {
        "id": "MAT",
        "nombre": "Matemáticas",
        "color": "#F59E0B"
    },
    {
        "id": "FIS",
        "nombre": "Física",
        "color": "#3B82F6"
    },
    {
        "id": "HRW",
        "nombre": "Humanistas",
        "color": "#84CC16"
    },
    {
        "id": "PC",
        "nombre": "Plan Común",
        "color": "#8B5CF6"
    },
    {
        "id": "HCW",
        "nombre": "Inglés",
        "color": "#06B6D4"
    },
    {
        "id": "DEW",
        "nombre": "DEFIDER",
        "color": "#DC2626"
    },
    {
        "id": "QUI",
        "nombre": "Química",
        "color": "#EC4899"
    }
],

  asignaturas: [
    {
        "name": "Educación Física I",
        "code": "DEW-100",
        "sctCredits": 2,
        "type": "DEW",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Física",
        "code": "FIS-100",
        "sctCredits": 6,
        "type": "FIS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Matemática I",
        "code": "MAT-021",
        "sctCredits": 8,
        "type": "MAT",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Ingeniería",
        "code": "IWG101",
        "sctCredits": 3,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Química y Sociedad",
        "code": "QUI-010",
        "sctCredits": 5,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física II",
        "code": "DEW-101",
        "sctCredits": 2,
        "type": "DEW",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Física General I",
        "code": "FIS-110",
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [
            "FIS-100"
        ],
        "semester": "s2"
    },
    {
        "name": "Matemática II",
        "code": "MAT-022",
        "sctCredits": 7,
        "type": "MAT",
        "prerequisites": [
            "MAT-021"
        ],
        "semester": "s2"
    },
    {
        "name": "Programación",
        "code": "IWI-131",
        "sctCredits": 5,
        "type": "PC",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Visión Trascendente del Quehacer Humano",
        "code": "HRW-101",
        "sctCredits": 3,
        "type": "HRW",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Inglés Científico y Tecnológico",
        "code": "HCW-310",
        "sctCredits": 2,
        "type": "HCW",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Física General II",
        "code": "FIS-120",
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [
            "MAT-022",
            "FIS-110"
        ],
        "semester": "s3"
    },
    {
        "name": "Matemática III",
        "code": "MAT-023",
        "sctCredits": 7,
        "type": "MAT",
        "prerequisites": [
            "MAT-022"
        ],
        "semester": "s3"
    },
    {
        "name": "Química General I",
        "code": "QUI-106",
        "sctCredits": 6,
        "type": "QUI",
        "prerequisites": [
            "QUI-010"
        ],
        "semester": "s3"
    },
    {
        "name": "Química General II",
        "code": "QUI-108",
        "sctCredits": 5,
        "type": "QUI",
        "prerequisites": [
            "QUI-010"
        ],
        "semester": "s3"
    },
    {
        "name": "Visión Inmanente del Quehacer Humano",
        "code": "HRW-102",
        "sctCredits": 3,
        "type": "HRW",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Inglés Científico y Tecnológico II",
        "code": "HCW-311",
        "sctCredits": 2,
        "type": "HCW",
        "prerequisites": [
            "HCW-310"
        ],
        "semester": "s4"
    },
    {
        "name": "Física General III",
        "code": "FIS-130",
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [
            "MAT-021",
            "FIS-110"
        ],
        "semester": "s4"
    },
    {
        "name": "Matemática IV",
        "code": "MAT-024",
        "sctCredits": 6,
        "type": "MAT",
        "prerequisites": [
            "MAT-023"
        ],
        "semester": "s4"
    },
    {
        "name": "Fisioquímica I",
        "code": "QUI-240",
        "sctCredits": 6,
        "type": "QUI",
        "prerequisites": [
            "QUI-106",
            "MAT-022",
            "FIS-120"
        ],
        "semester": "s4"
    },
    {
        "name": "Laboratorio de Química General",
        "code": "QUI-109",
        "sctCredits": 4,
        "type": "QUI",
        "prerequisites": [
            "QUI-106",
            "QUI-108"
        ],
        "semester": "s4"
    },
    {
        "name": "Química Inrgánica I",
        "code": "QUI-114",
        "sctCredits": 5,
        "type": "QUI",
        "prerequisites": [
            "QUI-010"
        ],
        "semester": "s4"
    },
    {
        "name": "Deportes",
        "code": "DEW-0",
        "sctCredits": 2,
        "type": "DEW",
        "prerequisites": [
            "DEW-101"
        ],
        "semester": "s5"
    },
    {
        "name": "Física General IV",
        "code": "FIS-140",
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [
            "FIS-130",
            "FIS-120"
        ],
        "semester": "s5"
    },
    {
        "name": "Química Analítica Cuantitativa I",
        "code": "QUI-224",
        "sctCredits": 6,
        "type": "QUI",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Fisioquímica II",
        "code": "QUI-242",
        "sctCredits": 6,
        "type": "QUI",
        "prerequisites": [
            "QUI-240",
            "FIS-140"
        ],
        "semester": "s5"
    },
    {
        "name": "Química Orgánica I",
        "code": "QUI-136",
        "sctCredits": 6,
        "type": "QUI",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Laboratorio de Química Inorgánica",
        "code": "QUI-117",
        "sctCredits": 4,
        "type": "QUI",
        "prerequisites": [
            "QUI-114"
        ],
        "semester": "s5"
    },
    {
        "name": "Visión Estética del Quehacer Humano",
        "code": "HRW-103",
        "sctCredits": 3,
        "type": "HRW",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Laboratorio de Química Orgánica I",
        "code": "QUI-137",
        "sctCredits": 4,
        "type": "QUI",
        "prerequisites": [
            "QUI-224"
        ],
        "semester": "s6"
    },
    {
        "name": "Química Analítica Cuantitativa II",
        "code": "QUI-226",
        "sctCredits": 6,
        "type": "QUI",
        "prerequisites": [
            "QUI-224",
            "QUI-114",
            "QUI-109"
        ],
        "semester": "s6"
    },
    {
        "name": "Fisioquímica III",
        "code": "QUI-244",
        "sctCredits": 6,
        "type": "QUI",
        "prerequisites": [
            "QUI-240"
        ],
        "semester": "s6"
    },
    {
        "name": "Química Orgánica II",
        "code": "QUI-238",
        "sctCredits": 6,
        "type": "QUI",
        "prerequisites": [
            "QUI-136"
        ],
        "semester": "s6"
    },
    {
        "name": "Análisis Químico Instrumental I",
        "code": "QUI-375",
        "sctCredits": 6,
        "type": "QUI",
        "prerequisites": [
            "QUI-224",
            "QUI-136"
        ],
        "semester": "s7"
    },
    {
        "name": "Química Inorgánica II",
        "code": "QUI-216",
        "sctCredits": 5,
        "type": "QUI",
        "prerequisites": [
            "QUI-114"
        ],
        "semester": "s7"
    },
    {
        "name": "Laboratorio de Química Inorgánica II",
        "code": "QUI-217",
        "sctCredits": 4,
        "type": "QUI",
        "prerequisites": [
            "QUI-114"
        ],
        "semester": "s7"
    },
    {
        "name": "Probabilidad y Estadística",
        "code": "MAT-041",
        "sctCredits": 7,
        "type": "MAT",
        "prerequisites": [
            "MAT-023"
        ],
        "semester": "s7"
    },
    {
        "name": "Análisis Químico Instrumental II",
        "code": "QUI-376",
        "sctCredits": 6,
        "type": "QUI",
        "prerequisites": [
            "QUI-375",
            "QUI-226"
        ],
        "semester": "s8"
    },
    {
        "name": "Laboratorio de Química Orgánica II",
        "code": "QUI-237",
        "sctCredits": 4,
        "type": "QUI",
        "prerequisites": [
            "QUI-137",
            "QUI-238",
            "QUI-109"
        ],
        "semester": "s8"
    },
    {
        "name": "Laboratorio de Fisioquímica",
        "code": "QUI-243",
        "sctCredits": 5,
        "type": "QUI",
        "prerequisites": [
            "QUI-244"
        ],
        "semester": "s8"
    },
    {
        "name": "Electivo I",
        "code": "QUI-1",
        "sctCredits": 7,
        "type": "QUI",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Electivo II",
        "code": "QUI-2",
        "sctCredits": 7,
        "type": "QUI",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo III",
        "code": "QUI-3",
        "sctCredits": 7,
        "type": "QUI",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo IV",
        "code": "QUI-4",
        "sctCredits": 7,
        "type": "QUI",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Unidad de Investigación",
        "code": "QUI-390",
        "sctCredits": 9,
        "type": "QUI",
        "prerequisites": [
            "QUI-216",
            "QUI-375",
            "QUI-242",
            "QUI-238"
        ],
        "semester": "s9"
    }
],
};
