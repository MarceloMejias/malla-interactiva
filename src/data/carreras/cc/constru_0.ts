import { Carrera } from '@/types/curriculum';

export const constru_0: Carrera = {
  codigo: 'CONSTRU-0',
  nombre: 'Construcción Civil (Malla Antigua)',
  campus: 'cc',
  color: '#D5675F',
  
  categorias: [
    {
        "id": "PC",
        "nombre": "Plan Común",
        "color": "#8B5CF6"
    },
    {
        "id": "MF",
        "nombre": "Matemáticas y Físicas",
        "color": "#2563EB"
    },
    {
        "id": "HUM",
        "nombre": "Humanísticos e Inglés",
        "color": "#84CC16"
    },
    {
        "id": "CON",
        "nombre": "Construcción",
        "color": "#FACC15"
    },
    {
        "id": "IND",
        "nombre": "Industrias",
        "color": "#0EA5E9"
    }
],

  asignaturas: [
    {
        "name": "Programación",
        "code": "IWI-131",
        "sctCredits": 0,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Matemáticas I",
        "code": "MAT-011",
        "sctCredits": 0,
        "type": "MF",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Física",
        "code": "FIS-100",
        "sctCredits": 6,
        "type": "MF",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Ingeniería",
        "code": "IWG-101",
        "sctCredits": 0,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "DEW-100",
        "sctCredits": 0,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
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
        "name": "Matemáticas II",
        "code": "MAT-012",
        "sctCredits": 0,
        "type": "MF",
        "prerequisites": [
            "MAT-011"
        ],
        "semester": "s2"
    },
    {
        "name": "Física Básica I",
        "code": "FIS-109",
        "sctCredits": 0,
        "type": "MF",
        "prerequisites": [
            "MAT-011",
            "FIS-100"
        ],
        "semester": "s2"
    },
    {
        "name": "Humanístico I",
        "code": "HRW-001",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "DEW-101",
        "sctCredits": 0,
        "type": "PC",
        "prerequisites": [
            "DEW-100"
        ],
        "semester": "s2"
    },
    {
        "name": "Geometría Descriptiva",
        "code": "CON-100",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Estructuras I",
        "code": "CON-130",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "MAT-012",
            "FIS-109"
        ],
        "semester": "s3"
    },
    {
        "name": "Matemáticas III",
        "code": "MAT-013",
        "sctCredits": 0,
        "type": "MF",
        "prerequisites": [
            "MAT-012"
        ],
        "semester": "s3"
    },
    {
        "name": "Física Básica II",
        "code": "FIS-119",
        "sctCredits": 0,
        "type": "MF",
        "prerequisites": [
            "MAT-012",
            "FIS-109"
        ],
        "semester": "s3"
    },
    {
        "name": "Humanístico II",
        "code": "HRW-002",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Deportes",
        "code": "DEW-0",
        "sctCredits": 0,
        "type": "PC",
        "prerequisites": [
            "DEW-101"
        ],
        "semester": "s3"
    },
    {
        "name": "Dibujo de Construcción",
        "code": "CON-101",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-100"
        ],
        "semester": "s4"
    },
    {
        "name": "Estructuras II",
        "code": "CON-131",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-130"
        ],
        "semester": "s4"
    },
    {
        "name": "Materiales de Construcción I",
        "code": "CON-250",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "QUI-010"
        ],
        "semester": "s4"
    },
    {
        "name": "Matemáticas IV",
        "code": "MAT-014",
        "sctCredits": 0,
        "type": "MF",
        "prerequisites": [
            "MAT-012"
        ],
        "semester": "s4"
    },
    {
        "name": "Física Básica III",
        "code": "FIS-129",
        "sctCredits": 0,
        "type": "MF",
        "prerequisites": [
            "FIS-119"
        ],
        "semester": "s4"
    },
    {
        "name": "Humanístico III",
        "code": "HRW-003",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Inglés Científico Tecnológico I",
        "code": "HCW-310",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Topografía y taller",
        "code": "CON-200",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-101"
        ],
        "semester": "s5"
    },
    {
        "name": "Tecnología del Hormigón y Laboratorio",
        "code": "CON-252",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-130",
            "CON-250"
        ],
        "semester": "s5"
    },
    {
        "name": "Tecnología de la Madera y Laboratorio",
        "code": "CON-253",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-250"
        ],
        "semester": "s5"
    },
    {
        "name": "Estadística",
        "code": "MAT-031",
        "sctCredits": 0,
        "type": "MF",
        "prerequisites": [
            "MAT-013"
        ],
        "semester": "s5"
    },
    {
        "name": "Equipos de Construcción",
        "code": "CON-201",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Hidráulica",
        "code": "CON-240",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-130"
        ],
        "semester": "s6"
    },
    {
        "name": "Estructura de Madera y Acero",
        "code": "CON-230",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-131"
        ],
        "semester": "s6"
    },
    {
        "name": "Materiales de Construcción II",
        "code": "CON-251",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-250",
            "CON-252",
            "CON-253"
        ],
        "semester": "s6"
    },
    {
        "name": "Hormigón Armado",
        "code": "CON-231",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "MAT-014",
            "MAT-031",
            "CON-252"
        ],
        "semester": "s6"
    },
    {
        "name": "Economía I",
        "code": "ILN-270",
        "sctCredits": 0,
        "type": "IND",
        "prerequisites": [
            "MAT-013"
        ],
        "semester": "s6"
    },
    {
        "name": "Inglés Científico Tecnológico II",
        "code": "HCW-311",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [
            "HCW-310"
        ],
        "semester": "s6"
    },
    {
        "name": "Mecánica de Suelos I",
        "code": "CON-260",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-240"
        ],
        "semester": "s7"
    },
    {
        "name": "Ingeniería Hidráulica",
        "code": "CON-241",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-240"
        ],
        "semester": "s7"
    },
    {
        "name": "Construcciones Sismorresistentes",
        "code": "CON-232",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-230",
            "FIS-129"
        ],
        "semester": "s7"
    },
    {
        "name": "Construcción I",
        "code": "CON-220",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-230",
            "CON-231"
        ],
        "semester": "s7"
    },
    {
        "name": "Economía II",
        "code": "ILN-271",
        "sctCredits": 0,
        "type": "IND",
        "prerequisites": [
            "ILN-270"
        ],
        "semester": "s7"
    },
    {
        "name": "Mecánica de Suelos II",
        "code": "CON-261",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-260"
        ],
        "semester": "s8"
    },
    {
        "name": "Vialidad I y Laboratorio",
        "code": "CON-280",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-200",
            "CON-260"
        ],
        "semester": "s8"
    },
    {
        "name": "Obras Sanitarias",
        "code": "CON-310",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-241"
        ],
        "semester": "s8"
    },
    {
        "name": "Construcciones Industriales",
        "code": "CON-223",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-232"
        ],
        "semester": "s8"
    },
    {
        "name": "Construcción II",
        "code": "CON-221",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-220"
        ],
        "semester": "s8"
    },
    {
        "name": "Seminario de Seguridad Industrial",
        "code": "CON-202",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "MAT-031"
        ],
        "semester": "s8"
    },
    {
        "name": "Construcción de Obras Civiles",
        "code": "CON-222",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-261",
            "CON-280"
        ],
        "semester": "s9"
    },
    {
        "name": "Vialidad II y Laboratorio",
        "code": "CON-281",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-280"
        ],
        "semester": "s9"
    },
    {
        "name": "Instalaciones en Edificaciones",
        "code": "CON-224",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-221"
        ],
        "semester": "s9"
    },
    {
        "name": "Propuestas y Licitaciones",
        "code": "CON-320",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-221"
        ],
        "semester": "s9"
    },
    {
        "name": "Administración de la Construcción",
        "code": "CON-390",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "ILN-271"
        ],
        "semester": "s9"
    },
    {
        "name": "Historia de la Construción",
        "code": "HRW-203",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Legislación de la Construcción",
        "code": "CON-300",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Seminario de Tasacciones",
        "code": "CON-321",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Construcción y Medio Ambiente",
        "code": "CON-311",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-310"
        ],
        "semester": "s10"
    },
    {
        "name": "Gestión Financiera de Obras",
        "code": "CON-393",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-320",
            "CON-390"
        ],
        "semester": "s10"
    },
    {
        "name": "Administración de Obras",
        "code": "CON-392",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "CON-320",
            "CON-390"
        ],
        "semester": "s10"
    },
    {
        "name": "Proyectos Inmobiliarios",
        "code": "CON-391",
        "sctCredits": 0,
        "type": "CON",
        "prerequisites": [
            "ILN-271"
        ],
        "semester": "s10"
    }
],
};
