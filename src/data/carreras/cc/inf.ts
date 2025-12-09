import { Carrera } from '@/types/curriculum';

export const inf: Carrera = {
  codigo: 'INF',
  nombre: 'Ing. Civil Informática',
  campus: 'cc',
  color: '#1E90FF',
  
  categorias: [
    {
        "id": "CH",
        "nombre": "Comunicación y Humanidades",
        "color": "#84CC16"
    },
    {
        "id": "CSSE",
        "nombre": "Ciencias Sociales y Económicas",
        "color": "#06B6D4"
    },
    {
        "id": "CB",
        "nombre": "Ciencias Básicas",
        "color": "#8B5CF6"
    },
    {
        "id": "CSI",
        "nombre": "Ciencias de la Ingeniería",
        "color": "#F59E0B"
    },
    {
        "id": "ESP",
        "nombre": "Especialidad",
        "color": "#3B82F6"
    },
    {
        "id": "ELEC",
        "nombre": "Electivos",
        "color": "#A855F7"
    },
    {
        "id": "CTS",
        "nombre": "Competencias Transversales Sello",
        "color": "#EC4899"
    }
],

  asignaturas: [
    {
        "name": "Introducción a la Programación",
        "code": "INF-129",
        "sctCredits": 7,
        "type": "CTS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción al Cálculo",
        "code": "MAT-070",
        "sctCredits": 6,
        "type": "CB",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Álgebra y Geometría",
        "code": "MAT-060",
        "sctCredits": 6,
        "type": "CB",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Física",
        "code": "FIS-100",
        "sctCredits": 6,
        "type": "CB",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Inglés I / Español I",
        "code": "HXW-006",
        "sctCredits": 3,
        "type": "CH",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "EFI-200",
        "sctCredits": 2,
        "type": "CTS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Proyecto Inicial",
        "code": "IWG-400",
        "sctCredits": 7,
        "type": "CTS",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Cálculo en una Variable",
        "code": "MAT-071",
        "sctCredits": 6,
        "type": "CB",
        "prerequisites": [
            "MAT-070"
        ],
        "semester": "s2"
    },
    {
        "name": "Álgebra Lineal",
        "code": "MAT-061",
        "sctCredits": 6,
        "type": "CB",
        "prerequisites": [
            "MAT-060"
        ],
        "semester": "s2"
    },
    {
        "name": "Física General Mecánica",
        "code": "FIS-110",
        "sctCredits": 6,
        "type": "CB",
        "prerequisites": [
            "FIS-100"
        ],
        "semester": "s2"
    },
    {
        "name": "Inglés II / Español II",
        "code": "HXW-007",
        "sctCredits": 3,
        "type": "CH",
        "prerequisites": [
            "HXW-006"
        ],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "EFI-201",
        "sctCredits": 2,
        "type": "CTS",
        "prerequisites": [
            "EFI-200"
        ],
        "semester": "s2"
    },
    {
        "name": "Programación Avanzada",
        "code": "INF-131",
        "sctCredits": 6,
        "type": "ESP",
        "prerequisites": [
            "INF-129"
        ],
        "semester": "s3"
    },
    {
        "name": "Matemática Discreta",
        "code": "INF-132",
        "sctCredits": 5,
        "type": "ESP",
        "prerequisites": [
            "MAT-070"
        ],
        "semester": "s3"
    },
    {
        "name": "Cálculo en Varias Variables",
        "code": "MAT-081",
        "sctCredits": 6,
        "type": "CB",
        "prerequisites": [
            "MAT-061",
            "MAT-071"
        ],
        "semester": "s3"
    },
    {
        "name": "Calor y Ondas",
        "code": "FIS-112",
        "sctCredits": 6,
        "type": "CB",
        "prerequisites": [
            "FIS-110"
        ],
        "semester": "s3"
    },
    {
        "name": "Análisis Crítico de Texto",
        "code": "HXW-008",
        "sctCredits": 3,
        "type": "CH",
        "prerequisites": [
            "HXW-007"
        ],
        "semester": "s3"
    },
    {
        "name": "Administración y Sostenibilidad Organizacional",
        "code": "AUX-200",
        "sctCredits": 4,
        "type": "CSSE",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Estructura de Datos",
        "code": "INF-133",
        "sctCredits": 6,
        "type": "ESP",
        "prerequisites": [
            "INF-131"
        ],
        "semester": "s4"
    },
    {
        "name": "Estadística Computacional",
        "code": "INF-135",
        "sctCredits": 6,
        "type": "CSI",
        "prerequisites": [
            "INF-129"
        ],
        "semester": "s4"
    },
    {
        "name": "Ecuaciones Diferenciales Elementales",
        "code": "MAT-053",
        "sctCredits": 5,
        "type": "CB",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Electricidad y Magnetismo",
        "code": "FIS-114",
        "sctCredits": 6,
        "type": "CB",
        "prerequisites": [
            "FIS-112"
        ],
        "semester": "s4"
    },
    {
        "name": "Inglés III / Español III",
        "code": "HXW-009",
        "sctCredits": 3,
        "type": "CH",
        "prerequisites": [
            "HXW-008"
        ],
        "semester": "s4"
    },
    {
        "name": "Ingeniería Económica",
        "code": "AUX-201",
        "sctCredits": 4,
        "type": "CSSE",
        "prerequisites": [
            "AUX-200"
        ],
        "semester": "s4"
    },
    {
        "name": "Bases de Datos",
        "code": "INF-138",
        "sctCredits": 5,
        "type": "CSI",
        "prerequisites": [
            "INF-133"
        ],
        "semester": "s5"
    },
    {
        "name": "Arquitectura y Organización de Computadores",
        "code": "INF-140",
        "sctCredits": 5,
        "type": "CSI",
        "prerequisites": [
            "INF-133"
        ],
        "semester": "s5"
    },
    {
        "name": "Paradigmas de Programación",
        "code": "INF-141",
        "sctCredits": 5,
        "type": "ESP",
        "prerequisites": [
            "INF-133"
        ],
        "semester": "s5"
    },
    {
        "name": "Teorema de Autómatas y Lenguajes formales",
        "code": "INF-143",
        "sctCredits": 5,
        "type": "ESP",
        "prerequisites": [
            "INF-132"
        ],
        "semester": "s5"
    },
    {
        "name": "Optimización",
        "code": "INF-229",
        "sctCredits": 5,
        "type": "CTS",
        "prerequisites": [
            "INF-133"
        ],
        "semester": "s5"
    },
    {
        "name": "Ingeniería, Informática y Sociedad",
        "code": "INF-142",
        "sctCredits": 5,
        "type": "ESP",
        "prerequisites": [
            "IWG-400"
        ],
        "semester": "s5"
    },
    {
        "name": "Análisis y Diseño de Software",
        "code": "INF-146",
        "sctCredits": 5,
        "type": "CSI",
        "prerequisites": [
            "INF-138"
        ],
        "semester": "s6"
    },
    {
        "name": "Sistemas Operativos",
        "code": "INF-145",
        "sctCredits": 5,
        "type": "ESP",
        "prerequisites": [
            "INF-140"
        ],
        "semester": "s6"
    },
    {
        "name": "Computación Científica",
        "code": "INF-147",
        "sctCredits": 6,
        "type": "ESP",
        "prerequisites": [
            "INF-133"
        ],
        "semester": "s6"
    },
    {
        "name": "Algoritmos y Complejidad",
        "code": "INF-144",
        "sctCredits": 6,
        "type": "ESP",
        "prerequisites": [
            "INF-133"
        ],
        "semester": "s6"
    },
    {
        "name": "Investigación de operaciones",
        "code": "INF-148",
        "sctCredits": 5,
        "type": "ESP",
        "prerequisites": [
            "INF-135"
        ],
        "semester": "s6"
    },
    {
        "name": "Inglés IV / Español IV",
        "code": "HXW-012",
        "sctCredits": 3,
        "type": "CH",
        "prerequisites": [
            "HXW-009"
        ],
        "semester": "s6"
    },
    {
        "name": "Ingeniería de Software",
        "code": "INF-156",
        "sctCredits": 5,
        "type": "ESP",
        "prerequisites": [
            "INF-146"
        ],
        "semester": "s7"
    },
    {
        "name": "Redes y Ciberseguridad",
        "code": "INF-154",
        "sctCredits": 6,
        "type": "ESP",
        "prerequisites": [
            "INF-140"
        ],
        "semester": "s7"
    },
    {
        "name": "Inteligencia Artificial I",
        "code": "INF-157",
        "sctCredits": 6,
        "type": "ESP",
        "prerequisites": [
            "INF-147"
        ],
        "semester": "s7"
    },
    {
        "name": "Teoría de Sistemas",
        "code": "INF-153",
        "sctCredits": 5,
        "type": "ESP",
        "prerequisites": [
            "MAT-053"
        ],
        "semester": "s7"
    },
    {
        "name": "Ciencia de Datos",
        "code": "INF-158",
        "sctCredits": 5,
        "type": "ESP",
        "prerequisites": [
            "INF-135"
        ],
        "semester": "s7"
    },
    {
        "name": "Inglés Disciplinar",
        "code": "AUX-202",
        "sctCredits": 3,
        "type": "CH",
        "prerequisites": [
            "AUX-201"
        ],
        "semester": "s7"
    },
    {
        "name": "Diseño de Experiencia Usuaria",
        "code": "INF-165",
        "sctCredits": 5,
        "type": "ESP",
        "prerequisites": [
            "INF-146"
        ],
        "semester": "s8"
    },
    {
        "name": "Sistemas Distribuidos",
        "code": "INF-164",
        "sctCredits": 5,
        "type": "ESP",
        "prerequisites": [
            "INF-145"
        ],
        "semester": "s8"
    },
    {
        "name": "Electivo Informática I",
        "code": "AUX-219",
        "sctCredits": 5,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Inteligencia Artificial II",
        "code": "INF-166",
        "sctCredits": 5,
        "type": "ESP",
        "prerequisites": [
            "INF-157"
        ],
        "semester": "s8"
    },
    {
        "name": "Sistemas para la Gestión Organizacional",
        "code": "INF-167",
        "sctCredits": 5,
        "type": "ESP",
        "prerequisites": [
            "INF-142"
        ],
        "semester": "s8"
    },
    {
        "name": "Proyecto de Ingeniería",
        "code": "INF-163",
        "sctCredits": 5,
        "type": "ESP",
        "prerequisites": [
            "INF-144"
        ],
        "semester": "s8"
    },
    {
        "name": "Electivo",
        "code": "INF-302",
        "sctCredits": 5,
        "type": "ELEC",
        "prerequisites": [
            "AUX-219"
        ],
        "semester": "s9"
    },
    {
        "name": "Electivo Disciplinar",
        "code": "INF-169",
        "sctCredits": 6,
        "type": "ESP",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo Disciplinar II",
        "code": "INF-170",
        "sctCredits": 6,
        "type": "ESP",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo Disciplinar III",
        "code": "INF-171",
        "sctCredits": 6,
        "type": "ESP",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Gestión de Proyectos de Informática",
        "code": "INF-168",
        "sctCredits": 7,
        "type": "CSSE",
        "prerequisites": [
            "AUX-202"
        ],
        "semester": "s9"
    },
    {
        "name": "Taller Complementario de Titulación",
        "code": "INF-539",
        "sctCredits": 4,
        "type": "ESP",
        "prerequisites": [
            "INF-168"
        ],
        "semester": "s10"
    },
    {
        "name": "Electivo Disciplinar IV",
        "code": "INF-540",
        "sctCredits": 6,
        "type": "ESP",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Electivo Disciplinar V",
        "code": "INF-541",
        "sctCredits": 6,
        "type": "ESP",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Taller de Desarrollo de Proyectos de Informática",
        "code": "INF-538",
        "sctCredits": 14,
        "type": "ESP",
        "prerequisites": [
            "INF-164"
        ],
        "semester": "s10"
    }
],
};
