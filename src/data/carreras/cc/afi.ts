import { Carrera } from '../../types';

export const afi: Carrera = {
  codigo: 'AFI',
  nombre: 'Lic. en Astrofísica',
  campus: 'cc',
  color: '#191970',
  
  categorias: [
    {
        "id": "PC",
        "nombre": "Plan común, humanistas y deportes",
        "color": "#8B5CF6"
    },
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
        "id": "AFI",
        "nombre": "Astrofísica",
        "color": "#6366F1"
    },
    {
        "id": "ENG",
        "nombre": "Inglés",
        "color": "#06B6D4"
    }
],

  asignaturas: [
    {
        "name": "Química y Sociedad",
        "code": "QUI-010",
        "sctCredits": 0,
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
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la astrofísica",
        "code": "AST-100",
        "sctCredits": 7,
        "type": "AFI",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "EFI-100",
        "sctCredits": 0,
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
        "name": "Instrumentación Científica",
        "code": "FIS-105",
        "sctCredits": 6,
        "type": "FIS",
        "prerequisites": [],
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
        "name": "Visión trascendente del ser humano",
        "code": "HRW-101",
        "sctCredits": 3,
        "type": "PC",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "EFI-101",
        "sctCredits": 0,
        "type": "PC",
        "prerequisites": [
            "EFI-100"
        ],
        "semester": "s2"
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
        "name": "Física experimental",
        "code": "FIS-200",
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [
            "FIS-105",
            "FIS-130",
            "FIS-120"
        ],
        "semester": "s3"
    },
    {
        "name": "Inglés I",
        "code": "HCW-100",
        "sctCredits": 0,
        "type": "ENG",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Visión inmanente del quehacer humano",
        "code": "HRW-102",
        "sctCredits": 3,
        "type": "PC",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Deportes",
        "code": "DEW-0",
        "sctCredits": 2,
        "type": "PC",
        "prerequisites": [],
        "semester": "s3"
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
            "FIS-120",
            "FIS-130"
        ],
        "semester": "s4"
    },
    {
        "name": "Mecánica Intermedia I",
        "code": "FIS-210",
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [
            "MAT-023",
            "FIS-110"
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
        "sctCredits": 0,
        "type": "ENG",
        "prerequisites": [
            "HCW-100"
        ],
        "semester": "s4"
    },
    {
        "name": "Medio circunestelar y sistemas planetarios",
        "code": "AST-210",
        "sctCredits": 7,
        "type": "AFI",
        "prerequisites": [
            "FIS-210",
            "FIS-140"
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
        "name": "Termodinámica y mecánica estadística",
        "code": "FIS-230",
        "sctCredits": 7,
        "type": "FIS",
        "prerequisites": [
            "MAT-024",
            "FIS-140"
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
        "name": "Inglés III",
        "code": "HCW-102",
        "sctCredits": 0,
        "type": "ENG",
        "prerequisites": [
            "HCW-101"
        ],
        "semester": "s5"
    },
    {
        "name": "Análisis numérico",
        "code": "MAT-270",
        "sctCredits": 7,
        "type": "MAT",
        "prerequisites": [
            "MAT-024"
        ],
        "semester": "s6"
    },
    {
        "name": "Estructura y evolución estelar",
        "code": "AST-220",
        "sctCredits": 7,
        "type": "AFI",
        "prerequisites": [
            "FIS-230",
            "FIS-140"
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
        "name": "Estructura Atómica y Nuclear I",
        "code": "FIS-240",
        "sctCredits": 7,
        "type": "FIS",
        "prerequisites": [
            "FIS-140"
        ],
        "semester": "s6"
    },
    {
        "name": "Inglés IV",
        "code": "HCW-200",
        "sctCredits": 0,
        "type": "ENG",
        "prerequisites": [
            "HCW-102"
        ],
        "semester": "s6"
    },
    {
        "name": "Astronomía computacional I",
        "code": "AST-205",
        "sctCredits": 6,
        "type": "AFI",
        "prerequisites": [
            "MAT-270",
            "FIS-105"
        ],
        "semester": "s7"
    },
    {
        "name": "Astrofísica extragaláctica",
        "code": "AST-230",
        "sctCredits": 7,
        "type": "AFI",
        "prerequisites": [
            "FIS-210",
            "FIS-230"
        ],
        "semester": "s7"
    },
    {
        "name": "Astropartículas",
        "code": "AST-250",
        "sctCredits": 7,
        "type": "AFI",
        "prerequisites": [
            "FIS-240"
        ],
        "semester": "s7"
    },
    {
        "name": "El Método Científico",
        "code": "HAF-101",
        "sctCredits": 3,
        "type": "FIS",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Optativo Avanzado I",
        "code": "AST-11",
        "sctCredits": 7,
        "type": "AFI",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Cosmología",
        "code": "AST-240",
        "sctCredits": 7,
        "type": "AFI",
        "prerequisites": [
            "FIS-210",
            "FIS-230"
        ],
        "semester": "s8"
    },
    {
        "name": "Seminario de grado",
        "code": "AST-299",
        "sctCredits": 5,
        "type": "AFI",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Astronomía computacional II",
        "code": "AST-305",
        "sctCredits": 6,
        "type": "AFI",
        "prerequisites": [
            "AST-205"
        ],
        "semester": "s8"
    },
    {
        "name": "Optativo Avanzado II",
        "code": "AST-12",
        "sctCredits": 6,
        "type": "AFI",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Optativo Avanzado III",
        "code": "AST-13",
        "sctCredits": 6,
        "type": "AFI",
        "prerequisites": [],
        "semester": "s8"
    }
],
};
