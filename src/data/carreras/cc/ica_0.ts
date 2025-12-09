import { Carrera } from '@/types/curriculum';

export const ica_0: Carrera = {
  codigo: 'ICA-0',
  nombre: 'Ing. Civil Ambiental (Malla Antigua)',
  campus: 'cc',
  color: '#98FB98',
  
  categorias: [
    {
        "id": "MAT",
        "nombre": "Matemáticas",
        "color": "#F59E0B"
    },
    {
        "id": "FIS",
        "nombre": "Físicas",
        "color": "#3B82F6"
    },
    {
        "id": "QUI",
        "nombre": "Química",
        "color": "#DC2626"
    },
    {
        "id": "IQA",
        "nombre": "Ingeniería Química y Ambiental",
        "color": "#06B6D4"
    },
    {
        "id": "HUM",
        "nombre": "Humanistas y Deportes",
        "color": "#84CC16"
    },
    {
        "id": "INF",
        "nombre": "Informática",
        "color": "#F97316"
    },
    {
        "id": "MEC",
        "nombre": "Mecánica",
        "color": "#8B5CF6"
    },
    {
        "id": "IND",
        "nombre": "Industrias",
        "color": "#0EA5E9"
    }
],

  asignaturas: [
    {
        "name": "Matemáticas I",
        "code": "MAT021",
        "sctCredits": 8,
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
        "name": "Química y Sociedad",
        "code": "QUI010",
        "sctCredits": 0,
        "type": "QUI",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Ingeniería",
        "code": "IWG101",
        "sctCredits": 0,
        "type": "IQA",
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
        "name": "Matemáticas II",
        "code": "MAT022",
        "sctCredits": 7,
        "type": "MAT",
        "prerequisites": [
            "MAT021"
        ],
        "semester": "s2"
    },
    {
        "name": "Física General I",
        "code": "FIS110",
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [
            "MAT021",
            "FIS100"
        ],
        "semester": "s2"
    },
    {
        "name": "Programación",
        "code": "IWI131",
        "sctCredits": 0,
        "type": "INF",
        "prerequisites": [],
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
        "name": "Humanístico I",
        "code": "HRW1",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Inglés I",
        "code": "HCW100",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Matemáticas III",
        "code": "MAT023",
        "sctCredits": 7,
        "type": "MAT",
        "prerequisites": [
            "MAT022"
        ],
        "semester": "s3"
    },
    {
        "name": "Física General II",
        "code": "FIS120",
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [
            "MAT022",
            "FIS110"
        ],
        "semester": "s3"
    },
    {
        "name": "Ecosistemas y Biodiversidad",
        "code": "IQA101",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "QUI010"
        ],
        "semester": "s3"
    },
    {
        "name": "Química Básica",
        "code": "QUI026",
        "sctCredits": 0,
        "type": "QUI",
        "prerequisites": [
            "QUI010"
        ],
        "semester": "s3"
    },
    {
        "name": "Taller de Ing. Ambiental I",
        "code": "IQA321",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IWG101"
        ],
        "semester": "s3"
    },
    {
        "name": "Inglés II",
        "code": "HCW101",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [
            "HCW100"
        ],
        "semester": "s3"
    },
    {
        "name": "Optativo Ciencias",
        "code": "IQA110",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Física General III",
        "code": "FIS130",
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [
            "MAT022",
            "FIS110"
        ],
        "semester": "s4"
    },
    {
        "name": "Balance de Materia",
        "code": "IQA126",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "MAT021",
            "QUI026"
        ],
        "semester": "s4"
    },
    {
        "name": "Química Orgánica para Ing. Ambiental",
        "code": "QUI029",
        "sctCredits": 0,
        "type": "QUI",
        "prerequisites": [
            "QUI026"
        ],
        "semester": "s4"
    },
    {
        "name": "Inglés III",
        "code": "HCW102",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [
            "HCW101"
        ],
        "semester": "s4"
    },
    {
        "name": "Mecánica de Sistemas Fluidos",
        "code": "IQA221",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "FIS110"
        ],
        "semester": "s5"
    },
    {
        "name": "Microbiología Ambiental",
        "code": "IQA102",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA101"
        ],
        "semester": "s5"
    },
    {
        "name": "Termodinámica de Procesos",
        "code": "IQA211",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA126"
        ],
        "semester": "s5"
    },
    {
        "name": "Dibujo de Ing. de Procesos",
        "code": "MEC144",
        "sctCredits": 0,
        "type": "MEC",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Deportes",
        "code": "DEW0",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [
            "DEW101"
        ],
        "semester": "s5"
    },
    {
        "name": "Inglés IV",
        "code": "HCW200",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [
            "HCW102"
        ],
        "semester": "s5"
    },
    {
        "name": "Transferencia de Calor",
        "code": "IQA222",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA221",
            "IQA211"
        ],
        "semester": "s6"
    },
    {
        "name": "Análisis y Diseño de Exp. Industriales",
        "code": "IQA214",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA126"
        ],
        "semester": "s6"
    },
    {
        "name": "Termodinámica para Ingeniería Ambiental",
        "code": "IMQ212",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA211"
        ],
        "semester": "s6"
    },
    {
        "name": "Legislación Ambiental",
        "code": "IMQ340",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA321"
        ],
        "semester": "s6"
    },
    {
        "name": "Taller de Ing. Ambiental II",
        "code": "IQA322",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA321",
            "IQA101"
        ],
        "semester": "s6"
    },
    {
        "name": "Inglés V",
        "code": "HCW201",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [
            "HCW200"
        ],
        "semester": "s6"
    },
    {
        "name": "Transferencia de Materia",
        "code": "IQA224",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA222",
            "IMQ212"
        ],
        "semester": "s7"
    },
    {
        "name": "Fenómenos de Transportes",
        "code": "IQA230",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA126",
            "MAT023"
        ],
        "semester": "s7"
    },
    {
        "name": "Maquinaria Industrial Auxiliar",
        "code": "IQA270",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Gestión Ambiental",
        "code": "IMQ350",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IMQ340"
        ],
        "semester": "s7"
    },
    {
        "name": "Inglés Ambiental",
        "code": "HCW207",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [
            "HCW201"
        ],
        "semester": "s7"
    },
    {
        "name": "Humanístico II",
        "code": "HRW2",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Tratamiento de Residuos Sólidos (inglés)",
        "code": "IMQ320",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "HCW207",
            "IQA230"
        ],
        "semester": "s8"
    },
    {
        "name": "Fundamento de Control Industrial",
        "code": "IQA350",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA224"
        ],
        "semester": "s8"
    },
    {
        "name": "Ingeniería de Reactores",
        "code": "IQA261",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA224"
        ],
        "semester": "s8"
    },
    {
        "name": "Energía y Sustentabilidad (inglés)",
        "code": "IQA360",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA222",
            "HCW207"
        ],
        "semester": "s8"
    },
    {
        "name": "Taller de Ing. Ambiental III",
        "code": "IQA323",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA322"
        ],
        "semester": "s8"
    },
    {
        "name": "Humanístico III",
        "code": "HRW3",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Tratamiento de Gases (inglés)",
        "code": "IMQ310",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "HCW207",
            "IQA230"
        ],
        "semester": "s9"
    },
    {
        "name": "Remediación de Suelos y Aguas (inglés)",
        "code": "IQA361",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "HCW207",
            "IQA224",
            "IMQ320"
        ],
        "semester": "s9"
    },
    {
        "name": "Economía I-A",
        "code": "IWN170",
        "sctCredits": 0,
        "type": "IND",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Seguridad Industrial, Salud Ocupacional y Ambiente",
        "code": "IQA343",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IMQ350"
        ],
        "semester": "s9"
    },
    {
        "name": "Análisis Instrumental",
        "code": "QUI320",
        "sctCredits": 0,
        "type": "QUI",
        "prerequisites": [
            "QUI029"
        ],
        "semester": "s9"
    },
    {
        "name": "Introducción a las Ciencias de la Tierra",
        "code": "IMQ217",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA101"
        ],
        "semester": "s9"
    },
    {
        "name": "Tratamiento de Riles (inglés)",
        "code": "IMQ311",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "HCW207",
            "IQA230",
            "IQA261"
        ],
        "semester": "s10"
    },
    {
        "name": "Modelación Ambiental (inglés)",
        "code": "IMQ300",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA230",
            "HCW207"
        ],
        "semester": "s10"
    },
    {
        "name": "Economía Ambiental",
        "code": "IMQ200",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IWN170"
        ],
        "semester": "s10"
    },
    {
        "name": "Ingeniería Geográfica",
        "code": "IMQ351",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IMQ217"
        ],
        "semester": "s10"
    },
    {
        "name": "Electivo I",
        "code": "IQA331",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Electivo II",
        "code": "IQA332",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Evaluación de Impacto Ambiental",
        "code": "IMQ382",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IMQ340",
            "IMQ310",
            "IMQ311",
            "IMQ320"
        ],
        "semester": "s11"
    },
    {
        "name": "Proyecto de Título I Evaluación de Proyectos (inglés)",
        "code": "IMQ381",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IMQ310",
            "IMQ311",
            "IMQ320",
            "HCW207"
        ],
        "semester": "s11"
    },
    {
        "name": "Personas y Organización en la Industria de Procesos",
        "code": "IQA342",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IMQ311"
        ],
        "semester": "s11"
    },
    {
        "name": "Ética y Responsabilidad Social",
        "code": "IQA344",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IMQ311"
        ],
        "semester": "s11"
    },
    {
        "name": "Proyecto de Innovación de Ing. Ambiental I",
        "code": "IQA383",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA323"
        ],
        "semester": "s11"
    },
    {
        "name": "Electivo III",
        "code": "IQA333",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Proyecto de Título II",
        "code": "IQA393",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IMQ381"
        ],
        "semester": "s12"
    },
    {
        "name": "Proyecto de Innovación de Ing. Ambiental II",
        "code": "IQA384",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [
            "IQA383"
        ],
        "semester": "s12"
    },
    {
        "name": "Electivo IV",
        "code": "IQA334",
        "sctCredits": 0,
        "type": "IQA",
        "prerequisites": [],
        "semester": "s12"
    }
],
};
