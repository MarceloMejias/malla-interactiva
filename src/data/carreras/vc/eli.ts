import { Carrera } from '../../types';

export const eli: Carrera = {
  codigo: 'ELI',
  nombre: 'Ing. Eléctrica',
  campus: 'vc',
  color: '#FFD708',
  
  categorias: [
    {
        "id": "FÍSICA",
        "nombre": "Física",
        "color": "#8E44AD"
    },
    {
        "id": "INDUSTRIAS",
        "nombre": "Industrias",
        "color": "#e4A1F9"
    },
    {
        "id": "DIRECCION GENERAL DE DOCENCIA",
        "nombre": "Direccion General de Docencia",
        "color": "#FF5733"
    },
    {
        "id": "ESTUDIOS HUMANÍSTICOS",
        "nombre": "Estudios Humanísticos",
        "color": "#6A5ACD"
    },
    {
        "id": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "nombre": "Ing. de Minas, Metalurgia y Materiales",
        "color": "#a53f2b"
    },
    {
        "id": "INFORMÁTICA",
        "nombre": "Informática",
        "color": "#FF69B4"
    },
    {
        "id": "INGENIERÍA MECÁNICA",
        "nombre": "Ingeniería Mecánica",
        "color": "#3498DB"
    },
    {
        "id": "ELECTRÓNICA",
        "nombre": "Electrónica",
        "color": "#D69F7E"
    },
    {
        "id": "QUÍMICA",
        "nombre": "Química",
        "color": "#FF8811"
    },
    {
        "id": "INGENIERÍA ELÉCTRICA",
        "nombre": "Ingeniería Eléctrica",
        "color": "#C70039"
    },
    {
        "id": "DEFIDER",
        "nombre": "Defider",
        "color": "#00CED1"
    },
    {
        "id": "MATEMÁTICA",
        "nombre": "Matemática",
        "color": "#FFC300"
    }
],

  asignaturas: [
    {
        "name": "Educacion Fisica I (damas y Varones)",
        "code": "DEW100",
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
        "name": "Introduccion a la Ingenieria",
        "code": "IWG101",
        "sctCredits": 3,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Matematica I",
        "code": "MAT021",
        "sctCredits": 8,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Programacion",
        "code": "IWI131",
        "sctCredits": 5,
        "type": "INFORMÁTICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educacion Fisica II (damas y Varones)",
        "code": "DEW101",
        "sctCredits": 2,
        "type": "DEFIDER",
        "prerequisites": [
            "DEW100"
        ],
        "semester": "s2"
    },
    {
        "name": "Fisica Basica I",
        "code": "FIS109",
        "sctCredits": 7,
        "type": "FÍSICA",
        "prerequisites": [
            "MAT021",
            "FIS100"
        ],
        "semester": "s2"
    },
    {
        "name": "Matematica II",
        "code": "MAT022",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT021"
        ],
        "semester": "s2"
    },
    {
        "name": "Quimica y Sociedad",
        "code": "QUI010",
        "sctCredits": 5,
        "type": "QUÍMICA",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Visión Trascendente del Quehacer Humano",
        "code": "HRW101",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Deportes",
        "code": "DEW  0",
        "sctCredits": 2,
        "type": "DEFIDER",
        "prerequisites": [
            "DEW101"
        ],
        "semester": "s3"
    },
    {
        "name": "Fisica Basica II",
        "code": "FIS119",
        "sctCredits": 7,
        "type": "FÍSICA",
        "prerequisites": [
            "MAT022",
            "FIS109"
        ],
        "semester": "s3"
    },
    {
        "name": "Inglés 1",
        "code": "HCW100",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Matematicas III",
        "code": "MAT023",
        "sctCredits": 7,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT022"
        ],
        "semester": "s3"
    },
    {
        "name": "Materiales Para Ingenieria",
        "code": "IWC203",
        "sctCredits": 5,
        "type": "ING. DE MINAS, METALURGIA Y MATERIALES",
        "prerequisites": [
            "FIS109",
            "QUI010"
        ],
        "semester": "s3"
    },
    {
        "name": "Visión Inmanente del Quehacer Humano",
        "code": "HRW102",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Fisica Basica III",
        "code": "FIS129",
        "sctCredits": 7,
        "type": "FÍSICA",
        "prerequisites": [
            "FIS119"
        ],
        "semester": "s4"
    },
    {
        "name": "Introducción a la Electrotecnia",
        "code": "ELI110",
        "sctCredits": 7,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "MAT022",
            "FIS109"
        ],
        "semester": "s4"
    },
    {
        "name": "Matematicas IV",
        "code": "MAT024",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT023"
        ],
        "semester": "s4"
    },
    {
        "name": "Mecanica General",
        "code": "IWM151",
        "sctCredits": 7,
        "type": "INGENIERÍA MECÁNICA",
        "prerequisites": [
            "FIS109"
        ],
        "semester": "s4"
    },
    {
        "name": "Visión Estética del Quehacer Humano",
        "code": "HRW103",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Crecimiento y Desarrollo Personal",
        "code": "HRW104",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Estadistica",
        "code": "MAT031",
        "sctCredits": 5,
        "type": "MATEMÁTICA",
        "prerequisites": [
            "MAT023"
        ],
        "semester": "s5"
    },
    {
        "name": "Inglés 2",
        "code": "HCW101",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [
            "HCW100"
        ],
        "semester": "s5"
    },
    {
        "name": "Redes Eléctricas I",
        "code": "ELI211",
        "sctCredits": 7,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "ELI110"
        ],
        "semester": "s5"
    },
    {
        "name": "Resistencia de Materiales Generales",
        "code": "IWM255",
        "sctCredits": 7,
        "type": "INGENIERÍA MECÁNICA",
        "prerequisites": [
            "IWM151"
        ],
        "semester": "s5"
    },
    {
        "name": "Simulacion en Ingenieria Electrica",
        "code": "ELI213",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "ELI110",
            "MAT023"
        ],
        "semester": "s5"
    },
    {
        "name": "Administracion General",
        "code": "IWN261",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Economia I-a",
        "code": "IWN170",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "MAT023"
        ],
        "semester": "s6"
    },
    {
        "name": "Electronica General I",
        "code": "ELI216",
        "sctCredits": 7,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "MAT024",
            "ELI211"
        ],
        "semester": "s6"
    },
    {
        "name": "Formac.y Liderazgo Empresarial",
        "code": "HRW131",
        "sctCredits": 2,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Metrologia Electrica",
        "code": "ELI214",
        "sctCredits": 7,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "ELI211",
            "FIS119"
        ],
        "semester": "s6"
    },
    {
        "name": "Redes Eléctricas II",
        "code": "ELI212",
        "sctCredits": 7,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "ELI110",
            "MAT023"
        ],
        "semester": "s6"
    },
    {
        "name": "Control Automático I",
        "code": "ELO270",
        "sctCredits": 5,
        "type": "ELECTRÓNICA",
        "prerequisites": [
            "ELI212"
        ],
        "semester": "s7"
    },
    {
        "name": "Electronica General II",
        "code": "ELI217",
        "sctCredits": 7,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "ELI216"
        ],
        "semester": "s7"
    },
    {
        "name": "Información y Control Financiero",
        "code": "IWN270",
        "sctCredits": 5,
        "type": "INDUSTRIAS",
        "prerequisites": [
            "IWN170"
        ],
        "semester": "s7"
    },
    {
        "name": "Maquinas Electricas a",
        "code": "ELI222",
        "sctCredits": 7,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "ELI214",
            "ELI212"
        ],
        "semester": "s7"
    },
    {
        "name": "Sistemas Electricos de Potencia a",
        "code": "ELI240",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "ELI214",
            "ELI212"
        ],
        "semester": "s7"
    },
    {
        "name": "Electivo a 1",
        "code": "ELI A1",
        "sctCredits": 7,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Laboratorio de Electronica",
        "code": "ELI218",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "ELI217"
        ],
        "semester": "s8"
    },
    {
        "name": "Maquinas Electricas B",
        "code": "ELI223",
        "sctCredits": 7,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Sistemas Electricos de Potencia B",
        "code": "ELI241",
        "sctCredits": 7,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "ELI240",
            "ELI222"
        ],
        "semester": "s8"
    },
    {
        "name": "Tecnicas de Alta Tension a",
        "code": "ELI358",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "ELI214",
            "ELI212"
        ],
        "semester": "s8"
    },
    {
        "name": "Electivo a 2",
        "code": "ELI A2",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo B 1",
        "code": "ELI B1",
        "sctCredits": 7,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo C 1",
        "code": "ELI C1",
        "sctCredits": 7,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo D 1",
        "code": "ELI D1",
        "sctCredits": 7,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Laboratorio de Alta Tension a",
        "code": "ELI359",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "ELI358"
        ],
        "semester": "s9"
    },
    {
        "name": "Electivo B 2",
        "code": "ELI B2",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Electivo C 2",
        "code": "ELI C2",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Memoria de Titulacion",
        "code": "ELI380",
        "sctCredits": 8,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Proyectos Electricos a",
        "code": "ELI377",
        "sctCredits": 7,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "ELI358",
            "ELI241"
        ],
        "semester": "s10"
    },
    {
        "name": "Seminario Profesional",
        "code": "ELI375",
        "sctCredits": 5,
        "type": "INGENIERÍA ELÉCTRICA",
        "prerequisites": [
            "ELI358",
            "ELI223",
            "ELI241"
        ],
        "semester": "s10"
    }
],
};
