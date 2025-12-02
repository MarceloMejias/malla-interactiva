import { Carrera } from '../../types';

export const prla: Carrera = {
  codigo: 'PRLA',
  nombre: 'Ing. en Prevención de Riesgos Lab. y Amb.',
  campus: 'vm',
  color: '#32CD32',
  
  categorias: [
    {
        "id": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "nombre": "Construcción y Prevención de Riesgos",
        "color": "#D69F7E"
    },
    {
        "id": "CIENCIAS",
        "nombre": "Ciencias",
        "color": "#FF8811"
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
        "name": "Fundamentos de Prevencion de Riesgos",
        "code": "FRI000",
        "sctCredits": 6,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Fundamentos Medio Ambiente",
        "code": "FMA000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Ingles",
        "code": "ING000",
        "sctCredits": 4,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introduccion a la Ingenieria",
        "code": "IPR000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Matematica I",
        "code": "MAT001",
        "sctCredits": 4,
        "type": "CIENCIAS",
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
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Administracion de la Produccion",
        "code": "ADP000",
        "sctCredits": 3,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Biologia Humana",
        "code": "BIH000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Competencias Laborales",
        "code": "CLA000",
        "sctCredits": 3,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
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
        "sctCredits": 4,
        "type": "CIENCIAS",
        "prerequisites": [
            "MAT001"
        ],
        "semester": "s2"
    },
    {
        "name": "Quimica General",
        "code": "QUG000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Riesgos Industriales",
        "code": "RIN000",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "FRI000"
        ],
        "semester": "s2"
    },
    {
        "name": "Administracion de Riesgos",
        "code": "ARI000",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "RIN000"
        ],
        "semester": "s3"
    },
    {
        "name": "Control y Combate de Incendio",
        "code": "CCI000",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "QUG000"
        ],
        "semester": "s3"
    },
    {
        "name": "Dibujo Industrial",
        "code": "DIN000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Estadistica",
        "code": "EST000",
        "sctCredits": 3,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Mantencion de Sistemas Productivos",
        "code": "MSP000",
        "sctCredits": 3,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "ADP000"
        ],
        "semester": "s3"
    },
    {
        "name": "Psicologia",
        "code": "PSI000",
        "sctCredits": 0,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Toxicologia",
        "code": "TOX000",
        "sctCredits": 0,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "QUG000"
        ],
        "semester": "s3"
    },
    {
        "name": "Ciencias del Peligro",
        "code": "CSP000",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Ergonomia",
        "code": "ERG000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Generadores a Vapor",
        "code": "GVA000",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Gestion de Calidad",
        "code": "GCA000",
        "sctCredits": 3,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "ADP000"
        ],
        "semester": "s4"
    },
    {
        "name": "Higiene Industrial I",
        "code": "HII001",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "TOX000"
        ],
        "semester": "s4"
    },
    {
        "name": "Riesgos Electricos",
        "code": "REL000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Transporte de Sust. Peligrosas",
        "code": "TSP000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Expresion Oral y Escrita",
        "code": "EOE000",
        "sctCredits": 3,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Laboratorio de Higiene Industrial",
        "code": "LHG000",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "HII001"
        ],
        "semester": "s5"
    },
    {
        "name": "Legislacion Laboral",
        "code": "LLA000",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Matematica de Ingenieria I",
        "code": "MTI001",
        "sctCredits": 6,
        "type": "CIENCIAS",
        "prerequisites": [
            "MAT002"
        ],
        "semester": "s5"
    },
    {
        "name": "Medicina Ocupacional",
        "code": "MOC000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "HII001"
        ],
        "semester": "s5"
    },
    {
        "name": "Procesos Productivos",
        "code": "PPR000",
        "sctCredits": 6,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "CSP000"
        ],
        "semester": "s5"
    },
    {
        "name": "Gestión del Capital Humano",
        "code": "GCH000",
        "sctCredits": 3,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Legislación Ambiental",
        "code": "LEA000",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Matematica de Ingenieria II",
        "code": "MTI002",
        "sctCredits": 5,
        "type": "CIENCIAS",
        "prerequisites": [
            "MTI001"
        ],
        "semester": "s6"
    },
    {
        "name": "Metodologia de la Investigacion",
        "code": "MIV000",
        "sctCredits": 3,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Prev. de Riesgos en Faenas Mineras",
        "code": "PFM000",
        "sctCredits": 3,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "PPR000"
        ],
        "semester": "s6"
    },
    {
        "name": "Quimica Ambiental",
        "code": "QAM000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "MTI001"
        ],
        "semester": "s6"
    },
    {
        "name": "Quimica Industrial",
        "code": "QIN000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Termodinamica y Fuentes de Energia",
        "code": "TFE000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "MTI001"
        ],
        "semester": "s6"
    },
    {
        "name": "Gestion del Medio Ambiente",
        "code": "GMB000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "LEA000"
        ],
        "semester": "s7"
    },
    {
        "name": "Higiene Industrial II",
        "code": "HII002",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "LHG000"
        ],
        "semester": "s7"
    },
    {
        "name": "Introduccion a la Economia y Finanzas",
        "code": "IEF000",
        "sctCredits": 3,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Laboratorio de Ergonomia",
        "code": "LER000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "ERG000"
        ],
        "semester": "s7"
    },
    {
        "name": "Laboratorio de Higiene Ambiental",
        "code": "LHA000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "QAM000"
        ],
        "semester": "s7"
    },
    {
        "name": "Manejo y Tratamiento de Emis. y Res.",
        "code": "MER000",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "QAM000"
        ],
        "semester": "s7"
    },
    {
        "name": "Mecanica de Fluidos",
        "code": "MDF000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Taller de Especialidad",
        "code": "TLL000",
        "sctCredits": 3,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Evaluacion de Proyectos",
        "code": "EVP000",
        "sctCredits": 3,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "IEF000"
        ],
        "semester": "s8"
    },
    {
        "name": "Gestion Estrategica",
        "code": "GER000",
        "sctCredits": 0,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Innovacion y Emprendimiento",
        "code": "IEM000",
        "sctCredits": 3,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Proyecto de Titulo",
        "code": "PRT000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Seguros y Riesgos Patrimoniales",
        "code": "SRP000",
        "sctCredits": 4,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Sistemas Integrados de Gestion",
        "code": "SMI000",
        "sctCredits": 6,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "GMB000"
        ],
        "semester": "s8"
    },
    {
        "name": "Ventilacion Industrial",
        "code": "VEI000",
        "sctCredits": 5,
        "type": "CONSTRUCCIÓN Y PREVENCIÓN DE RIESGOS",
        "prerequisites": [
            "MDF000"
        ],
        "semester": "s8"
    }
],
};
