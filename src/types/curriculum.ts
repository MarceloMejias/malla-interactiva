// ==========================================
// Subject (Asignatura) Types
// ==========================================

export interface Subject {
	name: string;
	code: string;
	sctCredits: number;
	type: string;
	prerequisites: string[];
	semester?: string;
}

export type SubjectState = {
	status: 'approved' | 'pending';
};

export type CalculatorState = {
	[subjectCode: string]: SubjectState;
};

export type SubjectColors = {
	[category: string]: string[];
};

// ==========================================
// Category (Categoría) Types
// ==========================================

export interface Categoria {
	id: string;
	nombre: string;
	color: string;
}

// ==========================================
// Career (Carrera) Types
// ==========================================

export interface Carrera {
	codigo: string;
	nombre: string;
	campus: 'cc' | 'vm' | 'sj' | 'vc' | 'cp';
	color: string;
	asignaturas: Subject[];
	categorias: Categoria[];
}

export interface CarreraSimple {
	Nombre: string;
	Link: string;
	Color: string;
}

// ==========================================
// Backwards compatibility aliases
// ==========================================

/** @deprecated Use Subject instead */
export type Asignatura = Subject;
