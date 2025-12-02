import { Carrera } from '../../types';

export const met_0: Carrera = {
  codigo: 'MET-0',
  nombre: 'Ing. Civil Metalúrgica (Malla Antigua)',
  campus: 'cc',
  color: '#DAA520',
  
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
        "id": "HUM",
        "nombre": "Humanistas y Deportes",
        "color": "#84CC16"
    },
    {
        "id": "PC",
        "nombre": "Plan Común",
        "color": "#8B5CF6"
    },
    {
        "id": "IND",
        "nombre": "Industrias",
        "color": "#0EA5E9"
    },
    {
        "id": "MET",
        "nombre": "Metalurgia",
        "color": "#F97316"
    },
    {
        "id": "QUI",
        "nombre": "Química",
        "color": "#DC2626"
    },
    {
        "id": "ICQ",
        "nombre": "Ingeniería Quimica",
        "color": "#06B6D4"
    },
    {
        "id": "EL",
        "nombre": "Electivos",
        "color": "#A855F7"
    },
    {
        "id": "TIT",
        "nombre": "Temas de Integración y Talleres",
        "color": "#EC4899"
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
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Ingeniería",
        "code": "IWG101",
        "sctCredits": 0,
        "type": "PC",
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
        "type": "PC",
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
        "name": "Física General III",
        "code": "FIS130",
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [
            "MAT022",
            "FIS110"
        ],
        "semester": "s3"
    },
    {
        "name": "Química Básica",
        "code": "QUI021",
        "sctCredits": 0,
        "type": "QUI",
        "prerequisites": [
            "QUI010"
        ],
        "semester": "s3"
    },
    {
        "name": "Laboratorio de Materiales y Procesos",
        "code": "MET101",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "QUI010",
            "FIS100"
        ],
        "semester": "s3"
    },
    {
        "name": "Ingles para Ingeniería I",
        "code": "HIW310",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
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
        "name": "Matemáticas IV",
        "code": "MAT024",
        "sctCredits": 6,
        "type": "MAT",
        "prerequisites": [
            "MAT023"
        ],
        "semester": "s4"
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
        "semester": "s4"
    },
    {
        "name": "Cálculo de Procesos",
        "code": "MET110",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "QUI021"
        ],
        "semester": "s4"
    },
    {
        "name": "Laboratorio de Metalurgia Extractiva",
        "code": "MET102",
        "sctCredits": 0,
        "type": "QUI",
        "prerequisites": [
            "QUI010",
            "FIS100"
        ],
        "semester": "s4"
    },
    {
        "name": "Laboratorio de Química Básica",
        "code": "QUI103",
        "sctCredits": 0,
        "type": "QUI",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Ciencia de Materiales",
        "code": "MET120",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "FIS110"
        ],
        "semester": "s5"
    },
    {
        "name": "Física General IV",
        "code": "FIS140",
        "sctCredits": 8,
        "type": "FIS",
        "prerequisites": [
            "FIS130",
            "FIS120"
        ],
        "semester": "s5"
    },
    {
        "name": "Termodinámica Metalúrgica I",
        "code": "MET136",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "MAT023",
            "MET110"
        ],
        "semester": "s5"
    },
    {
        "name": "Química de Materiales",
        "code": "QUI022",
        "sctCredits": 0,
        "type": "QUI",
        "prerequisites": [
            "QUI010"
        ],
        "semester": "s5"
    },
    {
        "name": "Gráfica para Ingeniería I",
        "code": "IWM185",
        "sctCredits": 0,
        "type": "PC",
        "prerequisites": [
            "IWI131"
        ],
        "semester": "s5"
    },
    {
        "name": "Inglés para Ingeniería II",
        "code": "HIW311",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [
            "HIW310"
        ],
        "semester": "s5"
    },
    {
        "name": "Geología y Mineralogía",
        "code": "MET281",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "MET120"
        ],
        "semester": "s6"
    },
    {
        "name": "Mecánica de Fluidos",
        "code": "IWQ221",
        "sctCredits": 0,
        "type": "ICQ",
        "prerequisites": [
            "FIS110"
        ],
        "semester": "s6"
    },
    {
        "name": "Mecánica de Sólidos",
        "code": "MET240",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "FIS110"
        ],
        "semester": "s6"
    },
    {
        "name": "Metalurgia Física I",
        "code": "MET226",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "MET120",
            "MET136"
        ],
        "semester": "s6"
    },
    {
        "name": "Termodinámica Metalúrgica II",
        "code": "MET137",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "MET136"
        ],
        "semester": "s6"
    },
    {
        "name": "Análisis y Diseño de Experim. Industriales",
        "code": "IWQ214",
        "sctCredits": 0,
        "type": "ICQ",
        "prerequisites": [
            "MET136"
        ],
        "semester": "s7"
    },
    {
        "name": "Cinética Metalúrgica y Diseño de Reactores",
        "code": "MET332",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "MET137"
        ],
        "semester": "s7"
    },
    {
        "name": "Beneficio de Minerales",
        "code": "ICQ328",
        "sctCredits": 0,
        "type": "ICQ",
        "prerequisites": [
            "IWQ221"
        ],
        "semester": "s7"
    },
    {
        "name": "Metalurgia Física II",
        "code": "MET227",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "MET226"
        ],
        "semester": "s7"
    },
    {
        "name": "Transferencia de Calor",
        "code": "IWQ222",
        "sctCredits": 0,
        "type": "ICQ",
        "prerequisites": [
            "IWQ221",
            "MET136"
        ],
        "semester": "s7"
    },
    {
        "name": "Comportamiento Mecánico de Materiales",
        "code": "MET244",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "MET240",
            "MET226"
        ],
        "semester": "s8"
    },
    {
        "name": "Economía I-A",
        "code": "IWN170",
        "sctCredits": 0,
        "type": "IND",
        "prerequisites": [
            "MAT023"
        ],
        "semester": "s8"
    },
    {
        "name": "Fundición",
        "code": "MET310",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "MET226"
        ],
        "semester": "s8"
    },
    {
        "name": "Hidrometalurgia",
        "code": "MET237",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "MET332"
        ],
        "semester": "s8"
    },
    {
        "name": "Humanístico I",
        "code": "HRW1",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Lab de Ingeniería Química I",
        "code": "ILQ225",
        "sctCredits": 0,
        "type": "ICQ",
        "prerequisites": [
            "IWQ221",
            "IWQ222"
        ],
        "semester": "s8"
    },
    {
        "name": "Electrotecnia Básica",
        "code": "ELI271",
        "sctCredits": 0,
        "type": "EL",
        "prerequisites": [
            "MAT023",
            "FIS120"
        ],
        "semester": "s9"
    },
    {
        "name": "Flotación",
        "code": "ILQ327",
        "sctCredits": 0,
        "type": "ICQ",
        "prerequisites": [
            "IWQ214",
            "MET136",
            "ICQ328"
        ],
        "semester": "s9"
    },
    {
        "name": "Gestión de Investigación de Operaciones",
        "code": "ILN250",
        "sctCredits": 0,
        "type": "IND",
        "prerequisites": [
            "IWQ214"
        ],
        "semester": "s9"
    },
    {
        "name": "Pirometalurgia",
        "code": "MET236",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "MET137"
        ],
        "semester": "s9"
    },
    {
        "name": "Soldadura",
        "code": "MET320",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "MET244",
            "MET227"
        ],
        "semester": "s9"
    },
    {
        "name": "Electivo Especialidad I",
        "code": "MET11",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Fundamentos de Control Industrial",
        "code": "ILQ350",
        "sctCredits": 0,
        "type": "IND",
        "prerequisites": [
            "IWQ222"
        ],
        "semester": "s10"
    },
    {
        "name": "Humanístico II",
        "code": "HRW2",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Información y Control Financiero",
        "code": "IWN270",
        "sctCredits": 0,
        "type": "IND",
        "prerequisites": [
            "IWN170"
        ],
        "semester": "s10"
    },
    {
        "name": "Laboratorio de Ingeniería Metalúrgica",
        "code": "MET308",
        "sctCredits": 0,
        "type": "IND",
        "prerequisites": [
            "MET236",
            "MET237"
        ],
        "semester": "s10"
    },
    {
        "name": "Simulación de Procesos Metalúrgicos",
        "code": "MET311",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "MET236",
            "MET237"
        ],
        "semester": "s10"
    },
    {
        "name": "Administración General",
        "code": "IWN261",
        "sctCredits": 0,
        "type": "IND",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Asignatura Electiva I",
        "code": "MET1",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Electivo Especialidad II",
        "code": "MET12",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Humanístico III",
        "code": "HRW3",
        "sctCredits": 0,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Proyecto Metalúrgico I",
        "code": "MET370",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "IWN270"
        ],
        "semester": "s11"
    },
    {
        "name": "Taller de Titulación",
        "code": "MET391",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Administración de la Producción",
        "code": "ICN345",
        "sctCredits": 0,
        "type": "IND",
        "prerequisites": [
            "ILN250"
        ],
        "semester": "s12"
    },
    {
        "name": "Asignatura Electiva II",
        "code": "MET2",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [],
        "semester": "s12"
    },
    {
        "name": "Memoria de Titulación",
        "code": "MET392",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "MET391"
        ],
        "semester": "s12"
    },
    {
        "name": "Proyecto Metalúrgico II",
        "code": "MET380",
        "sctCredits": 0,
        "type": "MET",
        "prerequisites": [
            "MET370"
        ],
        "semester": "s12"
    }
],
};
