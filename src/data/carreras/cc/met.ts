import { Carrera } from '../../types';

export const met: Carrera = {
  codigo: 'MET',
  nombre: 'Ing. Civil Metalúrgica',
  campus: 'cc',
  color: '#B8860B',
  
  categorias: [
    {
        "id": "MATEMÁTICA",
        "nombre": "Matemática",
        "color": "#6A5ACD"
    },
    {
        "id": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "nombre": "Ingeniería Química y Ambiental",
        "color": "#335BFF"
    },
    {
        "id": "QUÍMICA",
        "nombre": "Química",
        "color": "#C70039"
    },
    {
        "id": "FÍSICA",
        "nombre": "Física",
        "color": "#FF5964"
    },
    {
        "id": "INGENIERÍA COMERCIAL",
        "nombre": "Ingeniería Comercial",
        "color": "#D69F7E"
    },
    {
        "id": "INFORMÁTICA",
        "nombre": "Informática",
        "color": "#FFC300"
    },
    {
        "id": "DEFIDER",
        "nombre": "Defider",
        "color": "#FF8811"
    },
    {
        "id": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "nombre": "Ing. de Minas, Metalurgia y Materiales",
        "color": "#a53f2b"
    },
    {
        "id": "ESTUDIOS HUMANÍSTICOS",
        "nombre": "Estudios Humanísticos",
        "color": "#FF1493"
    },
    {
        "id": "ELECTRÓNICA",
        "nombre": "Electrónica",
        "color": "#8E44AD"
    },
    {
        "id": "DIRECCION GENERAL DE DOCENCIA",
        "nombre": "Direccion General de Docencia",
        "color": "#e4A1F9"
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
        "name": "Introducción a la Programación",
        "code": "INF129",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
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
        "name": "Proyecto Inicial",
        "code": "IWG400",
        "sctCredits": 7,
        "type": "DIRECCION GENERAL DE DOCENCIA",
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
        "name": "Geología y Minerología",
        "code": "MET139",
        "sctCredits": 4,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "IWG400",
            "FIS111"
        ],
        "semester": "s3"
    },
    {
        "name": "Procesos Metalúrgicos Sustentables",
        "code": "MET138",
        "sctCredits": 4,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "IWG400",
            "FIS111"
        ],
        "semester": "s3"
    },
    {
        "name": "Química Para Ingeniería",
        "code": "QUI400",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Análisis de Procesos Metalúrgicos",
        "code": "MET200",
        "sctCredits": 5,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MET138",
            "QUI400",
            "MET139"
        ],
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
        "name": "Ecuaciones Diferenciales",
        "code": "MAT153",
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
        "name": "Química Inorgánica",
        "code": "QUI410",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Administración y Sostenibilidad Organizacional",
        "code": "AUX200",
        "sctCredits": 4,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Ciencia de Datos",
        "code": "TEL500",
        "sctCredits": 6,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "MAT154",
            "INF129"
        ],
        "semester": "s5"
    },
    {
        "name": "Ciencia E Ingeniería de los Materiales",
        "code": "MET202",
        "sctCredits": 6,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "QUI410"
        ],
        "semester": "s5"
    },
    {
        "name": "Cinética y Diseño de Reactores Metaúrgicos",
        "code": "MET201",
        "sctCredits": 6,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Mecánica de Fluidos",
        "code": "IQA301",
        "sctCredits": 6,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [
            "MAT153",
            "FIS111"
        ],
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
        "name": "Metalurgia de Minerales Industriales",
        "code": "MET297",
        "sctCredits": 4,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "QUI410"
        ],
        "semester": "s6"
    },
    {
        "name": "Reducción de Tamaño y Clasificación de Minerales",
        "code": "MET298",
        "sctCredits": 6,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MET200",
            "TEL500"
        ],
        "semester": "s6"
    },
    {
        "name": "Termodinámica Metalúrgica",
        "code": "MET299",
        "sctCredits": 6,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MET200",
            "MAT081"
        ],
        "semester": "s6"
    },
    {
        "name": "Transferencia de Calor",
        "code": "IQA304",
        "sctCredits": 6,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [
            "IQA301"
        ],
        "semester": "s6"
    },
    {
        "name": "Concentración de Minerales",
        "code": "MET313",
        "sctCredits": 6,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MET298"
        ],
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
        "name": "Hidrometalurgia",
        "code": "MET315",
        "sctCredits": 6,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MET201"
        ],
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
        "name": "Mecánica de Sólidos",
        "code": "MET314",
        "sctCredits": 6,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MAT153",
            "FIS111"
        ],
        "semester": "s7"
    },
    {
        "name": "Termodinámica de Materiales",
        "code": "MET312",
        "sctCredits": 5,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MET299"
        ],
        "semester": "s7"
    },
    {
        "name": "Comportamiento Mecánico de Materiales",
        "code": "MET319",
        "sctCredits": 5,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MET202",
            "MET314"
        ],
        "semester": "s8"
    },
    {
        "name": "Electrometalúrgia y Corrosión",
        "code": "MET316",
        "sctCredits": 5,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MET315"
        ],
        "semester": "s8"
    },
    {
        "name": "Metalurgia Física",
        "code": "MET322",
        "sctCredits": 6,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MET312",
            "MET202"
        ],
        "semester": "s8"
    },
    {
        "name": "Procesos Metalúrgicos de Alta Temperatura",
        "code": "MET318",
        "sctCredits": 5,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "IQA304",
            "MET201"
        ],
        "semester": "s8"
    },
    {
        "name": "Seguridad y Legislación Minero-metalúrgica",
        "code": "MET321",
        "sctCredits": 4,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "AUX200"
        ],
        "semester": "s8"
    },
    {
        "name": "Taller de Ingeniería",
        "code": "MET317",
        "sctCredits": 5,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MET312",
            "IQA304",
            "AUX202",
            "AUX203",
            "MET314"
        ],
        "semester": "s8"
    },
    {
        "name": "Aleaciones en Ingeniería",
        "code": "MET458",
        "sctCredits": 5,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MET322",
            "MET319"
        ],
        "semester": "s9"
    },
    {
        "name": "Electivo",
        "code": "AUX204",
        "sctCredits": 5,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Fundición y Manufactura",
        "code": "MET459",
        "sctCredits": 5,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "IQA304",
            "MET322"
        ],
        "semester": "s9"
    },
    {
        "name": "Gestión y Optimización de Operaciones",
        "code": "MET457",
        "sctCredits": 5,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MET317",
            "TEL500"
        ],
        "semester": "s9"
    },
    {
        "name": "Instrumentación y Control de Procesos",
        "code": "MET460",
        "sctCredits": 5,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MET317",
            "TEL500"
        ],
        "semester": "s9"
    },
    {
        "name": "Taller de Diseños de Procesos Metalúrgicos",
        "code": "MET456",
        "sctCredits": 5,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MET318",
            "MET319",
            "MET313",
            "MET315"
        ],
        "semester": "s9"
    },
    {
        "name": "Actividad de Titulación",
        "code": "MET512",
        "sctCredits": 17,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MET460",
            "MET317",
            "MET456"
        ],
        "semester": "s10"
    },
    {
        "name": "Electivo",
        "code": "AUX205",
        "sctCredits": 5,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Proyecto de Ingeniería Metalúrgica",
        "code": "MET513",
        "sctCredits": 8,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "MET457",
            "MET456"
        ],
        "semester": "s10"
    }
],
};
