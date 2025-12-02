import { Carrera } from '../../types';

export const amb: Carrera = {
  codigo: 'AMB',
  nombre: 'Ing. Civil Ambiental',
  campus: 'cc',
  color: '#228B22',
  
  categorias: [
    {
        "id": "MATEMÁTICA",
        "nombre": "Matemática",
        "color": "#6A5ACD"
    },
    {
        "id": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "nombre": "Ingeniería Química y Ambiental",
        "color": "#FF5964"
    },
    {
        "id": "QUÍMICA",
        "nombre": "Química",
        "color": "#C70039"
    },
    {
        "id": "FÍSICA",
        "nombre": "Física",
        "color": "#8E44AD"
    },
    {
        "id": "INGENIERÍA COMERCIAL",
        "nombre": "Ingeniería Comercial",
        "color": "#00CED1"
    },
    {
        "id": "INFORMÁTICA",
        "nombre": "Informática",
        "color": "#FFC300"
    },
    {
        "id": "DEFIDER",
        "nombre": "Defider",
        "color": "#FF69B4"
    },
    {
        "id": "ESTUDIOS HUMANÍSTICOS",
        "nombre": "Estudios Humanísticos",
        "color": "#FF8811"
    },
    {
        "id": "DIRECCION GENERAL DE DOCENCIA",
        "nombre": "Direccion General de Docencia",
        "color": "#FF1493"
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
        "name": "Introducción Al Cálculo",
        "code": "MAT070",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Proyecto Inicial",
        "code": "IWG400",
        "sctCredits": 7,
        "type": "DIRECCION GENERAL DE DOCENCIA",
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
        "name": "Introducción a la Programación",
        "code": "INF129",
        "sctCredits": 7,
        "type": "INFORMÁTICA",
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
        "name": "Ecosistemas y Biodiversidad",
        "code": "IQA201",
        "sctCredits": 4,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Ecuaciones Diferenciales Elementales",
        "code": "MAT053",
        "sctCredits": 5,
        "type": "MATEMÁTICA",
        "prerequisites": [],
        "semester": "s3"
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
        "semester": "s3"
    },
    {
        "name": "Química Para Ingeniería",
        "code": "QUI400",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Balance de Materia y Energía",
        "code": "IQA203",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
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
        "name": "Electromagnetismo",
        "code": "FIS121",
        "sctCredits": 8,
        "type": "FÍSICA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Intruducción a las Ciencias de la Tierra",
        "code": "IQA202",
        "sctCredits": 4,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Mecánica de Fluidos",
        "code": "IQA301",
        "sctCredits": 6,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [
            "FIS111"
        ],
        "semester": "s4"
    },
    {
        "name": "Química Inorgánica",
        "code": "QUI410",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [],
        "semester": "s4"
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
        "name": "Estadistíca y Diseño Experimentos Para Ing. de Procesos",
        "code": "IQA302",
        "sctCredits": 6,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Microbiologia Ambiental",
        "code": "IQA205",
        "sctCredits": 7,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Química Orgánica",
        "code": "QUI402",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Termodinámica de Procesos",
        "code": "IQA206",
        "sctCredits": 8,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Administración y Sostenibilidad Organizacional",
        "code": "AUX200",
        "sctCredits": 4,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Inglés Ambiental",
        "code": "IQA400",
        "sctCredits": 3,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Legislación Ambiental",
        "code": "IQA401",
        "sctCredits": 7,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Sistemas de Información Geográfica",
        "code": "IQA403",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Termodinámica Ing. Ambiental",
        "code": "IQA402",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Transferencia de Calor",
        "code": "IQA404",
        "sctCredits": 6,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Diseño de Reactores y Biorreactores",
        "code": "IQA407",
        "sctCredits": 7,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Gestión Ambiental",
        "code": "IQA406",
        "sctCredits": 4,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
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
        "name": "Laboratorio de Operaciones Unitarias",
        "code": "IQA405",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Transferencia de Materia",
        "code": "IQA408",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Tratamiento Residuos Sólidos y Suelos Contaminados",
        "code": "IQA409",
        "sctCredits": 6,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Electivo",
        "code": "AUX206",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Evaluación de Impacto Ambiental",
        "code": "IQA410",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Modelación Ambiental",
        "code": "IQA413",
        "sctCredits": 7,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Tratamiento de Gases",
        "code": "IQA412",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Tratamiento Residuos Líquidos y Aguas Subterráneas",
        "code": "IQA411",
        "sctCredits": 7,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Economía Ambiental",
        "code": "IQA418",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo",
        "code": "AUX207",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Energía y Sustentabilidad",
        "code": "IQA414",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Evaluación y Gestión de Proyectos",
        "code": "IQA415",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Innovación y Emprendimiento en Ing. Ambiental",
        "code": "IQA417",
        "sctCredits": 6,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Monitoreo y Control Ambiental",
        "code": "IQA416",
        "sctCredits": 4,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Personas y la Organización Ética y Responsabilidad Social",
        "code": "IQA516",
        "sctCredits": 5,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Taller de Habilitación Profesional",
        "code": "IQA515",
        "sctCredits": 10,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Titulación",
        "code": "IQA514",
        "sctCredits": 15,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s10"
    }
],
};
