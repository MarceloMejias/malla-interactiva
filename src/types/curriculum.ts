
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
