import { Carrera } from '@/types/curriculum';

export const inginf: Carrera = {
  codigo: 'INGINF',
  nombre: 'Ingeniería en Informática',
  campus: 'vm',
  color: '#6366F1',
  
  categorias: [
    {
        "id": "HUM",
        "nombre": "Humanistas, libres y deportes",
        "color": "#F97316"
    },
    {
        "id": "PC",
        "nombre": "Plan Común",
        "color": "#3B82F6"
    },
    {
        "id": "FI",
        "nombre": "Fundamentos de Informática",
        "color": "#8B5CF6"
    },
    {
        "id": "IS",
        "nombre": "Ingeniería de Software",
        "color": "#F59E0B"
    },
    {
        "id": "IND",
        "nombre": "Industrias",
        "color": "#06B6D4"
    },
    {
        "id": "TIN",
        "nombre": "Transversal e Integración",
        "color": "#EF4444"
    },
    {
        "id": "ELEC",
        "nombre": "Electivos Informática",
        "color": "#EC4899"
    }
],

  asignaturas: [
    {
        "name": "Fundamento de la Matemática",
        "code": "MAT100-B",
        "sctCredits": 6,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Ingeniería",
        "code": "EIN412-B",
        "sctCredits": 5,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Programación",
        "code": "EIN413-B",
        "sctCredits": 5,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física I",
        "code": "EFI100-T",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Competencias claves para el desarrollo personal",
        "code": "HRW101-B",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Inglés I",
        "code": "HCW100-T",
        "sctCredits": 2,
        "type": "PC",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción al calculo",
        "code": "MAT001_B",
        "sctCredits": 6,
        "type": "PC",
        "prerequisites": [
            "MAT100-B"
        ],
        "semester": "s2"
    },
    {
        "name": "Química y Sociedad",
        "code": "QMA001-B",
        "sctCredits": 5,
        "type": "PC",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Ciencias de la Ingeniería I: Estructura de Datos",
        "code": "EIN423-B",
        "sctCredits": 6,
        "type": "FI",
        "prerequisites": [
            "EIN413-B"
        ],
        "semester": "s2"
    },
    {
        "name": "Educación Física II",
        "code": "EFI101_T",
        "sctCredits": 2,
        "type": "HUM",
        "prerequisites": [
            "EFI100-T"
        ],
        "semester": "s2"
    },
    {
        "name": "Competencias para el desarrollo profesional",
        "code": "HRW102-B",
        "sctCredits": 3,
        "type": "HUM",
        "prerequisites": [
            "HRW101-B"
        ],
        "semester": "s2"
    },
    {
        "name": "Inglés II",
        "code": "HCW101-T",
        "sctCredits": 2,
        "type": "PC",
        "prerequisites": [
            "HCW100-T"
        ],
        "semester": "s2"
    },
    {
        "name": "Matemática de Ingeniería",
        "code": "MAT021B",
        "sctCredits": 6,
        "type": "PC",
        "prerequisites": [
            "MAT001_B"
        ],
        "semester": "s3"
    },
    {
        "name": "Introducción a la Física",
        "code": "FIS009B",
        "sctCredits": 5,
        "type": "PC",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Ciencias de la Ingeniería II: Lenguajes de Programación",
        "code": "EIN080B",
        "sctCredits": 5,
        "type": "FI",
        "prerequisites": [
            "EIN423-B"
        ],
        "semester": "s3"
    },
    {
        "name": "Arquitectura y Organización de Computadores",
        "code": "EIN079B",
        "sctCredits": 6,
        "type": "FI",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Bases de datos",
        "code": "EIN-009B",
        "sctCredits": 6,
        "type": "IS",
        "prerequisites": [
            "EIN423-B"
        ],
        "semester": "s3"
    },
    {
        "name": "Inglés III",
        "code": "HCW102-T",
        "sctCredits": 2,
        "type": "PC",
        "prerequisites": [
            "HCW101-T"
        ],
        "semester": "s3"
    },
    {
        "name": "Administración de Empresas",
        "code": "HMN295T",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Física Mecánica",
        "code": "FIS007B",
        "sctCredits": 5,
        "type": "PC",
        "prerequisites": [
            "MAT100-B",
            "FIS009B"
        ],
        "semester": "s4"
    },
    {
        "name": "Ciencias de la Ingeniería III: Análisis y Diseño de Software",
        "code": "EIN081B",
        "sctCredits": 6,
        "type": "FI",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Sistemas Operativos",
        "code": "EIN083B",
        "sctCredits": 5,
        "type": "IS",
        "prerequisites": [
            "EIN079B"
        ],
        "semester": "s4"
    },
    {
        "name": "Taller Lenguaje de Programación",
        "code": "EIN082B",
        "sctCredits": 5,
        "type": "IS",
        "prerequisites": [
            "EIN080B",
            "EIN-009B"
        ],
        "semester": "s4"
    },
    {
        "name": "Estadística",
        "code": "MAT006B",
        "sctCredits": 4,
        "type": "PC",
        "prerequisites": [
            "MAT021B"
        ],
        "semester": "s4"
    },
    {
        "name": "Introducción a las Finanzas",
        "code": "HMN292T",
        "sctCredits": 3,
        "type": "IND",
        "prerequisites": [
            "HMN295T"
        ],
        "semester": "s5"
    },
    {
        "name": "Gestión de la Innovación",
        "code": "EIN088B",
        "sctCredits": 3,
        "type": "IND",
        "prerequisites": [],
        "semester": "s5"
    },
    {
        "name": "Sistemas integrados de Gestión",
        "code": "EIN084B",
        "sctCredits": 4,
        "type": "IND",
        "prerequisites": [
            "MAT006B"
        ],
        "semester": "s5"
    },
    {
        "name": "Redes de Computadores",
        "code": "EIN085B",
        "sctCredits": 6,
        "type": "FI",
        "prerequisites": [
            "EIN083B"
        ],
        "semester": "s5"
    },
    {
        "name": "Ingeniería de Software",
        "code": "EIN086B",
        "sctCredits": 6,
        "type": "IS",
        "prerequisites": [
            "EIN082B"
        ],
        "semester": "s5"
    },
    {
        "name": "Ciencias de Datos",
        "code": "EIN087B",
        "sctCredits": 6,
        "type": "FI",
        "prerequisites": [
            "MAT006B"
        ],
        "semester": "s5"
    },
    {
        "name": "Responsabilidad Social Empresarial y Ética Laboral",
        "code": "HMN293T",
        "sctCredits": 3,
        "type": "TIN",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Gestión del Emprendimiento",
        "code": "EIN089B",
        "sctCredits": 3,
        "type": "TIN",
        "prerequisites": [
            "HMN292T",
            "EIN088B"
        ],
        "semester": "s6"
    },
    {
        "name": "Gestión de Proyectos",
        "code": "EIN093B",
        "sctCredits": 5,
        "type": "IND",
        "prerequisites": [],
        "semester": "s6"
    },
    {
        "name": "Taller de Administración de Sistemas",
        "code": "EIN090B",
        "sctCredits": 6,
        "type": "IS",
        "prerequisites": [
            "EIN085B"
        ],
        "semester": "s6"
    },
    {
        "name": "Inteligencia de Negocios",
        "code": "EIN091B",
        "sctCredits": 6,
        "type": "IND",
        "prerequisites": [
            "EIN-009B",
            "EIN086B"
        ],
        "semester": "s6"
    },
    {
        "name": "Visualización",
        "code": "EIN092B",
        "sctCredits": 6,
        "type": "FI",
        "prerequisites": [
            "EIN087B"
        ],
        "semester": "s6"
    },
    {
        "name": "Electivo I",
        "code": "EIN095B",
        "sctCredits": 6,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Electivo II",
        "code": "EIN096B",
        "sctCredits": 6,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Electivo III",
        "code": "EIN097B",
        "sctCredits": 6,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s7"
    },
    {
        "name": "Proyecto de Software I",
        "code": "EIN098B",
        "sctCredits": 5,
        "type": "ELEC",
        "prerequisites": [
            "EIN093B",
            "EIN088B"
        ],
        "semester": "s7"
    },
    {
        "name": "Seminario de Título",
        "code": "EIN099B",
        "sctCredits": 3,
        "type": "ELEC",
        "prerequisites": [
            "MAT006B",
            "EIN082B",
            "EIN083B"
        ],
        "semester": "s7"
    },
    {
        "name": "Electivo IV",
        "code": "EIN100B",
        "sctCredits": 6,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Electivo V",
        "code": "EIN101B",
        "sctCredits": 6,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Electivo VI",
        "code": "EIN102B",
        "sctCredits": 6,
        "type": "ELEC",
        "prerequisites": [],
        "semester": "s8"
    },
    {
        "name": "Proyecto de Software II",
        "code": "EIN103B",
        "sctCredits": 5,
        "type": "ELEC",
        "prerequisites": [
            "EIN098B"
        ],
        "semester": "s8"
    },
    {
        "name": "Proyecto de Título",
        "code": "EIN104B",
        "sctCredits": 6,
        "type": "ELEC",
        "prerequisites": [
            "EIN099B"
        ],
        "semester": "s8"
    }
],
};
