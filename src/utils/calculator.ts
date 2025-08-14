import dataINGINF from '@/data/data_INGINF.json';
import { CalculatorState } from '@/types/curriculum';

export function calculateCredits(subjectStates: CalculatorState) {
  let approvedCredits = 0;
  let totalCredits = 0;
  let approvedSubjects = 0;
  let totalSubjects = 0;

  const data = dataINGINF as Record<string, unknown[][]>;
  
  Object.values(data).forEach((semester) => {
    semester.forEach((subject: unknown[]) => {
      // El orden es: [nombre, código, créditos USM, créditos SCT, tipo, prerrequisitos, adicional]
      const [, code, , sctCredits] = subject;
      const credits = Number(sctCredits);
      
      totalCredits += credits;
      totalSubjects++;
      
      const state = subjectStates[code as string];
      if (state?.status === 'approved') {
        approvedCredits += credits;
        approvedSubjects++;
      }
    });
  });

  return {
    approvedCredits,
    totalCredits,
    approvedSubjects,
    totalSubjects,
    percentage: totalCredits > 0 ? (approvedCredits / totalCredits) * 100 : 0
  };
}
