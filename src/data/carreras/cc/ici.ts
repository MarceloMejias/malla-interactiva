import { Carrera } from '../../types';

export const ici: Carrera = {
  codigo: 'ICI',
  nombre: 'Ing. Civil Industrial',
  campus: 'cc',
  color: '#FF6347',
  
  categorias: [
    {
        "id": "MATEMÁTICA",
        "nombre": "Matemática",
        "color": "#FF1493"
    },
    {
        "id": "QUÍMICA",
        "nombre": "Química",
        "color": "#FF8811"
    },
    {
        "id": "FÍSICA",
        "nombre": "Física",
        "color": "#a53f2b"
    },
    {
        "id": "INDUSTRIAS",
        "nombre": "Industrias",
        "color": "#e4A1F9"
    },
    {
        "id": "INGENIERÍA ELÉCTRICA",
        "nombre": "Ingeniería Eléctrica",
        "color": "#335BFF"
    },
    {
        "id": "INGENIERÍA COMERCIAL",
        "nombre": "Ingeniería Comercial",
        "color": "#3498DB"
    },
    {
        "id": "INGENIERÍA MECÁNICA",
        "nombre": "Ingeniería Mecánica",
        "color": "#6A5ACD"
    },
    {
        "id": "INFORMÁTICA",
        "nombre": "Informática",
        "color": "#D69F7E"
    },
    {
        "id": "DEFIDER",
        "nombre": "Defider",
        "color": "#8E44AD"
    },
    {
        "id": "ESTUDIOS HUMANÍSTICOS",
        "nombre": "Estudios Humanísticos",
        "color": "#00CED1"
    },
    {
        "id": "DIRECCION GENERAL DE DOCENCIA",
        "nombre": "Direccion General de Docencia",
        "color": "#FFC300"
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
        "name": "Administración y Sostenibilidad Organizacional",
        "code": "AUX200",
        "sctCredits": 4,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s3"
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
        "name": "Química Industrial",
        "code": "QUI401",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Taller de Ingeniería Industrial I",
        "code": "ILN111",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "IWG400"
        ],
        "semester": "s3"
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
        "name": "Información y Control Financiero",
        "code": "ILN112",
        "sctCredits": 6,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "AUX200"
        ],
        "semester": "s4"
    },
    {
        "name": "Ingeniería Económica",
        "code": "AUX201",
        "sctCredits": 4,
        "type": "INGENIERÍA COMERCIAL",
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
        "name": "Comunicación Efectiva en Español / Inglés IV",
        "code": "HXW012",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Gestión de Personas",
        "code": "ILN115",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "AUX200",
            "ILN111"
        ],
        "semester": "s5"
    },
    {
        "name": "Investigación de Operaciones",
        "code": "ILN113",
        "sctCredits": 6,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "MAT154",
            "MAT061",
            "INF129",
            "MAT081"
        ],
        "semester": "s5"
    },
    {
        "name": "Procesos Industriales",
        "code": "ILN116",
        "sctCredits": 6,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "AUX200",
            "AUX201"
        ],
        "semester": "s5"
    },
    {
        "name": "Taller de Ingeniería Industrial II",
        "code": "ILN114",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN111"
        ],
        "semester": "s5"
    },
    {
        "name": "Termodinámica",
        "code": "MEC200",
        "sctCredits": 6,
        "type": "INGENIERÍA MECÁNICA",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Electrotecnia Básica",
        "code": "ELI281",
        "sctCredits": 6,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "MAT153"
        ],
        "semester": "s6"
    },
    {
        "name": "Finanzas",
        "code": "ILN122",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN112"
        ],
        "semester": "s6"
    },
    {
        "name": "Ingeniería de Plantas Industriales",
        "code": "ILN121",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "MAT154",
            "AUX201"
        ],
        "semester": "s6"
    },
    {
        "name": "Microeconomía",
        "code": "ILN119",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "MAT081"
        ],
        "semester": "s6"
    },
    {
        "name": "Sistemas de Información",
        "code": "ILN118",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "AUX200",
            "INF129"
        ],
        "semester": "s6"
    },
    {
        "name": "Taller de Responsabilidad Social y Ética",
        "code": "ILN117",
        "sctCredits": 3,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN111"
        ],
        "semester": "s6"
    },
    {
        "name": "Econometría",
        "code": "ILN127",
        "sctCredits": 7,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "MAT154"
        ],
        "semester": "s7"
    },
    {
        "name": "Evaluación de Proyectos Generales",
        "code": "ILN123",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN119",
            "AUX201"
        ],
        "semester": "s7"
    },
    {
        "name": "Gestión Energética",
        "code": "ILN125",
        "sctCredits": 6,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "MEC200"
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
        "name": "Macroeconomía",
        "code": "ILN126",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN119"
        ],
        "semester": "s7"
    },
    {
        "name": "Marketing",
        "code": "ILN124",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN119"
        ],
        "semester": "s7"
    },
    {
        "name": "Gestión de la Innovación",
        "code": "AUX217",
        "sctCredits": 3,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Gestión de Operaciones I",
        "code": "ILN136",
        "sctCredits": 6,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN113"
        ],
        "semester": "s8"
    },
    {
        "name": "Gestión Energética y Sustentabilidad",
        "code": "ILN137",
        "sctCredits": 6,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN125"
        ],
        "semester": "s8"
    },
    {
        "name": "Inteligencia de Negocios",
        "code": "ILN134",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN118"
        ],
        "semester": "s8"
    },
    {
        "name": "Organización Industrial",
        "code": "ILN135",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN119"
        ],
        "semester": "s8"
    },
    {
        "name": "Proyecto de Ingeniería Industrial",
        "code": "ILN133",
        "sctCredits": 4,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN123"
        ],
        "semester": "s8"
    },
    {
        "name": "Análisis de Negocio",
        "code": "ILN145",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN127"
        ],
        "semester": "s9"
    },
    {
        "name": "Electivo",
        "code": "AUX220",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo",
        "code": "AUX221",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Gestión de Calidad Total",
        "code": "ILN144",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN113"
        ],
        "semester": "s9"
    },
    {
        "name": "Gestión de Operaciones II",
        "code": "ILN146",
        "sctCredits": 6,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN136"
        ],
        "semester": "s9"
    },
    {
        "name": "Taller de Título I",
        "code": "ILN147",
        "sctCredits": 3,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN133"
        ],
        "semester": "s9"
    },
    {
        "name": "Desarrollo y Control de Proyectos",
        "code": "ILN413",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN123"
        ],
        "semester": "s10"
    },
    {
        "name": "Electivo",
        "code": "AUX226",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
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
        "name": "Gestión Estratégica",
        "code": "ILN414",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN124",
            "ILN122",
            "ILN136",
            "ILN115"
        ],
        "semester": "s10"
    },
    {
        "name": "Taller de Título II",
        "code": "ILN415",
        "sctCredits": 13,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "ILN147"
        ],
        "semester": "s10"
    }
],
};
