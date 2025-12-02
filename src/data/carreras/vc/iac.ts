import { Carrera } from '../../types';

export const iac: Carrera = {
  codigo: 'IAC',
  nombre: 'Ing. Aviación Comercial',
  campus: 'vc',
  color: '#00CED1',
  
  categorias: [
    {
        "id": "PC",
        "nombre": "Plan Común",
        "color": "#8B5CF6"
    },
    {
        "id": "HUM",
        "nombre": "Humanista",
        "color": "#84CC16"
    },
    {
        "id": "IND",
        "nombre": "Industrias",
        "color": "#0EA5E9"
    },
    {
        "id": "FIS",
        "nombre": "Física",
        "color": "#3B82F6"
    },
    {
        "id": "MAT",
        "nombre": "Matemática",
        "color": "#F59E0B"
    },
    {
        "id": "ACA",
        "nombre": "Ciencias Aeronáuticas",
        "color": "#06B6D4"
    }
],

  asignaturas: [
    {
        "name": "Introducción a la Industria Aeronáutica",
        "code": "ALA-101",
        "sctCredits": 3,
        "type": "ACA",
        "prerequisites": [],
        "semester": "s1"
    },
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
        "name": "Inglés Básico",
        "code": "HCW-319",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Programación",
        "code": "IWI-131",
        "sctCredits": 5,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "DEW-100",
        "sctCredits": 2,
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
        "semester": "s2"
    },
    {
        "name": "Matemática II",
        "code": "MAT-012",
        "sctCredits": 7,
        "type": "MAT",
        "prerequisites": [
            "MAT-011"
        ],
        "semester": "s2"
    },
    {
        "name": "Física Básica I",
        "code": "FIS-109",
        "sctCredits": 7,
        "type": "FIS",
        "prerequisites": [
            "FIS-100",
            "MAT-011"
        ],
        "semester": "s2"
    },
    {
        "name": "Inglés medio I",
        "code": "HCW-321",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [
            "HCW-319"
        ],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "DEW-101",
        "sctCredits": 2,
        "type": "PC",
        "prerequisites": [
            "DEW-100"
        ],
        "semester": "s2"
    },
    {
        "name": "Introducción a la Electrónica Aplicada",
        "code": "ALA-200",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [
            "FIS-100",
            "MAT-012"
        ],
        "semester": "s3"
    },
    {
        "name": "Matemática III",
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
        "sctCredits": 7,
        "type": "FIS",
        "prerequisites": [
            "FIS-109",
            "MAT-012"
        ],
        "semester": "s3"
    },
    {
        "name": "Inglés medio II",
        "code": "HCW-322",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [
            "HCW-321"
        ],
        "semester": "s3"
    },
    {
        "name": "Deporte",
        "code": "DEW-0",
        "sctCredits": 2,
        "type": "PC",
        "prerequisites": [
            "DEW-101"
        ],
        "semester": "s3"
    },
    {
        "name": "Humanístico I",
        "code": "HRW-1",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Introducción a la Termodinámica",
        "code": "ALA-205",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [
            "QUI-010",
            "MAT-012",
            "FIS-109"
        ],
        "semester": "s3"
    },
    {
        "name": "Aeronaves: Estructura y Sistemas",
        "code": "ALA-201",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [
            "FIS-109",
            "ALA-101"
        ],
        "semester": "s4"
    },
    {
        "name": "Matemática IV",
        "code": "MAT-014",
        "sctCredits": 6,
        "type": "MAT",
        "prerequisites": [
            "MAT-013"
        ],
        "semester": "s4"
    },
    {
        "name": "Física Básica III",
        "code": "FIS-129",
        "sctCredits": 7,
        "type": "FIS",
        "prerequisites": [
            "FIS-119"
        ],
        "semester": "s4"
    },
    {
        "name": "Inglés avanzado I",
        "code": "HCW-323",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [
            "HCW-322"
        ],
        "semester": "s4"
    },
    {
        "name": "Humanístico II",
        "code": "HRW-2",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Administración de Empresas",
        "code": "ICN-262",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Introducción a la Mec de Fluidos y Calor",
        "code": "ALA-206",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [
            "ALA-205",
            "FIS-119"
        ],
        "semester": "s5"
    },
    {
        "name": "Estadística",
        "code": "MAT-031",
        "sctCredits": 5,
        "type": "MAT",
        "prerequisites": [
            "MAT-013"
        ],
        "semester": "s5"
    },
    {
        "name": "Microeconomía",
        "code": "ILN-210",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "MAT-013"
        ],
        "semester": "s5"
    },
    {
        "name": "Inglés avanzado II",
        "code": "HCW-324",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [
            "HCW-323"
        ],
        "semester": "s5"
    },
    {
        "name": "Humanístico III",
        "code": "HRW-3",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Información y Control Financiero",
        "code": "IWN-270",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ICN-262"
        ],
        "semester": "s5"
    },
    {
        "name": "Aerodinámica y Mecánica del Vuelo",
        "code": "ALA-204",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [
            "ALA-201"
        ],
        "semester": "s6"
    },
    {
        "name": "Meteorología",
        "code": "ALA-203",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [
            "ALA-206"
        ],
        "semester": "s6"
    },
    {
        "name": "Gestión de Investigación de Operaciones",
        "code": "ILN-250",
        "sctCredits": 6,
        "type": "IND",
        "prerequisites": [
            "MAT-031",
            "ILN-210"
        ],
        "semester": "s6"
    },
    {
        "name": "Inglés conversación I",
        "code": "HCW-325",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [
            "HCW-324"
        ],
        "semester": "s6"
    },
    {
        "name": "Recursos Humanos",
        "code": "ICN-323",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ICN-262"
        ],
        "semester": "s6"
    },
    {
        "name": "Ingeniería Económica",
        "code": "ILN-230",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "IWN-270"
        ],
        "semester": "s6"
    },
    {
        "name": "Gestión y Operación de Aeropuertos",
        "code": "ALA-302",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [
            "ICN-262"
        ],
        "semester": "s7"
    },
    {
        "name": "Legislación Aeronáutica",
        "code": "ALA-202",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Propulsión",
        "code": "ALA-301",
        "sctCredits": 3,
        "type": "ACA",
        "prerequisites": [
            "FIS-109"
        ],
        "semester": "s7"
    },
    {
        "name": "Macroeconomía",
        "code": "ILN-211",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ILN-210"
        ],
        "semester": "s7"
    },
    {
        "name": "Marketing",
        "code": "ICN-321",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ILN-210"
        ],
        "semester": "s7"
    },
    {
        "name": "Legislación Empresarial",
        "code": "ICN-324",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ICN-262"
        ],
        "semester": "s7"
    },
    {
        "name": "Comercio Internacional Aeronáutico",
        "code": "ALA-303",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [
            "ILN-230"
        ],
        "semester": "s8"
    },
    {
        "name": "Gestión de Operaciones de Empresas Aeronáuticas",
        "code": "ACA-305",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [
            "ILN-250",
            "ALA-302"
        ],
        "semester": "s8"
    },
    {
        "name": "Planificación y Diseño de Aeropuertos",
        "code": "ALA-304",
        "sctCredits": 7,
        "type": "ACA",
        "prerequisites": [
            "ALA-302"
        ],
        "semester": "s8"
    },
    {
        "name": "Evaluación de Proyectos Generales",
        "code": "ICN-338",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ILN-230",
            "ILN-210"
        ],
        "semester": "s8"
    },
    {
        "name": "Finanzas",
        "code": "ICN-320",
        "sctCredits": 4,
        "type": "IND",
        "prerequisites": [
            "IWN-270"
        ],
        "semester": "s8"
    },
    {
        "name": "Gestión de Calidad de Servicios",
        "code": "ACA-301",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [
            "ICN-262"
        ],
        "semester": "s9"
    },
    {
        "name": "Gestión del Espacio Aéreo",
        "code": "ACA-302",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [
            "ALA-304",
            "ALA-202"
        ],
        "semester": "s9"
    },
    {
        "name": "Electivo ACA I",
        "code": "ACA-11",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo Libre I",
        "code": "ACA-1",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo Libre II",
        "code": "ACA-2",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Taller de Título I",
        "code": "ICN-386",
        "sctCredits": 3,
        "type": "IND",
        "prerequisites": [
            "ICN-321"
        ],
        "semester": "s9"
    },
    {
        "name": "Electivo ACA II",
        "code": "ACA-12",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Gestión de Mantención de Flota",
        "code": "ACA-303",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [
            "HCW-323"
        ],
        "semester": "s10"
    },
    {
        "name": "Seguridad Operacional",
        "code": "ACA-206",
        "sctCredits": 5,
        "type": "ACA",
        "prerequisites": [
            "ACA-301"
        ],
        "semester": "s10"
    },
    {
        "name": "Gestión Estratégica",
        "code": "ICN-322",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ICN-320",
            "ICN-323",
            "ICN-321"
        ],
        "semester": "s10"
    }
],
};
