import { Carrera } from '@/types/curriculum';

export const imi: Carrera = {
  codigo: 'IMI',
  nombre: 'Ing. en Mantenimiento Industrial',
  campus: 'vm',
  color: '#FF4500',
  
  categorias: [
    {
        "id": "DISEÑO Y MANUFACTURA",
        "nombre": "Diseño y Manufactura",
        "color": "#8E44AD"
    },
    {
        "id": "CIENCIAS",
        "nombre": "Ciencias",
        "color": "#FF5964"
    }
],

  asignaturas: [
    {
        "name": "Actividad Formativa I",
        "code": "ACF001",
        "sctCredits": 3,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Fisica I",
        "code": "FIS001",
        "sctCredits": 4,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Historia y Evolución de la Tecnología",
        "code": "HET000",
        "sctCredits": 2,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introduc. a la Ingeniería en Diseño y Manufactura",
        "code": "IDM000",
        "sctCredits": 3,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Matematica I",
        "code": "MAT001",
        "sctCredits": 6,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Materiales de Ingenieria",
        "code": "MDI000",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Normalización y Dibujo de Ingeniería I",
        "code": "NDI001",
        "sctCredits": 6,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Tecnologia de la Informacion",
        "code": "TCI000",
        "sctCredits": 3,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Actividad Formativa II",
        "code": "ACF002",
        "sctCredits": 3,
        "type": "CIENCIAS",
        "prerequisites": [
            "ACF001"
        ],
        "semester": "s2"
    },
    {
        "name": "Dibujo Asistido Por Computador I",
        "code": "DAC001",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "IDM000"
        ],
        "semester": "s2"
    },
    {
        "name": "Fisica II",
        "code": "FIS002",
        "sctCredits": 4,
        "type": "CIENCIAS",
        "prerequisites": [
            "FIS001"
        ],
        "semester": "s2"
    },
    {
        "name": "Matematica II",
        "code": "MAT002",
        "sctCredits": 6,
        "type": "CIENCIAS",
        "prerequisites": [
            "MAT001"
        ],
        "semester": "s2"
    },
    {
        "name": "Normalización y Dibujo de Ingeniería II",
        "code": "NDI002",
        "sctCredits": 5,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "NDI001"
        ],
        "semester": "s2"
    },
    {
        "name": "Resistencia de Materiales",
        "code": "REM000",
        "sctCredits": 5,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "MDI000"
        ],
        "semester": "s2"
    },
    {
        "name": "Sistemas Tecnológicos",
        "code": "STC000",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "HET000"
        ],
        "semester": "s2"
    },
    {
        "name": "Análisis de Esfuerzo I (cae)",
        "code": "ANE001",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "REM000"
        ],
        "semester": "s3"
    },
    {
        "name": "Dibujo Asistido Por Computador II",
        "code": "DAC002",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "DAC001"
        ],
        "semester": "s3"
    },
    {
        "name": "Matematicas de Ingenieria",
        "code": "MTI000",
        "sctCredits": 7,
        "type": "CIENCIAS",
        "prerequisites": [
            "MAT002"
        ],
        "semester": "s3"
    },
    {
        "name": "Prevencion de Riesgos",
        "code": "PRR000",
        "sctCredits": 3,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Procesos y Equipos Industriales I",
        "code": "PEI001",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Taller de Procesos I",
        "code": "TPR001",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "NDI002"
        ],
        "semester": "s3"
    },
    {
        "name": "Termodinamica",
        "code": "TMT000",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "FIS002"
        ],
        "semester": "s3"
    },
    {
        "name": "Administracion de la Produccion",
        "code": "ADP000",
        "sctCredits": 3,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Análisis de Esfuerzo II (cae)",
        "code": "ANE002",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "ANE001"
        ],
        "semester": "s4"
    },
    {
        "name": "Ergonomia",
        "code": "ERG000",
        "sctCredits": 3,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Estadistica",
        "code": "EST000",
        "sctCredits": 2,
        "type": "CIENCIAS",
        "prerequisites": [
            "MTI000"
        ],
        "semester": "s4"
    },
    {
        "name": "Ingles I",
        "code": "ING001",
        "sctCredits": 2,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Mecanica de Fluidos",
        "code": "MDF000",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "TMT000"
        ],
        "semester": "s4"
    },
    {
        "name": "Procesos y Equipos Industriales II",
        "code": "PEI002",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "PEI001"
        ],
        "semester": "s4"
    },
    {
        "name": "Taller de Diseño de Productos I",
        "code": "TDP001",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "DAC002"
        ],
        "semester": "s4"
    },
    {
        "name": "Taller de Procesos II",
        "code": "TPR002",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "TPR001"
        ],
        "semester": "s4"
    },
    {
        "name": "Diseño de Plantas Industriales (ing. Básica)",
        "code": "DPI000",
        "sctCredits": 5,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "PEI002"
        ],
        "semester": "s5"
    },
    {
        "name": "Gestion de Calidad",
        "code": "GCA000",
        "sctCredits": 2,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "ADP000"
        ],
        "semester": "s5"
    },
    {
        "name": "Ingles II",
        "code": "ING002",
        "sctCredits": 3,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Innovacion y Emprendimiento",
        "code": "IEM000",
        "sctCredits": 2,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Software de Especialización",
        "code": "SDE000",
        "sctCredits": 6,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "ANE002"
        ],
        "semester": "s5"
    },
    {
        "name": "Taller de Diseño de Productos II",
        "code": "TDP002",
        "sctCredits": 6,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "TDP001"
        ],
        "semester": "s5"
    },
    {
        "name": "Taller de Procesos III",
        "code": "TPR003",
        "sctCredits": 5,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "TPR002"
        ],
        "semester": "s5"
    },
    {
        "name": "Diseño de Equipos Industriales (ing. Detalles)",
        "code": "DEI000",
        "sctCredits": 6,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "DPI000"
        ],
        "semester": "s6"
    },
    {
        "name": "Economía y Finanzas",
        "code": "EYF000",
        "sctCredits": 2,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Gestión del Conocimiento",
        "code": "GDC000",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Inglés III",
        "code": "ING003",
        "sctCredits": 2,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "ING002"
        ],
        "semester": "s6"
    },
    {
        "name": "Metodologia de la Investigacion",
        "code": "MIV000",
        "sctCredits": 2,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "GCA000"
        ],
        "semester": "s6"
    },
    {
        "name": "Taller de Diseño de Productos III",
        "code": "TDP003",
        "sctCredits": 5,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "TDP002"
        ],
        "semester": "s6"
    },
    {
        "name": "Taller de Procesos IV",
        "code": "TPR004",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "TPR003"
        ],
        "semester": "s6"
    },
    {
        "name": "Electricidad Aplicada",
        "code": "ELA000",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Evaluacion de Proyectos",
        "code": "EVP000",
        "sctCredits": 5,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "EYF000"
        ],
        "semester": "s7"
    },
    {
        "name": "Gestion del Medio Ambiente",
        "code": "GMB000",
        "sctCredits": 3,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "MIV000"
        ],
        "semester": "s7"
    },
    {
        "name": "Inglés IV",
        "code": "ING004",
        "sctCredits": 3,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "ING003"
        ],
        "semester": "s7"
    },
    {
        "name": "Innovación Acelerada",
        "code": "INN000",
        "sctCredits": 5,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "GDC000"
        ],
        "semester": "s7"
    },
    {
        "name": "Seminario de Título",
        "code": "SET000",
        "sctCredits": 0,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Taller de Diseño de Productos Ecológicos",
        "code": "TDE000",
        "sctCredits": 5,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "TDP003"
        ],
        "semester": "s7"
    },
    {
        "name": "Administración y Control de Proyectos",
        "code": "ACS000",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "SET000"
        ],
        "semester": "s8"
    },
    {
        "name": "Desarrollo de Nuevos Productos",
        "code": "DNP000",
        "sctCredits": 4,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "INN000"
        ],
        "semester": "s8"
    },
    {
        "name": "Gestión del Capital Humano",
        "code": "GCH000",
        "sctCredits": 3,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "ING004"
        ],
        "semester": "s8"
    },
    {
        "name": "Gestion Estrategica",
        "code": "GER000",
        "sctCredits": 3,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "GMB000"
        ],
        "semester": "s8"
    },
    {
        "name": "Instrumentación y Control",
        "code": "IYC000",
        "sctCredits": 8,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "ELA000"
        ],
        "semester": "s8"
    },
    {
        "name": "Proyecto de Titulo",
        "code": "PRT000",
        "sctCredits": 3,
        "type": "DISEÑO Y MANUFACTURA",
        "prerequisites": [
            "EVP000",
            "SET000"
        ],
        "semester": "s8"
    }
],
};
