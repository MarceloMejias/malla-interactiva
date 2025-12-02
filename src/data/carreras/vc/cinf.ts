import { Carrera } from '../../types';

export const cinf: Carrera = {
  codigo: 'CINF',
  nombre: 'Ing. Civil en Informática',
  campus: 'vc',
  color: '#6366F1',
  
  categorias: [
    {
        "id": "FÍSICA",
        "nombre": "Física",
        "color": "#FF69B4"
    },
    {
        "id": "INDUSTRIAS",
        "nombre": "Industrias",
        "color": "#a53f2b"
    },
    {
        "id": "DIRECCION GENERAL DE DOCENCIA",
        "nombre": "Direccion General de Docencia",
        "color": "#FF1493"
    },
    {
        "id": "ESTUDIOS HUMANÍSTICOS",
        "nombre": "Estudios Humanísticos",
        "color": "#C70039"
    },
    {
        "id": "INGENIERÍA MECÁNICA",
        "nombre": "Ingeniería Mecánica",
        "color": "#FF5964"
    },
    {
        "id": "INFORMÁTICA",
        "nombre": "Informática",
        "color": "#335BFF"
    },
    {
        "id": "ELECTRÓNICA",
        "nombre": "Electrónica",
        "color": "#3498DB"
    },
    {
        "id": "QUÍMICA",
        "nombre": "Química",
        "color": "#8E44AD"
    },
    {
        "id": "INGENIERÍA ELÉCTRICA",
        "nombre": "Ingeniería Eléctrica",
        "color": "#FFC300"
    },
    {
        "id": "DEFIDER",
        "nombre": "Defider",
        "color": "#FF5733"
    },
    {
        "id": "MATEMÁTICA",
        "nombre": "Matemática",
        "color": "#FF8811"
    }
],

  asignaturas: [
    {
        "name": "Algebra Elemental I",
        "code": "MAT111",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Calculo I",
        "code": "MAT121",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educacion Fisica I (damas y Varones)",
        "code": "DEW100",
        "sctCredits": 2,
        "type": "DEFIDER",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Inglés Científico y Tecnológico I",
        "code": "HCW310",
        "sctCredits": 2,
        "type": "ESTUDIOS HUMANÍSTICOS",
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
        "name": "Algebra Elemental II",
        "code": "MAT112",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT111"
        ],
        "semester": "s2"
    },
    {
        "name": "Calculo II",
        "code": "MAT122",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT111",
            "MAT121"
        ],
        "semester": "s2"
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
            "FIS100",
            "MAT121"
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
        "name": "Arquitectura de Computadores I",
        "code": "ILI142",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "IWI131"
        ],
        "semester": "s3"
    },
    {
        "name": "Calculo III",
        "code": "MAT123",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT122",
            "MAT112"
        ],
        "semester": "s3"
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
        "name": "Fisica General II",
        "code": "FIS120",
        "sctCredits": 8,
        "type": "FÍSICA",
        "prerequisites": [
            "FIS110",
            "MAT122"
        ],
        "semester": "s3"
    },
    {
        "name": "Humanistico I",
        "code": "H W  1",
        "sctCredits": 2,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Inglés Científico y Tecnológico II",
        "code": "HCW311",
        "sctCredits": 2,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [
            "HCW310"
        ],
        "semester": "s3"
    },
    {
        "name": "Int.al Algebra Lineal y Ec Dif Ordinarias",
        "code": "MAT113",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT122",
            "MAT112"
        ],
        "semester": "s3"
    },
    {
        "name": "Calculo IV",
        "code": "MAT124",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT123",
            "MAT113"
        ],
        "semester": "s4"
    },
    {
        "name": "Estructura de Datos",
        "code": "ILI134",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "IWI131"
        ],
        "semester": "s4"
    },
    {
        "name": "Fisica General III",
        "code": "FIS130",
        "sctCredits": 8,
        "type": "FÍSICA",
        "prerequisites": [
            "FIS110",
            "MAT122"
        ],
        "semester": "s4"
    },
    {
        "name": "Grafica en Ingenieria",
        "code": "IWM185",
        "sctCredits": 5,
        "type": "INGENIERÍA MECÁNICA",
        "prerequisites": [
            "IWI131"
        ],
        "semester": "s4"
    },
    {
        "name": "Matematica Discreta",
        "code": "ILI151",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "MAT112"
        ],
        "semester": "s4"
    },
    {
        "name": "Economia I-a",
        "code": "IWN170",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [],
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
        "name": "Fundamentos de Electrotecnia",
        "code": "ILE260",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "FIS120",
            "MAT123"
        ],
        "semester": "s5"
    },
    {
        "name": "Humanistico II",
        "code": "H W  2",
        "sctCredits": 2,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Quimica General",
        "code": "QUI104",
        "sctCredits": 5,
        "type": "QUÍMICA",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Teoria de Sistemas",
        "code": "ILI260",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Algebra Lineal",
        "code": "MAT210",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Principios de Lenguajes de Programacion",
        "code": "ILI252",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "IWI131"
        ],
        "semester": "s6"
    },
    {
        "name": "Probabilidades y Estadistica",
        "code": "MAT260",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "IWI131",
            "MAT123",
            "MAT113"
        ],
        "semester": "s6"
    },
    {
        "name": "Sistemas de Informacion I",
        "code": "ILI273",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ILI260"
        ],
        "semester": "s6"
    },
    {
        "name": "Sistemas Operativos",
        "code": "ILI243",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ILI242"
        ],
        "semester": "s6"
    },
    {
        "name": "Teoria de Automatas y Lenguajes Formales",
        "code": "ILI231",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Analisis Numerico",
        "code": "MAT270",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Diseño y Analisis de Algoritmos",
        "code": "ILI221",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "MAT260",
            "ILI134",
            "ILI231"
        ],
        "semester": "s7"
    },
    {
        "name": "Fund. de Inv. de Operaciones",
        "code": "ILI281",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "MAT260",
            "IWI131"
        ],
        "semester": "s7"
    },
    {
        "name": "Fundamentos de Electronica",
        "code": "ILD208",
        "sctCredits": 5,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "FIS120"
        ],
        "semester": "s7"
    },
    {
        "name": "Información y Control Financiero",
        "code": "IWN270",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "IWN170"
        ],
        "semester": "s7"
    },
    {
        "name": "Sistemas de Informacion II",
        "code": "ILI274",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ILI273"
        ],
        "semester": "s7"
    },
    {
        "name": "Arquitectura de Computadores II",
        "code": "ILI242",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Inteligencia Artificial",
        "code": "ILI355",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ILI221"
        ],
        "semester": "s8"
    },
    {
        "name": "Organizacion y Manejo de Archivos",
        "code": "ILI238",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ILI134"
        ],
        "semester": "s8"
    },
    {
        "name": "Proyecto de Sistemas de Informacion",
        "code": "ILI275",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ILI274"
        ],
        "semester": "s8"
    },
    {
        "name": "Sociologia Industrial",
        "code": "HRW150",
        "sctCredits": 2,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Administracion General",
        "code": "IWN261",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Compiladores",
        "code": "ILI237",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ILI252",
            "ILI231"
        ],
        "semester": "s9"
    },
    {
        "name": "Econometria",
        "code": "ICI393",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "MAT210",
            "MAT260"
        ],
        "semester": "s9"
    },
    {
        "name": "Psicología Industrial",
        "code": "HRW110",
        "sctCredits": 2,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Sistemas de Bases de Datos",
        "code": "ILI334",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ILI238"
        ],
        "semester": "s9"
    },
    {
        "name": "Sistemas y Organizaciones",
        "code": "ILI363",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ILI273"
        ],
        "semester": "s9"
    },
    {
        "name": "Comportamiento Organizacional",
        "code": "HRW100",
        "sctCredits": 2,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Ingenieria de Software I",
        "code": "ILI331",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ILI274",
            "ILI238"
        ],
        "semester": "s10"
    },
    {
        "name": "Ingeniería Económica",
        "code": "ILN230",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "IWN270"
        ],
        "semester": "s10"
    },
    {
        "name": "Optimizacion",
        "code": "ILI381",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ILI281",
            "MAT210"
        ],
        "semester": "s10"
    },
    {
        "name": "Simulacion",
        "code": "ICI382",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ILI381"
        ],
        "semester": "s10"
    },
    {
        "name": "Sistemas de Gestion",
        "code": "ILI362",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ILI363"
        ],
        "semester": "s10"
    },
    {
        "name": "Evaluacion de Proyectos",
        "code": "ICN336",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "IWN270"
        ],
        "semester": "s11"
    },
    {
        "name": "Ingenieria de Software II",
        "code": "ICI332",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ILI331"
        ],
        "semester": "s11"
    },
    {
        "name": "Redes de Computadores",
        "code": "ICI344",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ILI243"
        ],
        "semester": "s11"
    },
    {
        "name": "Seminario de Informatica I",
        "code": "ICI313",
        "sctCredits": 3,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ILI331"
        ],
        "semester": "s11"
    },
    {
        "name": "Seminario de Memoria",
        "code": "ICI315",
        "sctCredits": 3,
        "type": "INFORMÁTICA",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Seminario de Relaciones Humanas",
        "code": "IWI365",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Seminario de Informatica II",
        "code": "ICI314",
        "sctCredits": 3,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "ICI313"
        ],
        "semester": "s12"
    },
    {
        "name": "Seminario de Legislacion Laboral",
        "code": "ICI367",
        "sctCredits": 3,
        "type": "INFORMÁTICA",
        "prerequisites": [],
        "semester": "s12"
    }
],
};
