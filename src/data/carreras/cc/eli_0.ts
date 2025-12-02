import { Carrera } from '../../types';

export const eli_0: Carrera = {
  codigo: 'ELI-0',
  nombre: 'Ing. Civil Eléctrica (Malla Antigua)',
  campus: 'cc',
  color: '#6495ED',
  
  categorias: [
    {
        "id": "MAT",
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
        "id": "ELO",
        "nombre": "Electrónica",
        "color": "#DC2626"
    },
    {
        "id": "IND",
        "nombre": "Industrias",
        "color": "#0EA5E9"
    },
    {
        "id": "ELI",
        "nombre": "Eléctrica",
        "color": "#FACC15"
    },
    {
        "id": "MEC",
        "nombre": "Mecánica",
        "color": "#8B5CF6"
    },
    {
        "id": "PRAC",
        "nombre": "Práctica",
        "color": "#F97316"
    }
],

  asignaturas: [
    {
        "name": "Programación",
        "code": "IWI131",
        "sctCredits": 0,
        "type": "ROS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Álgebra y Geometría",
        "code": "MAT060",
        "sctCredits": 5,
        "type": "MAT",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción al Cálculo",
        "code": "MAT070",
        "sctCredits": 5,
        "type": "MAT",
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
        "name": "Introducción a la Ingeniería",
        "code": "IWG101",
        "sctCredits": 0,
        "type": "FI",
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
        "name": "Humanístico I",
        "code": "HW1",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Química y Sociedad",
        "code": "QUI010",
        "sctCredits": 0,
        "type": "ROS",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Algebra Lineal",
        "code": "MAT061",
        "sctCredits": 5,
        "type": "MAT",
        "prerequisites": [
            "MAT060"
        ],
        "semester": "s2"
    },
    {
        "name": "Cálculo en Una Variable",
        "code": "MAT071",
        "sctCredits": 6,
        "type": "MAT",
        "prerequisites": [
            "MAT070"
        ],
        "semester": "s2"
    },
    {
        "name": "Física General I",
        "code": "FIS110",
        "sctCredits": 8,
        "type": "FI",
        "prerequisites": [
            "FIS100",
            "MAT060",
            "MAT070"
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
        "name": "Humanístico II",
        "code": "HW2",
        "sctCredits": 3,
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
            "MAT061",
            "MAT071"
        ],
        "semester": "s3"
    },
    {
        "name": "Física General II",
        "code": "FIS120",
        "sctCredits": 8,
        "type": "FI",
        "prerequisites": [
            "FIS110",
            "MAT061",
            "MAT071"
        ],
        "semester": "s3"
    },
    {
        "name": "Materiales para la ingeniería",
        "code": "IWC203",
        "sctCredits": 5,
        "type": "MEC",
        "prerequisites": [
            "FIS110",
            "QUI010"
        ],
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
        "name": "Humanístico III",
        "code": "HW3",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Inglés I",
        "code": "HCW100",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Introducción a la electrotécnia",
        "code": "ELI110",
        "sctCredits": 7,
        "type": "ELI",
        "prerequisites": [
            "FIS110",
            "MAT061",
            "MAT071"
        ],
        "semester": "s4"
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
        "name": "Física General III",
        "code": "FIS130",
        "sctCredits": 8,
        "type": "FI",
        "prerequisites": [
            "FIS110"
        ],
        "semester": "s4"
    },
    {
        "name": "Mecánica General",
        "code": "IWM151",
        "sctCredits": 5,
        "type": "MEC",
        "prerequisites": [
            "FIS110"
        ],
        "semester": "s4"
    },
    {
        "name": "Crecimiento y Desarrollo",
        "code": "HWR104",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Redes Eléctricas I",
        "code": "ELI211",
        "sctCredits": 7,
        "type": "ELI",
        "prerequisites": [
            "ELI110"
        ],
        "semester": "s5"
    },
    {
        "name": "Análisis Numérico",
        "code": "MAT270",
        "sctCredits": 7,
        "type": "MAT",
        "prerequisites": [
            "MAT024"
        ],
        "semester": "s5"
    },
    {
        "name": "Estadística",
        "code": "MAT031",
        "sctCredits": 5,
        "type": "MAT",
        "prerequisites": [
            "MAT023"
        ],
        "semester": "s5"
    },
    {
        "name": "Resistencia de Materiales Generales",
        "code": "IWM255",
        "sctCredits": 7,
        "type": "MEC",
        "prerequisites": [
            "IWM151"
        ],
        "semester": "s5"
    },
    {
        "name": "Formación y Liderazgo Empresarial",
        "code": "HWR131",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Inglés II",
        "code": "HCW101",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [
            "HCW100"
        ],
        "semester": "s5"
    },
    {
        "name": "Redes Eléctricas II",
        "code": "ELI212",
        "sctCredits": 7,
        "type": "ELI",
        "prerequisites": [
            "ELI110",
            "MAT023"
        ],
        "semester": "s6"
    },
    {
        "name": "Electrónica General I",
        "code": "ELI216",
        "sctCredits": 7,
        "type": "ELI",
        "prerequisites": [
            "MAT024",
            "ELI211"
        ],
        "semester": "s6"
    },
    {
        "name": "Campos Electromagnéticos",
        "code": "ELI215",
        "sctCredits": 7,
        "type": "ELI",
        "prerequisites": [
            "FIS120",
            "ELI110",
            "MAT024"
        ],
        "semester": "s6"
    },
    {
        "name": "Metrología Eléctrica",
        "code": "ELI214",
        "sctCredits": 7,
        "type": "ELI",
        "prerequisites": [
            "FIS120",
            "ELI211"
        ],
        "semester": "s6"
    },
    {
        "name": "Humanístico VI",
        "code": "HW6",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Conversión Electromecánica de Energía",
        "code": "ELI220",
        "sctCredits": 7,
        "type": "ELI",
        "prerequisites": [
            "ELI211",
            "ELI215"
        ],
        "semester": "s7"
    },
    {
        "name": "Electrónica General II",
        "code": "ELI217",
        "sctCredits": 7,
        "type": "ELI",
        "prerequisites": [
            "ELI216"
        ],
        "semester": "s7"
    },
    {
        "name": "Control Automático I",
        "code": "ELO270",
        "sctCredits": 5,
        "type": "ELO",
        "prerequisites": [
            "ELI212"
        ],
        "semester": "s7"
    },
    {
        "name": "Termodinámica General y Laboratorio",
        "code": "IWM210",
        "sctCredits": 7,
        "type": "MEC",
        "prerequisites": [
            "FIS110"
        ],
        "semester": "s7"
    },
    {
        "name": "Humanístico VII",
        "code": "HW7",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Práctica Industrial",
        "code": "PRI",
        "sctCredits": 0,
        "type": "PRAC",
        "prerequisites": [
            "ELI214",
            "ELI212",
            "ELI215",
            "ELI216"
        ],
        "semester": "s7"
    },
    {
        "name": "Lab. Conversión Electromecánica de Energía",
        "code": "ELI221",
        "sctCredits": 5,
        "type": "ELI",
        "prerequisites": [
            "ELI214",
            "ELI220"
        ],
        "semester": "s8"
    },
    {
        "name": "Análisis de Sistemas Eléctricos de Potencia I",
        "code": "ELI246",
        "sctCredits": 7,
        "type": "ELI",
        "prerequisites": [
            "ELI211",
            "FIS120"
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
        "name": "Mecánica de Fluidos General",
        "code": "IWM220",
        "sctCredits": 7,
        "type": "MEC",
        "prerequisites": [
            "IWM210"
        ],
        "semester": "s8"
    },
    {
        "name": "Economía I",
        "code": "ILN270",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "MAT023"
        ],
        "semester": "s8"
    },
    {
        "name": "Técnicas de Alta Tensión I",
        "code": "ELI360",
        "sctCredits": 5,
        "type": "ELI",
        "prerequisites": [
            "ELI212",
            "ELI246"
        ],
        "semester": "s9"
    },
    {
        "name": "Análisis de Sistemas Eléctricos de Potencia II",
        "code": "ELI347",
        "sctCredits": 7,
        "type": "ELI",
        "prerequisites": [
            "ELI246",
            "ELI220"
        ],
        "semester": "s9"
    },
    {
        "name": "Electrónica de Potencia",
        "code": "ELI319",
        "sctCredits": 7,
        "type": "ELI",
        "prerequisites": [
            "ELI216"
        ],
        "semester": "s9"
    },
    {
        "name": "Máquinas Eléctricas I",
        "code": "ELI326",
        "sctCredits": 7,
        "type": "ELI",
        "prerequisites": [
            "ELI220",
            "ELI212"
        ],
        "semester": "s9"
    },
    {
        "name": "Economía II",
        "code": "ILN271",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ILN270"
        ],
        "semester": "s9"
    },
    {
        "name": "Laboratorio de Maquinas Eléctricas",
        "code": "ELI327",
        "sctCredits": 7,
        "type": "ELI",
        "prerequisites": [
            "ELI221",
            "ELI326"
        ],
        "semester": "s10"
    },
    {
        "name": "Análisis de Sistemas Eléctricos de Potencia III",
        "code": "ELI348",
        "sctCredits": 7,
        "type": "ELI",
        "prerequisites": [
            "ELI246",
            "MAT270",
            "ELO270",
            "PRI",
            "ELI326"
        ],
        "semester": "s10"
    },
    {
        "name": "Accionamientos Eléctricos",
        "code": "ELI328",
        "sctCredits": 7,
        "type": "ELI",
        "prerequisites": [
            "ELO270",
            "ELI326",
            "ELI319"
        ],
        "semester": "s10"
    },
    {
        "name": "Laboratorio de Alta Tensión",
        "code": "ELI361",
        "sctCredits": 5,
        "type": "ELI",
        "prerequisites": [
            "ELI360"
        ],
        "semester": "s10"
    },
    {
        "name": "Información y Control Financiero",
        "code": "IWN270",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "ILN270"
        ],
        "semester": "s10"
    },
    {
        "name": "Seminario de Titulación",
        "code": "ELI376",
        "sctCredits": 3,
        "type": "ELI",
        "prerequisites": [
            "ELI327",
            "ELI348",
            "ELI328",
            "ELI361",
            "FIS140",
            "ILN271",
            "IWM220",
            "MAT031",
            "IWN270",
            "ELI217",
            "ELI347"
        ],
        "semester": "s11"
    },
    {
        "name": "Operación de Sistemas Eléctricos de Potencia",
        "code": "ELI349",
        "sctCredits": 5,
        "type": "ELI",
        "prerequisites": [
            "ELI348"
        ],
        "semester": "s11"
    },
    {
        "name": "Lab. Accionamientos Eléctricos",
        "code": "ELI329",
        "sctCredits": 5,
        "type": "ELI",
        "prerequisites": [
            "ELI328"
        ],
        "semester": "s11"
    },
    {
        "name": "Evaluación de Proyectos",
        "code": "ICN336",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "IWN270"
        ],
        "semester": "s11"
    },
    {
        "name": "Administración General",
        "code": "IWN261",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [],
        "semester": "s11"
    },
    {
        "name": "Fundamentos de Investigación y Operaciones",
        "code": "INF281",
        "sctCredits": 5,
        "type": "ELO",
        "prerequisites": [
            "MAT061",
            "MAT071",
            "IWI131"
        ],
        "semester": "s11"
    },
    {
        "name": "Práctica Profesional",
        "code": "PRP",
        "sctCredits": 0,
        "type": "PRAC",
        "prerequisites": [
            "PRI",
            "ELI360",
            "ELI347",
            "ELI319",
            "ELI326",
            "ILN271"
        ],
        "semester": "s11"
    },
    {
        "name": "Planificación Eléctrica",
        "code": "ELI350",
        "sctCredits": 5,
        "type": "ELI",
        "prerequisites": [
            "ELI349"
        ],
        "semester": "s12"
    },
    {
        "name": "Memoria de Titulación",
        "code": "ELI390",
        "sctCredits": 13,
        "type": "ELI",
        "prerequisites": [
            "ELI376",
            "ICN336",
            "ELI349",
            "PRP"
        ],
        "semester": "s12"
    },
    {
        "name": "Proyectos Eléctricos",
        "code": "ELI378",
        "sctCredits": 7,
        "type": "ELI",
        "prerequisites": [
            "ICN336",
            "ELI349"
        ],
        "semester": "s12"
    },
    {
        "name": "Recursos Humanos",
        "code": "ICN323",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [
            "IWN261"
        ],
        "semester": "s12"
    }
],
};
