import { Carrera } from '../../types';

export const elo_0: Carrera = {
  codigo: 'ELO-0',
  nombre: 'Ing. Civil Electrónica (Malla Antigua)',
  campus: 'cc',
  color: '#6495ED',
  
  categorias: [
    {
        "id": "CEL",
        "nombre": "Matemáticas",
        "color": "#F59E0B"
    },
    {
        "id": "FI",
        "nombre": "Físicas",
        "color": "#3B82F6"
    },
    {
        "id": "HUM",
        "nombre": "Humanistas y Deportes",
        "color": "#84CC16"
    },
    {
        "id": "ROS",
        "nombre": "Plan Común",
        "color": "#8B5CF6"
    },
    {
        "id": "RO",
        "nombre": "Laboratorios",
        "color": "#DC2626"
    },
    {
        "id": "IND",
        "nombre": "Industrias",
        "color": "#0EA5E9"
    },
    {
        "id": "AMA",
        "nombre": "Asignaturas de mención",
        "color": "#FACC15"
    },
    {
        "id": "MO",
        "nombre": "Asignaturas complementarias",
        "color": "#8B5CF6"
    },
    {
        "id": "VER",
        "nombre": "Electrónica",
        "color": "#06B6D4"
    },
    {
        "id": "NARA",
        "nombre": "Titulación",
        "color": "#F97316"
    }
],

  asignaturas: [
    {
        "name": "Química y Sociedad",
        "code": "QUI010",
        "sctCredits": 5,
        "type": "ROS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Matemáticas I",
        "code": "MAT021",
        "sctCredits": 8,
        "type": "CEL",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Física",
        "code": "FIS100",
        "sctCredits": 6,
        "type": "FI",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "DEW100",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Ingeniería",
        "code": "IWG101",
        "sctCredits": 3,
        "type": "FI",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Programación",
        "code": "IWI131",
        "sctCredits": 5,
        "type": "ROS",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Matemáticas II",
        "code": "MAT022",
        "sctCredits": 7,
        "type": "CEL",
        "prerequisites": [
            "MAT021"
        ],
        "semester": "s2"
    },
    {
        "name": "Física General I",
        "code": "FIS110",
        "sctCredits": 8,
        "type": "FI",
        "prerequisites": [
            "MAT021",
            "FIS100"
        ],
        "semester": "s2"
    },
    {
        "name": "Humanístico I",
        "code": "HRW1",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "DEW101",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [
            "DEW100"
        ],
        "semester": "s2"
    },
    {
        "name": "Teoría de Redes Eléctricas I",
        "code": "ELO102",
        "sctCredits": 6,
        "type": "VER",
        "prerequisites": [
            "MAT022",
            "FIS110"
        ],
        "semester": "s3"
    },
    {
        "name": "Matemáticas III",
        "code": "MAT023",
        "sctCredits": 7,
        "type": "CEL",
        "prerequisites": [
            "MAT022"
        ],
        "semester": "s3"
    },
    {
        "name": "Física General II",
        "code": "FIS120",
        "sctCredits": 8,
        "type": "FI",
        "prerequisites": [
            "MAT022",
            "FIS110"
        ],
        "semester": "s3"
    },
    {
        "name": "Humanístico II",
        "code": "HRW2",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Humanístico III",
        "code": "HRW3",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Deportes",
        "code": "DEW0",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [
            "DEW101"
        ],
        "semester": "s3"
    },
    {
        "name": "Teoría de Redes Eléctricas II",
        "code": "ELO103",
        "sctCredits": 5,
        "type": "VER",
        "prerequisites": [
            "ELO102"
        ],
        "semester": "s4"
    },
    {
        "name": "Análisis de Sistemas Lineales",
        "code": "ELO104",
        "sctCredits": 5,
        "type": "VER",
        "prerequisites": [
            "MAT023",
            "ELO102"
        ],
        "semester": "s4"
    },
    {
        "name": "Física General III",
        "code": "FIS130",
        "sctCredits": 8,
        "type": "FI",
        "prerequisites": [
            "MAT022",
            "FIS110"
        ],
        "semester": "s4"
    },
    {
        "name": "Electronica A",
        "code": "ELO106",
        "sctCredits": 6,
        "type": "VER",
        "prerequisites": [
            "ELO102"
        ],
        "semester": "s4"
    },
    {
        "name": "Laboratorio Electronica A",
        "code": "ELO107",
        "sctCredits": 5,
        "type": "RO",
        "prerequisites": [
            "ELO102"
        ],
        "semester": "s4"
    },
    {
        "name": "Electronica B",
        "code": "ELO108",
        "sctCredits": 5,
        "type": "VER",
        "prerequisites": [
            "ELO106"
        ],
        "semester": "s5"
    },
    {
        "name": "Matemáticas IV",
        "code": "MAT024",
        "sctCredits": 6,
        "type": "CEL",
        "prerequisites": [
            "MAT023"
        ],
        "semester": "s5"
    },
    {
        "name": "Laboratorio Electronica B",
        "code": "ELO109",
        "sctCredits": 5,
        "type": "RO",
        "prerequisites": [
            "ELO107",
            "ELO106"
        ],
        "semester": "s5"
    },
    {
        "name": "Sistemas Digitales",
        "code": "ELO211",
        "sctCredits": 5,
        "type": "VER",
        "prerequisites": [
            "ELO102"
        ],
        "semester": "s5"
    },
    {
        "name": "Laboratorio de Sistemas Digitales",
        "code": "ELO212",
        "sctCredits": 6,
        "type": "RO",
        "prerequisites": [
            "ELO102"
        ],
        "semester": "s5"
    },
    {
        "name": "Ingles I",
        "code": "HCW100",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Control Automático I",
        "code": "ELO270",
        "sctCredits": 5,
        "type": "VER",
        "prerequisites": [
            "ELO104"
        ],
        "semester": "s6"
    },
    {
        "name": "Laboratorio de Control Automático",
        "code": "ELO271",
        "sctCredits": 5,
        "type": "RO",
        "prerequisites": [
            "ELO104"
        ],
        "semester": "s6"
    },
    {
        "name": "Estructura de Computadores",
        "code": "ELO311",
        "sctCredits": 5,
        "type": "VER",
        "prerequisites": [
            "ELO211"
        ],
        "semester": "s6"
    },
    {
        "name": "Laboratorio de Estructura de Computadores",
        "code": "ELO312",
        "sctCredits": 5,
        "type": "RO",
        "prerequisites": [
            "ELO212"
        ],
        "semester": "s6"
    },
    {
        "name": "Sistemas Electromecánicos",
        "code": "ELO281",
        "sctCredits": 6,
        "type": "VER",
        "prerequisites": [
            "FIS120",
            "ELO103"
        ],
        "semester": "s6"
    },
    {
        "name": "Campos Electromagnéticos",
        "code": "ELO250",
        "sctCredits": 7,
        "type": "VER",
        "prerequisites": [
            "FIS120",
            "FIS130",
            "MAT024"
        ],
        "semester": "s7"
    },
    {
        "name": "Ingles II",
        "code": "HCW101",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Laboratorio de Comunicaciones",
        "code": "ELO241",
        "sctCredits": 5,
        "type": "RO",
        "prerequisites": [
            "ELO109",
            "ELO104"
        ],
        "semester": "s7"
    },
    {
        "name": "Probabilidad y Procesos Aleatorios I",
        "code": "ELO204",
        "sctCredits": 7,
        "type": "IND",
        "prerequisites": [
            "MAT022"
        ],
        "semester": "s7"
    },
    {
        "name": "Teoría de Comunicaciones",
        "code": "ELO240",
        "sctCredits": 5,
        "type": "VER",
        "prerequisites": [
            "ELO104"
        ],
        "semester": "s7"
    },
    {
        "name": "1A. Asignatura Libre",
        "code": "ELO21",
        "sctCredits": 5,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Administración General",
        "code": "IWN261",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Gestión de Investigación de Operaciones",
        "code": "ILN250",
        "sctCredits": 6,
        "type": "VER",
        "prerequisites": [
            "ELO204"
        ],
        "semester": "s8"
    },
    {
        "name": "Física General IV",
        "code": "FIS140",
        "sctCredits": 8,
        "type": "FI",
        "prerequisites": [
            "FIS130",
            "FIS120"
        ],
        "semester": "s8"
    },
    {
        "name": "1A. Asignatura de la Mención",
        "code": "ELO1",
        "sctCredits": 5,
        "type": "AMA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "2A. Asignatura de la Mención",
        "code": "ELO2",
        "sctCredits": 5,
        "type": "AMA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Análisis Numérico",
        "code": "MAT270",
        "sctCredits": 7,
        "type": "CEL",
        "prerequisites": [
            "MAT024"
        ],
        "semester": "s9"
    },
    {
        "name": "Economía I-A",
        "code": "IWN170",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "MAT023"
        ],
        "semester": "s9"
    },
    {
        "name": "1A. Asignatura Complementaria",
        "code": "ELO11",
        "sctCredits": 5,
        "type": "MO",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "3A. Asignatura de la Mención",
        "code": "ELO3",
        "sctCredits": 5,
        "type": "AMA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "4A. Asignatura de la Mención",
        "code": "ELO4",
        "sctCredits": 5,
        "type": "AMA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Información y Control Financiero",
        "code": "IWN270",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "IWN170"
        ],
        "semester": "s10"
    },
    {
        "name": "2A. Asignatura Complementaria",
        "code": "ELO12",
        "sctCredits": 5,
        "type": "MO",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "2A. Asignatura Libre",
        "code": "ELO22",
        "sctCredits": 5,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "3A. Asignatura Libre",
        "code": "ELO23",
        "sctCredits": 5,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "5A. Asignatura de la Mención",
        "code": "ELO5",
        "sctCredits": 5,
        "type": "AMA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "6A. Asignatura de la Mención",
        "code": "ELO6",
        "sctCredits": 5,
        "type": "AMA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Proyecto de Titulación para Ing. Civil ELO",
        "code": "ELO307",
        "sctCredits": 7,
        "type": "NARA",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Ingeniería Económica",
        "code": "INL230",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "IWN270"
        ],
        "semester": "s11"
    },
    {
        "name": "3A. Asignatura Complementaria",
        "code": "ELO13",
        "sctCredits": 5,
        "type": "MO",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "4A. Asignatura Complementaria",
        "code": "ELO14",
        "sctCredits": 5,
        "type": "MO",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "7A. Asignatura de la Mención",
        "code": "ELO7",
        "sctCredits": 5,
        "type": "AMA",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Administración de la Producción",
        "code": "ICN345",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ILN250"
        ],
        "semester": "s12"
    },
    {
        "name": "Memoria de Titulación para Ing. Civil ELO",
        "code": "ELO308",
        "sctCredits": 10,
        "type": "NARA",
        "prerequisites": [
            "ELO307"
        ],
        "semester": "s12"
    },
    {
        "name": "Proyectos Electrónicos",
        "code": "ELO302",
        "sctCredits": 6,
        "type": "NARA",
        "prerequisites": [
            "INL230",
            "ELO311"
        ],
        "semester": "s12"
    },
    {
        "name": "5A. Asignatura Complementaria",
        "code": "ELO15",
        "sctCredits": 5,
        "type": "MO",
        "prerequisites": [],
        "semester": "s12"
    }
],
};
