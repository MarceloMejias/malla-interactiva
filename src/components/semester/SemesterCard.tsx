import { useRef } from 'react';
import SubjectCard from './SubjectCard';
import { Subject, SubjectColors, SubjectState } from '@/types/curriculum';

interface SemesterCardProps {
  semester: string;
  subjects: Subject[];
  subjectStates: Record<string, SubjectState>;
  onStateChange: (code: string, state: SubjectState) => void;
  colors: SubjectColors;
  onPrerequisiteClick: (subjectCode: string) => void;
  findSubjectByCode: (code: string) => Subject | undefined;
  darkMode: boolean;
  subjectRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
}

export default function SemesterCard({
  semester,
  subjects,
  subjectStates,
  onStateChange,
  colors,
  onPrerequisiteClick,
  findSubjectByCode,
  darkMode,
  subjectRefs
}: SemesterCardProps) {
  const getSemesterTitle = (semester: string) => {
    const semesterNumber = semester.replace('s', '');
    return `${semesterNumber}° Semestre`;
  };

  const getSemesterCredits = (subjects: Subject[]) => {
    return subjects.reduce((total, subject) => total + Number(subject.sctCredits), 0);
  };

  const getSemesterApprovedCredits = (subjects: Subject[]) => {
    return subjects.reduce((total, subject) => {
      const state = subjectStates[subject.code];
      return total + (state?.status === 'approved' ? Number(subject.sctCredits) : 0);
    }, 0);
  };

  const semesterCredits = getSemesterCredits(subjects);
  const approvedCredits = getSemesterApprovedCredits(subjects);

  if (subjects.length === 0) return null;

  return (
    <div 
      className={`
        flex flex-col rounded-2xl shadow-md border w-full
        md:max-w-[180px] md:w-40 md:flex-shrink-0
        ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}
      `}
    >
      {/* Header del semestre */}
      <div className={`rounded-t-2xl p-2 md:p-3 text-center border-b ${
        darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-300'
      }`}>
        <h3 className={`font-bold text-xs md:text-sm ${
          darkMode ? 'text-gray-100' : 'text-gray-800'
        }`}>
          {getSemesterTitle(semester)}
        </h3>
        <div className={`text-xs mt-1 ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          <span className="font-medium">{approvedCredits}</span>
          <span className="mx-1">/</span>
          <span>{semesterCredits} créditos</span>
        </div>
        <div className={`w-full rounded-full h-2 mt-2 overflow-hidden ${
          darkMode ? 'bg-gray-600' : 'bg-gray-300'
        }`}>
          <div 
            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500 shadow-sm"
            style={{ width: `${semesterCredits > 0 ? (approvedCredits / semesterCredits) * 100 : 0}%` }}
          />
        </div>
      </div>
      
      {/* Asignaturas del semestre */}
      <div className="flex flex-col gap-2 md:gap-3 p-2 md:p-3 rounded-b-2xl">
        {subjects.map((subject) => (
          <div
            key={subject.code}
            ref={(el) => {
              subjectRefs.current[subject.code] = el;
            }}
            className="transition-all duration-300 ease-in-out"
          >
            <SubjectCard
              subject={subject}
              state={subjectStates[subject.code]}
              onStateChange={(state) => onStateChange(subject.code, state)}
              color={colors[subject.type]?.[0] || '#6B7280'}
              categoryName={colors[subject.type]?.[1] || 'Sin categoría'}
              onPrerequisiteClick={onPrerequisiteClick}
              findSubjectByCode={findSubjectByCode}
              subjectStates={subjectStates}
              colors={colors}
              darkMode={darkMode}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
