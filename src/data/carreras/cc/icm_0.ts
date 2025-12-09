import { Carrera } from '@/types/curriculum';

export const icm_0: Carrera = {
  codigo: 'ICM-0',
  nombre: 'Ing. Civil de Minas',
  campus: 'cc',
  color: '#A0522D',
  
  categorias: [
    {
        "id": "PC",
        "nombre": "Plan Común",
        "color": "#8B5CF6"
    },
    {
        "id": "HUM",
        "nombre": "Humanistas, libres",
        "color": "#84CC16"
    },
    {
        "id": "IND",
        "nombre": "Industrias",
        "color": "#0EA5E9"
    },
    {
        "id": "MEC",
        "nombre": "Departamento Mecanica",
        "color": "#A855F7"
    },
    {
        "id": "DEF",
        "nombre": "DEFIDER",
        "color": "#DC2626"
    },
    {
        "id": "MIN",
        "nombre": "Departamento Minas",
        "color": "#FACC15"
    },
    {
        "id": "QUI",
        "nombre": "Departamento Química",
        "color": "#8B5CF6"
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
        "sctCredits": 5,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Ingeniería de Minas",
        "code": "MIN-100",
        "sctCredits": 5,
        "type": "MIN",
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
        "sctCredits": 8,
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
        "name": "Trabajo en Equipo",
        "code": "MIN-101",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "MIN-100"
        ],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "DEW-101",
        "sctCredits": 2,
        "type": "DEF",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Química Básica",
        "code": "QUI-021",
        "sctCredits": 5,
        "type": "QUI",
        "prerequisites": [
            "QUI-010"
        ],
        "semester": "s3"
    },
    {
        "name": "Matemáticas III",
        "code": "MAT-023",
        "sctCredits": 6,
        "type": "PC",
        "prerequisites": [
            "MAT-022"
        ],
        "semester": "s3"
    },
    {
        "name": "Física General III",
        "code": "FIS-130",
        "sctCredits": 6,
        "type": "PC",
        "prerequisites": [
            "MAT-022",
            "FIS-110"
        ],
        "semester": "s3"
    },
    {
        "name": "Industria Minera",
        "code": "MIN-102",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "MIN-100"
        ],
        "semester": "s3"
    },
    {
        "name": "Ciencia Ambiental",
        "code": "MIN-103",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "QUI-010"
        ],
        "semester": "s3"
    },
    {
        "name": "Deportes",
        "code": "DEW-110",
        "sctCredits": 0,
        "type": "DEF",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Gráfica en Ingeniería",
        "code": "IWM-185",
        "sctCredits": 5,
        "type": "MEC",
        "prerequisites": [
            "IWI-131"
        ],
        "semester": "s4"
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
        "name": "Física General II",
        "code": "FIS-120",
        "sctCredits": 6,
        "type": "PC",
        "prerequisites": [
            "MAT-022",
            "FIS-110"
        ],
        "semester": "s4"
    },
    {
        "name": "Geología",
        "code": "MIN-130",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "MIN-102"
        ],
        "semester": "s4"
    },
    {
        "name": "Materiales para la Industria Minera",
        "code": "MIN-205",
        "sctCredits": 6,
        "type": "MIN",
        "prerequisites": [
            "QUI-010",
            "FIS-110"
        ],
        "semester": "s4"
    },
    {
        "name": "Geomática",
        "code": "MIN-233",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "MIN-102"
        ],
        "semester": "s5"
    },
    {
        "name": "Procesamiento de Minerales I",
        "code": "MIN-250",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "MIN-102"
        ],
        "semester": "s5"
    },
    {
        "name": "Física General IV",
        "code": "FIS-140",
        "sctCredits": 6,
        "type": "PC",
        "prerequisites": [
            "FIS-130",
            "FIS-120"
        ],
        "semester": "s5"
    },
    {
        "name": "Geología Estructural",
        "code": "MIN-232",
        "sctCredits": 6,
        "type": "MIN",
        "prerequisites": [
            "MIN-130"
        ],
        "semester": "s5"
    },
    {
        "name": "Resistencia de Minerales",
        "code": "MIN-240",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "MIN-205",
            "FIS-110"
        ],
        "semester": "s5"
    },
    {
        "name": "Inglés para Ingeniería I",
        "code": "HCW-310",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Geoestadística y Análisis Espacial",
        "code": "MIN-235",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "MIN-233",
            "MIN-101"
        ],
        "semester": "s6"
    },
    {
        "name": "Procesamiento de Minerales II",
        "code": "MIN-260",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "QUI-021",
            "MIN-102",
            "MIN-103"
        ],
        "semester": "s6"
    },
    {
        "name": "Fluidodinámica en Minería",
        "code": "MIN-265",
        "sctCredits": 6,
        "type": "MIN",
        "prerequisites": [
            "FIS-130"
        ],
        "semester": "s6"
    },
    {
        "name": "Mecánica de Rocas",
        "code": "MIN-242",
        "sctCredits": 6,
        "type": "MIN",
        "prerequisites": [
            "MIN-232",
            "MIN-240"
        ],
        "semester": "s6"
    },
    {
        "name": "Perforación y Tronadura",
        "code": "MIN-244",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "FIS-130",
            "QUI-021",
            "MIN-232"
        ],
        "semester": "s6"
    },
    {
        "name": "Economía I-A",
        "code": "IWN-170",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "MAT-023"
        ],
        "semester": "s7"
    },
    {
        "name": "Procesamiento de Minerales III",
        "code": "MIN-270",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "MIN-250",
            "MIN-260"
        ],
        "semester": "s7"
    },
    {
        "name": "Ingeniería de Medios Granulares",
        "code": "MIN-324",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "MIN-240"
        ],
        "semester": "s7"
    },
    {
        "name": "Ingeniería de Rocas",
        "code": "MIN-314",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "MIN-244",
            "MIN-242"
        ],
        "semester": "s7"
    },
    {
        "name": "Minería de Superficie",
        "code": "MIN-334",
        "sctCredits": 7,
        "type": "MIN",
        "prerequisites": [
            "MIN-244",
            "MIN-233",
            "MIN-242"
        ],
        "semester": "s7"
    },
    {
        "name": "Inglés para Ingeniería II",
        "code": "HCW-311",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Administración General",
        "code": "IWN-261",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Procesamiento de Minerales IV",
        "code": "MIN-280",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "MIN-270"
        ],
        "semester": "s8"
    },
    {
        "name": "Geología Económica",
        "code": "MIN-332",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "MIN-260",
            "MIN-250"
        ],
        "semester": "s8"
    },
    {
        "name": "Minería Subterránea",
        "code": "MIN-344",
        "sctCredits": 7,
        "type": "MIN",
        "prerequisites": [
            "MIN-324",
            "MIN-314",
            "MIN-233"
        ],
        "semester": "s8"
    },
    {
        "name": "Electivo I",
        "code": "MIN-xxx",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Información y Control Financiero",
        "code": "IWN-270",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "IWN-170"
        ],
        "semester": "s9"
    },
    {
        "name": "Evaluación de Yacimientos y Planificación Minera",
        "code": "MIN-364",
        "sctCredits": 6,
        "type": "MIN",
        "prerequisites": [
            "MIN-344",
            "MIN-235",
            "MIN-280",
            "MIN-334"
        ],
        "semester": "s9"
    },
    {
        "name": "Automatización, Control y Robótica",
        "code": "MIN-354",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "MIN-334",
            "MIN-270"
        ],
        "semester": "s9"
    },
    {
        "name": "Modelación y Simulación",
        "code": "MIN-220",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "IWI-131",
            "MIN-270",
            "MIN-334"
        ],
        "semester": "s9"
    },
    {
        "name": "Electivo II",
        "code": "MIN-yyy",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Humanístico I",
        "code": "HRW-10x",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Trabajo de Titulación I",
        "code": "MIN-397",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "MIN-344",
            "MIN-280",
            "MIN-332"
        ],
        "semester": "s10"
    },
    {
        "name": "Legislación Minera y Laboral",
        "code": "MIN-384",
        "sctCredits": 3,
        "type": "MIN",
        "prerequisites": [
            "IWN-270",
            "IWN-261",
            "MIN-233"
        ],
        "semester": "s10"
    },
    {
        "name": "Negocio Minero Sustentable",
        "code": "MIN-374",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "MIN-332",
            "MIN-280"
        ],
        "semester": "s10"
    },
    {
        "name": "Seguridad Industrial y Ventilación",
        "code": "MIN-370",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [
            "MIN-314",
            "MIN-265"
        ],
        "semester": "s10"
    },
    {
        "name": "Taller de Gestión de Proyectos",
        "code": "MIN-394",
        "sctCredits": 7,
        "type": "MIN",
        "prerequisites": [
            "MIN-270",
            "MIN-334"
        ],
        "semester": "s10"
    },
    {
        "name": "Humanístico II",
        "code": "HRW-10y",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Trabajo de Titulación II",
        "code": "MIN-398",
        "sctCredits": 13,
        "type": "MIN",
        "prerequisites": [
            "MIN-397"
        ],
        "semester": "s11"
    },
    {
        "name": "Electivo III",
        "code": "MIN-zzz",
        "sctCredits": 5,
        "type": "MIN",
        "prerequisites": [],
        "semester": "s11"
    }
],
};
