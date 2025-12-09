import { Carrera } from '@/types/curriculum';

export const mec: Carrera = {
  codigo: 'MEC',
  nombre: 'Ing. Civil Mecánica',
  campus: 'cc',
  color: '#2F4F4F',
  
  categorias: [
    {
        "id": "CB",
        "nombre": "Ciencias Básicas",
        "color": "#8B5CF6"
    },
    {
        "id": "FG",
        "nombre": "Formación General",
        "color": "#84CC16"
    },
    {
        "id": "CDI",
        "nombre": "Ciencias de la Ingeniería",
        "color": "#F59E0B"
    },
    {
        "id": "IA",
        "nombre": "Ingeniería Aplicada",
        "color": "#06B6D4"
    },
    {
        "id": "GA",
        "nombre": "Gestión y Administración",
        "color": "#A855F7"
    },
    {
        "id": "EFP",
        "nombre": "Electivos de Formación Profesional",
        "color": "#F97316"
    }
],

  asignaturas: [
    {
        "name": "Programación",
        "code": "IWI131",
        "sctCredits": 5,
        "type": "CB",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Matemáticas I",
        "code": "MAT021",
        "sctCredits": 8,
        "type": "CB",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Física",
        "code": "FIS100",
        "sctCredits": 5,
        "type": "CB",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Ingeniería Mecánica",
        "code": "MEC101",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "DEW100",
        "sctCredits": 2,
        "type": "FG",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Química y Sociedad",
        "code": "QUI010",
        "sctCredits": 5,
        "type": "CB",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Matemáticas II",
        "code": "MAT022",
        "sctCredits": 8,
        "type": "CB",
        "prerequisites": [
            "MAT021"
        ],
        "semester": "s2"
    },
    {
        "name": "Física General I",
        "code": "FIS110",
        "sctCredits": 6,
        "type": "CB",
        "prerequisites": [
            "MAT021",
            "FIS100"
        ],
        "semester": "s2"
    },
    {
        "name": "Gráfica en Ingeniería Mecánica",
        "code": "MEC141",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [
            "FIS100"
        ],
        "semester": "s2"
    },
    {
        "name": "Inglés I",
        "code": "HCW100",
        "sctCredits": 3,
        "type": "FG",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "DEW101",
        "sctCredits": 2,
        "type": "FG",
        "prerequisites": [
            "DEW100"
        ],
        "semester": "s2"
    },
    {
        "name": "Matemáticas III",
        "code": "MAT023",
        "sctCredits": 6,
        "type": "CB",
        "prerequisites": [
            "MAT022"
        ],
        "semester": "s3"
    },
    {
        "name": "Física General II",
        "code": "FIS120",
        "sctCredits": 6,
        "type": "CB",
        "prerequisites": [
            "MAT022",
            "FIS110"
        ],
        "semester": "s3"
    },
    {
        "name": "Estática",
        "code": "MEC151",
        "sctCredits": 5,
        "type": "CDI",
        "prerequisites": [
            "MAT022",
            "FIS110"
        ],
        "semester": "s3"
    },
    {
        "name": "Materiales Para Ingeniería",
        "code": "MET203",
        "sctCredits": 5,
        "type": "CDI",
        "prerequisites": [
            "FIS110",
            "QUI010"
        ],
        "semester": "s3"
    },
    {
        "name": "Gráfica de Sistemas Mecánicos",
        "code": "MEC142",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [
            "MEC141"
        ],
        "semester": "s3"
    },
    {
        "name": "Inglés II",
        "code": "HCW101",
        "sctCredits": 3,
        "type": "FG",
        "prerequisites": [
            "HCW100"
        ],
        "semester": "s3"
    },
    {
        "name": "Matemáticas IV",
        "code": "MAT024",
        "sctCredits": 6,
        "type": "CB",
        "prerequisites": [
            "MAT023"
        ],
        "semester": "s4"
    },
    {
        "name": "Física General IV",
        "code": "FIS140",
        "sctCredits": 5,
        "type": "CB",
        "prerequisites": [
            "FIS120"
        ],
        "semester": "s4"
    },
    {
        "name": "Dinámica",
        "code": "MEC252",
        "sctCredits": 6,
        "type": "CDI",
        "prerequisites": [
            "MAT023",
            "MEC151"
        ],
        "semester": "s4"
    },
    {
        "name": "Tecnología de Taller",
        "code": "MEC160",
        "sctCredits": 7,
        "type": "IA",
        "prerequisites": [
            "MEC141",
            "MET203",
            "MEC151"
        ],
        "semester": "s4"
    },
    {
        "name": "Inglés III",
        "code": "HCW102",
        "sctCredits": 3,
        "type": "FG",
        "prerequisites": [
            "HCW101"
        ],
        "semester": "s4"
    },
    {
        "name": "Análisis Numérico",
        "code": "MAT270",
        "sctCredits": 5,
        "type": "CB",
        "prerequisites": [
            "MAT024"
        ],
        "semester": "s5"
    },
    {
        "name": "Mecánica de Materiales",
        "code": "MEC255",
        "sctCredits": 7,
        "type": "CDI",
        "prerequisites": [
            "MEC151",
            "MET203"
        ],
        "semester": "s5"
    },
    {
        "name": "Termodinámica",
        "code": "MEC110",
        "sctCredits": 6,
        "type": "CDI",
        "prerequisites": [
            "MAT023",
            "FIS110"
        ],
        "semester": "s5"
    },
    {
        "name": "Ingles IV",
        "code": "HCW200",
        "sctCredits": 3,
        "type": "FG",
        "prerequisites": [
            "HCW102"
        ],
        "semester": "s5"
    },
    {
        "name": "Visión Trascendental del QueHacer Humano",
        "code": "HRW101",
        "sctCredits": 3,
        "type": "FG",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Probabilidad y Estadística para Ingeniería",
        "code": "MAT035",
        "sctCredits": 7,
        "type": "CB",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Mecánica de Fluidos",
        "code": "MEC120",
        "sctCredits": 7,
        "type": "CDI",
        "prerequisites": [
            "MAT024",
            "MEC110"
        ],
        "semester": "s6"
    },
    {
        "name": "Procesos de Manufactura",
        "code": "MEC161",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [
            "MEC160"
        ],
        "semester": "s6"
    },
    {
        "name": "Elementos de Máquinas",
        "code": "MEC258",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [
            "MEC255"
        ],
        "semester": "s6"
    },
    {
        "name": "Visión Inmanente del QueHacer Humano",
        "code": "HRW102",
        "sctCredits": 3,
        "type": "FG",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Mecánica de Fluidos Avanzadas",
        "code": "MEC220",
        "sctCredits": 5,
        "type": "CDI",
        "prerequisites": [
            "MEC120"
        ],
        "semester": "s7"
    },
    {
        "name": "Mecánica de Máquinas",
        "code": "MEC353",
        "sctCredits": 5,
        "type": "CDI",
        "prerequisites": [
            "MAT270",
            "MEC252"
        ],
        "semester": "s7"
    },
    {
        "name": "Transferencia de Calor",
        "code": "MEC230",
        "sctCredits": 6,
        "type": "CDI",
        "prerequisites": [
            "MEC120"
        ],
        "semester": "s7"
    },
    {
        "name": "Fundamentos del Diseño",
        "code": "MEC245",
        "sctCredits": 5,
        "type": "CDI",
        "prerequisites": [
            "MEC161"
        ],
        "semester": "s7"
    },
    {
        "name": "Termodinámica Aplicada",
        "code": "MEC210",
        "sctCredits": 7,
        "type": "IA",
        "prerequisites": [
            "MEC110"
        ],
        "semester": "s7"
    },
    {
        "name": "Visión Estética del QueHacer Humano",
        "code": "HRW103",
        "sctCredits": 3,
        "type": "FG",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Ingeniería Térmica",
        "code": "MEC278",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [
            "MEC220",
            "MEC230"
        ],
        "semester": "s8"
    },
    {
        "name": "Mediciones Mecánicas",
        "code": "MEC260",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [
            "MEC160"
        ],
        "semester": "s8"
    },
    {
        "name": "Fundamentos de Electrotecnia",
        "code": "ELI270",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [
            "MAT022",
            "FIS120"
        ],
        "semester": "s8"
    },
    {
        "name": "Diseño mecánico",
        "code": "MEC388",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [
            "MEC258",
            "MEC161"
        ],
        "semester": "s8"
    },
    {
        "name": "Fundamentos de Economía y Financiamiento",
        "code": "ICS761",
        "sctCredits": 5,
        "type": "GA",
        "prerequisites": [
            "MAT035"
        ],
        "semester": "s8"
    },
    {
        "name": "Electivo 1",
        "code": "MEC1",
        "sctCredits": 5,
        "type": "EFP",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Equipo y Máquinas Térmicas",
        "code": "MEC378",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [
            "MEC278"
        ],
        "semester": "s9"
    },
    {
        "name": "Métodos Numéricos en Ingeniería Mecánica",
        "code": "MEC270",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [
            "MAT270",
            "MEC255",
            "MEC120"
        ],
        "semester": "s9"
    },
    {
        "name": "Fundamentos de Calidad",
        "code": "MEC280",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [
            "MAT035"
        ],
        "semester": "s9"
    },
    {
        "name": "Fundamentos de Electronica",
        "code": "ILD208",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [
            "FIS120"
        ],
        "semester": "s9"
    },
    {
        "name": "Fundamentos de Administración y Legislación",
        "code": "ICS762",
        "sctCredits": 5,
        "type": "GA",
        "prerequisites": [
            "ICS761"
        ],
        "semester": "s9"
    },
    {
        "name": "Electivo 2",
        "code": "MEC2",
        "sctCredits": 5,
        "type": "EFP",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Automatización, Neumática y Oleohidráulica",
        "code": "MEC373",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [
            "MEC260",
            "MEC120"
        ],
        "semester": "s10"
    },
    {
        "name": "Turbomáquinas",
        "code": "MEC374",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [
            "MEC120"
        ],
        "semester": "s10"
    },
    {
        "name": "Ingeniería Ambiental",
        "code": "MEC385",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [
            "MEC120"
        ],
        "semester": "s10"
    },
    {
        "name": "Formulación de Proyectos",
        "code": "MEC380",
        "sctCredits": 5,
        "type": "GA",
        "prerequisites": [
            "ICS761"
        ],
        "semester": "s10"
    },
    {
        "name": "Electivo 3",
        "code": "MEC3",
        "sctCredits": 5,
        "type": "EFP",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Seminario de Titulación",
        "code": "MEC397",
        "sctCredits": 3,
        "type": "IA",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Ingeniería del Mantenimiento",
        "code": "MEC382",
        "sctCredits": 5,
        "type": "IA",
        "prerequisites": [
            "MEC258",
            "MEC161",
            "MEC373"
        ],
        "semester": "s11"
    },
    {
        "name": "Proyecto en Ingeniería Mecánica",
        "code": "MEC381",
        "sctCredits": 5,
        "type": "GA",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Gestión de la Producción y Operaciones",
        "code": "MEC387",
        "sctCredits": 5,
        "type": "GA",
        "prerequisites": [
            "MEC280",
            "ICS761"
        ],
        "semester": "s11"
    },
    {
        "name": "Electivo 4",
        "code": "MEC4",
        "sctCredits": 5,
        "type": "EFP",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Memoria de Título",
        "code": "MEC399",
        "sctCredits": 13,
        "type": "IA",
        "prerequisites": [],
        "semester": "s12"
    },
    {
        "name": "Electivo 5",
        "code": "MEC5",
        "sctCredits": 5,
        "type": "EFP",
        "prerequisites": [],
        "semester": "s12"
    }
],
};
