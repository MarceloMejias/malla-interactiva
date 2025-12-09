import { Carrera } from '@/types/curriculum';

export const elo: Carrera = {
  codigo: 'ELO',
  nombre: 'Ing. Civil Electrónica',
  campus: 'cc',
  color: '#4169E1',
  
  categorias: [
    {
        "id": "MATEMÁTICA",
        "nombre": "Matemática",
        "color": "#FF5733"
    },
    {
        "id": "FÍSICA",
        "nombre": "Física",
        "color": "#D69F7E"
    },
    {
        "id": "INGENIERÍA COMERCIAL",
        "nombre": "Ingeniería Comercial",
        "color": "#335BFF"
    },
    {
        "id": "INFORMÁTICA",
        "nombre": "Informática",
        "color": "#00CED1"
    },
    {
        "id": "DEFIDER",
        "nombre": "Defider",
        "color": "#a53f2b"
    },
    {
        "id": "ESTUDIOS HUMANÍSTICOS",
        "nombre": "Estudios Humanísticos",
        "color": "#FF8811"
    },
    {
        "id": "ELECTRÓNICA",
        "nombre": "Electrónica",
        "color": "#FF5964"
    },
    {
        "id": "DIRECCION GENERAL DE DOCENCIA",
        "nombre": "Direccion General de Docencia",
        "color": "#3498DB"
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
        "name": "Introducción a la Programación",
        "code": "INF129",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
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
        "name": "Proyecto Inicial",
        "code": "IWG400",
        "sctCredits": 7,
        "type": "DIRECCION GENERAL DE DOCENCIA",
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
        "name": "Cálculo en Varias Variables",
        "code": "MAT081",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Ecuaciones Diferenciales",
        "code": "MAT153",
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
        "name": "Programación Procedural y Orientada a Objetos",
        "code": "ELO113",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "INF129"
        ],
        "semester": "s3"
    },
    {
        "name": "Teoría de Redes Eléctricas",
        "code": "ELO112",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "MAT061",
            "FIS111",
            "MAT071"
        ],
        "semester": "s3"
    },
    {
        "name": "Análisis Numérico",
        "code": "MAT155",
        "sctCredits": 0,
        "type": "MATEMÁTICA",
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
        "name": "Diseño Eléctronico Con Circuitos Discretos",
        "code": "ELO114",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "ELO112"
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
        "name": "Probabilidad y Estadística",
        "code": "MAT154",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Señales y Sistemas Dinámicos de Tiempo Continuo",
        "code": "ELO115",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "MAT153",
            "FIS111",
            "MAT081"
        ],
        "semester": "s4"
    },
    {
        "name": "Análisis de Sistemas Lineales de Tiempo Discreto",
        "code": "ELO225",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "MAT155",
            "MAT154",
            "ELO115"
        ],
        "semester": "s5"
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
        "name": "Diseño de Sistemas Digitales",
        "code": "ELO227",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "ELO114",
            "ELO115"
        ],
        "semester": "s5"
    },
    {
        "name": "Diseño Eléctronico Con Circuitos Integrados",
        "code": "ELO224",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "ELO114"
        ],
        "semester": "s5"
    },
    {
        "name": "Electromagnetismo Aplicado",
        "code": "ELO228",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "ELO112"
        ],
        "semester": "s5"
    },
    {
        "name": "Laboratorio de Circuitos Eléctronicos",
        "code": "ELO226",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "ELO114",
            "ELO224"
        ],
        "semester": "s5"
    },
    {
        "name": "Arquitectura de Computadores",
        "code": "ELO232",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "ELO113",
            "ELO227"
        ],
        "semester": "s6"
    },
    {
        "name": "Control Automático",
        "code": "ELO231",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "MAT155",
            "ELO225"
        ],
        "semester": "s6"
    },
    {
        "name": "Diseño de Circuitos de Eléctronica de Potencia",
        "code": "ELO230",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "ELO224"
        ],
        "semester": "s6"
    },
    {
        "name": "Laboratorio de Sistemas Digitales",
        "code": "ELO233",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "ELO226",
            "ELO227"
        ],
        "semester": "s6"
    },
    {
        "name": "Principios de Comunicaciones",
        "code": "ELO234",
        "sctCredits": 5,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "ELO225",
            "ELO115"
        ],
        "semester": "s6"
    },
    {
        "name": "Procesamiento Digital de Señales Con Aplicaciones",
        "code": "ELO229",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "MAT155",
            "ELO225"
        ],
        "semester": "s6"
    },
    {
        "name": "Administración y Sostenibilidad Organizacional",
        "code": "AUX200",
        "sctCredits": 4,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Análisis de Sistemas de Conversión de Energía",
        "code": "ELO237",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "ELO230"
        ],
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
        "name": "Laboratorio de Comunicaciones",
        "code": "ELO238",
        "sctCredits": 5,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "ELO234"
        ],
        "semester": "s7"
    },
    {
        "name": "Laboratorio de Control Automático",
        "code": "ELO235",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "ELO226",
            "ELO231"
        ],
        "semester": "s7"
    },
    {
        "name": "Laboratorio de Microcontroladores",
        "code": "ELO236",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "ELO233",
            "ELO113",
            "ELO232"
        ],
        "semester": "s7"
    },
    {
        "name": "Responsabilidad Social y Ética Mediantes Aprendizaje y Servicio",
        "code": "ELO239",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Asignatura de Especialidad I",
        "code": "ELO246",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Asignatura de Especialidad II",
        "code": "ELO247",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Borrador",
        "code": "AUX139",
        "sctCredits": 0,
        "type": "INFORMÁTICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Diseño de Equipos Eléctronicos",
        "code": "ELO245",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [],
        "semester": "s8"
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
        "name": "Laboratorio Eléctronica de Potencia",
        "code": "ELO244",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "ELO230",
            "ELO226"
        ],
        "semester": "s8"
    },
    {
        "name": "Asignatura de la Especialidad III",
        "code": "ELO255",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Asignatura de la Especialidad IV",
        "code": "ELO256",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Asignatura de la Especialidad V",
        "code": "ELO257",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo",
        "code": "AUX213",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Gestión de la Innovación",
        "code": "AUX217",
        "sctCredits": 3,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Pre-proyecto de Titulacion",
        "code": "ELO258",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Actividad de Titulación",
        "code": "ELO557",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "ELO258"
        ],
        "semester": "s10"
    },
    {
        "name": "Asignatura de Especialidad VI",
        "code": "ELO555",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Asignatura de Especialidad VII",
        "code": "ELO556",
        "sctCredits": 0,
        "type": "ELECTRÓNICA",
        "prerequisites": [],
        "semester": "s10"
    }
],
};
