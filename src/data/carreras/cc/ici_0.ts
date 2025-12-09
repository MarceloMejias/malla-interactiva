import { Carrera } from '@/types/curriculum';

export const ici_0: Carrera = {
  codigo: 'ICI-0',
  nombre: 'Ing. Civil Industrial (Malla Antigua)',
  campus: 'cc',
  color: '#FF7F80',
  
  categorias: [
    {
        "id": "PC",
        "nombre": "Plan Común",
        "color": "#8B5CF6"
    },
    {
        "id": "HUM",
        "nombre": "Humanistas, libres",
        "color": "#FBBF24"
    },
    {
        "id": "IND",
        "nombre": "Industrias",
        "color": "#0EA5E9"
    },
    {
        "id": "ELEC",
        "nombre": "Departamento Electrica",
        "color": "#F97316"
    },
    {
        "id": "MEC",
        "nombre": "Departamento Mecanica",
        "color": "#EC4899"
    },
    {
        "id": "DEF",
        "nombre": "DEFIDER",
        "color": "#DC2626"
    }
],

  asignaturas: [
    {
        "name": "Química y Sociedad",
        "code": "QUI-010",
        "sctCredits": 5,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
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
        "name": "Introducción a la Ingeniería",
        "code": "IWG-101",
        "sctCredits": 3,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "DEW-100",
        "sctCredits": 2,
        "type": "DEF",
        "prerequisites": [],
        "semester": "s1"
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
        "name": "Humanístico I",
        "code": "HXW-001",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "DEW-101",
        "sctCredits": 2,
        "type": "DEF",
        "prerequisites": [
            "DEW-100"
        ],
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
        "name": "Taller a la ingeniería Industrial I",
        "code": "ILN-010",
        "sctCredits": 3,
        "type": "IND",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Química de Procesos",
        "code": "QUI-025",
        "sctCredits": 8,
        "type": "PC",
        "prerequisites": [
            "QUI-010"
        ],
        "semester": "s3"
    },
    {
        "name": "Elementos de la Mecánica y Resistencia de Materiales",
        "code": "ILM-152",
        "sctCredits": 5,
        "type": "MEC",
        "prerequisites": [
            "FIS-110"
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
        "name": "Taller de Ingeniería Industrial II",
        "code": "ILN-011",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ILN-010"
        ],
        "semester": "s4"
    },
    {
        "name": "Electrotecnia Básica",
        "code": "ELI-271",
        "sctCredits": 7,
        "type": "ELEC",
        "prerequisites": [
            "MAT-023",
            "FIS-120"
        ],
        "semester": "s4"
    },
    {
        "name": "Humanístico II",
        "code": "HXW-002",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Inglés I",
        "code": "HCW-100",
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
        "semester": "s5"
    },
    {
        "name": "Taller de Ingeniería Industrial III",
        "code": "ILN-012",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ILN-010"
        ],
        "semester": "s5"
    },
    {
        "name": "Laboratorio de Procesos Industriales",
        "code": "ILN-255",
        "sctCredits": 7,
        "type": "IND",
        "prerequisites": [
            "FIS-120",
            "FIS-130"
        ],
        "semester": "s5"
    },
    {
        "name": "Termodinámica",
        "code": "IWM-210",
        "sctCredits": 7,
        "type": "MEC",
        "prerequisites": [
            "FIS-130"
        ],
        "semester": "s5"
    },
    {
        "name": "Microeconomía",
        "code": "ILN-210",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "MAT-023"
        ],
        "semester": "s5"
    },
    {
        "name": "Deportes",
        "code": "DEW-0",
        "sctCredits": 2,
        "type": "DEF",
        "prerequisites": [
            "DEW-101"
        ],
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
        "semester": "s6"
    },
    {
        "name": "Legislación Empresarial",
        "code": "ICS-003",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ICN-262"
        ],
        "semester": "s6"
    },
    {
        "name": "Gestión Energética I",
        "code": "ILN-221",
        "sctCredits": 7,
        "type": "PC",
        "prerequisites": [
            "IWM-210"
        ],
        "semester": "s6"
    },
    {
        "name": "Macroeconomía",
        "code": "ILN-211",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ILN-210"
        ],
        "semester": "s6"
    },
    {
        "name": "Gráfica en Ingeniería",
        "code": "IWM-185",
        "sctCredits": 5,
        "type": "MEC",
        "prerequisites": [
            "IWI-131"
        ],
        "semester": "s6"
    },
    {
        "name": "Ingles II",
        "code": "HCW-102",
        "sctCredits": 3,
        "type": "PC",
        "prerequisites": [
            "HCW-100"
        ],
        "semester": "s6"
    },
    {
        "name": "Física General IV",
        "code": "FIS-140",
        "sctCredits": 8,
        "type": "PC",
        "prerequisites": [
            "FIS-130",
            "FIS-120"
        ],
        "semester": "s7"
    },
    {
        "name": "Probabilidad y Estadística Industrial",
        "code": "MAT-042",
        "sctCredits": 7,
        "type": "PC",
        "prerequisites": [
            "MAT-023"
        ],
        "semester": "s7"
    },
    {
        "name": "Gestión Energética II",
        "code": "ILN-222",
        "sctCredits": 7,
        "type": "PC",
        "prerequisites": [
            "ILN-221"
        ],
        "semester": "s7"
    },
    {
        "name": "Recursos Humanos",
        "code": "ICN-323",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ICN-262"
        ],
        "semester": "s7"
    },
    {
        "name": "Ingeniería Económica",
        "code": "ILN-230",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "IWN-270"
        ],
        "semester": "s7"
    },
    {
        "name": "Econometría",
        "code": "ICN-312",
        "sctCredits": 7,
        "type": "IND",
        "prerequisites": [
            "MAT-042"
        ],
        "semester": "s8"
    },
    {
        "name": "Organización Industrial",
        "code": "ICN-212",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ILN-210"
        ],
        "semester": "s8"
    },
    {
        "name": "Gestión de Investigación de Operaciones",
        "code": "ILN-250",
        "sctCredits": 7,
        "type": "IND",
        "prerequisites": [
            "ILN-210",
            "MAT-042"
        ],
        "semester": "s8"
    },
    {
        "name": "Sistemas de Información para la Gestión",
        "code": "ILN-292",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ILN-210",
            "IWI-131"
        ],
        "semester": "s8"
    },
    {
        "name": "Ingeniería de Plantas",
        "code": "ICN-342",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ILN-230",
            "MAT-042"
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
        "semester": "s9"
    },
    {
        "name": "Marketing",
        "code": "ICN-321",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ILN-210"
        ],
        "semester": "s9"
    },
    {
        "name": "Gestión Calidad Total",
        "code": "ICN-346",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ILN-250"
        ],
        "semester": "s9"
    },
    {
        "name": "Asignatura de Especialización I",
        "code": "ICN-011",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Gestión de Operaciones",
        "code": "ICN-343",
        "sctCredits": 7,
        "type": "IND",
        "prerequisites": [
            "ILN-250"
        ],
        "semester": "s9"
    },
    {
        "name": "Humanístico III",
        "code": "HXW-003",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Evaluación de Proyectos Generales",
        "code": "ICN-338",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ILN-210",
            "ILN-230"
        ],
        "semester": "s10"
    },
    {
        "name": "Asignatura de Especialización II",
        "code": "ICN-012",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ICN-011"
        ],
        "semester": "s10"
    },
    {
        "name": "Gestión Estratégica",
        "code": "ICN-332",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ICN-323",
            "ICN-320",
            "ICN-321"
        ],
        "semester": "s10"
    },
    {
        "name": "Humanístico IV",
        "code": "HXW-004",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Gestión de Operaciones II",
        "code": "ICN-344",
        "sctCredits": 7,
        "type": "IND",
        "prerequisites": [
            "ICN-343"
        ],
        "semester": "s10"
    },
    {
        "name": "Taller de Título I",
        "code": "ICN-398",
        "sctCredits": 3,
        "type": "IND",
        "prerequisites": [
            "ICN-321"
        ],
        "semester": "s10"
    },
    {
        "name": "Desarrollo y Control de Proyectos",
        "code": "ICN-337",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ICN-338"
        ],
        "semester": "s11"
    },
    {
        "name": "Asignatura de Especialización III",
        "code": "ICN-013",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Asignatura Especialización IV",
        "code": "ICN-014",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Taller de Título II",
        "code": "INC-399",
        "sctCredits": 13,
        "type": "IND",
        "prerequisites": [
            "ICN-398"
        ],
        "semester": "s11"
    }
],
};
