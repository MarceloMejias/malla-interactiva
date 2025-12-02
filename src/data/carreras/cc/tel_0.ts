import { Carrera } from '../../types';

export const tel_0: Carrera = {
  codigo: 'TEL-0',
  nombre: 'Ing. Civil Telemática (Malla Antigua)',
  campus: 'cc',
  color: '#BA55D3',
  
  categorias: [
    {
        "id": "CSC",
        "nombre": "Ciencias Básicas",
        "color": "#8B5CF6"
    },
    {
        "id": "SW",
        "nombre": "Software",
        "color": "#A855F7"
    },
    {
        "id": "FIS",
        "nombre": "Física",
        "color": "#3B82F6"
    },
    {
        "id": "TIN",
        "nombre": "Transversal e Integración",
        "color": "#F43F5E"
    },
    {
        "id": "FG",
        "nombre": "Formación General",
        "color": "#84CC16"
    },
    {
        "id": "DEW",
        "nombre": "Deportes",
        "color": "#DC2626"
    },
    {
        "id": "REDES",
        "nombre": "Redes",
        "color": "#EF4444"
    },
    {
        "id": "ENG",
        "nombre": "Inglés",
        "color": "#06B6D4"
    },
    {
        "id": "ELO",
        "nombre": "Electrónica",
        "color": "#C084FC"
    },
    {
        "id": "TELECO",
        "nombre": "Telecomunicaciones",
        "color": "#FACC15"
    },
    {
        "id": "IND",
        "nombre": "Industrias",
        "color": "#0EA5E9"
    },
    {
        "id": "COMPL",
        "nombre": "Complementarios",
        "color": "#F59E0B"
    }
],

  asignaturas: [
    {
        "name": "Matemáticas I",
        "code": "MAT-021",
        "sctCredits": 8,
        "type": "CSC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Ingeniería",
        "code": "IWG-101",
        "sctCredits": 0,
        "type": "TIN",
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
        "name": "Iniciación a la Programación",
        "code": "TEL-101",
        "sctCredits": 0,
        "type": "SW",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Humanístico I",
        "code": "HRW-101",
        "sctCredits": 0,
        "type": "FG",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "DEW-100",
        "sctCredits": 0,
        "type": "DEW",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Matemáticas II",
        "code": "MAT-022",
        "sctCredits": 7,
        "type": "CSC",
        "prerequisites": [
            "MAT-021"
        ],
        "semester": "s2"
    },
    {
        "name": "Expresión Oral y Escrita",
        "code": "HFW-144",
        "sctCredits": 0,
        "type": "FG",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Física General I",
        "code": "FIS-110",
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [
            "MAT-021",
            "FIS-100"
        ],
        "semester": "s2"
    },
    {
        "name": "Seminario de Programación",
        "code": "TEL-102",
        "sctCredits": 0,
        "type": "SW",
        "prerequisites": [
            "TEL-101"
        ],
        "semester": "s2"
    },
    {
        "name": "Humanístico II",
        "code": "HRW-102",
        "sctCredits": 0,
        "type": "FG",
        "prerequisites": [
            "HRW-101"
        ],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "DEW-101",
        "sctCredits": 0,
        "type": "DEW",
        "prerequisites": [
            "DEW-100"
        ],
        "semester": "s2"
    },
    {
        "name": "Matemáticas III",
        "code": "MAT-023",
        "sctCredits": 7,
        "type": "CSC",
        "prerequisites": [
            "MAT-022"
        ],
        "semester": "s3"
    },
    {
        "name": "Estructura de Datos y Algoritmos",
        "code": "ELO-320",
        "sctCredits": 0,
        "type": "SW",
        "prerequisites": [
            "TEL-102"
        ],
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
        "name": "Redes de Computadores",
        "code": "ELO-322",
        "sctCredits": 0,
        "type": "REDES",
        "prerequisites": [
            "TEL-101"
        ],
        "semester": "s3"
    },
    {
        "name": "Inglés 1",
        "code": "HCW-100",
        "sctCredits": 0,
        "type": "ENG",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Deportes",
        "code": "DEW-110",
        "sctCredits": 0,
        "type": "DEW",
        "prerequisites": [
            "DEW-101"
        ],
        "semester": "s3"
    },
    {
        "name": "Bases de Datos",
        "code": "INF-239",
        "sctCredits": 0,
        "type": "SW",
        "prerequisites": [
            "ELO-320"
        ],
        "semester": "s4"
    },
    {
        "name": "Electrónica Digital",
        "code": "TEL-131",
        "sctCredits": 0,
        "type": "ELO",
        "prerequisites": [
            "MAT-022",
            "FIS-120"
        ],
        "semester": "s4"
    },
    {
        "name": "Laboratorio de Electrónica Digital",
        "code": "TEL-132",
        "sctCredits": 0,
        "type": "ELO",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Probabilidades y Procesos Aleatorios",
        "code": "ELO-204",
        "sctCredits": 0,
        "type": "CSC",
        "prerequisites": [
            "MAT-022"
        ],
        "semester": "s4"
    },
    {
        "name": "Inglés 2",
        "code": "HCW-101",
        "sctCredits": 0,
        "type": "ENG",
        "prerequisites": [
            "HCW-100"
        ],
        "semester": "s4"
    },
    {
        "name": "Química y Sociedad",
        "code": "QUI-010",
        "sctCredits": 0,
        "type": "CSC",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Análisis y Diseño de Software",
        "code": "INF-236",
        "sctCredits": 0,
        "type": "SW",
        "prerequisites": [
            "INF-239",
            "TEL-102"
        ],
        "semester": "s5"
    },
    {
        "name": "Diseño y Program. Orientada a Objetos",
        "code": "ELO-329",
        "sctCredits": 0,
        "type": "SW",
        "prerequisites": [
            "TEL-101"
        ],
        "semester": "s5"
    },
    {
        "name": "Física General III",
        "code": "FIS-130",
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [
            "MAT-022",
            "FIS-110"
        ],
        "semester": "s5"
    },
    {
        "name": "Fundamentos de Transmisión de Señales",
        "code": "TEL-222",
        "sctCredits": 0,
        "type": "TELECO",
        "prerequisites": [
            "MAT-023",
            "FIS-120"
        ],
        "semester": "s5"
    },
    {
        "name": "Laboratorio de Redes de Computadores",
        "code": "TEL-241",
        "sctCredits": 0,
        "type": "REDES",
        "prerequisites": [
            "ELO-322"
        ],
        "semester": "s5"
    },
    {
        "name": "Ingeniería de Software",
        "code": "INF-225",
        "sctCredits": 0,
        "type": "SW",
        "prerequisites": [
            "INF-236"
        ],
        "semester": "s6"
    },
    {
        "name": "Disponibilidad y Rendimiento de Sistemas TIC",
        "code": "TEL-211",
        "sctCredits": 0,
        "type": "REDES",
        "prerequisites": [
            "ELO-204",
            "ELO-322"
        ],
        "semester": "s6"
    },
    {
        "name": "Laboratorio de Comunicaciones",
        "code": "ELO-241",
        "sctCredits": 0,
        "type": "TELECO",
        "prerequisites": [
            "TEL-222",
            "TEL-132"
        ],
        "semester": "s6"
    },
    {
        "name": "Matemáticas IV",
        "code": "MAT-024",
        "sctCredits": 6,
        "type": "CSC",
        "prerequisites": [
            "MAT-023"
        ],
        "semester": "s6"
    },
    {
        "name": "Sistemas de Telecomunicaciones",
        "code": "TEL-231",
        "sctCredits": 0,
        "type": "TELECO",
        "prerequisites": [
            "TEL-222"
        ],
        "semester": "s6"
    },
    {
        "name": "Inglés 3",
        "code": "HCW-102",
        "sctCredits": 0,
        "type": "ENG",
        "prerequisites": [
            "HCW-101"
        ],
        "semester": "s6"
    },
    {
        "name": "Teoría de Sistemas Operativos",
        "code": "ELO-321",
        "sctCredits": 0,
        "type": "SW",
        "prerequisites": [
            "TEL-102"
        ],
        "semester": "s7"
    },
    {
        "name": "Sistemas Digitales",
        "code": "ELO-211",
        "sctCredits": 0,
        "type": "ELO",
        "prerequisites": [
            "TEL-131"
        ],
        "semester": "s7"
    },
    {
        "name": "Laboratorio de Sistemas Digitales",
        "code": "ELO-212",
        "sctCredits": 0,
        "type": "ELO",
        "prerequisites": [
            "TEL-131"
        ],
        "semester": "s7"
    },
    {
        "name": "Análisis Numérico",
        "code": "MAT-270",
        "sctCredits": 0,
        "type": "CSC",
        "prerequisites": [
            "MAT-024"
        ],
        "semester": "s7"
    },
    {
        "name": "Pensamiento de Diseño en Ingeniería",
        "code": "TEL-360",
        "sctCredits": 0,
        "type": "FG",
        "prerequisites": [
            "ELO-329"
        ],
        "semester": "s7"
    },
    {
        "name": "Inglés 4",
        "code": "HCW-200",
        "sctCredits": 0,
        "type": "ENG",
        "prerequisites": [
            "HCW-102"
        ],
        "semester": "s7"
    },
    {
        "name": "Administración de Redes de Computadores",
        "code": "TEL-342",
        "sctCredits": 4,
        "type": "REDES",
        "prerequisites": [
            "TEL-241"
        ],
        "semester": "s8"
    },
    {
        "name": "Criptografía y Seguridad de la Información",
        "code": "TEL-252",
        "sctCredits": 0,
        "type": "SW",
        "prerequisites": [
            "ELO-204",
            "TEL-131",
            "TEL-102"
        ],
        "semester": "s8"
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
        "semester": "s8"
    },
    {
        "name": "Procesamiento Digital de Imágenes",
        "code": "ELO-328",
        "sctCredits": 0,
        "type": "SW",
        "prerequisites": [
            "ELO-204",
            "ELO-329"
        ],
        "semester": "s8"
    },
    {
        "name": "Teoría de Comunicaciones Digitales",
        "code": "ELO-341",
        "sctCredits": 0,
        "type": "TELECO",
        "prerequisites": [
            "ELO-204",
            "TEL-231"
        ],
        "semester": "s8"
    },
    {
        "name": "Inglés 5",
        "code": "HCW-201",
        "sctCredits": 0,
        "type": "ENG",
        "prerequisites": [
            "HCW-200"
        ],
        "semester": "s8"
    },
    {
        "name": "Diseño de Aplicaciones Web y Móviles",
        "code": "TEL-335",
        "sctCredits": 0,
        "type": "SW",
        "prerequisites": [
            "ELO-329",
            "INF-239"
        ],
        "semester": "s9"
    },
    {
        "name": "Minería de Datos",
        "code": "TEL-354",
        "sctCredits": 0,
        "type": "SW",
        "prerequisites": [
            "ELO-204",
            "MAT-023"
        ],
        "semester": "s9"
    },
    {
        "name": "Redes de Acceso y Comunicac. Ópticas",
        "code": "TEL-236",
        "sctCredits": 0,
        "type": "TELECO",
        "prerequisites": [
            "ELO-204",
            "TEL-231"
        ],
        "semester": "s9"
    },
    {
        "name": "Redes Inalámbricas",
        "code": "TEL-315",
        "sctCredits": 0,
        "type": "REDES",
        "prerequisites": [
            "ELO-322",
            "ELO-341"
        ],
        "semester": "s9"
    },
    {
        "name": "Seguridad en Redes de Computadores",
        "code": "TEL-312",
        "sctCredits": 0,
        "type": "REDES",
        "prerequisites": [
            "TEL-342",
            "TEL-252"
        ],
        "semester": "s9"
    },
    {
        "name": "Simulación de Redes",
        "code": "TEL-341",
        "sctCredits": 0,
        "type": "REDES",
        "prerequisites": [
            "ELO-204",
            "ELO-320",
            "ELO-322"
        ],
        "semester": "s9"
    },
    {
        "name": "Redes de Sensores",
        "code": "TEL-329",
        "sctCredits": 0,
        "type": "REDES",
        "prerequisites": [
            "TEL-241",
            "TEL-315"
        ],
        "semester": "s10"
    },
    {
        "name": "Planificación y Dimensionamiento de Redes",
        "code": "TEL-343",
        "sctCredits": 0,
        "type": "REDES",
        "prerequisites": [
            "ELO-204"
        ],
        "semester": "s10"
    },
    {
        "name": "Redes Ópticas WDM",
        "code": "TEL-317",
        "sctCredits": 0,
        "type": "REDES",
        "prerequisites": [
            "ELO-204",
            "ELO-322"
        ],
        "semester": "s10"
    },
    {
        "name": "Economía IA",
        "code": "IWN-170",
        "sctCredits": 0,
        "type": "IND",
        "prerequisites": [
            "MAT-023"
        ],
        "semester": "s10"
    },
    {
        "name": "Complementario 1",
        "code": "TEL-011",
        "sctCredits": 0,
        "type": "COMPL",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Inglés 6",
        "code": "HCW-202",
        "sctCredits": 0,
        "type": "ENG",
        "prerequisites": [
            "HCW-201"
        ],
        "semester": "s10"
    },
    {
        "name": "Gestión de Investig. de Operaciones",
        "code": "ILN-250",
        "sctCredits": 0,
        "type": "IND",
        "prerequisites": [
            "ELO-204"
        ],
        "semester": "s11"
    },
    {
        "name": "Mem. Multid.: Innovación",
        "code": "IWG-397",
        "sctCredits": 0,
        "type": "COMPL",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Mem. Multid.: Transversal 1",
        "code": "IWG-396",
        "sctCredits": 0,
        "type": "COMPL",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Taller Memoria Multidisciplinaria 1",
        "code": "IWG-394",
        "sctCredits": 0,
        "type": "COMPL",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Complementario 2",
        "code": "TEL-012",
        "sctCredits": 0,
        "type": "COMPL",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Administración de Empresas",
        "code": "ICS-111",
        "sctCredits": 0,
        "type": "IND",
        "prerequisites": [],
        "semester": "s12"
    },
    {
        "name": "Mem. Multid.: Emprendimiento",
        "code": "IWG-399",
        "sctCredits": 0,
        "type": "COMPL",
        "prerequisites": [],
        "semester": "s12"
    },
    {
        "name": "Mem. Multid.: Transversal 2",
        "code": "IWG-398",
        "sctCredits": 0,
        "type": "COMPL",
        "prerequisites": [],
        "semester": "s12"
    },
    {
        "name": "Taller Memoria Multidisciplinaria 2",
        "code": "IWG-395",
        "sctCredits": 0,
        "type": "COMPL",
        "prerequisites": [
            "IWG-394"
        ],
        "semester": "s12"
    },
    {
        "name": "Complementario 3",
        "code": "TEL-013",
        "sctCredits": 0,
        "type": "COMPL",
        "prerequisites": [],
        "semester": "s12"
    }
],
};
