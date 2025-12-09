import { Carrera } from '@/types/curriculum';

export const icfis: Carrera = {
  codigo: 'ICFIS',
  nombre: 'Ing. Civil Física',
  campus: 'cc',
  color: '#9370DB',
  
  categorias: [
    {
        "id": "MATEMÁTICA",
        "nombre": "Matemática",
        "color": "#8E44AD"
    },
    {
        "id": "FÍSICA",
        "nombre": "Física",
        "color": "#FFC300"
    },
    {
        "id": "INGENIERÍA COMERCIAL",
        "nombre": "Ingeniería Comercial",
        "color": "#335BFF"
    },
    {
        "id": "INFORMÁTICA",
        "nombre": "Informática",
        "color": "#a53f2b"
    },
    {
        "id": "DEFIDER",
        "nombre": "Defider",
        "color": "#6A5ACD"
    },
    {
        "id": "ESTUDIOS HUMANÍSTICOS",
        "nombre": "Estudios Humanísticos",
        "color": "#FF69B4"
    },
    {
        "id": "DIRECCION GENERAL DE DOCENCIA",
        "nombre": "Direccion General de Docencia",
        "color": "#FF8811"
    }
],

  asignaturas: [
    {
        "name": "Comunicación Efectiva en Español / Inglés I",
        "code": "HXW006",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "EFI200",
        "sctCredits": 2,
        "type": "DEFIDER",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introduccion a la Fisica",
        "code": "FIS100",
        "sctCredits": 6,
        "type": "FÍSICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción Al Cálculo",
        "code": "MAT070",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Proyecto Inicial",
        "code": "IWG400",
        "sctCredits": 7,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Álgebra y Geometría",
        "code": "MAT060",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Comunicación Efectiva en Español / Ingles II",
        "code": "HXW007",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Cálculo en Una Variable",
        "code": "MAT071",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT070"
        ],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "EFI201",
        "sctCredits": 2,
        "type": "DEFIDER",
        "prerequisites": [
            "EFI200"
        ],
        "semester": "s2"
    },
    {
        "name": "Física General Mecánica",
        "code": "FIS111",
        "sctCredits": 6,
        "type": "FÍSICA",
        "prerequisites": [
            "FIS100"
        ],
        "semester": "s2"
    },
    {
        "name": "Introducción a la Programación",
        "code": "INF129",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Álgebra Lineal",
        "code": "MAT061",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT060"
        ],
        "semester": "s2"
    },
    {
        "name": "Análisis Crítico de Texto",
        "code": "HXW008",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Cálculo en Varias Variables",
        "code": "MAT081",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Ecuaciones Diferenciales Elementales",
        "code": "MAT053",
        "sctCredits": 5,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Física General III",
        "code": "FIS131",
        "sctCredits": 6,
        "type": "FÍSICA",
        "prerequisites": [
            "MAT061",
            "FIS111",
            "MAT071"
        ],
        "semester": "s3"
    },
    {
        "name": "Introducción a la Matemática Avanzada",
        "code": "MAT063",
        "sctCredits": 4,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Programación Avanzada Para Ciencias",
        "code": "INF136",
        "sctCredits": 6,
        "type": "INFORMÁTICA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Análisis Real",
        "code": "MAT064",
        "sctCredits": 5,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Comunicación Efectiva en Español / Inglés III",
        "code": "HXW009",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Cálculo Avanzado Para la Ingeniería",
        "code": "MAT066",
        "sctCredits": 5,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Electromagnetismo",
        "code": "FIS121",
        "sctCredits": 8,
        "type": "FÍSICA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Probabilidad y Estadística",
        "code": "MAT154",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Álgebra Lineal Avanzada",
        "code": "MAT065",
        "sctCredits": 5,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Administración y Sostenibilidad Organizacional",
        "code": "AUX233",
        "sctCredits": 4,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Análisis",
        "code": "MAT074",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Ecuaciones Diferenciales y Sistemas Dinámicos",
        "code": "MAT075",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Optimización Lineal",
        "code": "MAT077",
        "sctCredits": 5,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Práctica en Acción Comunitaria",
        "code": "HXW011",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Álgebra y Matemática Discreta",
        "code": "MAT076",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Análisis Numérico",
        "code": "MAT078",
        "sctCredits": 5,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Comunicación Efectiva en Español / Inglés IV",
        "code": "HXW012",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Ingeniería Económica",
        "code": "AUX201",
        "sctCredits": 4,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Modelamiento Estadístico",
        "code": "MAT079",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Optimización No Lineal",
        "code": "MAT082",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Teoría de la Medida",
        "code": "MAT080",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Análisis Funcional",
        "code": "MAT089",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Análisis Numérico II",
        "code": "MAT088",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Análisis y Ciencia de Datos",
        "code": "MAT091",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Gestión de Proyectos",
        "code": "AUX203",
        "sctCredits": 4,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Inglés Disciplinar",
        "code": "AUX202",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Laboratorio de Modelación I",
        "code": "MAT090",
        "sctCredits": 5,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Análisis Numérico de Edp",
        "code": "MAT142",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Ecuaciones Diferenciales Parciales",
        "code": "MAT141",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Inferencia Estadística",
        "code": "MAT143",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Laboratorio de Modelación II",
        "code": "MAT145",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Optimización y Control",
        "code": "MAT144",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Electivo I",
        "code": "AUX223",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo II",
        "code": "AUX224",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo III",
        "code": "AUX225",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Gestión de la Innovación",
        "code": "AUX217",
        "sctCredits": 3,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Proyecto de Titulacion I",
        "code": "MAT150",
        "sctCredits": 9,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo IV",
        "code": "AUX228",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Electivo V",
        "code": "AUX229",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Electivo VI",
        "code": "AUX320",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Gestión del Emprendimiento",
        "code": "AUX218",
        "sctCredits": 3,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Proyecto de Titulacion II",
        "code": "MAT450",
        "sctCredits": 9,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s10"
    }
],
};
