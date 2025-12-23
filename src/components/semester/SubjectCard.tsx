'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
import type { Subject, SubjectState, CalculatorState, SubjectColors } from '@/types/curriculum';
import { motion, AnimatePresence } from 'framer-motion';
import Tooltip from '../ui/Tooltip';

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
    
    const prereqTooltip = (
      <div className="space-y-1">
        <div className="font-bold">{prereqSubject.name}</div>
        <div className="text-xs opacity-70">{prereqCode} • {prereqSubject.sctCredits} créditos</div>
        <div className="text-xs pt-1 border-t border-gray-300 dark:border-gray-600">
          {prereqState?.status === 'approved' ? '✓ Aprobada' : '⚠️ Pendiente de aprobar'}
        </div>
        <div className="text-xs opacity-70">Click para ir al ramo</div>
      </div>
    );
    
    return (
      <Tooltip content={prereqTooltip}>
        <button
          onClick={e => {
            e.stopPropagation();
            onPrerequisiteClick(prereqCode);
          }}
          className={`inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded-xl font-bold text-white hover:brightness-110 transition-all border border-white`}
          style={{ backgroundColor: prereqColor }}
        >
          <span>{prereqCode}</span>
          <div 
            className={`w-2 h-2 rounded-full border border-white ${
              prereqState?.status === 'approved' ? 'bg-green-400' : 'bg-red-400'
            }`}
          />
        </button>
      </Tooltip>
    );
  };

  const tooltipContent = (
    <div className="space-y-1">
      <div className="font-bold">{subject.name}</div>
      <div className="text-xs opacity-70">{subject.code} • {subject.sctCredits} créditos</div>
      {subject.prerequisites.length > 0 && (
        <div className="text-xs opacity-70 pt-1 border-t border-gray-300 dark:border-gray-600">
          Prerrequisitos: {subject.prerequisites.map(code => findSubjectByCode(code)?.name || code).join(', ')}
        </div>
      )}
      {isBlocked ? (
        <div className="text-xs text-red-500 dark:text-red-400 pt-1">⚠️ Bloqueada: completa los prerrequisitos</div>
      ) : (
        <div className="text-xs text-green-600 dark:text-green-400 pt-1">
          {state?.status === 'approved' ? '✓ Aprobada' : 'Click para marcar como aprobada'}
        </div>
      )}
    </div>
  );

  return (
    <Tooltip content={tooltipContent}>
      <div className="relative group">
        <motion.div
          animate={{ 
            backgroundColor: getBackgroundColor(),
            scale: 1
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, type: "spring", damping: 20, stiffness: 300 }}
          className={`relative rounded-xl cursor-pointer overflow-hidden min-h-[90px] md:min-h-[100px] flex flex-col ${
            state?.status === 'approved' 
              ? 'shadow-lg shadow-green-500/30 ring-2 ring-green-400/50' 
              : 'shadow-md hover:shadow-lg'
          }`}
          onClick={handleClick}
        >
        {/* Efecto de brillo para asignaturas aprobadas */}
        {state?.status === 'approved' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none"
          />
        )}
        
        {/* Ícono de check para asignaturas aprobadas */}
        <AnimatePresence>
          {state?.status === 'approved' && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
            >
              <FontAwesomeIcon 
                icon={faCheck} 
                className="text-white drop-shadow-md"
                style={{ fontSize: '2rem', opacity: 0.5 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Código como carátula en esquina superior izquierda */}
        <div className={`absolute top-0 left-0 ${darkMode ? 'bg-gray-800/90' : 'bg-white/85'} rounded-br-lg px-2 py-0.5`}>
          <span className="subject-code text-xs" style={{ color: getBackgroundColor() }}>
            {subject.code}
          </span>
        </div>
        
        {/* Créditos como carátula en esquina superior derecha */}
        <div className={`absolute top-0 right-0 ${darkMode ? 'bg-gray-800/90' : 'bg-white/85'} rounded-bl-lg px-2 py-0.5`}>
          <span className="credits text-xs" style={{ color: getBackgroundColor() }}>
            {subject.sctCredits}
          </span>
        </div>
        
        {/* Icono de bloqueo como carátula en esquina inferior derecha */}
        <AnimatePresence>
          {isBlocked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute bottom-0 right-0 ${darkMode ? 'bg-gray-800/90' : 'bg-white/85'} rounded-tl-lg px-2 py-0.5`}
            >
              <FontAwesomeIcon icon={faLock} className="text-xs" style={{ color: getBackgroundColor() }} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Contenido principal */}
        <div className="flex-1 px-2 md:px-3 pt-8 md:pt-10 pb-1 md:pb-2">
          <h3 className="subject-name text-xs leading-tight text-white mb-1 flex items-center gap-1">
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
      </motion.div>
      </div>
    </Tooltip>
  );
}
