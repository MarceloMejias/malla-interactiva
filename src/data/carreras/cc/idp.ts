import { Carrera } from '@/types/curriculum';

export const idp: Carrera = {
  codigo: 'IDP',
  nombre: 'Ing. Diseño de Productos',
  campus: 'cc',
  color: '#FF69B4',
  
  categorias: [
    {
        "id": "DEFI",
        "nombre": "DEFIDER",
        "color": "#DC2626"
    },
    {
        "id": "FIS",
        "nombre": "Física",
        "color": "#3B82F6"
    },
    {
        "id": "IDP",
        "nombre": "Ingeniería en Diseño",
        "color": "#FF6600"
    },
    {
        "id": "QUI",
        "nombre": "Química",
        "color": "#EC4899"
    },
    {
        "id": "MAT",
        "nombre": "Matemática",
        "color": "#F59E0B"
    },
    {
        "id": "INF",
        "nombre": "Informática",
        "color": "#06B6D4"
    },
    {
        "id": "HUM",
        "nombre": "Estudios Humanísticos",
        "color": "#8B5CF6"
    },
    {
        "id": "MEC",
        "nombre": " Mecánica",
        "color": "#F97316"
    },
    {
        "id": "IND",
        "nombre": "Industrias",
        "color": "#0EA5E9"
    },
    {
        "id": "MET",
        "nombre": " Metalúrgica y Materiales",
        "color": "#DC2626"
    }
],

  asignaturas: [
    {
        "name": "Matemática I",
        "code": "MAT-011",
        "sctCredits": 8,
        "type": "MAT",
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
        "name": "Introducción a la Ingeniería",
        "code": "IWG-101",
        "sctCredits": 3,
        "type": "IDP",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Química y Sociedad",
        "code": "QUI-010",
        "sctCredits": 5,
        "type": "QUI",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "DEW-100",
        "sctCredits": 0,
        "type": "DEFI",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Matemáticas II",
        "code": "MAT-012",
        "sctCredits": 8,
        "type": "MAT",
        "prerequisites": [
            "MAT-011"
        ],
        "semester": "s2"
    },
    {
        "name": "Física Básica I",
        "code": "FIS-109",
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [
            "MAT-011",
            "FIS-100"
        ],
        "semester": "s2"
    },
    {
        "name": "Programación",
        "code": "IWI-131",
        "sctCredits": 5,
        "type": "INF",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Visión Trascendente del Quehacer Humano",
        "code": "HRW-101",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "DEW-101",
        "sctCredits": 2,
        "type": "DEFI",
        "prerequisites": [
            "DEW-100"
        ],
        "semester": "s2"
    },
    {
        "name": "Matemáticas III",
        "code": "MAT-013",
        "sctCredits": 7,
        "type": "MAT",
        "prerequisites": [
            "MAT-012"
        ],
        "semester": "s3"
    },
    {
        "name": "Física Básica II",
        "code": "FIS-119",
        "sctCredits": 5,
        "type": "FIS",
        "prerequisites": [
            "MAT-012",
            "FIS-109"
        ],
        "semester": "s3"
    },
    {
        "name": "Taller de Productos I",
        "code": "IDP-111",
        "sctCredits": 5,
        "type": "IDP",
        "prerequisites": [
            "FIS-100",
            "IWG-101"
        ],
        "semester": "s3"
    },
    {
        "name": "Diseño en Ingeniería",
        "code": "IDP-102",
        "sctCredits": 5,
        "type": "IDP",
        "prerequisites": [
            "FIS-109"
        ],
        "semester": "s3"
    },
    {
        "name": "Visión Inmanente del Quehacer Humano",
        "code": "HRW-102",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Inglés para Ingeniería I",
        "code": "HIW-310",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Matemática IV",
        "code": "MAT-014",
        "sctCredits": 7,
        "type": "MAT",
        "prerequisites": [
            "MAT-013"
        ],
        "semester": "s4"
    },
    {
        "name": "Física Básica III",
        "code": "FIS-129",
        "sctCredits": 5,
        "type": "FIS",
        "prerequisites": [
            "FIS-119"
        ],
        "semester": "s4"
    },
    {
        "name": "Taller de Productos II",
        "code": "IDP-112",
        "sctCredits": 5,
        "type": "IDP",
        "prerequisites": [
            "IDP-111"
        ],
        "semester": "s4"
    },
    {
        "name": "Gráfica de Productos",
        "code": "IDP-200",
        "sctCredits": 5,
        "type": "IDP",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Fundamentos de Calor y Fluidos",
        "code": "MEC-119",
        "sctCredits": 5,
        "type": "MEC",
        "prerequisites": [
            "FIS-119"
        ],
        "semester": "s4"
    },
    {
        "name": "Inglés para Ingeniería II",
        "code": "HIW-311",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [
            "HIW-310"
        ],
        "semester": "s4"
    },
    {
        "name": "Elementos de Mecánica y Resistencia de Mat.",
        "code": "ILM-152",
        "sctCredits": 5,
        "type": "MEC",
        "prerequisites": [
            "FIS-109"
        ],
        "semester": "s5"
    },
    {
        "name": "Manufacturas I",
        "code": "MET-224",
        "sctCredits": 5,
        "type": "MET",
        "prerequisites": [
            "QUI-010",
            "FIS-119"
        ],
        "semester": "s5"
    },
    {
        "name": "Taller de Productos III",
        "code": "IDP-113",
        "sctCredits": 8,
        "type": "IDP",
        "prerequisites": [
            "IDP-112",
            "IDP-102"
        ],
        "semester": "s5"
    },
    {
        "name": "Modelación de Productos",
        "code": "IDP-205",
        "sctCredits": 8,
        "type": "IDP",
        "prerequisites": [
            "IDP-200"
        ],
        "semester": "s5"
    },
    {
        "name": "Economía I-A",
        "code": "IWN-170",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "MAT-013"
        ],
        "semester": "s5"
    },
    {
        "name": "Deportes",
        "code": "DEW-0",
        "sctCredits": 2,
        "type": "DEFI",
        "prerequisites": [
            "DEW-101"
        ],
        "semester": "s5"
    },
    {
        "name": "Factor Humano",
        "code": "IDP-103",
        "sctCredits": 5,
        "type": "IDP",
        "prerequisites": [
            "IDP-112"
        ],
        "semester": "s6"
    },
    {
        "name": "Manufacturas II",
        "code": "MEC-273",
        "sctCredits": 7,
        "type": "MEC",
        "prerequisites": [
            "MET-224"
        ],
        "semester": "s6"
    },
    {
        "name": "Taller de Productos IV",
        "code": "IDP-114",
        "sctCredits": 8,
        "type": "IDP",
        "prerequisites": [
            "IDP-113",
            "MET-224",
            "IDP-205"
        ],
        "semester": "s6"
    },
    {
        "name": "Representación Virtual de Productos",
        "code": "IDP-210",
        "sctCredits": 5,
        "type": "IDP",
        "prerequisites": [
            "IDP-205"
        ],
        "semester": "s6"
    },
    {
        "name": "Información y Control Financiero",
        "code": "IWN-270",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "IWN-170"
        ],
        "semester": "s6"
    },
    {
        "name": "Visión Estética del Quehacer Humano",
        "code": "HRW-103",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Administración General",
        "code": "IWN-261",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Manufacturas III",
        "code": "MEC-274",
        "sctCredits": 7,
        "type": "MEC",
        "prerequisites": [
            "MEC-273"
        ],
        "semester": "s7"
    },
    {
        "name": "Taller de Productos V",
        "code": "IDP-115",
        "sctCredits": 8,
        "type": "IDP",
        "prerequisites": [
            "ILM-152",
            "IDP-114",
            "IDP-103"
        ],
        "semester": "s7"
    },
    {
        "name": "Concepción de Productos",
        "code": "IDP-215",
        "sctCredits": 5,
        "type": "IDP",
        "prerequisites": [
            "ILM-152",
            "IDP-205",
            "MEC-119"
        ],
        "semester": "s7"
    },
    {
        "name": "Evaluación de Proyectos",
        "code": "ICN-336",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "IWN-270"
        ],
        "semester": "s7"
    },
    {
        "name": "Marketing",
        "code": "ICN-321",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "IWN-170"
        ],
        "semester": "s8"
    },
    {
        "name": "Métodos Avanzados en Manufactura",
        "code": "MEC-275",
        "sctCredits": 5,
        "type": "MEC",
        "prerequisites": [
            "MEC-274"
        ],
        "semester": "s8"
    },
    {
        "name": "Taller de Productos VI",
        "code": "IDP-116",
        "sctCredits": 8,
        "type": "IDP",
        "prerequisites": [
            "IDP-115",
            "MEC-274"
        ],
        "semester": "s8"
    },
    {
        "name": "Estrategias en Ingeniería de Productos",
        "code": "IDP-104",
        "sctCredits": 5,
        "type": "IDP",
        "prerequisites": [
            "IDP-115"
        ],
        "semester": "s8"
    },
    {
        "name": "Finanzas",
        "code": "ICN-320",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "IWN-270"
        ],
        "semester": "s8"
    },
    {
        "name": "Creación de Empresas",
        "code": "ICN-339",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ICN-320",
            "ICN-321"
        ],
        "semester": "s9"
    },
    {
        "name": "Materiales, Función y Procesos",
        "code": "MET-324",
        "sctCredits": 5,
        "type": "MET",
        "prerequisites": [
            "MET-224",
            "IDP-115"
        ],
        "semester": "s9"
    },
    {
        "name": "Taller de Productos VII",
        "code": "IDP-117",
        "sctCredits": 8,
        "type": "IDP",
        "prerequisites": [
            "IDP-104",
            "IDP-215",
            "IDP-116"
        ],
        "semester": "s9"
    },
    {
        "name": "Investigación Aplicada",
        "code": "IDP-301",
        "sctCredits": 5,
        "type": "IDP",
        "prerequisites": [
            "IDP-104"
        ],
        "semester": "s9"
    },
    {
        "name": "Recursos Humanos",
        "code": "ICN-323",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "IWN-261"
        ],
        "semester": "s10"
    },
    {
        "name": "Trabajo en Equipo y Liderazgo",
        "code": "IDP-302",
        "sctCredits": 5,
        "type": "IDP",
        "prerequisites": [
            "IDP-116"
        ],
        "semester": "s10"
    },
    {
        "name": "Taller de Título",
        "code": "IDP-118",
        "sctCredits": 13,
        "type": "IDP",
        "prerequisites": [
            "IDP-301",
            "IDP-117"
        ],
        "semester": "s10"
    }
],
};
