import { Carrera } from '../../types';

export const mat_0: Carrera = {
  codigo: 'MAT-0',
  nombre: 'Ing. Civil Matemática (Malla Antigua)',
  campus: 'cc',
  color: '#FFB6C1',
  
  categorias: [
    {
        "id": "PC",
        "nombre": "Plan Común",
        "color": "#8B5CF6"
    },
    {
        "id": "CI",
        "nombre": "Ciencias de Ingeniería",
        "color": "#06B6D4"
    },
    {
        "id": "IAA",
        "nombre": "Ingeniería Aplicada e Integración",
        "color": "#9CA3AF"
    },
    {
        "id": "FC",
        "nombre": "Formación",
        "color": "#F97316"
    },
    {
        "id": "DEW",
        "nombre": "DEFIDER",
        "color": "#DC2626"
    },
    {
        "id": "ENG",
        "nombre": "Inglés",
        "color": "#06B6D4"
    },
    {
        "id": "ICMATB",
        "nombre": "Ciencias Basicas ICMAT",
        "color": "#8B5CF6"
    },
    {
        "id": "ICMATA",
        "nombre": "Ciencias Aplicadas ICMAT",
        "color": "#A855F7"
    },
    {
        "id": "ELI",
        "nombre": "Electivo de Ingeniería",
        "color": "#3B82F6"
    },
    {
        "id": "ELG",
        "nombre": "Electivo de Gestión",
        "color": "#EF4444"
    },
    {
        "id": "COMP",
        "nombre": "Complementarios",
        "color": "#D97706"
    }
],

  asignaturas: [
    {
        "name": "Matemáticas I",
        "code": "MAT-021",
        "sctCredits": 8,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Programación",
        "code": "IWI-131",
        "sctCredits": 0,
        "type": "CI",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Física",
        "code": "FIS-100",
        "sctCredits": 6,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Ingeniería",
        "code": "IWG-101",
        "sctCredits": 0,
        "type": "IAA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Humanístico I",
        "code": "HRW-101",
        "sctCredits": 0,
        "type": "FC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "DEW-100",
        "sctCredits": 0,
        "type": "DEW",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Matemáticas II",
        "code": "MAT-022",
        "sctCredits": 7,
        "type": "PC",
        "prerequisites": [
            "MAT-021"
        ],
        "semester": "s2"
    },
    {
        "name": "Física General I",
        "code": "FIS-110",
        "sctCredits": 8,
        "type": "PC",
        "prerequisites": [
            "MAT-021",
            "FIS-100"
        ],
        "semester": "s2"
    },
    {
        "name": "Química y Sociedad",
        "code": "QUI-010",
        "sctCredits": 0,
        "type": "PC",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Humanístico II",
        "code": "HRW-102",
        "sctCredits": 0,
        "type": "FC",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Inglés 1",
        "code": "HCW-100",
        "sctCredits": 0,
        "type": "ENG",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "DEW-101",
        "sctCredits": 0,
        "type": "DEW",
        "prerequisites": [
            "DEW-100"
        ],
        "semester": "s2"
    },
    {
        "name": "Matemáticas III",
        "code": "MAT-023",
        "sctCredits": 7,
        "type": "PC",
        "prerequisites": [
            "MAT-022"
        ],
        "semester": "s3"
    },
    {
        "name": "Física General II",
        "code": "FIS-120",
        "sctCredits": 8,
        "type": "PC",
        "prerequisites": [
            "MAT-022",
            "FIS-110"
        ],
        "semester": "s3"
    },
    {
        "name": "Estructura de Datos y Algoritmos",
        "code": "ELO-320",
        "sctCredits": 0,
        "type": "CI",
        "prerequisites": [
            "IWI-131"
        ],
        "semester": "s3"
    },
    {
        "name": "Inglés 2",
        "code": "HCW-101",
        "sctCredits": 0,
        "type": "ENG",
        "prerequisites": [
            "HCW-100"
        ],
        "semester": "s3"
    },
    {
        "name": "Álgebra Lineal I",
        "code": "MAT-210",
        "sctCredits": 6,
        "type": "ICMATB",
        "prerequisites": [
            "MAT-022"
        ],
        "semester": "s3"
    },
    {
        "name": "Introducción a la Matemática Avanzada",
        "code": "MAT-125",
        "sctCredits": 6,
        "type": "ICMATB",
        "prerequisites": [
            "MAT-022"
        ],
        "semester": "s4"
    },
    {
        "name": "Probabilidades y Estadística",
        "code": "MAT-041",
        "sctCredits": 0,
        "type": "CI",
        "prerequisites": [
            "MAT-023"
        ],
        "semester": "s4"
    },
    {
        "name": "Matemáticas IV",
        "code": "MAT-024",
        "sctCredits": 6,
        "type": "PC",
        "prerequisites": [
            "MAT-023"
        ],
        "semester": "s4"
    },
    {
        "name": "Física General III",
        "code": "FIS-130",
        "sctCredits": 8,
        "type": "PC",
        "prerequisites": [
            "MAT-022",
            "FIS-110"
        ],
        "semester": "s4"
    },
    {
        "name": "Inglés 3",
        "code": "HCW-102",
        "sctCredits": 0,
        "type": "ENG",
        "prerequisites": [
            "HCW-101"
        ],
        "semester": "s4"
    },
    {
        "name": "Análisis I",
        "code": "MAT-225",
        "sctCredits": 6,
        "type": "ICMATB",
        "prerequisites": [
            "MAT-125",
            "MAT-023"
        ],
        "semester": "s5"
    },
    {
        "name": "Estructuras Algebraicas",
        "code": "MAT-214",
        "sctCredits": 6,
        "type": "ICMATB",
        "prerequisites": [
            "MAT-210"
        ],
        "semester": "s5"
    },
    {
        "name": "Física General IV",
        "code": "FIS-140",
        "sctCredits": 8,
        "type": "PC",
        "prerequisites": [
            "FIS-130",
            "FIS-120"
        ],
        "semester": "s5"
    },
    {
        "name": "Análisis Numérico I",
        "code": "MAT-270",
        "sctCredits": 0,
        "type": "CI",
        "prerequisites": [
            "MAT-024",
            "IWI-131"
        ],
        "semester": "s5"
    },
    {
        "name": "Inglés 4",
        "code": "HCW-103",
        "sctCredits": 0,
        "type": "ENG",
        "prerequisites": [
            "HCW-102"
        ],
        "semester": "s5"
    },
    {
        "name": "Análisis II",
        "code": "MAT-226",
        "sctCredits": 6,
        "type": "ICMATB",
        "prerequisites": [
            "MAT-225"
        ],
        "semester": "s6"
    },
    {
        "name": "Variable Compleja",
        "code": "MAT-235",
        "sctCredits": 5,
        "type": "ICMATB",
        "prerequisites": [
            "MAT-024"
        ],
        "semester": "s6"
    },
    {
        "name": "EDO",
        "code": "MAT-243",
        "sctCredits": 6,
        "type": "ICMATA",
        "prerequisites": [
            "MAT-210",
            "MAT-125"
        ],
        "semester": "s6"
    },
    {
        "name": "Laboratorio de Modelación I",
        "code": "MAT-282",
        "sctCredits": 6,
        "type": "IAA",
        "prerequisites": [
            "MAT-270",
            "ELO-320",
            "MAT-041"
        ],
        "semester": "s6"
    },
    {
        "name": "Fund. Investigaciones Operaciones",
        "code": "ILI-281",
        "sctCredits": 0,
        "type": "CI",
        "prerequisites": [
            "MAT-041"
        ],
        "semester": "s6"
    },
    {
        "name": "Análisis III",
        "code": "MAT-277",
        "sctCredits": 6,
        "type": "ICMATB",
        "prerequisites": [
            "MAT-226"
        ],
        "semester": "s7"
    },
    {
        "name": "Análisis Numérico II",
        "code": "MAT-274",
        "sctCredits": 5,
        "type": "ICMATA",
        "prerequisites": [
            "MAT-270"
        ],
        "semester": "s7"
    },
    {
        "name": "Teo. de Prob. y Proc. Estocásticos",
        "code": "MAT-263",
        "sctCredits": 6,
        "type": "ICMATA",
        "prerequisites": [
            "MAT-226",
            "MAT-041"
        ],
        "semester": "s7"
    },
    {
        "name": "Electivo de Ingeniería 1",
        "code": "EI-1",
        "sctCredits": 0,
        "type": "ELI",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Electivo de Gestión 1",
        "code": "EG-1",
        "sctCredits": 0,
        "type": "ELG",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Optimización no Lineal",
        "code": "MAT-279",
        "sctCredits": 0,
        "type": "ICMATA",
        "prerequisites": [
            "ILI-281",
            "MAT-225"
        ],
        "semester": "s8"
    },
    {
        "name": "EDP",
        "code": "MAT-247",
        "sctCredits": 6,
        "type": "ICMATA",
        "prerequisites": [
            "MAT-235",
            "MAT-277",
            "MAT-243"
        ],
        "semester": "s8"
    },
    {
        "name": "Inferencia Estadística",
        "code": "MAT-206",
        "sctCredits": 5,
        "type": "ICMATA",
        "prerequisites": [
            "MAT-263"
        ],
        "semester": "s8"
    },
    {
        "name": "Aplic. Matemática Ingeniería",
        "code": "MAT-281",
        "sctCredits": 4,
        "type": "IAA",
        "prerequisites": [
            "ELO-320",
            "MAT-225",
            "MAT-270"
        ],
        "semester": "s8"
    },
    {
        "name": "Electivo de Ingeniería 2",
        "code": "EI-2",
        "sctCredits": 0,
        "type": "ELI",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Optimización y Control",
        "code": "MAT-379",
        "sctCredits": 5,
        "type": "ICMATA",
        "prerequisites": [
            "MAT-226",
            "MAT-243"
        ],
        "semester": "s9"
    },
    {
        "name": "Matemática Discreta",
        "code": "MAT-215",
        "sctCredits": 5,
        "type": "ICMATA",
        "prerequisites": [
            "MAT-214"
        ],
        "semester": "s9"
    },
    {
        "name": "Análisis Numérico de EDP",
        "code": "MAT-227",
        "sctCredits": 5,
        "type": "ICMATA",
        "prerequisites": [
            "MAT-247",
            "MAT-274"
        ],
        "semester": "s9"
    },
    {
        "name": "Electivo de Ingeniería 3",
        "code": "EI-3",
        "sctCredits": 0,
        "type": "ELI",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo de Gestión 2",
        "code": "EG-2",
        "sctCredits": 0,
        "type": "ELG",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo Proyectos de Ingeniería",
        "code": "EP",
        "sctCredits": 0,
        "type": "IAA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Electivo de Ingeniería 4",
        "code": "EI-4",
        "sctCredits": 0,
        "type": "ELI",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Electivo de Ingeniería 5",
        "code": "EI-5",
        "sctCredits": 0,
        "type": "ELI",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Humanístico III",
        "code": "HRW-103",
        "sctCredits": 0,
        "type": "FC",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Electivo de Gestión 3",
        "code": "EG-3",
        "sctCredits": 0,
        "type": "ELG",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Proyecto de Memoria de Titulo",
        "code": "MAT-301",
        "sctCredits": 0,
        "type": "IAA",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Laboratorio de Modelación II",
        "code": "MAT-283",
        "sctCredits": 0,
        "type": "IAA",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Electivo de Ingeniería 6",
        "code": "EI-6",
        "sctCredits": 0,
        "type": "ELI",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Electivo de Formación Complementario",
        "code": "COM-1",
        "sctCredits": 0,
        "type": "COMP",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Electivo de Gestión 4",
        "code": "EG-4",
        "sctCredits": 0,
        "type": "ELG",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Memoria de Titulo",
        "code": "MAT-308",
        "sctCredits": 0,
        "type": "IAA",
        "prerequisites": [],
        "semester": "s12"
    },
    {
        "name": "Electivo de Formación Complementario",
        "code": "COM-2",
        "sctCredits": 0,
        "type": "COMP",
        "prerequisites": [],
        "semester": "s12"
    }
],
};
