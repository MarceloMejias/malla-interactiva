import { Carrera } from '@/types/curriculum';

export const lmat: Carrera = {
  codigo: 'LMAT',
  nombre: 'Licenciatura en Matemática',
  campus: 'cc',
  color: '#e4A1F9',
  
  categorias: [
    {
        "id": "FSICA",
        "nombre": "Física",
        "color": "#FF1493"
    },
    {
        "id": "MATEMTICA",
        "nombre": "Matemática",
        "color": "#FF5964"
    },
    {
        "id": "INFORMTICA",
        "nombre": "Informática",
        "color": "#3498DB"
    },
    {
        "id": "DIGEDO",
        "nombre": "Direccion General de Docencia",
        "color": "#a53f2b"
    },
    {
        "id": "QUMICA",
        "nombre": "Química",
        "color": "#FF8811"
    },
    {
        "id": "ESHU",
        "nombre": "Estudios Humanísticos",
        "color": "#8E44AD"
    },
    {
        "id": "DEFIDER",
        "nombre": "Defider",
        "color": "#FFC300"
    }
],

  asignaturas: [
    {
        "name": "Educacion Fisica I (damas y Varones)",
        "code": "DEW100",
        "sctCredits": 2,
        "type": "DEFIDER",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Humanistico I",
        "code": "HRW  1",
        "sctCredits": 3,
        "type": "ESHU",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introduccion a la Fisica",
        "code": "FIS100",
        "sctCredits": 6,
        "type": "FSICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introduccion a la Ingenieria",
        "code": "IWG101",
        "sctCredits": 3,
        "type": "DIGEDO",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Matematica I",
        "code": "MAT021",
        "sctCredits": 8,
        "type": "MATEMTICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Programacion",
        "code": "IWI131",
        "sctCredits": 5,
        "type": "INFORMTICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educacion Fisica II (damas y Varones)",
        "code": "DEW101",
        "sctCredits": 2,
        "type": "DEFIDER",
        "prerequisites": [
            "DEW100"
        ],
        "semester": "s2"
    },
    {
        "name": "Fisica General I",
        "code": "FIS110",
        "sctCredits": 8,
        "type": "FSICA",
        "prerequisites": [
            "FIS100",
            "MAT021"
        ],
        "semester": "s2"
    },
    {
        "name": "Humanistico II",
        "code": "HRW  2",
        "sctCredits": 3,
        "type": "ESHU",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Inglés 1",
        "code": "HCW100",
        "sctCredits": 3,
        "type": "ESHU",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Matematica II",
        "code": "MAT022",
        "sctCredits": 7,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT021"
        ],
        "semester": "s2"
    },
    {
        "name": "Quimica y Sociedad",
        "code": "QUI010",
        "sctCredits": 5,
        "type": "QUMICA",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Algebra Lineal",
        "code": "MAT210",
        "sctCredits": 6,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT022"
        ],
        "semester": "s3"
    },
    {
        "name": "Fisica General II",
        "code": "FIS120",
        "sctCredits": 8,
        "type": "FSICA",
        "prerequisites": [
            "FIS110",
            "MAT022"
        ],
        "semester": "s3"
    },
    {
        "name": "Humanistico III",
        "code": "HRW  3",
        "sctCredits": 3,
        "type": "ESHU",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Inglés 2",
        "code": "HCW101",
        "sctCredits": 3,
        "type": "ESHU",
        "prerequisites": [
            "HCW100"
        ],
        "semester": "s3"
    },
    {
        "name": "Matematicas III",
        "code": "MAT023",
        "sctCredits": 7,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT022"
        ],
        "semester": "s3"
    },
    {
        "name": "Electivo de Formación Complementaria I",
        "code": "ICMFC1",
        "sctCredits": 2,
        "type": "MATEMTICA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Fisica General III",
        "code": "FIS130",
        "sctCredits": 8,
        "type": "FSICA",
        "prerequisites": [
            "FIS110",
            "MAT022"
        ],
        "semester": "s4"
    },
    {
        "name": "Introducción a la Matematica Avanzada",
        "code": "MAT125",
        "sctCredits": 6,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT022"
        ],
        "semester": "s4"
    },
    {
        "name": "Matematicas IV",
        "code": "MAT024",
        "sctCredits": 6,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT023"
        ],
        "semester": "s4"
    },
    {
        "name": "Probabilidad y Estadistica",
        "code": "MAT041",
        "sctCredits": 7,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT023"
        ],
        "semester": "s4"
    },
    {
        "name": "Analisis I",
        "code": "MAT225",
        "sctCredits": 6,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT023",
            "MAT125"
        ],
        "semester": "s5"
    },
    {
        "name": "Analisis Numerico",
        "code": "MAT270",
        "sctCredits": 7,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT024"
        ],
        "semester": "s5"
    },
    {
        "name": "Estructuras Algebraicas",
        "code": "MAT214",
        "sctCredits": 6,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT210"
        ],
        "semester": "s5"
    },
    {
        "name": "Fisica General IV",
        "code": "FIS140",
        "sctCredits": 8,
        "type": "FSICA",
        "prerequisites": [
            "FIS130",
            "FIS120"
        ],
        "semester": "s5"
    },
    {
        "name": "Álgebra Abstracta II",
        "code": "MAT212",
        "sctCredits": 8,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT214"
        ],
        "semester": "s6"
    },
    {
        "name": "Analisis II",
        "code": "MAT226",
        "sctCredits": 6,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT225"
        ],
        "semester": "s6"
    },
    {
        "name": "Ecuaciones Diferenciales Ordinarias",
        "code": "MAT243",
        "sctCredits": 6,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT125",
            "MAT023",
            "MAT210"
        ],
        "semester": "s6"
    },
    {
        "name": "Variable Compleja",
        "code": "MAT235",
        "sctCredits": 5,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT024"
        ],
        "semester": "s6"
    },
    {
        "name": "Analisis Numerico II",
        "code": "MAT274",
        "sctCredits": 5,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT270"
        ],
        "semester": "s7"
    },
    {
        "name": "Matematica Discreta",
        "code": "MAT215",
        "sctCredits": 5,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT214"
        ],
        "semester": "s7"
    },
    {
        "name": "Teoria de Probabilidades y Procesos Esto",
        "code": "MAT263",
        "sctCredits": 6,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT226",
            "MAT041"
        ],
        "semester": "s7"
    },
    {
        "name": "Topologia",
        "code": "MAT250",
        "sctCredits": 8,
        "type": "MATEMTICA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Ecuaciones Diferenciales Parciales",
        "code": "MAT247",
        "sctCredits": 6,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT243",
            "MAT235"
        ],
        "semester": "s8"
    },
    {
        "name": "Electivo de Formación Profesional I",
        "code": "ICMFP1",
        "sctCredits": 2,
        "type": "MATEMTICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Geometria Diferencial",
        "code": "MAT290",
        "sctCredits": 8,
        "type": "MATEMTICA",
        "prerequisites": [
            "MAT024",
            "MAT225"
        ],
        "semester": "s8"
    }
]
};
