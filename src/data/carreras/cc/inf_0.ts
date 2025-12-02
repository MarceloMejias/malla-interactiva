import { Carrera } from '../../types';

export const inf_0: Carrera = {
  codigo: 'INF-0',
  nombre: 'Ing. Civil Informática (Malla Antigua)',
  campus: 'cc',
  color: '#87CEEB',
  
  categorias: [
    {
        "id": "PC",
        "nombre": "Plan Común",
        "color": "#8B5CF6"
    },
    {
        "id": "FI",
        "nombre": "Fundamentos de Informática",
        "color": "#3B82F6"
    },
    {
        "id": "HUM",
        "nombre": "Humanistas, libres y deportes",
        "color": "#84CC16"
    },
    {
        "id": "TIN",
        "nombre": "Transversal e Integración",
        "color": "#F43F5E"
    },
    {
        "id": "SD",
        "nombre": "Sistemas de decisión informática",
        "color": "#DC2626"
    },
    {
        "id": "IND",
        "nombre": "Industrias",
        "color": "#0EA5E9"
    },
    {
        "id": "IS",
        "nombre": "Ingeniería de Software",
        "color": "#FACC15"
    },
    {
        "id": "TIC",
        "nombre": "Infraestructura TIC",
        "color": "#A855F7"
    },
    {
        "id": "AN",
        "nombre": "Análisis Numérico",
        "color": "#06B6D4"
    },
    {
        "id": "ELEC",
        "nombre": "Electivos Informática",
        "color": "#F97316"
    }
],

  asignaturas: [
    {
        "name": "Programación",
        "code": "IWI-131",
        "sctCredits": 5,
        "type": "FI",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Matemáticas I",
        "code": "MAT-021",
        "sctCredits": 8,
        "type": "PC",
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
        "name": "Humanístico I",
        "code": "HRW-132",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "DEW-100",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Química y Sociedad",
        "code": "QUI-010",
        "sctCredits": 5,
        "type": "PC",
        "prerequisites": [],
        "semester": "s2"
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
        "name": "Introducción a la Ingeniería",
        "code": "IWG-101",
        "sctCredits": 3,
        "type": "TIN",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Humanístico II",
        "code": "HRW-133",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "DEW-101",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [
            "DEW-100"
        ],
        "semester": "s2"
    },
    {
        "name": "Estructuras de Datos",
        "code": "INF-134",
        "sctCredits": 5,
        "type": "FI",
        "prerequisites": [
            "IWI-131"
        ],
        "semester": "s3"
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
        "name": "Física General III",
        "code": "FIS-130",
        "sctCredits": 8,
        "type": "PC",
        "prerequisites": [
            "MAT-022",
            "FIS-110"
        ],
        "semester": "s3"
    },
    {
        "name": "Estructuras Discretas",
        "code": "INF-152",
        "sctCredits": 5,
        "type": "FI",
        "prerequisites": [
            "IWI-131",
            "MAT-021"
        ],
        "semester": "s3"
    },
    {
        "name": "Teoría de Sistemas",
        "code": "INF-260",
        "sctCredits": 5,
        "type": "SD",
        "prerequisites": [
            "IWG-101"
        ],
        "semester": "s3"
    },
    {
        "name": "Libre I",
        "code": "INF-1",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Lenguajes de Programación",
        "code": "INF-253",
        "sctCredits": 5,
        "type": "FI",
        "prerequisites": [
            "INF-134"
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
        "name": "Física General II",
        "code": "FIS-120",
        "sctCredits": 8,
        "type": "PC",
        "prerequisites": [
            "MAT-022",
            "FIS-110"
        ],
        "semester": "s4"
    },
    {
        "name": "Informática Teórica",
        "code": "INF-155",
        "sctCredits": 5,
        "type": "FI",
        "prerequisites": [
            "INF-134",
            "INF-152"
        ],
        "semester": "s4"
    },
    {
        "name": "Economía IA",
        "code": "IWN-170",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "MAT-023"
        ],
        "semester": "s4"
    },
    {
        "name": "Libre II",
        "code": "INF-2",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Bases de Datos",
        "code": "INF-239",
        "sctCredits": 5,
        "type": "IS",
        "prerequisites": [
            "INF-134"
        ],
        "semester": "s5"
    },
    {
        "name": "Arquitectura y Organización de Computadores",
        "code": "INF-245",
        "sctCredits": 5,
        "type": "TIC",
        "prerequisites": [
            "INF-134"
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
        "name": "Estadística Computacional",
        "code": "INF-280",
        "sctCredits": 5,
        "type": "AN",
        "prerequisites": [
            "IWI-131",
            "MAT-023"
        ],
        "semester": "s5"
    },
    {
        "name": "Organizaciones y Sistemas de Información",
        "code": "INF-270",
        "sctCredits": 5,
        "type": "SD",
        "prerequisites": [
            "INF-260"
        ],
        "semester": "s5"
    },
    {
        "name": "Libre III",
        "code": "INF-3",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Análisis y Diseño de Software",
        "code": "INF-236",
        "sctCredits": 5,
        "type": "IS",
        "prerequisites": [
            "INF-239",
            "INF-253"
        ],
        "semester": "s6"
    },
    {
        "name": "Sistemas Operativos",
        "code": "INF-246",
        "sctCredits": 5,
        "type": "TIC",
        "prerequisites": [
            "INF-245"
        ],
        "semester": "s6"
    },
    {
        "name": "Ingeniería, Informática y Sociedad",
        "code": "INF-276",
        "sctCredits": 5,
        "type": "TIN",
        "prerequisites": [
            "INF-270"
        ],
        "semester": "s6"
    },
    {
        "name": "Algoritmos y Complejidad",
        "code": "INF-221",
        "sctCredits": 5,
        "type": "FI",
        "prerequisites": [
            "INF-152",
            "INF-253"
        ],
        "semester": "s6"
    },
    {
        "name": "Optimización",
        "code": "INF-292",
        "sctCredits": 5,
        "type": "SD",
        "prerequisites": [
            "IWI-131",
            "MAT-023"
        ],
        "semester": "s6"
    },
    {
        "name": "Libre IV",
        "code": "INF-4",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Ingeniería de Software",
        "code": "INF-225",
        "sctCredits": 5,
        "type": "IS",
        "prerequisites": [
            "INF-236"
        ],
        "semester": "s7"
    },
    {
        "name": "Redes de Computadores",
        "code": "INF-256",
        "sctCredits": 5,
        "type": "TIC",
        "prerequisites": [
            "INF-246"
        ],
        "semester": "s7"
    },
    {
        "name": "Información y Matemáticas Financieras",
        "code": "ICN-270",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "IWN-170"
        ],
        "semester": "s7"
    },
    {
        "name": "Computación Científica",
        "code": "INF-285",
        "sctCredits": 5,
        "type": "AN",
        "prerequisites": [
            "MAT-024",
            "INF-221"
        ],
        "semester": "s7"
    },
    {
        "name": "Investigación de Operaciones",
        "code": "INF-293",
        "sctCredits": 5,
        "type": "SD",
        "prerequisites": [
            "INF-280",
            "INF-292"
        ],
        "semester": "s7"
    },
    {
        "name": "Libre V",
        "code": "INF-5",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Diseño Interfaces Usuarias",
        "code": "INF-322",
        "sctCredits": 5,
        "type": "IS",
        "prerequisites": [
            "INF-225"
        ],
        "semester": "s8"
    },
    {
        "name": "Sistemas Distribuidos",
        "code": "INF-343",
        "sctCredits": 5,
        "type": "TIC",
        "prerequisites": [
            "INF-256"
        ],
        "semester": "s8"
    },
    {
        "name": "Electivo Informática I",
        "code": "INF-301",
        "sctCredits": 5,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Inteligencia Artificial",
        "code": "INF-295",
        "sctCredits": 5,
        "type": "AN",
        "prerequisites": [
            "INF-292",
            "INF-134"
        ],
        "semester": "s8"
    },
    {
        "name": "Sistemas de Gestión",
        "code": "INF-266",
        "sctCredits": 5,
        "type": "SD",
        "prerequisites": [
            "INF-276"
        ],
        "semester": "s8"
    },
    {
        "name": "Libre VI",
        "code": "INF-6",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Electivo Informática II",
        "code": "INF-302",
        "sctCredits": 5,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo Informática III",
        "code": "INF-303",
        "sctCredits": 5,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo I",
        "code": "INF-311",
        "sctCredits": 5,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo II",
        "code": "INF-312",
        "sctCredits": 5,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Gestión de Proyectos de Informática",
        "code": "INF-360",
        "sctCredits": 5,
        "type": "SD",
        "prerequisites": [
            "INF-322",
            "INF-266"
        ],
        "semester": "s9"
    },
    {
        "name": "Libre VII",
        "code": "INF-7",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo Informática IV",
        "code": "INF-304",
        "sctCredits": 5,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Electivo III",
        "code": "INF-313",
        "sctCredits": 5,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Electivo IV",
        "code": "INF-314",
        "sctCredits": 5,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Taller Desarrollo de Proyecto de Informática",
        "code": "INF-228",
        "sctCredits": 10,
        "type": "TIN",
        "prerequisites": [
            "INF-360"
        ],
        "semester": "s10"
    },
    {
        "name": "Trabajo de Título 1",
        "code": "INF-309",
        "sctCredits": 2,
        "type": "TIN",
        "prerequisites": [
            "INF-360"
        ],
        "semester": "s10"
    },
    {
        "name": "Trabajo de Título 2",
        "code": "INF-310",
        "sctCredits": 20,
        "type": "TIN",
        "prerequisites": [
            "INF-228",
            "INF-309"
        ],
        "semester": "s11"
    }
],
};
