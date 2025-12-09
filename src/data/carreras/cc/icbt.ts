import { Carrera } from '@/types/curriculum';

export const icbt: Carrera = {
  codigo: 'ICBT',
  nombre: 'Ing. Civil Biotecnología',
  campus: 'cc',
  color: '#8FBC8F',
  
  categorias: [
    {
        "id": "MATEMÁTICA",
        "nombre": "Matemática",
        "color": "#FF69B4"
    },
    {
        "id": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "nombre": "Ingeniería Química y Ambiental",
        "color": "#FFC300"
    },
    {
        "id": "QUÍMICA",
        "nombre": "Química",
        "color": "#e4A1F9"
    },
    {
        "id": "FÍSICA",
        "nombre": "Física",
        "color": "#FF8811"
    },
    {
        "id": "INGENIERÍA COMERCIAL",
        "nombre": "Ingeniería Comercial",
        "color": "#FF5733"
    },
    {
        "id": "INFORMÁTICA",
        "nombre": "Informática",
        "color": "#6A5ACD"
    },
    {
        "id": "DEFIDER",
        "nombre": "Defider",
        "color": "#FF1493"
    },
    {
        "id": "ESTUDIOS HUMANÍSTICOS",
        "nombre": "Estudios Humanísticos",
        "color": "#a53f2b"
    },
    {
        "id": "DIRECCION GENERAL DE DOCENCIA",
        "nombre": "Direccion General de Docencia",
        "color": "#FF5964"
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
        "name": "Biología Celular",
        "code": "IWG201",
        "sctCredits": 6,
        "type": "DIRECCION GENERAL DE DOCENCIA",
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
        "name": "Introducción a la Biotecnología",
        "code": "IWG200",
        "sctCredits": 4,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
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
        "name": "Cálculo en Varias Variables",
        "code": "MAT081",
        "sctCredits": 6,
        "type": "MATEMÁTICA",
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
        "name": "Química Orgánica",
        "code": "QUI402",
        "sctCredits": 6,
        "type": "QUÍMICA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Taller Aplicado en Biotecnología",
        "code": "IWG203",
        "sctCredits": 3,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Administración y Sostenibilidad Organizacional",
        "code": "AUX200",
        "sctCredits": 4,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Bioquímica",
        "code": "IWG205",
        "sctCredits": 7,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Operaciones Unitarias I",
        "code": "IWG204",
        "sctCredits": 6,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Química Análitica y Análisis Instrumental",
        "code": "IWG206",
        "sctCredits": 7,
        "type": "DIRECCION GENERAL DE DOCENCIA",
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
        "name": "Biología Molecular",
        "code": "IWG207",
        "sctCredits": 8,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Comunicación Efectiva en Español / Inglés IV",
        "code": "HXW012",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Estadistíca y Diseño Experimentos Para Ing. de Procesos",
        "code": "IQA302",
        "sctCredits": 6,
        "type": "INGENIERÍA QUÍMICA Y AMBIENTAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Ingeniería Económica",
        "code": "AUX201",
        "sctCredits": 4,
        "type": "INGENIERÍA COMERCIAL",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Operaciones Unitarias II",
        "code": "IWG208",
        "sctCredits": 6,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Práctica en Acción Comunitaria",
        "code": "HXW011",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Biocatálisis y Biorreactores",
        "code": "IWG212",
        "sctCredits": 7,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Bioinformática",
        "code": "IWG209",
        "sctCredits": 6,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Evaluación de Proyectos",
        "code": "IWG213",
        "sctCredits": 6,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Inglés Disciplinar",
        "code": "AUX202",
        "sctCredits": 3,
        "type": "ESTUDIOS HUMANÍSTICOS",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Microbiología",
        "code": "IWG211",
        "sctCredits": 7,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Bioinformática y Métodos Computacionales",
        "code": "IWG217",
        "sctCredits": 6,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Electivo",
        "code": "AUX208",
        "sctCredits": 5,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Gestión de la Innovación Para Bionegocios",
        "code": "IWG214",
        "sctCredits": 5,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Microbiologia Industrial",
        "code": "IWG215",
        "sctCredits": 6,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Proyecto Biotecnología",
        "code": "IWG218",
        "sctCredits": 6,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Seminario de Biotecnología",
        "code": "IWG216",
        "sctCredits": 3,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Biología Computacional",
        "code": "IWG223",
        "sctCredits": 5,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo",
        "code": "AUX209",
        "sctCredits": 5,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo Disciplinar",
        "code": "IWG220",
        "sctCredits": 5,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Electivo Disciplinar",
        "code": "IWG221",
        "sctCredits": 5,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Gestión del Empendimiento Para Bionegocios",
        "code": "IWG219",
        "sctCredits": 5,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Gestión Integral de la Producción",
        "code": "IWG222",
        "sctCredits": 6,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s9"
    },
    {
        "name": "Actividad de Titulación",
        "code": "IWG320",
        "sctCredits": 15,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Electivo Complementario de Titulación",
        "code": "IWG319",
        "sctCredits": 9,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s10"
    },
    {
        "name": "Electivo Disciplinar",
        "code": "IWG318",
        "sctCredits": 5,
        "type": "DIRECCION GENERAL DE DOCENCIA",
        "prerequisites": [],
        "semester": "s10"
    }
],
};
