import { Carrera } from '@/types/curriculum';

export const tuconst: Carrera = {
  codigo: 'TUCONST',
  nombre: 'Téc. Univ. en Construcción',
  campus: 'vm',
  color: '#D2691E',
  
  categorias: [
    {
        "id": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "nombre": "Construcción y Prevención de Riesgos",
        "color": "#a53f2b"
    },
    {
        "id": "CIENCIAS",
        "nombre": "Ciencias",
        "color": "#FF8811"
    }
],

  asignaturas: [
    {
        "name": "Dibujo de Construcción",
        "code": "COP211_A",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Elementos de la Matemática",
        "code": "MAT001_A",
        "sctCredits": 5,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Inglés I",
        "code": "HCW100-T",
        "sctCredits": 2,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Física, Aplicada a la Construcción",
        "code": "FIS001_A",
        "sctCredits": 3,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Materiales de Construcción",
        "code": "COP212_A",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Tecnología del Hormigón",
        "code": "COP213_A",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Aplicación de Metodología Bim",
        "code": "COP225_A",
        "sctCredits": 3,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "COP211_A"
        ],
        "semester": "s2"
    },
    {
        "name": "Edificación I",
        "code": "COP222_A",
        "sctCredits": 6,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "COP212_A"
        ],
        "semester": "s2"
    },
    {
        "name": "Matemática Aplicada",
        "code": "MAT002_A",
        "sctCredits": 5,
        "type": "CIENCIAS",
        "prerequisites": [
            "MAT001_A"
        ],
        "semester": "s2"
    },
    {
        "name": "Mecánica de Suelos",
        "code": "COP224_A",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Tecnología de la Madera",
        "code": "COP223_A",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Topografía I",
        "code": "COP221_A",
        "sctCredits": 6,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Cubicación y Presupuesto",
        "code": "COP234_A",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "COP211_A"
        ],
        "semester": "s3"
    },
    {
        "name": "Edificación II",
        "code": "COP233_A",
        "sctCredits": 6,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Educación Física",
        "code": "EFI100_T",
        "sctCredits": 2,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Hidráulica",
        "code": "COP235_A",
        "sctCredits": 3,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "MAT002_A"
        ],
        "semester": "s3"
    },
    {
        "name": "Instalaciones Domiciliarias I",
        "code": "COP236_A",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Resistencia de Materiales",
        "code": "COP231_A",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Topografía II",
        "code": "COP232_A",
        "sctCredits": 6,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Construcción Sustentable",
        "code": "COP245_A",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Estructuras Metálicas",
        "code": "COP244_A",
        "sctCredits": 3,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "COP231_A"
        ],
        "semester": "s4"
    },
    {
        "name": "Hormigón Armado",
        "code": "COP246_A",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "COP213_A"
        ],
        "semester": "s4"
    },
    {
        "name": "Instalaciones Domiciliarias II",
        "code": "COP242_A",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "COP236_A"
        ],
        "semester": "s4"
    },
    {
        "name": "Obras Civiles y Viales",
        "code": "COP243_A",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Planificación y Control de Obras",
        "code": "COP241_A",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "COP234_A"
        ],
        "semester": "s4"
    }
],
};
