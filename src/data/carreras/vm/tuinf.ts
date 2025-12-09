import { Carrera } from '@/types/curriculum';

export const tuinf: Carrera = {
  codigo: 'TUINF',
  nombre: 'Téc. Univ. en Informática',
  campus: 'vm',
  color: '#7344C9',
  
  categorias: [
    {
        "id": "CIENCIAS",
        "nombre": "Ciencias",
        "color": "#a53f2b"
    },
    {
        "id": "ELECTROTECNIA E INFORMÁTICA",
        "nombre": "Electrotecnia E Informática",
        "color": "#8E44AD"
    }
],

  asignaturas: [
    {
        "name": "Análisis de Sistemas de Información",
        "code": "EIN111_A",
        "sctCredits": 5,
        "type": "ELECTROTECNIA E INFORMÁTICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Educación Física",
        "code": "EFI100_T",
        "sctCredits": 2,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Elementos de la Matemática",
        "code": "MAT001_A",
        "sctCredits": 5,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Inglés I",
        "code": "HCW100-T",
        "sctCredits": 2,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Introducción a la Informática y Computación",
        "code": "EIN113_A",
        "sctCredits": 5,
        "type": "ELECTROTECNIA E INFORMÁTICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Programación",
        "code": "EIN112_A",
        "sctCredits": 6,
        "type": "ELECTROTECNIA E INFORMÁTICA",
        "prerequisites": [],
        "semester": "s1"
    },
    {
        "name": "Análisis y Diseño Orientado a Objeto",
        "code": "EIN121_A",
        "sctCredits": 5,
        "type": "ELECTROTECNIA E INFORMÁTICA",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Diseño de Sistemas de Información",
        "code": "EIN122_A",
        "sctCredits": 5,
        "type": "ELECTROTECNIA E INFORMÁTICA",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Estructura de Datos",
        "code": "EIN123_A",
        "sctCredits": 5,
        "type": "ELECTROTECNIA E INFORMÁTICA",
        "prerequisites": [
            "EIN112_A"
        ],
        "semester": "s2"
    },
    {
        "name": "Ingles II",
        "code": "HCW101-T",
        "sctCredits": 2,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Matemática Aplicada",
        "code": "MAT002_A",
        "sctCredits": 5,
        "type": "CIENCIAS",
        "prerequisites": [
            "MAT001_A"
        ],
        "semester": "s2"
    },
    {
        "name": "Programación Orientada a Evento",
        "code": "EIN124_A",
        "sctCredits": 5,
        "type": "ELECTROTECNIA E INFORMÁTICA",
        "prerequisites": [],
        "semester": "s2"
    },
    {
        "name": "Arquitectura y Organización de Computadores",
        "code": "EIN135_A",
        "sctCredits": 5,
        "type": "ELECTROTECNIA E INFORMÁTICA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Base de Datos",
        "code": "EIN134_A",
        "sctCredits": 6,
        "type": "ELECTROTECNIA E INFORMÁTICA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Diseño y Programación Orientada a la Web",
        "code": "EIN133_A",
        "sctCredits": 6,
        "type": "ELECTROTECNIA E INFORMÁTICA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Ingles III",
        "code": "HCW102-T",
        "sctCredits": 2,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Programación Orientada a Objeto",
        "code": "EIN132_A",
        "sctCredits": 5,
        "type": "ELECTROTECNIA E INFORMÁTICA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Taller de Sistema de Información I",
        "code": "EIN131_A",
        "sctCredits": 5,
        "type": "ELECTROTECNIA E INFORMÁTICA",
        "prerequisites": [],
        "semester": "s3"
    },
    {
        "name": "Desarrollo de Aplicaciones Móviles",
        "code": "EIN142_A",
        "sctCredits": 6,
        "type": "ELECTROTECNIA E INFORMÁTICA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Humanista I: Competencias Clave Para el Desarrollo Personal",
        "code": "HRW101A",
        "sctCredits": 3,
        "type": "CIENCIAS",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Sistemas Operativos",
        "code": "EIN144_A",
        "sctCredits": 6,
        "type": "ELECTROTECNIA E INFORMÁTICA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Taller de Desarrollo de Software",
        "code": "EIN143_A",
        "sctCredits": 6,
        "type": "ELECTROTECNIA E INFORMÁTICA",
        "prerequisites": [],
        "semester": "s4"
    },
    {
        "name": "Taller de Sistema de Información II",
        "code": "EIN141_A",
        "sctCredits": 6,
        "type": "ELECTROTECNIA E INFORMÁTICA",
        "prerequisites": [
            "EIN131_A"
        ],
        "semester": "s4"
    }
],
};
