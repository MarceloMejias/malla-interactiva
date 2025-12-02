import { Carrera } from '../../types';

export const icom: Carrera = {
  codigo: 'ICOM',
  nombre: 'Ing. Comercial',
  campus: 'vc',
  color: '#32CD32',
  
  categorias: [
    {
        "id": "INGENIERÍA COMERCIAL",
        "nombre": "Ingeniería Comercial",
        "color": "#FFC300"
    },
    {
        "id": "ESTUDIOS HUMANÍSTICOS",
        "nombre": "Estudios Humanísticos",
        "color": "#3498DB"
    },
    {
        "id": "INFORMÁTICA",
        "nombre": "Informática",
        "color": "#D69F7E"
    },
    {
        "id": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "nombre": "Ingeniería Química y Ambiental",
        "color": "#335BFF"
    },
    {
        "id": "INGENIERÍA EN DISEÑO",
        "nombre": "Ingeniería en Diseño",
        "color": "#FF5964"
    },
    {
        "id": "DEFIDER",
        "nombre": "Defider",
        "color": "#FF1493"
    },
    {
        "id": "MATEMÁTICA",
        "nombre": "Matemática",
        "color": "#C70039"
    }
],

  asignaturas: [
    {
        "name": "Administración de Empresas",
        "code": "ICS111",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Álgebra y Geometría",
        "code": "MATE10",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Comunicación Escrita: Lectoescritura a Partir de Grandes Obras",
        "code": "HAC100",
        "sctCredits": 5,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I (damas y Varones)",
        "code": "EFI100",
        "sctCredits": 2,
        "type": "DEFIDER",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Inglés 1",
        "code": "HCW100",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Economía",
        "code": "ICS161",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Programación y Tratamiento de Datos Para la Gestión",
        "code": "INF130",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Álgebra Lineal",
        "code": "MATE20",
        "sctCredits": 5,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MATE10"
        ],
        "semester": "s2"
    },
    {
        "name": "Bases de Datos Para la Gestión",
        "code": "INF303",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "INF130"
        ],
        "semester": "s2"
    },
    {
        "name": "Comunicación Oral: Retórica y Puesta en Escena",
        "code": "HAA102",
        "sctCredits": 5,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [
            "HAC100"
        ],
        "semester": "s2"
    },
    {
        "name": "Contabilidad I",
        "code": "ICS140",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Educación Física II (damas y Varones)",
        "code": "EFI101",
        "sctCredits": 2,
        "type": "DEFIDER",
        "prerequisites": [
            "EFI100"
        ],
        "semester": "s2"
    },
    {
        "name": "Inglés 2",
        "code": "HCW101",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [
            "HCW100"
        ],
        "semester": "s2"
    },
    {
        "name": "Pre-cálculo",
        "code": "MATE11",
        "sctCredits": 5,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MATE10"
        ],
        "semester": "s2"
    },
    {
        "name": "Cálculo Diferencial",
        "code": "MATE25",
        "sctCredits": 5,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MATE20",
            "MATE11"
        ],
        "semester": "s3"
    },
    {
        "name": "Contabilidad II",
        "code": "ICS144",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [
            "ICS140"
        ],
        "semester": "s3"
    },
    {
        "name": "Inglés 3",
        "code": "HCW102",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [
            "HCW101"
        ],
        "semester": "s3"
    },
    {
        "name": "Legislación Empresarial",
        "code": "ICS112",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [
            "ICS111"
        ],
        "semester": "s3"
    },
    {
        "name": "Programación Para la Analítica de Gestión",
        "code": "INF316",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "INF303"
        ],
        "semester": "s3"
    },
    {
        "name": "Taller de Creatividad Para el Emprendimiento",
        "code": "IDP107",
        "sctCredits": 5,
        "type": "INGENIERÍA EN DISEÑO",
        "prerequisites": [
            "HAC100",
            "MATE10"
        ],
        "semester": "s3"
    },
    {
        "name": "Cálculo Integral",
        "code": "MATE26",
        "sctCredits": 5,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MATE25"
        ],
        "semester": "s4"
    },
    {
        "name": "Deportes",
        "code": "DEW  0",
        "sctCredits": 2,
        "type": "DEFIDER",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Ingeniería Económica",
        "code": "ICS142",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [
            "INF130",
            "MATE20"
        ],
        "semester": "s4"
    },
    {
        "name": "Inglés 4",
        "code": "HCW200",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [
            "HCW102"
        ],
        "semester": "s4"
    },
    {
        "name": "Introducción a la Ingeniería Sostenible",
        "code": "IQA161",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [
            "ICS161"
        ],
        "semester": "s4"
    },
    {
        "name": "Microeconomía I",
        "code": "ICS162",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [
            "MATE25",
            "ICS161"
        ],
        "semester": "s4"
    },
    {
        "name": "Taller de Pensamiento de Diseño Para el Emprendimiento",
        "code": "IDP108",
        "sctCredits": 5,
        "type": "INGENIERÍA EN DISEÑO",
        "prerequisites": [
            "IDP107"
        ],
        "semester": "s4"
    },
    {
        "name": "Dirección Tributaria",
        "code": "ICS244",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Historia Económica",
        "code": "HAH101",
        "sctCredits": 5,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Inglés 5",
        "code": "HCW201",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [
            "HCW200"
        ],
        "semester": "s5"
    },
    {
        "name": "Macroeconomía",
        "code": "ICS263",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [
            "ICS162"
        ],
        "semester": "s5"
    },
    {
        "name": "Marketing I",
        "code": "ICS230",
        "sctCredits": 0,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Personas y Organizaciones I",
        "code": "ICS214",
        "sctCredits": 0,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Probabilidad y Estadística",
        "code": "MAT034",
        "sctCredits": 0,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Econometría",
        "code": "ICS294",
        "sctCredits": 7,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Inglés 6",
        "code": "HCW202",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [
            "HCW201"
        ],
        "semester": "s6"
    },
    {
        "name": "Macroeconomía II",
        "code": "ICS363",
        "sctCredits": 0,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Microeconomía II",
        "code": "ICS264",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [
            "MATE26",
            "ICS162"
        ],
        "semester": "s6"
    },
    {
        "name": "Optimización Para la Gestión",
        "code": "ICS297",
        "sctCredits": 0,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Personas y Organizaciones II",
        "code": "ICS316",
        "sctCredits": 0,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Análisis de Datos Para los Negocios I",
        "code": "ICS165",
        "sctCredits": 0,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Entorno Legal de la Empresa",
        "code": "ICS315",
        "sctCredits": 7,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [
            "ICS244"
        ],
        "semester": "s7"
    },
    {
        "name": "Evaluación Privada y Social de Proyectos",
        "code": "ICS164",
        "sctCredits": 0,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Finanzas I",
        "code": "ICS247",
        "sctCredits": 0,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Gestión Estratégica I",
        "code": "ICS221",
        "sctCredits": 6,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [
            "ICS244"
        ],
        "semester": "s7"
    },
    {
        "name": "Organización Industrial",
        "code": "ICS265",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [
            "ICS264",
            "ICS263"
        ],
        "semester": "s7"
    },
    {
        "name": "Análisis de Datos Para los Negocios II",
        "code": "ICS175",
        "sctCredits": 0,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Dirección Estratégica II",
        "code": "ICS223",
        "sctCredits": 0,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Finanzas Corporativas",
        "code": "ICS246",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Gestión de Operaciones",
        "code": "ICS296",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Marketing II",
        "code": "ICS233",
        "sctCredits": 0,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Preparación y Presentación de Proyectos",
        "code": "ICS166",
        "sctCredits": 0,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Electivo I",
        "code": "ICS801",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo II",
        "code": "ICS802",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Optativo de Profundización I",
        "code": "ICS700",
        "sctCredits": 0,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Optativo de Profundización II",
        "code": "ICS701",
        "sctCredits": 0,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo III",
        "code": "ICS803",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Seminario de Título",
        "code": "ICS399",
        "sctCredits": 17,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s10"
    }
],
};
