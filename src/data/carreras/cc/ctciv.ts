import { Carrera } from '../../types';

export const ctciv: Carrera = {
  codigo: 'CTCIV',
  nombre: 'Construcción Civil',
  campus: 'cc',
  color: '#D2691E',
  
  categorias: [
    {
        "id": "MATEMÁTICA",
        "nombre": "Matemática",
        "color": "#FF1493"
    },
    {
        "id": "QUÍMICA",
        "nombre": "Química",
        "color": "#335BFF"
    },
    {
        "id": "FÍSICA",
        "nombre": "Física",
        "color": "#3498DB"
    },
    {
        "id": "OBRAS CIVILES",
        "nombre": "Obras Civiles",
        "color": "#FFC300"
    },
    {
        "id": "INDUSTRIAS",
        "nombre": "Industrias",
        "color": "#00CED1"
    },
    {
        "id": "INFORMÁTICA",
        "nombre": "Informática",
        "color": "#C70039"
    },
    {
        "id": "DEFIDER",
        "nombre": "Defider",
        "color": "#D69F7E"
    },
    {
        "id": "ESTUDIOS HUMANÍSTICOS",
        "nombre": "Estudios Humanísticos",
        "color": "#FF69B4"
    },
    {
        "id": "DIRECCION GENERAL DE DOCENCIA",
        "nombre": "Direccion General de Docencia",
        "color": "#6A5ACD"
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
        "code": "MAT011",
        "sctCredits": 8,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Programacion",
        "code": "IWI131",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
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
        "name": "Fisica Basica I",
        "code": "FIS109",
        "sctCredits": 7,
        "type": "FÍSICA",
        "prerequisites": [
            "MAT011",
            "FIS100"
        ],
        "semester": "s2"
    },
    {
        "name": "Humanistico I",
        "code": "HRW  1",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Matematica II",
        "code": "MAT012",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT011"
        ],
        "semester": "s2"
    },
    {
        "name": "Quimica y Sociedad",
        "code": "QUI010",
        "sctCredits": 5,
        "type": "QUÍMICA",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Deportes",
        "code": "DEW  0",
        "sctCredits": 2,
        "type": "DEFIDER",
        "prerequisites": [
            "DEW101"
        ],
        "semester": "s3"
    },
    {
        "name": "Estructuras I",
        "code": "CON130",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "FIS109",
            "MAT012"
        ],
        "semester": "s3"
    },
    {
        "name": "Fisica Basica II",
        "code": "FIS119",
        "sctCredits": 7,
        "type": "FÍSICA",
        "prerequisites": [
            "FIS109",
            "MAT012"
        ],
        "semester": "s3"
    },
    {
        "name": "Geometria Descriptiva",
        "code": "CON100",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Humanistico II",
        "code": "HRW  2",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Matematica III",
        "code": "MAT013",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT012"
        ],
        "semester": "s3"
    },
    {
        "name": "Dibujo de Construccion",
        "code": "CON101",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON100"
        ],
        "semester": "s4"
    },
    {
        "name": "Estructuras II",
        "code": "CON131",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON130"
        ],
        "semester": "s4"
    },
    {
        "name": "Fisica Basica III",
        "code": "FIS129",
        "sctCredits": 7,
        "type": "FÍSICA",
        "prerequisites": [
            "FIS119"
        ],
        "semester": "s4"
    },
    {
        "name": "Humanistico III",
        "code": "HRW  3",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Inglés Científico y Tecnológico I",
        "code": "HCW310",
        "sctCredits": 2,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Matematica IV",
        "code": "MAT014",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT013"
        ],
        "semester": "s4"
    },
    {
        "name": "Materiales de Construccion I",
        "code": "CON250",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "QUI010"
        ],
        "semester": "s4"
    },
    {
        "name": "Equipos de Construccion",
        "code": "CON201",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Estadistica",
        "code": "MAT031",
        "sctCredits": 5,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT013"
        ],
        "semester": "s5"
    },
    {
        "name": "Tecnologia de la Madera y Laboratorio",
        "code": "CON253",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON250"
        ],
        "semester": "s5"
    },
    {
        "name": "Tecnologia del Hormigon y Laboratorio",
        "code": "CON252",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON130",
            "CON250"
        ],
        "semester": "s5"
    },
    {
        "name": "Topografia y Taller",
        "code": "CON200",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON101"
        ],
        "semester": "s5"
    },
    {
        "name": "Economia I",
        "code": "ILN270",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "MAT013"
        ],
        "semester": "s6"
    },
    {
        "name": "Estructura de Madera y Acero",
        "code": "CON230",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON131"
        ],
        "semester": "s6"
    },
    {
        "name": "Hidraulica",
        "code": "CON240",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON130"
        ],
        "semester": "s6"
    },
    {
        "name": "Hormigon Armado",
        "code": "CON231",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "MAT031",
            "MAT014",
            "CON252"
        ],
        "semester": "s6"
    },
    {
        "name": "Inglés Científico y Tecnológico II",
        "code": "HCW311",
        "sctCredits": 2,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [
            "HCW310"
        ],
        "semester": "s6"
    },
    {
        "name": "Materiales de Construccion II y Laborat.",
        "code": "CON251",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON253",
            "CON252",
            "CON250"
        ],
        "semester": "s6"
    },
    {
        "name": "Construccion I",
        "code": "CON220",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON230",
            "CON231"
        ],
        "semester": "s7"
    },
    {
        "name": "Construcciones Sismorresistente",
        "code": "CON232",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "FIS129",
            "CON230"
        ],
        "semester": "s7"
    },
    {
        "name": "Economia II",
        "code": "ILN271",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN270"
        ],
        "semester": "s7"
    },
    {
        "name": "Ingenieria Hidraulica",
        "code": "CON241",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON240"
        ],
        "semester": "s7"
    },
    {
        "name": "Mecanica de Suelos I y Laboratorio",
        "code": "CON260",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON240"
        ],
        "semester": "s7"
    },
    {
        "name": "Construccion II",
        "code": "CON221",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON220"
        ],
        "semester": "s8"
    },
    {
        "name": "Construcciones Industriales",
        "code": "CON223",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON232"
        ],
        "semester": "s8"
    },
    {
        "name": "Mecanica de Suelos II y Laboratorio",
        "code": "CON261",
        "sctCredits": 3,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON260"
        ],
        "semester": "s8"
    },
    {
        "name": "Obras Sanitarias",
        "code": "CON310",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON241"
        ],
        "semester": "s8"
    },
    {
        "name": "Seminario de Seguridad Industrial",
        "code": "CON202",
        "sctCredits": 3,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "MAT031"
        ],
        "semester": "s8"
    },
    {
        "name": "Vialidad I y Laboratorio",
        "code": "CON280",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON260",
            "CON200"
        ],
        "semester": "s8"
    },
    {
        "name": "Administracion de la Construccion",
        "code": "CON390",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "ILN271"
        ],
        "semester": "s9"
    },
    {
        "name": "Construccion de Obras Civiles",
        "code": "CON222",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON261",
            "CON280"
        ],
        "semester": "s9"
    },
    {
        "name": "Historia de la Construcción",
        "code": "HRW203",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Instalaciones en Edificaciones",
        "code": "CON224",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON221"
        ],
        "semester": "s9"
    },
    {
        "name": "Propuestas y Licitaciones",
        "code": "CON320",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON221"
        ],
        "semester": "s9"
    },
    {
        "name": "Vialidad II y Laboratorio",
        "code": "CON281",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON280"
        ],
        "semester": "s9"
    },
    {
        "name": "Administracion de Obras",
        "code": "CON392",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON320",
            "CON390"
        ],
        "semester": "s10"
    },
    {
        "name": "Construccion y Medio Ambiente",
        "code": "CON311",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON310"
        ],
        "semester": "s10"
    },
    {
        "name": "Gestion Financiera de Obras",
        "code": "CON393",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CON320",
            "CON390"
        ],
        "semester": "s10"
    },
    {
        "name": "Legislacion de la Construccion",
        "code": "CON300",
        "sctCredits": 3,
        "type": "OBRAS CIVILES",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Proyectos Inmobiliarios",
        "code": "CON391",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "ILN271"
        ],
        "semester": "s10"
    },
    {
        "name": "Seminario de Tasaciones",
        "code": "CON321",
        "sctCredits": 3,
        "type": "OBRAS CIVILES",
        "prerequisites": [],
        "semester": "s10"
    }
],
};
