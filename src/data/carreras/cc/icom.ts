import { Carrera } from '../../types';

export const icom: Carrera = {
  codigo: 'ICOM',
  nombre: 'Ing. Comercial',
  campus: 'cc',
  color: '#32CD32',
  
  categorias: [
    {
        "id": "MATE",
        "nombre": "Matemática",
        "color": "#EA580C"
    },
    {
        "id": "TLLR",
        "nombre": "Talleres, Creación, Seminario",
        "color": "#EC4899"
    },
    {
        "id": "HUM",
        "nombre": "Estudios Humanísticos",
        "color": "#FB7185"
    },
    {
        "id": "EFI",
        "nombre": "Defider",
        "color": "#3B82F6"
    },
    {
        "id": "INFO",
        "nombre": "Informática",
        "color": "#8B5CF6"
    },
    {
        "id": "ECON",
        "nombre": "Economías",
        "color": "#7C2D12"
    },
    {
        "id": "ADMI",
        "nombre": "Administración",
        "color": "#06B6D4"
    },
    {
        "id": "FINZ",
        "nombre": "Finanzas",
        "color": "#0F766E"
    },
    {
        "id": "ENGL",
        "nombre": "Inglés",
        "color": "#60A5FA"
    },
    {
        "id": "ELEC",
        "nombre": "Electivos",
        "color": "#F43F5E"
    },
    {
        "id": "MKTG",
        "nombre": "Marketing y Gestión",
        "color": "#0EA5E9"
    },
    {
        "id": "OPER",
        "nombre": "Operaciones",
        "color": "#A855F7"
    }
],

  asignaturas: [
    {
        "name": "Álgebra y Geometría",
        "code": "MATE10",
        "sctCredits": 6,
        "type": "MATE",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Administración de Empresas",
        "code": "ICS111",
        "sctCredits": 5,
        "type": "ADMI",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Comunicación Escrita",
        "code": "HAC100",
        "sctCredits": 5,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Programación y Tratamiento de Datos para la Gestión",
        "code": "INF130",
        "sctCredits": 5,
        "type": "INFO",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Economía",
        "code": "ICS161",
        "sctCredits": 5,
        "type": "ECON",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Inglés I",
        "code": "HCW100",
        "sctCredits": 3,
        "type": "ENGL",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "EFI100",
        "sctCredits": 2,
        "type": "EFI",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Pre-Cálculo",
        "code": "MATE11",
        "sctCredits": 5,
        "type": "MATE",
        "prerequisites": [
            "MATE10"
        ],
        "semester": "s2"
    },
    {
        "name": "Álgebra Lineal",
        "code": "MATE20",
        "sctCredits": 5,
        "type": "MATE",
        "prerequisites": [
            "MATE10"
        ],
        "semester": "s2"
    },
    {
        "name": "Comunicación Oral",
        "code": "HAA102",
        "sctCredits": 5,
        "type": "HUM",
        "prerequisites": [
            "HAC100"
        ],
        "semester": "s2"
    },
    {
        "name": "Bases de Datos para la Gestión",
        "code": "INF303",
        "sctCredits": 5,
        "type": "INFO",
        "prerequisites": [
            "INF130"
        ],
        "semester": "s2"
    },
    {
        "name": "Contabilidad I",
        "code": "ICS140",
        "sctCredits": 0,
        "type": "FINZ",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Inglés II",
        "code": "HCW101",
        "sctCredits": 3,
        "type": "ENGL",
        "prerequisites": [
            "HCW100"
        ],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "EFI101",
        "sctCredits": 2,
        "type": "EFI",
        "prerequisites": [
            "EFI100"
        ],
        "semester": "s2"
    },
    {
        "name": "Cálculo Diferencial",
        "code": "MATE25",
        "sctCredits": 5,
        "type": "MATE",
        "prerequisites": [
            "MATE11",
            "MATE20"
        ],
        "semester": "s3"
    },
    {
        "name": "Taller de Creatividad",
        "code": "IDP107",
        "sctCredits": 5,
        "type": "TLLR",
        "prerequisites": [
            "MATE10"
        ],
        "semester": "s3"
    },
    {
        "name": "Legislación Empresarial",
        "code": "ICS112",
        "sctCredits": 5,
        "type": "ADMI",
        "prerequisites": [
            "ICS111"
        ],
        "semester": "s3"
    },
    {
        "name": "Programación para la Analítica de Gestión",
        "code": "INF316",
        "sctCredits": 0,
        "type": "INFO",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Contabilidad II",
        "code": "ICS144",
        "sctCredits": 0,
        "type": "FINZ",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Inglés III",
        "code": "HCW102",
        "sctCredits": 3,
        "type": "ENGL",
        "prerequisites": [
            "HCW101"
        ],
        "semester": "s3"
    },
    {
        "name": "Cálculo Integral",
        "code": "MATE26",
        "sctCredits": 5,
        "type": "MATE",
        "prerequisites": [
            "MATE25"
        ],
        "semester": "s4"
    },
    {
        "name": "Taller de Pensamiento de Diseño",
        "code": "IDP108",
        "sctCredits": 5,
        "type": "TLLR",
        "prerequisites": [
            "IDP107"
        ],
        "semester": "s4"
    },
    {
        "name": "Introducción a la Ingeniería Sostenible",
        "code": "IQA161",
        "sctCredits": 5,
        "type": "ECON",
        "prerequisites": [
            "ICS161"
        ],
        "semester": "s4"
    },
    {
        "name": "Ingeniería Económica",
        "code": "ICS142",
        "sctCredits": 5,
        "type": "FINZ",
        "prerequisites": [
            "MATE20",
            "INF130"
        ],
        "semester": "s4"
    },
    {
        "name": "Microeconomía I",
        "code": "ICS162",
        "sctCredits": 5,
        "type": "ECON",
        "prerequisites": [
            "ICS161",
            "MATE25"
        ],
        "semester": "s4"
    },
    {
        "name": "Inglés IV",
        "code": "HCW200",
        "sctCredits": 3,
        "type": "ENGL",
        "prerequisites": [
            "HCW102"
        ],
        "semester": "s4"
    },
    {
        "name": "Deportes",
        "code": "DEW0",
        "sctCredits": 2,
        "type": "EFI",
        "prerequisites": [
            "EFI101"
        ],
        "semester": "s4"
    },
    {
        "name": "Probabilidad y Estadística",
        "code": "MATE034",
        "sctCredits": 0,
        "type": "MATE",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Historia Económica",
        "code": "HAH101",
        "sctCredits": 5,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Personas y Organizaciones I",
        "code": "ICS214",
        "sctCredits": 0,
        "type": "ADMI",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Marketing I",
        "code": "ICS230",
        "sctCredits": 0,
        "type": "MKTG",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Macroeconomía I",
        "code": "ICS263",
        "sctCredits": 5,
        "type": "ECON",
        "prerequisites": [
            "ICS162"
        ],
        "semester": "s5"
    },
    {
        "name": "Inglés V",
        "code": "HCW201",
        "sctCredits": 3,
        "type": "ENGL",
        "prerequisites": [
            "HCW200"
        ],
        "semester": "s5"
    },
    {
        "name": "Econometría",
        "code": "ICS294",
        "sctCredits": 7,
        "type": "INFO",
        "prerequisites": [
            "MATE034"
        ],
        "semester": "s6"
    },
    {
        "name": "Optimización para la Gestión",
        "code": "ICS297",
        "sctCredits": 0,
        "type": "INFO",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Personas y Organizaciones II",
        "code": "ICS316",
        "sctCredits": 0,
        "type": "ADMI",
        "prerequisites": [
            "ICS214"
        ],
        "semester": "s6"
    },
    {
        "name": "Microeconomía II",
        "code": "ICS264",
        "sctCredits": 5,
        "type": "ECON",
        "prerequisites": [
            "ICS162"
        ],
        "semester": "s6"
    },
    {
        "name": "Macroeconomía II",
        "code": "ICS363",
        "sctCredits": 5,
        "type": "ECON",
        "prerequisites": [
            "ICS263"
        ],
        "semester": "s6"
    },
    {
        "name": "Inglés VI",
        "code": "HCW202",
        "sctCredits": 3,
        "type": "ENGL",
        "prerequisites": [
            "HCW201"
        ],
        "semester": "s6"
    },
    {
        "name": "Análisis de Datos para los Negocios I",
        "code": "ICS165",
        "sctCredits": 0,
        "type": "INFO",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Entorno Legal de la Empresa",
        "code": "ICS315",
        "sctCredits": 7,
        "type": "ADMI",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Gestión Estratégica I",
        "code": "ICS221",
        "sctCredits": 6,
        "type": "ADMI",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Organización Industrial",
        "code": "ICS265",
        "sctCredits": 5,
        "type": "ECON",
        "prerequisites": [
            "ICS264",
            "ICS263"
        ],
        "semester": "s7"
    },
    {
        "name": "Evaluación Privada y Social de Proyectos",
        "code": "ICS164",
        "sctCredits": 0,
        "type": "TLLR",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Finanzas I",
        "code": "ICS247",
        "sctCredits": 0,
        "type": "FINZ",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Análisis de Datos para los Negocios II",
        "code": "ICS175",
        "sctCredits": 0,
        "type": "INFO",
        "prerequisites": [
            "ICS165"
        ],
        "semester": "s8"
    },
    {
        "name": "Gestión de Operaciones",
        "code": "ICS296",
        "sctCredits": 5,
        "type": "INFO",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Dirección Estratégica I",
        "code": "ICS223",
        "sctCredits": 6,
        "type": "ADMI",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Marketing II",
        "code": "ICS233",
        "sctCredits": 0,
        "type": "MKTG",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Preparación y Presentación de Proyectos",
        "code": "ICS166",
        "sctCredits": 0,
        "type": "TLLR",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Finanzas Corporativas",
        "code": "ICS246",
        "sctCredits": 0,
        "type": "FINZ",
        "prerequisites": [
            "ICS247"
        ],
        "semester": "s8"
    },
    {
        "name": "Optativo de Profundización I",
        "code": "ICS700",
        "sctCredits": 0,
        "type": "TLLR",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Optativo de Profundización II",
        "code": "ICS701",
        "sctCredits": 0,
        "type": "TLLR",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo I",
        "code": "ICS801",
        "sctCredits": 5,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo II",
        "code": "ICS802",
        "sctCredits": 5,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Seminario de Título",
        "code": "ICS399",
        "sctCredits": 17,
        "type": "TLLR",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Electivo III",
        "code": "ICS803",
        "sctCredits": 5,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s10"
    }
],
};
