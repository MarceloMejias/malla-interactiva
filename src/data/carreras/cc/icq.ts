import { Carrera } from '../../types';

export const icq: Carrera = {
  codigo: 'ICQ',
  nombre: 'Ing. Civil Química',
  campus: 'cc',
  color: '#FF4500',
  
  categorias: [
    {
        "id": "MATEMÁTICA",
        "nombre": "Matemática",
        "color": "#FF8811"
    },
    {
        "id": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "nombre": "Ingeniería Química y Ambiental",
        "color": "#8E44AD"
    },
    {
        "id": "QUÍMICA",
        "nombre": "Química",
        "color": "#C70039"
    },
    {
        "id": "FÍSICA",
        "nombre": "Física",
        "color": "#a53f2b"
    },
    {
        "id": "INGENIERÍA COMERCIAL",
        "nombre": "Ingeniería Comercial",
        "color": "#D69F7E"
    },
    {
        "id": "INFORMÁTICA",
        "nombre": "Informática",
        "color": "#335BFF"
    },
    {
        "id": "DEFIDER",
        "nombre": "Defider",
        "color": "#FFC300"
    },
    {
        "id": "ESTUDIOS HUMANÍSTICOS",
        "nombre": "Estudios Humanísticos",
        "color": "#FF1493"
    },
    {
        "id": "DIRECCION GENERAL DE DOCENCIA",
        "nombre": "Direccion General de Docencia",
        "color": "#FF5733"
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
        "name": "Química Para Ingeniería",
        "code": "QUI400",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Resolución de Problemas en Ingeniería de Procesos",
        "code": "IQA399",
        "sctCredits": 0,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Balance de Materia y Energía",
        "code": "IQA203",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
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
        "name": "Electromagnetismo",
        "code": "FIS121",
        "sctCredits": 8,
        "type": "FÍSICA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Laboratorio de Fluidos",
        "code": "IQA204",
        "sctCredits": 3,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Mecánica de Fluidos",
        "code": "IQA301",
        "sctCredits": 6,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [
            "FIS111"
        ],
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
        "code": "AUX233",
        "sctCredits": 4,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Estadistíca y Diseño Experimentos Para Ing. de Procesos",
        "code": "IQA302",
        "sctCredits": 6,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Ingeniería Ambiental",
        "code": "IQA303",
        "sctCredits": 4,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
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
        "name": "Química Orgánica",
        "code": "QUI402",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Termodinámica de Procesos",
        "code": "IQA206",
        "sctCredits": 8,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
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
        "name": "Fenómenos de Transporte",
        "code": "IQA209",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
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
        "name": "Laboratorio de Transferencia de Calor",
        "code": "IQA208",
        "sctCredits": 3,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Termodinámica Para Ingeniería Química",
        "code": "IQA207",
        "sctCredits": 8,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Transferencia de Calor",
        "code": "IQA404",
        "sctCredits": 6,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Diseño de Reactores y Biorreactores",
        "code": "IQA407",
        "sctCredits": 7,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Electivo",
        "code": "AUX555",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
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
        "name": "Laboratorio de Transferencia de Materia",
        "code": "IQA308",
        "sctCredits": 4,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Transferencia de Materia",
        "code": "IQA408",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Análisis de Procesos Químicos",
        "code": "IQA311",
        "sctCredits": 7,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Electivo",
        "code": "AUX556",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Electivo Disciplinar",
        "code": "IQA309",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Fundamentos de Control Industrial",
        "code": "IQA312",
        "sctCredits": 8,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Taller de Ing. Química",
        "code": "IQA310",
        "sctCredits": 6,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Diseño de Procesos",
        "code": "IQA315",
        "sctCredits": 7,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo Disciplinar",
        "code": "IQA317",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Evaluación de Proyectos Para Ing. Química",
        "code": "IQA316",
        "sctCredits": 7,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Gestión de la Innovación en Ing. de Procesos",
        "code": "IQA329",
        "sctCredits": 3,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Laboratorio de Procesos",
        "code": "IQA313",
        "sctCredits": 8,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Gestión del Emprendimiento en Ing. de Procesos",
        "code": "IQA419",
        "sctCredits": 3,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Taller de Habilitación Profesional",
        "code": "IQA420",
        "sctCredits": 12,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Titulación",
        "code": "IQA421",
        "sctCredits": 15,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s10"
    }
],
};
