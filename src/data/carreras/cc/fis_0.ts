import { Carrera } from '@/types/curriculum';

export const fis_0: Carrera = {
  codigo: 'FIS-0',
  nombre: 'Lic. en Física',
  campus: 'cc',
  color: '#3CB371',
  
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
        "id": "HUM",
        "nombre": "Humanistas",
        "color": "#84CC16"
    },
    {
        "id": "PC",
        "nombre": "Plan Común",
        "color": "#8B5CF6"
    },
    {
        "id": "IN",
        "nombre": "Inglés",
        "color": "#06B6D4"
    },
    {
        "id": "LIC",
        "nombre": "Licenciatura",
        "color": "#06B6D4"
    },
    {
        "id": "DEW",
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
        "type": "MAT",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Física General I",
        "code": "FIS-110",
        "sctCredits": 6,
        "type": "FIS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Física Contemporánea",
        "code": "FIS-106",
        "sctCredits": 7,
        "type": "LIC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "DEW-100",
        "sctCredits": 2,
        "type": "DEW",
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
        "type": "MAT",
        "prerequisites": [
            "MAT-021"
        ],
        "semester": "s2"
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
        "semester": "s2"
    },
    {
        "name": "Humanístico I",
        "code": "HRW-1",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "DEW-101",
        "sctCredits": 2,
        "type": "DEW",
        "prerequisites": [
            "DEW-100"
        ],
        "semester": "s2"
    },
    {
        "name": "Instrumentación Científica",
        "code": "FIS-105",
        "sctCredits": 6,
        "type": "FIS",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Deportes",
        "code": "DEW-0",
        "sctCredits": 2,
        "type": "DEW",
        "prerequisites": [
            "DEW-101"
        ],
        "semester": "s3"
    },
    {
        "name": "Matemáticas III",
        "code": "MAT-023",
        "sctCredits": 7,
        "type": "MAT",
        "prerequisites": [
            "MAT-022"
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
        "name": "Humanístico II",
        "code": "HRW-2",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [
            "HRW-1"
        ],
        "semester": "s3"
    },
    {
        "name": "Inglés I",
        "code": "HCW-100",
        "sctCredits": 3,
        "type": "IN",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Física Experimental",
        "code": "FIS-200",
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [
            "FIS-120",
            "FIS-130",
            "FIS-105"
        ],
        "semester": "s3"
    },
    {
        "name": "Mecanica Intermedia I",
        "code": "FIS-210",
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [
            "FIS-110",
            "MAT-023"
        ],
        "semester": "s4"
    },
    {
        "name": "Matemáticas IV",
        "code": "MAT-024",
        "sctCredits": 6,
        "type": "MAT",
        "prerequisites": [
            "MAT-023"
        ],
        "semester": "s4"
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
        "semester": "s4"
    },
    {
        "name": "Probabilidad y Estadística",
        "code": "MAT-041",
        "sctCredits": 7,
        "type": "MAT",
        "prerequisites": [
            "MAT-023"
        ],
        "semester": "s4"
    },
    {
        "name": "Inglés II",
        "code": "HCW-101",
        "sctCredits": 3,
        "type": "IN",
        "prerequisites": [
            "HCW-100"
        ],
        "semester": "s4"
    },
    {
        "name": "Mecánica Intermedia II",
        "code": "FIS-211",
        "sctCredits": 7,
        "type": "FIS",
        "prerequisites": [
            "FIS-210"
        ],
        "semester": "s5"
    },
    {
        "name": "Métodos de la Física Matemática",
        "code": "FIS-245",
        "sctCredits": 7,
        "type": "FIS",
        "prerequisites": [
            "MAT-024"
        ],
        "semester": "s5"
    },
    {
        "name": "Campos Electromagnéticos I",
        "code": "FIS-220",
        "sctCredits": 7,
        "type": "FIS",
        "prerequisites": [
            "FIS-120",
            "FIS-130",
            "MAT-023"
        ],
        "semester": "s5"
    },
    {
        "name": "Termodinámica y Mecánica Estadística",
        "code": "FIS-230",
        "sctCredits": 7,
        "type": "FIS",
        "prerequisites": [
            "FIS-140",
            "MAT-023"
        ],
        "semester": "s5"
    },
    {
        "name": "Inglés III",
        "code": "HCW-102",
        "sctCredits": 3,
        "type": "IN",
        "prerequisites": [
            "HCW-101"
        ],
        "semester": "s5"
    },
    {
        "name": "Física Cuántica I",
        "code": "FIS-242",
        "sctCredits": 7,
        "type": "FIS",
        "prerequisites": [
            "FIS-140",
            "FIS-210"
        ],
        "semester": "s6"
    },
    {
        "name": "Física Experimental Avanzada",
        "code": "FIS-201",
        "sctCredits": 7,
        "type": "FIS",
        "prerequisites": [
            "FIS-200",
            "FIS-230"
        ],
        "semester": "s6"
    },
    {
        "name": "Campos Electromagnéticos II",
        "code": "FIS-221",
        "sctCredits": 7,
        "type": "FIS",
        "prerequisites": [
            "FIS-220"
        ],
        "semester": "s6"
    },
    {
        "name": "Análsis Numérico",
        "code": "MAT-270",
        "sctCredits": 7,
        "type": "MAT",
        "prerequisites": [
            "MAT-024"
        ],
        "semester": "s6"
    },
    {
        "name": "Inglés IV",
        "code": "HCW-200",
        "sctCredits": 3,
        "type": "IN",
        "prerequisites": [
            "HCW-102"
        ],
        "semester": "s6"
    },
    {
        "name": "Física Cuántica II",
        "code": "FIS-243",
        "sctCredits": 0,
        "type": "FIS",
        "prerequisites": [
            "FIS-140",
            "FIS-242"
        ],
        "semester": "s7"
    },
    {
        "name": "El Método Científico",
        "code": "HAF-101",
        "sctCredits": 3,
        "type": "LIC",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Física Computacional",
        "code": "FIS-205",
        "sctCredits": 7,
        "type": "FIS",
        "prerequisites": [
            "MAT-270"
        ],
        "semester": "s7"
    },
    {
        "name": "Introducción a la Física de Alta Energía",
        "code": "FIS-270",
        "sctCredits": 7,
        "type": "FIS",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Optativo Avanzando I",
        "code": "FIS-11",
        "sctCredits": 6,
        "type": "FIS",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Optativo Avanzando II",
        "code": "FIS-12",
        "sctCredits": 6,
        "type": "FIS",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Optativo Avanzando III",
        "code": "FIS-13",
        "sctCredits": 6,
        "type": "FIS",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Optativo Avanzando IV",
        "code": "FIS-14",
        "sctCredits": 6,
        "type": "FIS",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Introducción a la Física de Materia Condensada",
        "code": "FIS-251",
        "sctCredits": 7,
        "type": "LIC",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Seminario de Grado",
        "code": "FIS-299",
        "sctCredits": 5,
        "type": "LIC",
        "prerequisites": [],
        "semester": "s8"
    }
],
};
