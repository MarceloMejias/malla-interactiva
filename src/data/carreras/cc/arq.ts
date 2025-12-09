import { Carrera } from '@/types/curriculum';

export const arq: Carrera = {
  codigo: 'ARQ',
  nombre: 'Arquitectura',
  campus: 'cc',
  color: '#8B4513',
  
  categorias: [
    {
        "id": "TAL",
        "nombre": "Taller",
        "color": "#14B8A6"
    },
    {
        "id": "MAT",
        "nombre": "Matemáticas",
        "color": "#F59E0B"
    },
    {
        "id": "FIS",
        "nombre": "Física y Estructuras",
        "color": "#3B82F6"
    },
    {
        "id": "TH",
        "nombre": "Teoría e Historia",
        "color": "#A3E635"
    },
    {
        "id": "HUM",
        "nombre": "Humanistas y Deportes",
        "color": "#84CC16"
    },
    {
        "id": "CONS",
        "nombre": "Construcción",
        "color": "#0EA5E9"
    },
    {
        "id": "OPT",
        "nombre": "Optativos",
        "color": "#FBBF24"
    },
    {
        "id": "ECO",
        "nombre": "Economia",
        "color": "#8B5CF6"
    },
    {
        "id": "COMP",
        "nombre": "Metodos Computacionales",
        "color": "#EF4444"
    },
    {
        "id": "URB",
        "nombre": "Urbanismo",
        "color": "#EC4899"
    },
    {
        "id": "SUST",
        "nombre": "Sustentabilidad",
        "color": "#06B6D4"
    },
    {
        "id": "TIT",
        "nombre": "Titulo",
        "color": "#6B7280"
    }
],

  asignaturas: [
    {
        "name": "Taller Introducción a la Arquitectura",
        "code": "ARQ101",
        "sctCredits": 0,
        "type": "TAL",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Matemáticas I",
        "code": "MAT050",
        "sctCredits": 0,
        "type": "MAT",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Física",
        "code": "FIS100",
        "sctCredits": 6,
        "type": "FIS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "DEW100",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Taller Introducción a la Arquitectura",
        "code": "ARQ102",
        "sctCredits": 0,
        "type": "TAL",
        "prerequisites": [
            "ARQ101"
        ],
        "semester": "s2"
    },
    {
        "name": "Matemáticas II",
        "code": "MAT051",
        "sctCredits": 0,
        "type": "MAT",
        "prerequisites": [
            "MAT050"
        ],
        "semester": "s2"
    },
    {
        "name": "Física Básica para Arquitectos",
        "code": "FIS103",
        "sctCredits": 0,
        "type": "FIS",
        "prerequisites": [
            "MAT050",
            "FIS100"
        ],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "DEW101",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [
            "DEW100"
        ],
        "semester": "s2"
    },
    {
        "name": "Taller Espacio Urbano",
        "code": "ARQ251",
        "sctCredits": 0,
        "type": "TAL",
        "prerequisites": [
            "ARQ102"
        ],
        "semester": "s3"
    },
    {
        "name": "Teoría e Historia de la ciudad",
        "code": "ARQ211",
        "sctCredits": 0,
        "type": "TH",
        "prerequisites": [
            "ARQ102"
        ],
        "semester": "s3"
    },
    {
        "name": "Matemáticas III",
        "code": "MAT052",
        "sctCredits": 0,
        "type": "MAT",
        "prerequisites": [
            "MAT051"
        ],
        "semester": "s3"
    },
    {
        "name": "Concepto de Estructuras",
        "code": "IAO261",
        "sctCredits": 0,
        "type": "FIS",
        "prerequisites": [
            "FIS103"
        ],
        "semester": "s3"
    },
    {
        "name": "Geometría Arquitectónica",
        "code": "ARQ241",
        "sctCredits": 0,
        "type": "MAT",
        "prerequisites": [
            "ARQ102",
            "MAT051"
        ],
        "semester": "s3"
    },
    {
        "name": "Deportes",
        "code": "DEW0",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [
            "DEW101"
        ],
        "semester": "s3"
    },
    {
        "name": "Taller Espacio Intermedio y Clima",
        "code": "ARQ252",
        "sctCredits": 0,
        "type": "TAL",
        "prerequisites": [
            "ARQ251"
        ],
        "semester": "s4"
    },
    {
        "name": "Teoría e Historia de la Arq. Vernácula",
        "code": "ARQ212",
        "sctCredits": 0,
        "type": "TH",
        "prerequisites": [
            "ARQ102"
        ],
        "semester": "s4"
    },
    {
        "name": "Cultura Urbana Contemporánea",
        "code": "ARQ222",
        "sctCredits": 0,
        "type": "URB",
        "prerequisites": [
            "ARQ211"
        ],
        "semester": "s4"
    },
    {
        "name": "Métodos Computacionales en Arquitectura",
        "code": "ARQ232",
        "sctCredits": 0,
        "type": "COMP",
        "prerequisites": [
            "MAT051"
        ],
        "semester": "s4"
    },
    {
        "name": "Análisis Aproximado",
        "code": "IAO262",
        "sctCredits": 0,
        "type": "FIS",
        "prerequisites": [
            "IAO261",
            "MAT051"
        ],
        "semester": "s4"
    },
    {
        "name": "Tecnologías Sustentables",
        "code": "ARQ242",
        "sctCredits": 0,
        "type": "SUST",
        "prerequisites": [
            "ARQ102",
            "FIS103"
        ],
        "semester": "s4"
    },
    {
        "name": "Taller Modelación del Espacio",
        "code": "ARQ351",
        "sctCredits": 0,
        "type": "TAL",
        "prerequisites": [
            "ARQ252",
            "MAT052"
        ],
        "semester": "s5"
    },
    {
        "name": "Teoría e Historia de la Represent. en Arq.",
        "code": "ARQ311",
        "sctCredits": 0,
        "type": "TH",
        "prerequisites": [
            "ARQ241",
            "ARQ251"
        ],
        "semester": "s5"
    },
    {
        "name": "Estrategias de Intervención Territorial",
        "code": "ARQ321",
        "sctCredits": 0,
        "type": "URB",
        "prerequisites": [
            "ARQ222"
        ],
        "semester": "s5"
    },
    {
        "name": "Taller de Métodos Computacionales en Arq.",
        "code": "ARQ331",
        "sctCredits": 0,
        "type": "COMP",
        "prerequisites": [
            "ARQ232"
        ],
        "semester": "s5"
    },
    {
        "name": "Suelos y Fundaciones",
        "code": "IAO361",
        "sctCredits": 0,
        "type": "FIS",
        "prerequisites": [
            "IAO262"
        ],
        "semester": "s5"
    },
    {
        "name": "Sistemas Constructivos Básicos",
        "code": "ARQ341",
        "sctCredits": 0,
        "type": "CONS",
        "prerequisites": [
            "IAO261",
            "FIS103"
        ],
        "semester": "s5"
    },
    {
        "name": "Taller Espacio y Tectónica",
        "code": "ARQ352",
        "sctCredits": 0,
        "type": "TAL",
        "prerequisites": [
            "ARQ351"
        ],
        "semester": "s6"
    },
    {
        "name": "Teoría e Historia de la Construcción",
        "code": "ARQ312",
        "sctCredits": 0,
        "type": "TH",
        "prerequisites": [
            "ARQ341",
            "ARQ212"
        ],
        "semester": "s6"
    },
    {
        "name": "Economía I",
        "code": "ICS733",
        "sctCredits": 0,
        "type": "ECO",
        "prerequisites": [
            "MAT052",
            "FIS103"
        ],
        "semester": "s6"
    },
    {
        "name": "Estructuras Sismorresistentes",
        "code": "IAO362",
        "sctCredits": 0,
        "type": "FIS",
        "prerequisites": [
            "IAO262"
        ],
        "semester": "s6"
    },
    {
        "name": "Pre-Practica Administración y Prog. de Obra",
        "code": "ARQ342",
        "sctCredits": 0,
        "type": "CONS",
        "prerequisites": [
            "ARQ341"
        ],
        "semester": "s6"
    },
    {
        "name": "Inglés I",
        "code": "HCW001",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Taller Avanzado I",
        "code": "ARQ451",
        "sctCredits": 0,
        "type": "TAL",
        "prerequisites": [
            "ARQ352",
            "ARQ242",
            "ARQ341"
        ],
        "semester": "s7"
    },
    {
        "name": "Marketing e Investigación de Mercado",
        "code": "ILN321",
        "sctCredits": 0,
        "type": "ECO",
        "prerequisites": [
            "ICS733"
        ],
        "semester": "s7"
    },
    {
        "name": "Optativa",
        "code": "ARQ001",
        "sctCredits": 0,
        "type": "OPT",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Instalaciones Sanitarias, Eléctricas y de Clima",
        "code": "ARQ441",
        "sctCredits": 0,
        "type": "CONS",
        "prerequisites": [
            "ARQ342"
        ],
        "semester": "s7"
    },
    {
        "name": "Inglés II",
        "code": "HCW002",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [
            "HCW001"
        ],
        "semester": "s7"
    },
    {
        "name": "Taller Avanzado II",
        "code": "ARQ452",
        "sctCredits": 0,
        "type": "TAL",
        "prerequisites": [
            "ARQ451",
            "ARQ331"
        ],
        "semester": "s8"
    },
    {
        "name": "Evaluación de Proyectos Inmobiliarios",
        "code": "ILN272",
        "sctCredits": 0,
        "type": "ECO",
        "prerequisites": [
            "ILN321"
        ],
        "semester": "s8"
    },
    {
        "name": "Optativa",
        "code": "ARQ002",
        "sctCredits": 0,
        "type": "OPT",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Hormigón Armado",
        "code": "IAO462",
        "sctCredits": 0,
        "type": "FIS",
        "prerequisites": [
            "IAO362"
        ],
        "semester": "s8"
    },
    {
        "name": "Inglés III",
        "code": "HCW003",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [
            "HCW002"
        ],
        "semester": "s8"
    },
    {
        "name": "Taller Avanzado III",
        "code": "ARQ551",
        "sctCredits": 0,
        "type": "TAL",
        "prerequisites": [
            "ARQ452"
        ],
        "semester": "s9"
    },
    {
        "name": "Gestión Territorial",
        "code": "ARQ521",
        "sctCredits": 0,
        "type": "URB",
        "prerequisites": [
            "ARQ321"
        ],
        "semester": "s9"
    },
    {
        "name": "Optativa",
        "code": "ARQ003",
        "sctCredits": 0,
        "type": "OPT",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Estructuras de Acero",
        "code": "IAO561",
        "sctCredits": 0,
        "type": "FIS",
        "prerequisites": [
            "IAO362"
        ],
        "semester": "s9"
    },
    {
        "name": "Sistemas Constructivos Complejos",
        "code": "ARQ541",
        "sctCredits": 0,
        "type": "CONS",
        "prerequisites": [
            "ARQ441"
        ],
        "semester": "s9"
    },
    {
        "name": "Proyecto de Titulación",
        "code": "ARQ650",
        "sctCredits": 0,
        "type": "TIT",
        "prerequisites": [
            "ARQ551"
        ],
        "semester": "s10"
    },
    {
        "name": "Proyecto de Titulación",
        "code": "ARQ651",
        "sctCredits": 0,
        "type": "TIT",
        "prerequisites": [
            "ARQ650"
        ],
        "semester": "s11"
    }
],
};
