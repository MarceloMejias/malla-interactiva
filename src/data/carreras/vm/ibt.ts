import { Carrera } from '@/types/curriculum';

export const ibt: Carrera = {
  codigo: 'IBT',
  nombre: 'Ingeniería en Biotecnología',
  campus: 'vm',
  color: '#FF1493',
  
  categorias: [
    {
        "id": "EI",
        "nombre": "Electronica e informatica",
        "color": "#EF4444"
    },
    {
        "id": "C",
        "nombre": "Ciencias",
        "color": "#3B82F6"
    },
    {
        "id": "QMD",
        "nombre": "Química y medio ambiente",
        "color": "#06B6D4"
    },
    {
        "id": "DGD",
        "nombre": "Dirección general de docencia ",
        "color": "#6366F1"
    },
    {
        "id": "IC",
        "nombre": "Ingeniería comercial",
        "color": "#F59E0B"
    },
    {
        "id": "EH",
        "nombre": "Estudios Humanisticos",
        "color": "#EC4899"
    }
],

  asignaturas: [
    {
        "name": "Computación Aplicada",
        "code": "EIN512B",
        "sctCredits": 5,
        "type": "EI",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "EFI138-T",
        "sctCredits": 2,
        "type": "C",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Fundamento de la Matemática",
        "code": "MAT100-B",
        "sctCredits": 6,
        "type": "C",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Inglés I",
        "code": "HCW100-T",
        "sctCredits": 2,
        "type": "C",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Laboratorio de Química General",
        "code": "QMA002-B",
        "sctCredits": 6,
        "type": "QMD",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Química General",
        "code": "QMA003-B",
        "sctCredits": 6,
        "type": "QMD",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Biología Celular",
        "code": "QMA006-B",
        "sctCredits": 6,
        "type": "QMD",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Inglés II",
        "code": "HCW101-T",
        "sctCredits": 2,
        "type": "C",
        "prerequisites": [
            "HCW100-T"
        ],
        "semester": "s2"
    },
    {
        "name": "Introducción a la Ingeniería",
        "code": "ING001-B",
        "sctCredits": 5,
        "type": "DGD",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Introducción al Cálculo",
        "code": "MAT009-B",
        "sctCredits": 6,
        "type": "C",
        "prerequisites": [
            "MAT100-B"
        ],
        "semester": "s2"
    },
    {
        "name": "Laboratorio de Química Cuantitativa",
        "code": "QMA005-B",
        "sctCredits": 6,
        "type": "QMD",
        "prerequisites": [
            "QMA002-B"
        ],
        "semester": "s2"
    },
    {
        "name": "Química Cuantitativa",
        "code": "QMA004-B",
        "sctCredits": 5,
        "type": "QMD",
        "prerequisites": [
            "QMA003-B"
        ],
        "semester": "s2"
    },
    {
        "name": "Análisis Instrumental",
        "code": "QMA007-B",
        "sctCredits": 5,
        "type": "QMD",
        "prerequisites": [
            "QMA005-B"
        ],
        "semester": "s3"
    },
    {
        "name": "Bioquímica",
        "code": "QMA010B",
        "sctCredits": 5,
        "type": "QMD",
        "prerequisites": [
            "QMA006-B"
        ],
        "semester": "s3"
    },
    {
        "name": "Elementos de Fisicoquímica",
        "code": "QMA009-B",
        "sctCredits": 4,
        "type": "QMD",
        "prerequisites": [
            "ING001-B"
        ],
        "semester": "s3"
    },
    {
        "name": "Inglés III",
        "code": "HCW102-T",
        "sctCredits": 2,
        "type": "C",
        "prerequisites": [
            "HCW101-T"
        ],
        "semester": "s3"
    },
    {
        "name": "Introducción a la Física",
        "code": "FIS009B",
        "sctCredits": 5,
        "type": "C",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Matemática de la Ingeniería",
        "code": "MAT030B",
        "sctCredits": 6,
        "type": "C",
        "prerequisites": [
            "MAT009-B"
        ],
        "semester": "s3"
    },
    {
        "name": "Administración de Empresas",
        "code": "GDEOO6-B",
        "sctCredits": 5,
        "type": "IC",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Biología Molecular",
        "code": "QMA012-B",
        "sctCredits": 5,
        "type": "QMD",
        "prerequisites": [
            "QMA010B"
        ],
        "semester": "s4"
    },
    {
        "name": "Ciencias de la Ingeniería I: Termodinámica",
        "code": "QMA013-B",
        "sctCredits": 5,
        "type": "QMD",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Física Mecánica",
        "code": "FIS007B",
        "sctCredits": 5,
        "type": "C",
        "prerequisites": [
            "MAT100-B",
            "FIS009B"
        ],
        "semester": "s4"
    },
    {
        "name": "Introducción a las Operaciones Unitarias en Bioprocesos",
        "code": "QMA011-B",
        "sctCredits": 5,
        "type": "QMD",
        "prerequisites": [
            "QMA009-B"
        ],
        "semester": "s4"
    },
    {
        "name": "Tecnologías de la Información y Comunicaciones",
        "code": "GDE005-B",
        "sctCredits": 4,
        "type": "EI",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Bioinformática",
        "code": "QMA015-B",
        "sctCredits": 4,
        "type": "QMD",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Ciencias de la Ingeniería II: Balance de Materia y Energía",
        "code": "QMA014-B",
        "sctCredits": 5,
        "type": "QMD",
        "prerequisites": [
            "QMA013-B"
        ],
        "semester": "s5"
    },
    {
        "name": "Estadística",
        "code": "MAT006-B",
        "sctCredits": 5,
        "type": "C",
        "prerequisites": [
            "MAT030B"
        ],
        "semester": "s5"
    },
    {
        "name": "Gestión de la Innovación",
        "code": "GDE002-B",
        "sctCredits": 3,
        "type": "DGD",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Introducción a las Finanzas",
        "code": "GDE008-B",
        "sctCredits": 3,
        "type": "DGD",
        "prerequisites": [
            "GDEOO6-B"
        ],
        "semester": "s5"
    },
    {
        "name": "Laboratorio de Microbiología",
        "code": "QMA018-B",
        "sctCredits": 4,
        "type": "QMD",
        "prerequisites": [
            "QMA010B"
        ],
        "semester": "s5"
    },
    {
        "name": "Microbiología y Virología",
        "code": "QMA016-B",
        "sctCredits": 5,
        "type": "QMD",
        "prerequisites": [
            "QMA010B"
        ],
        "semester": "s5"
    },
    {
        "name": "Buenas Prácticas de Laboratorio de Ensayo (BPL)",
        "code": "QMA022-B",
        "sctCredits": 3,
        "type": "QMD",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Ciencias de la Ingeniería III: Procesos de Transporte",
        "code": "QMA019-B",
        "sctCredits": 5,
        "type": "QMD",
        "prerequisites": [
            "QMA014-B"
        ],
        "semester": "s6"
    },
    {
        "name": "Gestión del Emprendimiento",
        "code": "GDE003-B",
        "sctCredits": 3,
        "type": "DGD",
        "prerequisites": [
            "GDE008-B",
            "GDE002-B"
        ],
        "semester": "s6"
    },
    {
        "name": "Responsabilidad Social Empresarial y Ética Laboral",
        "code": "GDE007-B",
        "sctCredits": 3,
        "type": "EH",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Sistemas Integrados de Gestión",
        "code": "GDE004-B",
        "sctCredits": 4,
        "type": "DGD",
        "prerequisites": [
            "MAT006-B",
            "GDEOO6-B"
        ],
        "semester": "s6"
    },
    {
        "name": "Técnicas Biomédicas y Farmacéuticas",
        "code": "QMA021-B",
        "sctCredits": 5,
        "type": "QMD",
        "prerequisites": [
            "QMA018-B",
            "QMA016-B"
        ],
        "semester": "s6"
    },
    {
        "name": "Técnicas Inmunológicas y Moleculares",
        "code": "QMA020-B",
        "sctCredits": 6,
        "type": "QMD",
        "prerequisites": [
            "QMA015-B",
            "QMA012-B"
        ],
        "semester": "s6"
    },
    {
        "name": "Buenas Prácticas de Manufactura y HACCP",
        "code": "QMA024-B",
        "sctCredits": 3,
        "type": "QMD",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Educación Física II",
        "code": "EFI101T",
        "sctCredits": 2,
        "type": "C",
        "prerequisites": [
            "EFI138-T"
        ],
        "semester": "s7"
    },
    {
        "name": "Gestión de Proyectos",
        "code": "GDE001-B",
        "sctCredits": 5,
        "type": "DGD",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Humanidades I: Taller de Ideación y Creatividad",
        "code": "QMA023-B",
        "sctCredits": 3,
        "type": "QMD",
        "prerequisites": [
            "GDE002-B"
        ],
        "semester": "s7"
    },
    {
        "name": "Instrumentación en Bioprocesos",
        "code": "QMA025-B",
        "sctCredits": 4,
        "type": "QMD",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Laboratorio de PCR I",
        "code": "QMA026-B",
        "sctCredits": 5,
        "type": "QMD",
        "prerequisites": [
            "QMA020-B"
        ],
        "semester": "s7"
    },
    {
        "name": "Seminario de Título",
        "code": "QMA027-B",
        "sctCredits": 3,
        "type": "QMD",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Humanidades II: Liderazgo y Trabajo en Equipo",
        "code": "QMA034-B",
        "sctCredits": 3,
        "type": "QMD",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Laboratorio de PCR II",
        "code": "QMA030-B",
        "sctCredits": 5,
        "type": "QMD",
        "prerequisites": [
            "QMA026-B"
        ],
        "semester": "s8"
    },
    {
        "name": "Proyecto de Título",
        "code": "QMA031-B",
        "sctCredits": 5,
        "type": "QMD",
        "prerequisites": [
            "QMA027-B"
        ],
        "semester": "s8"
    },
    {
        "name": "Taller de Biorreactores",
        "code": "QMA029-B",
        "sctCredits": 6,
        "type": "QMD",
        "prerequisites": [
            "QMA025-B"
        ],
        "semester": "s8"
    },
    {
        "name": "Taller Integrado de Ingeniería",
        "code": "QMA028-B",
        "sctCredits": 6,
        "type": "QMD",
        "prerequisites": [
            "QMA023-B"
        ],
        "semester": "s8"
    }
],
};
