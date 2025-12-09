import { Carrera } from '@/types/curriculum';

export const civ_0: Carrera = {
  codigo: 'CIV-0',
  nombre: 'Ing. Civil (Malla Antigua)',
  campus: 'cc',
  color: '#708090',
  
  categorias: [
    {
        "id": "PC",
        "nombre": "Ciencias Básicas",
        "color": "#8B5CF6"
    },
    {
        "id": "HUM",
        "nombre": "Humanistas, libres y deportes",
        "color": "#84CC16"
    },
    {
        "id": "FT",
        "nombre": "Formación Transversal",
        "color": "#F43F5E"
    },
    {
        "id": "FI",
        "nombre": "Fundamentos de Ingeniería Civil",
        "color": "#FBBF24"
    },
    {
        "id": "ES",
        "nombre": "Estructuras",
        "color": "#EF4444"
    },
    {
        "id": "AG",
        "nombre": "Aguas",
        "color": "#3B82F6"
    },
    {
        "id": "SU",
        "nombre": "Suelos",
        "color": "#D97706"
    },
    {
        "id": "VI",
        "nombre": "Vialidad",
        "color": "#6B7280"
    },
    {
        "id": "GE",
        "nombre": "Gestión",
        "color": "#06B6D4"
    },
    {
        "id": "OP",
        "nombre": "Optativos, Proyecto y Titulación",
        "color": "#A855F7"
    }
],

  asignaturas: [
    {
        "name": "Matemáticas I",
        "code": "MAT-021",
        "sctCredits": 8,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Física",
        "code": "FIS-100",
        "sctCredits": 6,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Programación",
        "code": "IWI-131",
        "sctCredits": 0,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "DEW-100",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Ingeniería",
        "code": "IWG-101",
        "sctCredits": 0,
        "type": "FI",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Matemáticas II",
        "code": "MAT-022",
        "sctCredits": 7,
        "type": "PC",
        "prerequisites": [
            "MAT-021"
        ],
        "semester": "s2"
    },
    {
        "name": "Física General I",
        "code": "FIS-110",
        "sctCredits": 8,
        "type": "PC",
        "prerequisites": [
            "MAT-021",
            "FIS-100"
        ],
        "semester": "s2"
    },
    {
        "name": "Química y Sociedad",
        "code": "QUI-010",
        "sctCredits": 0,
        "type": "PC",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "DEW-101",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [
            "DEW-100"
        ],
        "semester": "s2"
    },
    {
        "name": "Humanístico I",
        "code": "HXW-001",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Matemáticas III",
        "code": "MAT-023",
        "sctCredits": 7,
        "type": "PC",
        "prerequisites": [
            "MAT-022"
        ],
        "semester": "s3"
    },
    {
        "name": "Física General II",
        "code": "FIS-120",
        "sctCredits": 8,
        "type": "PC",
        "prerequisites": [
            "MAT-022",
            "FIS-110"
        ],
        "semester": "s3"
    },
    {
        "name": "Estática De Estructuras",
        "code": "CIV-131",
        "sctCredits": 0,
        "type": "ES",
        "prerequisites": [
            "MAT-022",
            "FIS-110"
        ],
        "semester": "s3"
    },
    {
        "name": "Dibujo En Ingeniería Civil",
        "code": "CIV-103",
        "sctCredits": 0,
        "type": "FI",
        "prerequisites": [
            "MAT-021",
            "IWG-101"
        ],
        "semester": "s3"
    },
    {
        "name": "Humanístico II",
        "code": "HXW-002",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Deportes",
        "code": "DEW-0",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [
            "DEW-101"
        ],
        "semester": "s3"
    },
    {
        "name": "Matemáticas IV",
        "code": "MAT-024",
        "sctCredits": 6,
        "type": "PC",
        "prerequisites": [
            "MAT-023"
        ],
        "semester": "s4"
    },
    {
        "name": "Física General III",
        "code": "FIS-130",
        "sctCredits": 8,
        "type": "PC",
        "prerequisites": [
            "MAT-022",
            "FIS-110"
        ],
        "semester": "s4"
    },
    {
        "name": "Mecánica De Materiales",
        "code": "CIV-133",
        "sctCredits": 0,
        "type": "ES",
        "prerequisites": [
            "CIV-131",
            "MAT-023"
        ],
        "semester": "s4"
    },
    {
        "name": "Topografía",
        "code": "CIV-206",
        "sctCredits": 8,
        "type": "FI",
        "prerequisites": [
            "CIV-103"
        ],
        "semester": "s4"
    },
    {
        "name": "Humanístico III",
        "code": "HXW-003",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Mecánica Racional",
        "code": "CIV-202",
        "sctCredits": 0,
        "type": "FI",
        "prerequisites": [
            "MAT-024",
            "CIV-131"
        ],
        "semester": "s5"
    },
    {
        "name": "Análisis Numérico",
        "code": "MAT-270",
        "sctCredits": 0,
        "type": "FT",
        "prerequisites": [
            "MAT-024"
        ],
        "semester": "s5"
    },
    {
        "name": "Tecnología de Materiales",
        "code": "CIV-251",
        "sctCredits": 0,
        "type": "FI",
        "prerequisites": [
            "CIV-133",
            "QUI-010"
        ],
        "semester": "s5"
    },
    {
        "name": "Geología",
        "code": "CIV-205",
        "sctCredits": 0,
        "type": "FI",
        "prerequisites": [
            "CIV-206"
        ],
        "semester": "s5"
    },
    {
        "name": "Humanístico IV",
        "code": "HXW-004",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Fundamentos de Análisis Estructural",
        "code": "CIV-233",
        "sctCredits": 0,
        "type": "ES",
        "prerequisites": [
            "CIV-202",
            "CIV-133"
        ],
        "semester": "s6"
    },
    {
        "name": "Mecánica de Fluidos",
        "code": "CIV-244",
        "sctCredits": 0,
        "type": "AG",
        "prerequisites": [
            "CIV-202"
        ],
        "semester": "s6"
    },
    {
        "name": "Probabilidad y Estadística Para Ingeniería Civil",
        "code": "MAT-044",
        "sctCredits": 0,
        "type": "FT",
        "prerequisites": [
            "MAT-023"
        ],
        "semester": "s6"
    },
    {
        "name": "Fundamentos de Ing. de Construcción y Administración",
        "code": "CIV-222",
        "sctCredits": 0,
        "type": "GE",
        "prerequisites": [
            "CIV-251"
        ],
        "semester": "s6"
    },
    {
        "name": "Humanístico V",
        "code": "HXW-005",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Análisis Estructural",
        "code": "CIV-234",
        "sctCredits": 0,
        "type": "ES",
        "prerequisites": [
            "CIV-233"
        ],
        "semester": "s7"
    },
    {
        "name": "Hidráulica Teórica",
        "code": "CIV-242",
        "sctCredits": 0,
        "type": "AG",
        "prerequisites": [
            "CIV-244"
        ],
        "semester": "s7"
    },
    {
        "name": "Optativo de Formación Transversal",
        "code": "OFT-1",
        "sctCredits": 0,
        "type": "FT",
        "prerequisites": [
            "FIS-120",
            "FIS-130"
        ],
        "semester": "s7"
    },
    {
        "name": "Fundamento de Investigación de Operaciones",
        "code": "ILI-281",
        "sctCredits": 0,
        "type": "FT",
        "prerequisites": [
            "MAT-044"
        ],
        "semester": "s7"
    },
    {
        "name": "Economía I-A",
        "code": "ICS-733",
        "sctCredits": 0,
        "type": "FT",
        "prerequisites": [
            "MAT-023"
        ],
        "semester": "s7"
    },
    {
        "name": "Dinámica de Estructuras",
        "code": "CIV-235",
        "sctCredits": 0,
        "type": "ES",
        "prerequisites": [
            "CIV-234"
        ],
        "semester": "s8"
    },
    {
        "name": "Hidrología",
        "code": "CIV-243",
        "sctCredits": 0,
        "type": "AG",
        "prerequisites": [
            "CIV-242",
            "MAT-044"
        ],
        "semester": "s8"
    },
    {
        "name": "Mecánica de Suelos I",
        "code": "CIV-261",
        "sctCredits": 0,
        "type": "SU",
        "prerequisites": [
            "CIV-242",
            "CIV-133"
        ],
        "semester": "s8"
    },
    {
        "name": "Ingeniería en Transporte",
        "code": "CIV-386",
        "sctCredits": 0,
        "type": "VI",
        "prerequisites": [
            "ICS-733",
            "ILI-281"
        ],
        "semester": "s8"
    },
    {
        "name": "Planificación y control de Proyectos",
        "code": "CIV-380",
        "sctCredits": 0,
        "type": "GE",
        "prerequisites": [
            "CIV-222",
            "ICS-733"
        ],
        "semester": "s8"
    },
    {
        "name": "Hormigón Armado",
        "code": "CIV-331",
        "sctCredits": 0,
        "type": "ES",
        "prerequisites": [
            "CIV-234",
            "CIV-251"
        ],
        "semester": "s9"
    },
    {
        "name": "Hidráulica Aplicada",
        "code": "CIV-346",
        "sctCredits": 0,
        "type": "AG",
        "prerequisites": [
            "CIV-243"
        ],
        "semester": "s9"
    },
    {
        "name": "Mecánica de Suelos II",
        "code": "CIV-366",
        "sctCredits": 0,
        "type": "SU",
        "prerequisites": [
            "CIV-261"
        ],
        "semester": "s9"
    },
    {
        "name": "Diseño Geométrico y Capacidad Vial",
        "code": "CIV-370",
        "sctCredits": 0,
        "type": "VI",
        "prerequisites": [
            "CIV-386"
        ],
        "semester": "s9"
    },
    {
        "name": "Gest. de la Calidad Total en la Cadena de Suministros",
        "code": "CIV-381",
        "sctCredits": 0,
        "type": "GE",
        "prerequisites": [
            "CIV-380"
        ],
        "semester": "s9"
    },
    {
        "name": "Diseño en Acero",
        "code": "CIV-336",
        "sctCredits": 0,
        "type": "ES",
        "prerequisites": [
            "CIV-234"
        ],
        "semester": "s10"
    },
    {
        "name": "Máquinas y Sistemas Hidráulicos",
        "code": "CIV-347",
        "sctCredits": 0,
        "type": "AG",
        "prerequisites": [
            "CIV-346"
        ],
        "semester": "s10"
    },
    {
        "name": "Ingeniería Sanitaria",
        "code": "CIV-377",
        "sctCredits": 0,
        "type": "AG",
        "prerequisites": [
            "CIV-242"
        ],
        "semester": "s10"
    },
    {
        "name": "Diseño Estructural en Pavimentos",
        "code": "CIV-371",
        "sctCredits": 0,
        "type": "VI",
        "prerequisites": [
            "CIV-370"
        ],
        "semester": "s10"
    },
    {
        "name": "Optativo de Especialidad I",
        "code": "CIVOE-1",
        "sctCredits": 0,
        "type": "OP",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Ingeniería Sísmica",
        "code": "CIV-338",
        "sctCredits": 0,
        "type": "ES",
        "prerequisites": [
            "CIV-235",
            "CIV-336"
        ],
        "semester": "s11"
    },
    {
        "name": "Ingeniería del Medio Ambiente",
        "code": "CIV-378",
        "sctCredits": 0,
        "type": "AG",
        "prerequisites": [
            "CIV-377"
        ],
        "semester": "s11"
    },
    {
        "name": "Evaluación de Proyectos",
        "code": "CIV-390",
        "sctCredits": 0,
        "type": "GE",
        "prerequisites": [
            "CIV-381"
        ],
        "semester": "s11"
    },
    {
        "name": "Taller de Titulación I",
        "code": "CIV-397",
        "sctCredits": 0,
        "type": "OP",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Optativo de Especialidad II",
        "code": "CIVOE-2",
        "sctCredits": 0,
        "type": "OP",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Taller de Titulación II",
        "code": "CIV-398",
        "sctCredits": 0,
        "type": "OP",
        "prerequisites": [
            "CIV-397"
        ],
        "semester": "s12"
    },
    {
        "name": "Proyecto de Ingeniería Civil",
        "code": "CIVOP-1",
        "sctCredits": 0,
        "type": "OP",
        "prerequisites": [],
        "semester": "s12"
    }
],
};
