import { Carrera } from '../../types';

export const iciv: Carrera = {
  codigo: 'ICIV',
  nombre: 'Ing. Civil',
  campus: 'cc',
  color: '#7070C0',
  
  categorias: [
    {
        "id": "MATEMÁTICA",
        "nombre": "Matemática",
        "color": "#FF1493"
    },
    {
        "id": "QUÍMICA",
        "nombre": "Química",
        "color": "#FF69B4"
    },
    {
        "id": "FÍSICA",
        "nombre": "Física",
        "color": "#00CED1"
    },
    {
        "id": "OBRAS CIVILES",
        "nombre": "Obras Civiles",
        "color": "#6A5ACD"
    },
    {
        "id": "INGENIERÍA COMERCIAL",
        "nombre": "Ingeniería Comercial",
        "color": "#a53f2b"
    },
    {
        "id": "INFORMÁTICA",
        "nombre": "Informática",
        "color": "#FF5964"
    },
    {
        "id": "DEFIDER",
        "nombre": "Defider",
        "color": "#FF8811"
    },
    {
        "id": "ESTUDIOS HUMANÍSTICOS",
        "nombre": "Estudios Humanísticos",
        "color": "#3498DB"
    },
    {
        "id": "DIRECCION GENERAL DE DOCENCIA",
        "nombre": "Direccion General de Docencia",
        "color": "#D69F7E"
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
        "name": "Humanistico I",
        "code": "HXW001",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
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
        "name": "Dibujo en Ingeniería Civil",
        "code": "CIV103",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "IWG101",
            "MAT021"
        ],
        "semester": "s3"
    },
    {
        "name": "Estatica de Estructuras",
        "code": "CIV131",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "MAT022",
            "FIS110"
        ],
        "semester": "s3"
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
        "name": "Inglés a Y/o Humanístico II",
        "code": "HXW002",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [
            "HXW001"
        ],
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
        "name": "Inglés B Y/o Humanístico III",
        "code": "HXW003",
        "sctCredits": 2,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [
            "HXW002"
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
        "name": "Mecánica de Materiales",
        "code": "CIV133",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "MAT023",
            "CIV131"
        ],
        "semester": "s4"
    },
    {
        "name": "Topografía",
        "code": "CIV206",
        "sctCredits": 6,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV103"
        ],
        "semester": "s4"
    },
    {
        "name": "Analisis Numerico",
        "code": "MAT270",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT024"
        ],
        "semester": "s5"
    },
    {
        "name": "Geología",
        "code": "CIV205",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV206"
        ],
        "semester": "s5"
    },
    {
        "name": "Inglés C Y/o Humanístico IV",
        "code": "HXW004",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [
            "HXW003"
        ],
        "semester": "s5"
    },
    {
        "name": "Mecánica Racional",
        "code": "CIV202",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV131",
            "MAT024"
        ],
        "semester": "s5"
    },
    {
        "name": "Tecnologia de Materiales",
        "code": "CIV251",
        "sctCredits": 6,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "QUI010",
            "CIV131"
        ],
        "semester": "s5"
    },
    {
        "name": "Fundamentos de Análisis Estructural",
        "code": "CIV233",
        "sctCredits": 6,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV202",
            "CIV131",
            "CIV133"
        ],
        "semester": "s6"
    },
    {
        "name": "Fundamentos de Ingeniería de Construcción y Administración",
        "code": "CIV222",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV251"
        ],
        "semester": "s6"
    },
    {
        "name": "Inglés D Y/o Humanístico V",
        "code": "HXW005",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Mecánica de Fluidos",
        "code": "CIV244",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV202"
        ],
        "semester": "s6"
    },
    {
        "name": "Probabilidad y Estadística Para Ingeniería Civil",
        "code": "MAT044",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT023"
        ],
        "semester": "s6"
    },
    {
        "name": "Análisis Estructural",
        "code": "CIV234",
        "sctCredits": 6,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "MAT270",
            "CIV233"
        ],
        "semester": "s7"
    },
    {
        "name": "Economia I-a",
        "code": "ICS733",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [
            "MAT023"
        ],
        "semester": "s7"
    },
    {
        "name": "Fund. de Inv. de Operaciones",
        "code": "ILI281",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "IWI131",
            "MAT044",
            "MAT022"
        ],
        "semester": "s7"
    },
    {
        "name": "Hidraulica Teorica y Laboratorio",
        "code": "CIV242",
        "sctCredits": 6,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV244"
        ],
        "semester": "s7"
    },
    {
        "name": "Optativo de Formación Transversal",
        "code": "OFT  1",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Dinamica de Estructuras",
        "code": "CIV235",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV234"
        ],
        "semester": "s8"
    },
    {
        "name": "Hidrologia",
        "code": "CIV243",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV242",
            "MAT044"
        ],
        "semester": "s8"
    },
    {
        "name": "Ingeniería de Transporte",
        "code": "CIV386",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "ILI281",
            "ICS733"
        ],
        "semester": "s8"
    },
    {
        "name": "Mecanica de Suelos I",
        "code": "CIV261",
        "sctCredits": 6,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV242",
            "CIV133"
        ],
        "semester": "s8"
    },
    {
        "name": "Planificación y Control de Proyectos",
        "code": "CIV380",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV222",
            "ICS733"
        ],
        "semester": "s8"
    },
    {
        "name": "Diseño Geométrico y Capacidad Vial",
        "code": "CIV370",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV386"
        ],
        "semester": "s9"
    },
    {
        "name": "Gestión de la Calidad Total en la Cadena de Suministro",
        "code": "CIV381",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV380"
        ],
        "semester": "s9"
    },
    {
        "name": "Hidraulica Aplicada",
        "code": "CIV346",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV243"
        ],
        "semester": "s9"
    },
    {
        "name": "Hormigón Armado",
        "code": "CIV331",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV234",
            "CIV251"
        ],
        "semester": "s9"
    },
    {
        "name": "Mecanica de Suelos II",
        "code": "CIV366",
        "sctCredits": 6,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV261"
        ],
        "semester": "s9"
    },
    {
        "name": "Diseño en Acero",
        "code": "CIV336",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV234"
        ],
        "semester": "s10"
    },
    {
        "name": "Diseño Estructural de Pavimentos",
        "code": "CIV371",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV366"
        ],
        "semester": "s10"
    },
    {
        "name": "Ingeniería Sanitaria",
        "code": "CIV377",
        "sctCredits": 6,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV242"
        ],
        "semester": "s10"
    },
    {
        "name": "Maquinas y Sistemas Hidraulicos",
        "code": "CIV347",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV346"
        ],
        "semester": "s10"
    },
    {
        "name": "Optativo de Especialidad I",
        "code": "CIVOE1",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Evaluación de Proyectos",
        "code": "CIV390",
        "sctCredits": 5,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV380",
            "CIV381"
        ],
        "semester": "s11"
    },
    {
        "name": "Ingenieria del Medio Ambiente",
        "code": "CIV378",
        "sctCredits": 6,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV381",
            "CIV377"
        ],
        "semester": "s11"
    },
    {
        "name": "Ingenieria Sismica",
        "code": "CIV338",
        "sctCredits": 6,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV336",
            "CIV235"
        ],
        "semester": "s11"
    },
    {
        "name": "Optativo de Especialidad II",
        "code": "CIVOE2",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Taller de Titulación I",
        "code": "CIV397",
        "sctCredits": 6,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV347",
            "CIV377",
            "CIV371",
            "CIV331",
            "CIV336",
            "CIV366",
            "CIV381"
        ],
        "semester": "s11"
    },
    {
        "name": "Proyecto de Ingeniería Civil",
        "code": "CIVOP1",
        "sctCredits": 7,
        "type": "OBRAS CIVILES",
        "prerequisites": [],
        "semester": "s12"
    },
    {
        "name": "Taller de Titulación II",
        "code": "CIV398",
        "sctCredits": 22,
        "type": "OBRAS CIVILES",
        "prerequisites": [
            "CIV397",
            "CIV338",
            "CIV378",
            "CIV390"
        ],
        "semester": "s12"
    }
],
};
