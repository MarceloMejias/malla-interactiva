import { Carrera } from '@/types/curriculum';

export const icom_0: Carrera = {
  codigo: 'ICOM-0',
  nombre: 'Ing. Comercial (Malla Antigua)',
  campus: 'cc',
  color: '#90EE90',
  
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
        "name": "Taller de Creatividad y Comunicación Efectiva",
        "code": "ICS181",
        "sctCredits": 7,
        "type": "TLLR",
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
        "name": "Taller de Emprendimiento y Gestión",
        "code": "ICS182",
        "sctCredits": 7,
        "type": "TLLR",
        "prerequisites": [
            "ICS181",
            "INF130"
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
        "name": "Introducción a la Ingeniería Sostenible",
        "code": "IQA161",
        "sctCredits": 5,
        "type": "TLLR",
        "prerequisites": [
            "ICS161"
        ],
        "semester": "s2"
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
        "name": "Legislación Empresarial",
        "code": "ICS112",
        "sctCredits": 5,
        "type": "ADMI",
        "prerequisites": [
            "ICS111"
        ],
        "semester": "s2"
    },
    {
        "name": "Teoría Financiera",
        "code": "ICS142",
        "sctCredits": 5,
        "type": "FINZ",
        "prerequisites": [
            "INF130",
            "MATE20"
        ],
        "semester": "s3"
    },
    {
        "name": "Contabilidad Financiera",
        "code": "ICS141",
        "sctCredits": 5,
        "type": "FINZ",
        "prerequisites": [
            "ICS112"
        ],
        "semester": "s3"
    },
    {
        "name": "Bases de Datos para la Gestión",
        "code": "INF303",
        "sctCredits": 5,
        "type": "INFO",
        "prerequisites": [
            "INF130"
        ],
        "semester": "s3"
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
        "name": "Inglés I",
        "code": "HCW100",
        "sctCredits": 3,
        "type": "ENGL",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Historia Económica",
        "code": "HAH101",
        "sctCredits": 5,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s3"
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
        "name": "Contabilidad de Gestión",
        "code": "ICS143",
        "sctCredits": 5,
        "type": "FINZ",
        "prerequisites": [
            "ICS141"
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
        "name": "Inglés II",
        "code": "HCW101",
        "sctCredits": 3,
        "type": "ENGL",
        "prerequisites": [
            "HCW100"
        ],
        "semester": "s4"
    },
    {
        "name": "Ciencias Sociales",
        "code": "HAH102",
        "sctCredits": 5,
        "type": "HUM",
        "prerequisites": [
            "HAH101"
        ],
        "semester": "s4"
    },
    {
        "name": "Taller de Evaluación Privada de Proyectos",
        "code": "ICS284",
        "sctCredits": 5,
        "type": "TLLR",
        "prerequisites": [
            "INF303",
            "ICS142"
        ],
        "semester": "s5"
    },
    {
        "name": "Marketing Estratégico",
        "code": "ICS231",
        "sctCredits": 6,
        "type": "MKTG",
        "prerequisites": [
            "ICS143"
        ],
        "semester": "s5"
    },
    {
        "name": "Dirección Tributaria",
        "code": "ICS244",
        "sctCredits": 5,
        "type": "FINZ",
        "prerequisites": [
            "ICS141"
        ],
        "semester": "s5"
    },
    {
        "name": "Macroeconomía",
        "code": "ICS263",
        "sctCredits": 5,
        "type": "ECON",
        "prerequisites": [
            "ICS162"
        ],
        "semester": "s5"
    },
    {
        "name": "Métodos Cuantitativos para los Negocios",
        "code": "MAT033",
        "sctCredits": 5,
        "type": "MATE",
        "prerequisites": [
            "MATE25"
        ],
        "semester": "s5"
    },
    {
        "name": "Inglés III",
        "code": "HCW102",
        "sctCredits": 3,
        "type": "ENGL",
        "prerequisites": [
            "HCW101"
        ],
        "semester": "s5"
    },
    {
        "name": "Taller de Evaluación Social de Proyectos",
        "code": "ICS285",
        "sctCredits": 5,
        "type": "TLLR",
        "prerequisites": [
            "ICS284"
        ],
        "semester": "s6"
    },
    {
        "name": "Gestión Estratégica I",
        "code": "ICS221",
        "sctCredits": 6,
        "type": "MKTG",
        "prerequisites": [
            "ICS244",
            "ICS231"
        ],
        "semester": "s6"
    },
    {
        "name": "Dirección Financiera",
        "code": "ICS245",
        "sctCredits": 5,
        "type": "FINZ",
        "prerequisites": [
            "ICS284",
            "ICS143"
        ],
        "semester": "s6"
    },
    {
        "name": "Microeconomía II",
        "code": "ICS264",
        "sctCredits": 5,
        "type": "ECON",
        "prerequisites": [
            "ICS162",
            "MATE26"
        ],
        "semester": "s6"
    },
    {
        "name": "Econometría",
        "code": "ICS294",
        "sctCredits": 7,
        "type": "OPER",
        "prerequisites": [
            "MAT033"
        ],
        "semester": "s6"
    },
    {
        "name": "Inglés IV",
        "code": "HCW200",
        "sctCredits": 3,
        "type": "ENGL",
        "prerequisites": [
            "HCW102"
        ],
        "semester": "s6"
    },
    {
        "name": "Marketing Táctico",
        "code": "ICS232",
        "sctCredits": 6,
        "type": "MKTG",
        "prerequisites": [
            "ICS231",
            "MAT033"
        ],
        "semester": "s7"
    },
    {
        "name": "Finanzas Corporativas",
        "code": "ICS246",
        "sctCredits": 5,
        "type": "FINZ",
        "prerequisites": [
            "ICS245"
        ],
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
        "name": "Investigación de Operaciones",
        "code": "ICS295",
        "sctCredits": 5,
        "type": "OPER",
        "prerequisites": [
            "MAT033"
        ],
        "semester": "s7"
    },
    {
        "name": "Inglés V",
        "code": "HCW201",
        "sctCredits": 3,
        "type": "ENGL",
        "prerequisites": [
            "HCW200"
        ],
        "semester": "s7"
    },
    {
        "name": "Dirección de Personas",
        "code": "ICS213",
        "sctCredits": 5,
        "type": "ADMI",
        "prerequisites": [
            "ICS112",
            "HAH102"
        ],
        "semester": "s7"
    },
    {
        "name": "Creación de Empresas",
        "code": "ICS286",
        "sctCredits": 7,
        "type": "TLLR",
        "prerequisites": [
            "ICS284",
            "ICS232",
            "ICS245"
        ],
        "semester": "s8"
    },
    {
        "name": "Gestión Estratégica II",
        "code": "ICS222",
        "sctCredits": 6,
        "type": "MKTG",
        "prerequisites": [
            "ICS221"
        ],
        "semester": "s8"
    },
    {
        "name": "Sistemas de Información para la Gestión",
        "code": "INF370",
        "sctCredits": 5,
        "type": "INFO",
        "prerequisites": [
            "ICS221",
            "INF303"
        ],
        "semester": "s8"
    },
    {
        "name": "Gestión de Operaciones",
        "code": "ICS296",
        "sctCredits": 5,
        "type": "OPER",
        "prerequisites": [
            "ICS295"
        ],
        "semester": "s8"
    },
    {
        "name": "Inglés VI",
        "code": "HCW202",
        "sctCredits": 3,
        "type": "ENGL",
        "prerequisites": [
            "HCW201"
        ],
        "semester": "s8"
    },
    {
        "name": "Políticas e Instituciones",
        "code": "HAH103",
        "sctCredits": 5,
        "type": "HUM",
        "prerequisites": [
            "HAH102"
        ],
        "semester": "s8"
    },
    {
        "name": "Taller de Emprendimiento e Innovación",
        "code": "ICS387",
        "sctCredits": 5,
        "type": "TLLR",
        "prerequisites": [
            "ICS222",
            "ICS286",
            "ICS285"
        ],
        "semester": "s9"
    },
    {
        "name": "Entorno Legal de la Empresa",
        "code": "ICS315",
        "sctCredits": 7,
        "type": "ADMI",
        "prerequisites": [
            "ICS213",
            "ICS244",
            "HAH103"
        ],
        "semester": "s9"
    },
    {
        "name": "Dirección y Liderazgo Organizacional",
        "code": "ICS113",
        "sctCredits": 6,
        "type": "ADMI",
        "prerequisites": [
            "ICS213"
        ],
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
        "prerequisites": [
            "ICS387"
        ],
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
