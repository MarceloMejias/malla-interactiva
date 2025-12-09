import { Carrera } from '@/types/curriculum';

export const eli: Carrera = {
  codigo: 'ELI',
  nombre: 'Ing. Civil Eléctrica',
  campus: 'cc',
  color: '#FFD700',
  
  categorias: [
    {
        "id": "MATEMÁTICA",
        "nombre": "Matemática",
        "color": "#335BFF"
    },
    {
        "id": "INDUSTRIAS",
        "nombre": "Industrias",
        "color": "#FF8811"
    },
    {
        "id": "FÍSICA",
        "nombre": "Física",
        "color": "#00CED1"
    },
    {
        "id": "INGENIERÍA ELÉCTRICA",
        "nombre": "Ingeniería Eléctrica",
        "color": "#6A5ACD"
    },
    {
        "id": "INGENIERÍA COMERCIAL",
        "nombre": "Ingeniería Comercial",
        "color": "#3498DB"
    },
    {
        "id": "INFORMÁTICA",
        "nombre": "Informática",
        "color": "#a53f2b"
    },
    {
        "id": "DEFIDER",
        "nombre": "Defider",
        "color": "#e4A1F9"
    },
    {
        "id": "ESTUDIOS HUMANÍSTICOS",
        "nombre": "Estudios Humanísticos",
        "color": "#8E44AD"
    },
    {
        "id": "DIRECCION GENERAL DE DOCENCIA",
        "nombre": "Direccion General de Docencia",
        "color": "#FF1493"
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
        "name": "Circuitos Eléctricos I",
        "code": "ELI112",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
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
        "name": "Electromagnetismo",
        "code": "FIS121",
        "sctCredits": 8,
        "type": "FÍSICA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Elemento de Mecánica y Resistencia Materiales",
        "code": "ELI113",
        "sctCredits": 6,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Circuitos Eléctricos II",
        "code": "ELI122",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
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
        "name": "Estadística Computacional",
        "code": "INF135",
        "sctCredits": 6,
        "type": "INFORMÁTICA",
        "prerequisites": [
            "INF129",
            "MAT081"
        ],
        "semester": "s4"
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
        "semester": "s4"
    },
    {
        "name": "Sistemas Dinámicos",
        "code": "ELI124",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Teoría Electromagnética",
        "code": "ELI123",
        "sctCredits": 6,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Administración y Sostenibilidad Organizacional",
        "code": "AUX200",
        "sctCredits": 4,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Control Automático de Sistemas Eléctricos",
        "code": "ELI126",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Electrónica General",
        "code": "ELI127",
        "sctCredits": 6,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Fundamentos de Calor y Fluidos",
        "code": "ELI125",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Modelación de Equipamiento Eléctrico",
        "code": "ELI128",
        "sctCredits": 6,
        "type": "INGENIERÍA ELÉCTRICA",
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
        "name": "Comunicación Efectiva en Español / Inglés IV",
        "code": "HXW012",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Económica I-a",
        "code": "ICS101",
        "sctCredits": 5,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Electrónica de Potencia",
        "code": "ELI131",
        "sctCredits": 6,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Fundamentos de Máquinas Eléctricas",
        "code": "ELI132",
        "sctCredits": 6,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Laboratorio de Circuitos Eléctricos",
        "code": "ELI129",
        "sctCredits": 6,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Simulación Computacional",
        "code": "ELI133",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Alta Tensión",
        "code": "ELI135",
        "sctCredits": 6,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Ingeniería Económica",
        "code": "AUX201",
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
        "name": "Investigación de Operaciones",
        "code": "ILN200",
        "sctCredits": 6,
        "type": "INDUSTRIAS",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Máquina Accionamientos Eléctricos",
        "code": "ELI136",
        "sctCredits": 6,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Sistemas de Energía y Potencia",
        "code": "ELI137",
        "sctCredits": 6,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Gestión de Proyectos",
        "code": "AUX203",
        "sctCredits": 4,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Ingeniería de Plantas Industriales",
        "code": "ELI138",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Laboratorio de Alta Tensión",
        "code": "ELI144",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Laboratorio de Máquinas y Accionamientos Eléctricos",
        "code": "ELI145",
        "sctCredits": 6,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Sistemas de Distribución de Energía Eléctrica",
        "code": "ELI146",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Taller de Ingeniería",
        "code": "ELI143",
        "sctCredits": 4,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Electivo",
        "code": "AUX212",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Gestión de Innovación y Emprendimiento",
        "code": "ELI139",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Integración de Energías Renovables",
        "code": "ELI150",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Operación y Control de Sistemas Eléctricos",
        "code": "ELI152",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Proyectos Eléctricos",
        "code": "ELI149",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Regulación y Mercado del Sector Eléctrico",
        "code": "ELI151",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo",
        "code": "AUX214",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Electivo",
        "code": "AUX215",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Proyecto de Título",
        "code": "ELI547",
        "sctCredits": 20,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s10"
    }
],
};
