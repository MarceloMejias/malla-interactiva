import { Carrera } from '../../types';

export const lqui: Carrera = {
  codigo: 'LQUI',
  nombre: 'Lic. en Química',
  campus: 'cc',
  color: '#20B2AA',
  
  categorias: [
    {
        "id": "FÍSICA",
        "nombre": "Física",
        "color": "#a53f2b"
    },
    {
        "id": "MATEMÁTICA",
        "nombre": "Matemática",
        "color": "#3498DB"
    },
    {
        "id": "ESTUDIOS HUMANÍSTICOS",
        "nombre": "Estudios Humanísticos",
        "color": "#FF5733"
    },
    {
        "id": "QUÍMICA",
        "nombre": "Química",
        "color": "#FF69B4"
    },
    {
        "id": "INFORMÁTICA",
        "nombre": "Informática",
        "color": "#e4A1F9"
    },
    {
        "id": "DEFIDER",
        "nombre": "Defider",
        "color": "#FF5964"
    },
    {
        "id": "DIRECCION GENERAL DE DOCENCIA",
        "nombre": "Direccion General de Docencia",
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
        "name": "Introduccion a la Fisica",
        "code": "FIS100",
        "sctCredits": 6,
        "type": "FÍSICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introduccion a la Ingenieria",
        "code": "IWG101",
        "sctCredits": 3,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Matematica I",
        "code": "MAT021",
        "sctCredits": 8,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Quimica y Sociedad",
        "code": "QUI010",
        "sctCredits": 5,
        "type": "QUÍMICA",
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
        "type": "FÍSICA",
        "prerequisites": [
            "MAT021",
            "FIS100"
        ],
        "semester": "s2"
    },
    {
        "name": "Matematica II",
        "code": "MAT022",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT021"
        ],
        "semester": "s2"
    },
    {
        "name": "Programacion",
        "code": "IWI131",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Visión Trascendente del Quehacer Humano",
        "code": "HRW101",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Fisica General II",
        "code": "FIS120",
        "sctCredits": 8,
        "type": "FÍSICA",
        "prerequisites": [
            "MAT022",
            "FIS110"
        ],
        "semester": "s3"
    },
    {
        "name": "Inglés Científico y Tecnológico I",
        "code": "HCW310",
        "sctCredits": 2,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Matematicas III",
        "code": "MAT023",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT022"
        ],
        "semester": "s3"
    },
    {
        "name": "Quimica General I",
        "code": "QUI106",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI010"
        ],
        "semester": "s3"
    },
    {
        "name": "Quimica General II",
        "code": "QUI108",
        "sctCredits": 5,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI106"
        ],
        "semester": "s3"
    },
    {
        "name": "Visión Inmanente del Quehacer Humano",
        "code": "HRW102",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Fisica General III",
        "code": "FIS130",
        "sctCredits": 8,
        "type": "FÍSICA",
        "prerequisites": [
            "MAT022",
            "FIS110"
        ],
        "semester": "s4"
    },
    {
        "name": "Fisicoquímica I",
        "code": "QUI240",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI106",
            "MAT022",
            "QUI108",
            "FIS120"
        ],
        "semester": "s4"
    },
    {
        "name": "Inglés Científico y Tecnológico II",
        "code": "HCW311",
        "sctCredits": 2,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [
            "HCW310"
        ],
        "semester": "s4"
    },
    {
        "name": "Laboratorio de Química General",
        "code": "QUI109",
        "sctCredits": 4,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI106",
            "QUI108"
        ],
        "semester": "s4"
    },
    {
        "name": "Matematicas IV",
        "code": "MAT024",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT023"
        ],
        "semester": "s4"
    },
    {
        "name": "Química Inorgánica I",
        "code": "QUI114",
        "sctCredits": 5,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI010",
            "QUI108"
        ],
        "semester": "s4"
    },
    {
        "name": "Deportes",
        "code": "DEW  0",
        "sctCredits": 2,
        "type": "DEFIDER",
        "prerequisites": [
            "DEW101"
        ],
        "semester": "s5"
    },
    {
        "name": "Fisica General IV",
        "code": "FIS140",
        "sctCredits": 8,
        "type": "FÍSICA",
        "prerequisites": [
            "FIS130",
            "FIS120"
        ],
        "semester": "s5"
    },
    {
        "name": "Fisicoquímica II",
        "code": "QUI242",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI240",
            "FIS140"
        ],
        "semester": "s5"
    },
    {
        "name": "Laboratorio de Química Inorgánica I",
        "code": "QUI117",
        "sctCredits": 4,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI114",
            "QUI109"
        ],
        "semester": "s5"
    },
    {
        "name": "Química Analítica Cuantitativa I",
        "code": "QUI224",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI114",
            "QUI109"
        ],
        "semester": "s5"
    },
    {
        "name": "Química Orgánica I",
        "code": "QUI136",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI114",
            "QUI108"
        ],
        "semester": "s5"
    },
    {
        "name": "Fisicoquímica III",
        "code": "QUI244",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI240"
        ],
        "semester": "s6"
    },
    {
        "name": "Laboratorio de Química Orgánica I",
        "code": "QUI137",
        "sctCredits": 4,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI109"
        ],
        "semester": "s6"
    },
    {
        "name": "Química Analítica Cuantitativa II",
        "code": "QUI226",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI224"
        ],
        "semester": "s6"
    },
    {
        "name": "Química Orgánica II",
        "code": "QUI238",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI136"
        ],
        "semester": "s6"
    },
    {
        "name": "Visión Estética del Quehacer Humano",
        "code": "HRW103",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Análisis Químico Instrumental I",
        "code": "QUI375",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI136",
            "QUI224"
        ],
        "semester": "s7"
    },
    {
        "name": "Laboratorio de Química Inorgánica II",
        "code": "QUI217",
        "sctCredits": 4,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI117"
        ],
        "semester": "s7"
    },
    {
        "name": "Probabilidad y Estadistica",
        "code": "MAT041",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT023"
        ],
        "semester": "s7"
    },
    {
        "name": "Química Inorgánica II",
        "code": "QUI216",
        "sctCredits": 5,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI114"
        ],
        "semester": "s7"
    },
    {
        "name": "Análisis Químico Instrumental II",
        "code": "QUI376",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI375",
            "QUI226"
        ],
        "semester": "s8"
    },
    {
        "name": "Electivo I",
        "code": "QUI  1",
        "sctCredits": 7,
        "type": "QUÍMICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Laboratorio de Fisicoquímica",
        "code": "QUI243",
        "sctCredits": 5,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI240",
            "QUI242"
        ],
        "semester": "s8"
    },
    {
        "name": "Laboratorio de Química Orgánica II",
        "code": "QUI237",
        "sctCredits": 4,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI137"
        ],
        "semester": "s8"
    },
    {
        "name": "Electivo II",
        "code": "QUI  2",
        "sctCredits": 7,
        "type": "QUÍMICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo III",
        "code": "QUI  3",
        "sctCredits": 7,
        "type": "QUÍMICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo IV",
        "code": "QUI  4",
        "sctCredits": 7,
        "type": "QUÍMICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Unidad de Investigacion",
        "code": "QUI390",
        "sctCredits": 9,
        "type": "QUÍMICA",
        "prerequisites": [
            "QUI216",
            "QUI242",
            "QUI238",
            "QUI375"
        ],
        "semester": "s9"
    }
],
};
