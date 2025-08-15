'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
import type { Subject, SubjectState, CalculatorState, SubjectColors } from '@/types/curriculum';

interface SubjectCardProps {
  subject: Subject;
  state: SubjectState | undefined;
  onStateChange: (state: SubjectState) => void;
  color: string;
  categoryName: string;
  onPrerequisiteClick: (subjectCode: string) => void;
  findSubjectByCode: (code: string) => Subject | undefined;
  subjectStates: CalculatorState;
  colors: SubjectColors;
  darkMode?: boolean;
}

export default function SubjectCard({ 
  subject, 
  state, 
  onStateChange, 
  color,
  categoryName,
  onPrerequisiteClick,
  findSubjectByCode,
  subjectStates,
  colors,
  darkMode = false
}: SubjectCardProps) {

  const canTakeSubject = () => {
    // Si no tiene prerrequisitos, siempre se puede tomar
    if (subject.prerequisites.length === 0) return true;
    // Verificar que todos los prerrequisitos estén aprobados
    return subject.prerequisites.every((prereqCode: string) => {
      const prereqState = subjectStates[prereqCode];
      return prereqState?.status === 'approved';
    });
  };

  const isBlocked = !canTakeSubject() && state?.status !== 'approved';

  // Devuelve clases de texto y borde con el color de la categoría como texto
  const getStatusColor = () => {
    if (isBlocked) {
      return 'border-gray-300 cursor-not-allowed';
    }
    switch (state?.status) {
      case 'approved':
        return 'border-green-300';
      default:
        return 'border-gray-200 hover:border-gray-400';
    }
  };

  // El color del texto principal (ahora blanco para contrastar con el fondo de color)
  const getTextColor = () => {
    if (isBlocked) return '#9ca3af'; // gray-400
    if (state?.status === 'approved') return '#fff'; // blanco para green-50
    // blanco para contrastar con el color de fondo
    return '#fff';
  };

  // El fondo ahora usa el color de la categoría
  const getBackgroundColor = () => {
    if (isBlocked) return darkMode ? '#4b5563' : '#6b7280'; // gray-600 (dark) / gray-500 (light)
    if (state?.status === 'approved') return '#10b981'; // green-500 (same for both modes)
    // color de la categoría del JSON
    return color || (darkMode ? '#374151' : '#fff'); // gray-700 (dark) / white (light)
  };

  const handleClick = () => {
    // No permitir cambios si está bloqueada (excepto si ya está aprobada)
    if (isBlocked) return;
    
    // Alternar entre pendiente y aprobado con un simple click
    const newStatus = state?.status === 'approved' ? 'pending' : 'approved';
    onStateChange({ status: newStatus });
  };

  const PrerequisiteChip = ({ prereqCode }: { prereqCode: string }) => {
    const prereqSubject = findSubjectByCode(prereqCode);
    const prereqState = subjectStates[prereqCode];
    if (!prereqSubject) {
      return (
        <span className="inline-block text-xs px-2 py-1 rounded bg-white/20 text-white/80">
          {prereqCode}
        </span>
      );
    }
    // Color de la categoría del prerrequisito
    const prereqColor = colors[prereqSubject.type]?.[0] || '#6b7280';
    return (
      <button
        onClick={e => {
          e.stopPropagation();
          onPrerequisiteClick(prereqCode);
        }}
        className={`inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded font-bold text-white hover:brightness-110 transition-all`}
        style={{ backgroundColor: prereqColor }}
        title={`${prereqSubject.name} (${prereqCode}) - Click para ir al ramo`}
      >
        <span>{prereqCode}</span>
        <div 
          className={`w-2 h-2 rounded-full border border-white ${
            prereqState?.status === 'approved' ? 'bg-green-400' : 'bg-red-400'
          }`}
        />
      </button>
    );
  };

  return (
    <div className="relative group">
      <div
        className={`relative rounded-xl border ${getStatusColor()} cursor-pointer transition-all duration-300 overflow-hidden shadow-md hover:shadow-lg transform hover:scale-[1.02] min-h-[90px] md:min-h-[100px] flex flex-col`}
        style={{ backgroundColor: getBackgroundColor() }}
        onClick={handleClick}
        title={
          isBlocked
            ? `${subject.name} - Bloqueada: completa los prerrequisitos primero`
            : `${subject.name} - Click para ${state?.status === 'approved' ? 'marcar como pendiente' : 'marcar como aprobada'}`
        }
      >
        {/* Código como carátula en esquina superior izquierda */}
        <div className={`absolute top-0 left-0 ${darkMode ? 'bg-gray-800/90' : 'bg-white/85'} rounded-br-lg px-2 py-0.5`}>
          <span className="text-xs font-bold" style={{ color: getBackgroundColor() }}>
            {subject.code}
          </span>
        </div>
        
        {/* Créditos como carátula en esquina superior derecha */}
        <div className={`absolute top-0 right-0 ${darkMode ? 'bg-gray-800/90' : 'bg-white/85'} rounded-bl-lg px-2 py-0.5`}>
          <span className="text-xs font-bold" style={{ color: getBackgroundColor() }}>
            {subject.sctCredits}
          </span>
        </div>
        
        {/* Icono de bloqueo como carátula en esquina inferior derecha */}
        {isBlocked && (
          <div className={`absolute bottom-0 right-0 ${darkMode ? 'bg-gray-800/90' : 'bg-white/85'} rounded-tl-lg px-2 py-0.5`}>
            <FontAwesomeIcon icon={faLock} className="text-xs" style={{ color: getBackgroundColor() }} />
          </div>
        )}
        
        {/* Contenido principal */}
        <div className="flex-1 px-2 md:px-3 pt-8 md:pt-10 pb-1 md:pb-2">
          <h3 className="font-bold text-xs leading-tight text-white mb-1 flex items-center gap-1">
            {subject.name}
          </h3>
          
          {/* Prerrequisitos */}
          {subject.prerequisites.length > 0 && (
            <div className="mt-auto">
              <div className="flex flex-wrap gap-1">
                {subject.prerequisites.map((prereq: string) => (
                  <PrerequisiteChip key={prereq} prereqCode={prereq} />
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Indicador de estado visual removido */}
      </div>
    </div>
  );
}
