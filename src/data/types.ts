// Tipos para las carreras y mallas curriculares

export interface Asignatura {
  name: string;
  code: string;
  usmCredits?: string;
  sctCredits: number;
  type: string;
  prerequisites: string[];
  semester: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  color: string;
}

export interface Carrera {
  codigo: string;
  nombre: string;
  campus: 'cc' | 'vm' | 'sj' | 'vc' | 'cp';
  color: string;
  asignaturas: Asignatura[];
  categorias: Categoria[];
}

export interface CarreraSimple {
  Nombre: string;
  Link: string;
  Color: string;
}
