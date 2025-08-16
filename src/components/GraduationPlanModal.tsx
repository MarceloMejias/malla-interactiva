'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faGraduationCap, faCalendarAlt, faGripVertical, faExclamationTriangle, faBolt, faBan } from '@fortawesome/free-solid-svg-icons';
import { Subject } from '@/types/curriculum';

interface SemesterPlan {
  semester: string; // Cambio de number a string para formato "2025-1"
  subjects: Subject[];
  credits: number;
}

interface GraduationPlanModalProps {
  show: boolean;
  graduationPlan: SemesterPlan[];
  isAnimating: boolean;
  onClose: () => void;
  colors: Record<string, string[]>;
  allSubjects?: Subject[]; // Agregar todas las asignaturas para validación
  subjectStates?: Record<string, any>; // Estados de asignaturas para validación
}

export default function GraduationPlanModal({ 
  show, 
  graduationPlan, 
  isAnimating, 
  onClose, 
  colors,
  allSubjects = [],
  subjectStates = {}
}: GraduationPlanModalProps) {
  const [visibleSemesters, setVisibleSemesters] = useState(0);
  const [localPlan, setLocalPlan] = useState<SemesterPlan[]>([]);
  const [draggedSubject, setDraggedSubject] = useState<{subject: Subject, fromSemester: string} | null>(null);
  const [dragOverSemester, setDragOverSemester] = useState<string | null>(null);
  const [touchStartPos, setTouchStartPos] = useState<{x: number, y: number} | null>(null);
  const [isDraggingTouch, setIsDraggingTouch] = useState(false);
  const [touchPosition, setTouchPosition] = useState<{x: number, y: number} | null>(null);

  // Sincronizar con el plan externo
  useEffect(() => {
    setLocalPlan(graduationPlan);
  }, [graduationPlan]);

  // Prevenir scroll durante touch drag
  useEffect(() => {
    if (isDraggingTouch) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isDraggingTouch]);

  useEffect(() => {
    if (isAnimating && localPlan.length > 0) {
      setVisibleSemesters(0);
      const interval = setInterval(() => {
        setVisibleSemesters(prev => {
          if (prev >= localPlan.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 1000); // Mostrar un semestre cada segundo

      return () => clearInterval(interval);
    }
  }, [isAnimating, localPlan.length]);

  useEffect(() => {
    if (show && !isAnimating) {
      setVisibleSemesters(localPlan.length);
    }
  }, [show, isAnimating, localPlan.length]);

  // Funciones de drag & drop (mouse)
  const handleDragStart = (e: React.DragEvent, subject: Subject, fromSemester: string) => {
    setDraggedSubject({ subject, fromSemester });
    e.dataTransfer.effectAllowed = 'move';
    
    // Añadir efecto visual al elemento siendo arrastrado
    const target = e.target as HTMLElement;
    target.style.opacity = '0.5';
  };

  const handleDragEnd = (e: React.DragEvent) => {
    setDraggedSubject(null);
    setDragOverSemester(null);
    
    // Restaurar opacidad
    const target = e.target as HTMLElement;
    target.style.opacity = '1';
  };

  // Funciones de touch (móvil)
  const handleTouchStart = (e: React.TouchEvent, subject: Subject, fromSemester: string) => {
    e.preventDefault();
    const touch = e.touches[0];
    setTouchStartPos({ x: touch.clientX, y: touch.clientY });
    setDraggedSubject({ subject, fromSemester });
    setIsDraggingTouch(true);
    
    // Añadir efecto visual
    const target = e.target as HTMLElement;
    target.style.opacity = '0.5';
    target.style.transform = 'scale(1.05)';
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingTouch || !touchStartPos) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const deltaX = Math.abs(touch.clientX - touchStartPos.x);
    const deltaY = Math.abs(touch.clientY - touchStartPos.y);
    
    // Actualizar posición del indicador visual
    setTouchPosition({ x: touch.clientX, y: touch.clientY });
    
    // Solo comenzar drag si se movió lo suficiente
    if (deltaX > 10 || deltaY > 10) {
      // Encontrar el elemento bajo el dedo
      const elementUnderFinger = document.elementFromPoint(touch.clientX, touch.clientY);
      if (elementUnderFinger) {
        const semesterContainer = elementUnderFinger.closest('[data-semester]');
        if (semesterContainer) {
          const semesterName = semesterContainer.getAttribute('data-semester');
          
          // Verificar si se puede soltar aquí
          if (semesterName && draggedSubject) {
            const targetSemester = localPlan.find(s => s.semester === semesterName);
            const wouldExceedLimit = targetSemester && 
              (targetSemester.credits + draggedSubject.subject.sctCredits > 35);
            
            if (!wouldExceedLimit) {
              setDragOverSemester(semesterName);
            } else {
              setDragOverSemester(null);
            }
          }
        } else {
          setDragOverSemester(null);
        }
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDraggingTouch || !draggedSubject) {
      setIsDraggingTouch(false);
      setTouchStartPos(null);
      setTouchPosition(null);
      setDraggedSubject(null);
      setDragOverSemester(null);
      return;
    }

    e.preventDefault();
    const touch = e.changedTouches[0];
    
    // Encontrar el elemento de destino
    const elementUnderFinger = document.elementFromPoint(touch.clientX, touch.clientY);
    if (elementUnderFinger) {
      const semesterContainer = elementUnderFinger.closest('[data-semester]');
      if (semesterContainer) {
        const targetSemester = semesterContainer.getAttribute('data-semester');
        if (targetSemester && targetSemester !== draggedSubject.fromSemester) {
          // Ejecutar el drop
          handleDropLogic(targetSemester);
        }
      }
    }

    // Limpiar estado
    setIsDraggingTouch(false);
    setTouchStartPos(null);
    setTouchPosition(null);
    setDraggedSubject(null);
    setDragOverSemester(null);
    
    // Restaurar estilos
    const target = e.target as HTMLElement;
    target.style.opacity = '1';
    target.style.transform = 'scale(1)';
  };

  const handleDragOver = (e: React.DragEvent, semesterName: string) => {
    e.preventDefault();
    
    // Verificar si se puede soltar aquí (créditos y prerrequisitos)
    if (draggedSubject) {
      const targetSemester = localPlan.find(s => s.semester === semesterName);
      const wouldExceedLimit = targetSemester && 
        (targetSemester.credits + draggedSubject.subject.sctCredits > 35);
      
      if (wouldExceedLimit) {
        e.dataTransfer.dropEffect = 'none';
        return;
      }
    }
    
    e.dataTransfer.dropEffect = 'move';
    setDragOverSemester(semesterName);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOverSemester(null);
  };

  // Lógica común para drop (tanto mouse como touch)
  const handleDropLogic = (toSemester: string) => {
    if (!draggedSubject || draggedSubject.fromSemester === toSemester) {
      return;
    }

    // Verificar prerrequisitos antes de mover
    const canMove = validateMove(draggedSubject.subject, toSemester);
    if (!canMove) {
      alert('No se puede mover esta asignatura aquí debido a prerrequisitos no cumplidos en semestres anteriores.');
      return;
    }

    // Verificar límite de créditos antes de mover
    const targetSemester = localPlan.find(s => s.semester === toSemester);
    if (targetSemester) {
      const newCredits = targetSemester.credits + draggedSubject.subject.sctCredits;
      if (newCredits > 35) {
        alert(`No se puede mover esta asignatura. El semestre ${toSemester} tendría ${newCredits} créditos, pero el máximo permitido es 35 créditos.`);
        return;
      }
    }

    // Crear plan temporal con el movimiento
    const tempPlan = localPlan.map(semester => {
      if (semester.semester === draggedSubject.fromSemester) {
        // Remover del semestre origen
        const newSubjects = semester.subjects.filter(s => s.code !== draggedSubject.subject.code);
        return {
          ...semester,
          subjects: newSubjects,
          credits: newSubjects.reduce((sum, s) => sum + s.sctCredits, 0)
        };
      } else if (semester.semester === toSemester) {
        // Agregar al semestre destino
        const newSubjects = [...semester.subjects, draggedSubject.subject];
        return {
          ...semester,
          subjects: newSubjects,
          credits: newSubjects.reduce((sum, s) => sum + s.sctCredits, 0)
        };
      }
      return semester;
    });

    // Recalcular todo el plan para manejar dependencias en cascada
    const recalculatedPlan = recalculatePlan(tempPlan);
    setLocalPlan(recalculatedPlan);
  };

  const handleDrop = (e: React.DragEvent, toSemester: string) => {
    e.preventDefault();
    handleDropLogic(toSemester);
    setDragOverSemester(null);
  };

  // Validar si se puede mover una asignatura a un semestre específico
  const validateMove = (subject: Subject, targetSemester: string): boolean => {
    const targetIndex = localPlan.findIndex(s => s.semester === targetSemester);
    if (targetIndex === -1) return false;

    // Obtener todas las asignaturas completadas antes del semestre objetivo
    const completedSubjects = new Set<string>();
    
    // Agregar asignaturas ya aprobadas externamente
    Object.keys(subjectStates).forEach(code => {
      if (subjectStates[code]?.status === 'approved') {
        completedSubjects.add(code);
      }
    });

    // Agregar asignaturas de semestres anteriores en el plan
    for (let i = 0; i < targetIndex; i++) {
      localPlan[i].subjects.forEach(s => completedSubjects.add(s.code));
    }

    // Verificar si todos los prerrequisitos están completados
    return subject.prerequisites.every(prereq => completedSubjects.has(prereq));
  };

  // Recalcular plan completo después de mover una asignatura
  const recalculatePlan = (newPlan: SemesterPlan[]): SemesterPlan[] => {
    const updatedPlan = [...newPlan];
    let hasChanges = true;
    
    // Iterar hasta que no haya más cambios necesarios
    while (hasChanges) {
      hasChanges = false;
      
      for (let semesterIndex = 0; semesterIndex < updatedPlan.length; semesterIndex++) {
        const semester = updatedPlan[semesterIndex];
        const subjectsToMove: Subject[] = [];
        
        // Obtener asignaturas completadas hasta este semestre (excluyente)
        const completedSubjects = new Set<string>();
        
        // Agregar asignaturas ya aprobadas externamente
        Object.keys(subjectStates).forEach(code => {
          if (subjectStates[code]?.status === 'approved') {
            completedSubjects.add(code);
          }
        });

        // Agregar asignaturas de semestres anteriores
        for (let i = 0; i < semesterIndex; i++) {
          updatedPlan[i].subjects.forEach(s => completedSubjects.add(s.code));
        }

        // Verificar cada asignatura en este semestre
        semester.subjects.forEach(subject => {
          const missingPrereqs = subject.prerequisites.filter(prereq => 
            !completedSubjects.has(prereq)
          );
          
          if (missingPrereqs.length > 0) {
            subjectsToMove.push(subject);
          }
        });

        // Mover asignaturas problemáticas a semestres posteriores
        if (subjectsToMove.length > 0) {
          hasChanges = true;
          
          subjectsToMove.forEach(subject => {
            // Remover del semestre actual
            semester.subjects = semester.subjects.filter(s => s.code !== subject.code);
            semester.credits = semester.subjects.reduce((sum, s) => sum + s.sctCredits, 0);
            
            // Encontrar el primer semestre posterior donde pueda ir
            let placed = false;
            for (let futureIndex = semesterIndex + 1; futureIndex < updatedPlan.length; futureIndex++) {
              const futureCompletedSubjects = new Set<string>();
              
              // Agregar asignaturas ya aprobadas externamente
              Object.keys(subjectStates).forEach(code => {
                if (subjectStates[code]?.status === 'approved') {
                  futureCompletedSubjects.add(code);
                }
              });

              // Agregar asignaturas de semestres anteriores al futuro semestre
              for (let i = 0; i < futureIndex; i++) {
                updatedPlan[i].subjects.forEach(s => futureCompletedSubjects.add(s.code));
              }

              // Verificar si puede ir a este semestre futuro
              const canPlace = subject.prerequisites.every(prereq => 
                futureCompletedSubjects.has(prereq)
              );

              if (canPlace) {
                updatedPlan[futureIndex].subjects.push(subject);
                updatedPlan[futureIndex].credits += subject.sctCredits;
                placed = true;
                break;
              }
            }

            // Si no se pudo colocar en ningún semestre existente, crear uno nuevo
            if (!placed) {
              const newSemesterNumber = updatedPlan.length + 1;
              const newSemesterName = getSemesterName(newSemesterNumber);
              
              updatedPlan.push({
                semester: newSemesterName,
                subjects: [subject],
                credits: subject.sctCredits
              });
            }
          });
        }
      }
    }

    // Eliminar semestres vacíos
    return updatedPlan.filter(semester => semester.subjects.length > 0);
  };

  // Función para generar nombres de semestre (copiada del hook)
  const getSemesterName = (semesterNumber: number): string => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    
    let baseYear = currentYear;
    let baseSemester = 1;
    
    if (currentMonth >= 8) {
      baseSemester = 2;
    } else {
      baseSemester = 1;
    }
    
    const totalSemesters = semesterNumber - 1;
    const additionalYears = Math.floor(totalSemesters / 2);
    const semesterInYear = (totalSemesters % 2);
    
    const finalYear = baseYear + additionalYears;
    const finalSemester = ((baseSemester - 1 + semesterInYear) % 2) + 1;
    
    if (baseSemester + semesterInYear > 2) {
      return `${finalYear + 1}-${finalSemester}`;
    }
    
    return `${finalYear}-${finalSemester}`;
  };

  // Recalcular totales con mayor precisión
  const recalculateTotals = () => {
    const totalSemesters = localPlan.length;
    const totalCredits = localPlan.reduce((sum, semester) => sum + semester.credits, 0);
    const totalSubjects = localPlan.reduce((sum, semester) => sum + semester.subjects.length, 0);
    
    // Calcular años de forma más precisa: cada 2 semestres = 1 año
    const yearsRemaining = totalSemesters / 2;
    
    return { 
      totalSemesters, 
      totalCredits, 
      totalSubjects,
      yearsRemaining 
    };
  };

  if (!show) return null;

  const { totalSemesters, totalCredits, totalSubjects, yearsRemaining } = recalculateTotals();

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-60 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 max-w-6xl w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600/80 to-blue-600/80 backdrop-blur-lg text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <FontAwesomeIcon icon={faGraduationCap} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Plan de Graduación</h3>
              <p className="text-sm text-white/80">
                {totalSemesters} semestres • {totalCredits} créditos • {yearsRemaining % 1 === 0 ? yearsRemaining : yearsRemaining.toFixed(1)} años restantes
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-2xl backdrop-blur-sm"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Indicador de drag en móvil - pequeño y que sigue el dedo */}
          {isDraggingTouch && draggedSubject && touchPosition && (
            <div 
              className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
              style={{ 
                left: `${touchPosition.x}px`, 
                top: `${touchPosition.y - 40}px` // Ligeramente arriba del dedo
              }}
            >
              <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-lg shadow-lg flex items-center gap-1">
                <FontAwesomeIcon icon={faGripVertical} className="text-xs" />
                <span className="font-medium">{draggedSubject.subject.code}</span>
              </div>
            </div>
          )}

          {localPlan.length === 0 ? (
            <div className="text-center py-12">
              <FontAwesomeIcon icon={faGraduationCap} className="text-6xl text-green-500 mb-4" />
              <h4 className="text-2xl font-bold text-gray-800 mb-2">¡Felicitaciones!</h4>
              <p className="text-gray-600">Ya has completado todas las asignaturas de la carrera.</p>
            </div>
          ) : (
            <>
              {/* Instrucciones de uso */}
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faGripVertical} className="text-blue-600" />
                  <span className="font-semibold text-blue-800">Reorganiza tu plan</span>
                </div>
                <div className="text-sm text-blue-700 space-y-1">
                  <p className="hidden md:block">
                    Arrastra las asignaturas entre semestres para reorganizar tu plan de graduación.
                  </p>
                  <p className="md:hidden">
                    Mantén presionada una asignatura y arrástrala a otro semestre para reorganizar tu plan.
                  </p>
                  <p>Los créditos se recalcularán automáticamente.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {localPlan.slice(0, visibleSemesters).map((semesterPlan, index) => {
                  const isOverloaded = semesterPlan.credits > 30;
                  const wouldExceedWithDrag = draggedSubject && 
                    dragOverSemester === semesterPlan.semester &&
                    (semesterPlan.credits + draggedSubject.subject.sctCredits > 35);
                  
                  return (
                    <div 
                      key={semesterPlan.semester}
                      data-semester={semesterPlan.semester}
                      className={`bg-white/50 backdrop-blur-sm rounded-2xl p-4 border transition-all duration-300 transform ${
                        isAnimating && index === visibleSemesters - 1 
                          ? 'scale-105 ring-2 ring-blue-400 shadow-lg border-blue-200' 
                          : wouldExceedWithDrag
                          ? 'scale-105 ring-2 ring-red-400 shadow-lg border-red-200 bg-red-50/50'
                          : dragOverSemester === semesterPlan.semester
                          ? 'scale-105 ring-2 ring-green-400 shadow-lg border-green-200 bg-green-50/50'
                          : isOverloaded
                          ? 'border-orange-300 bg-orange-50/30'
                          : 'scale-100 border-gray-200'
                      }`}
                      onDragOver={(e) => handleDragOver(e, semesterPlan.semester)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, semesterPlan.semester)}
                    >
                    {/* Header del semestre */}
                    <div className="flex items-center gap-2 mb-4">
                      <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-600" />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800">
                          {semesterPlan.semester}
                        </h4>
                        <p className={`text-xs ${
                          isOverloaded ? 'text-orange-600 font-medium' : 'text-gray-600'
                        }`}>
                          {semesterPlan.subjects.length} asignaturas • {semesterPlan.credits} créditos
                          {isOverloaded && (
                            <span className="ml-1">
                              <FontAwesomeIcon icon={faExclamationTriangle} className="text-xs" /> Sobrecarga
                            </span>
                          )}
                        </p>
                      </div>
                      {dragOverSemester === semesterPlan.semester && !wouldExceedWithDrag && (
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      )}
                      {wouldExceedWithDrag && (
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      )}
                    </div>

                    {/* Advertencia de límite de créditos */}
                    {isOverloaded && (
                      <div className="mb-3 p-2 bg-orange-100 border border-orange-300 rounded-lg">
                        <div className="flex items-center gap-2 text-orange-700">
                          <FontAwesomeIcon icon={faExclamationTriangle} className="text-sm" />
                          <span className="text-sm font-medium">Sobrecarga Académica</span>
                        </div>
                        <p className="text-xs text-orange-600 mt-1">
                          Este semestre tiene {semesterPlan.credits} créditos. La carga normal es de 30 créditos.
                        </p>
                      </div>
                    )}

                    {/* Indicador de drop prohibido */}
                    {wouldExceedWithDrag && (
                      <div className="border-2 border-dashed border-red-400 rounded-lg p-2 text-center text-red-600 text-xs mb-2 bg-red-50/30">
                        <FontAwesomeIcon icon={faBan} className="text-lg mb-1" />
                        <div className="font-medium text-xs">Límite excedido</div>
                        <div className="text-xs">Máximo 35 créditos</div>
                      </div>
                    )}

                    {/* Drop zone visual cuando está vacío o durante drag móvil válido */}
                    {!wouldExceedWithDrag && ((semesterPlan.subjects.length === 0 && dragOverSemester === semesterPlan.semester) || 
                      (isDraggingTouch && dragOverSemester === semesterPlan.semester)) && (
                      <div className="border-2 border-dashed border-green-400 rounded-lg p-2 text-center text-green-600 text-xs mb-2 bg-green-50/30">
                        <FontAwesomeIcon icon={faGripVertical} className="mb-1" />
                        <div className="font-medium text-xs">Soltar aquí</div>
                      </div>
                    )}

                    {/* Asignaturas */}
                    <div className="space-y-2 min-h-[60px]">
                      {semesterPlan.subjects.map((subject) => {
                        const subjectColor = colors[subject.type]?.[0] || '#6b7280';
                        const isDragging = draggedSubject?.subject.code === subject.code;
                        
                        return (
                          <div 
                            key={subject.code}
                            draggable={!isAnimating}
                            onDragStart={(e) => handleDragStart(e, subject, semesterPlan.semester)}
                            onDragEnd={handleDragEnd}
                            onTouchStart={(e) => handleTouchStart(e, subject, semesterPlan.semester)}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            className={`p-2 rounded-lg text-white text-xs font-medium shadow-sm transition-all duration-200 cursor-move hover:shadow-md hover:scale-105 select-none ${
                              isDragging ? 'opacity-50 scale-95' : 'opacity-100'
                            } ${!isAnimating ? 'hover:ring-2 hover:ring-white/30' : ''}`}
                            style={{ 
                              backgroundColor: subjectColor,
                              touchAction: 'none' // Prevenir scroll en móvil durante drag
                            }}
                            title={`Arrastra para mover a otro semestre`}
                          >
                            <div className="flex items-center gap-2">
                              <FontAwesomeIcon 
                                icon={faGripVertical} 
                                className="text-white/60 text-xs flex-shrink-0" 
                              />
                              <div className="flex-1 min-w-0">
                                <div className="font-bold">{subject.code}</div>
                                <div className="text-white/90 text-xs truncate" title={subject.name}>
                                  {subject.name}
                                </div>
                                <div className="text-white/80 text-xs">
                                  {subject.sctCredits} créditos
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
              </div>

                {/* Botón para añadir semestre en blanco */}
                <div className="flex justify-center mt-4 col-span-full">
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-xl border border-blue-200 shadow-sm transition-colors"
                    onClick={() => {
                      // Generar nombre de semestre siguiente
                      const lastSemester = localPlan[localPlan.length - 1]?.semester;
                      let newSemesterName = 'Nuevo';
                      if (lastSemester) {
                        const match = lastSemester.match(/(\d{4})-(\d)/);
                        if (match) {
                          let year = parseInt(match[1], 10);
                          let sem = parseInt(match[2], 10);
                          if (sem === 2) {
                            year += 1;
                            sem = 1;
                          } else {
                            sem = 2;
                          }
                          newSemesterName = `${year}-${sem}`;
                        } else {
                          newSemesterName = `${lastSemester}-nuevo`;
                        }
                      } else {
                        // Si no hay semestres, usar año actual
                        const now = new Date();
                        newSemesterName = `${now.getFullYear()}-1`;
                      }
                      setLocalPlan(prev => ([
                        ...prev,
                        { semester: newSemesterName, subjects: [], credits: 0 }
                      ]));
                    }}
                  >
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    Añadir semestre en blanco
                  </button>
                </div>

              {/* Resumen de cambios */}
              <div className="mt-6 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <h5 className="font-semibold text-gray-800 mb-2">Resumen del Plan Modificado</h5>
                
                {/* Alertas de sobrecarga */}
                {localPlan.some(s => s.credits > 30) && (
                  <div className="mb-4 p-3 bg-orange-100 border border-orange-300 rounded-lg">
                    <div className="flex items-center gap-2 text-orange-700 mb-2">
                      <FontAwesomeIcon icon={faExclamationTriangle} className="text-sm" />
                      <span className="text-sm font-medium">Advertencias de Carga Académica</span>
                    </div>
                    <div className="text-xs text-orange-600 space-y-1">
                      {localPlan.filter(s => s.credits > 30).map(semester => (
                        <div key={semester.semester}>
                          • <strong>{semester.semester}</strong>: {semester.credits} créditos (carga normal: 30)
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{totalSemesters}</div>
                    <div className="text-gray-600">Semestres</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{totalCredits}</div>
                    <div className="text-gray-600">Créditos Restantes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {yearsRemaining % 1 === 0 ? yearsRemaining : yearsRemaining.toFixed(1)}
                    </div>
                    <div className="text-gray-600">Años Restantes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      {totalSubjects}
                    </div>
                    <div className="text-gray-600">Asignaturas</div>
                  </div>
                </div>
                
                {/* Información adicional */}
                <div className="mt-4 text-xs text-gray-500 text-center">
                  <p>
                    {yearsRemaining === 0.5 ? 'Medio año restante' : 
                     yearsRemaining === 1 ? 'Un año restante' :
                     yearsRemaining < 1 ? `${totalSemesters} semestre${totalSemesters > 1 ? 's' : ''} restante${totalSemesters > 1 ? 's' : ''}` :
                     `Aproximadamente ${yearsRemaining % 1 === 0 ? yearsRemaining : yearsRemaining.toFixed(1)} años para graduarte`}
                  </p>
                  <p className="mt-1">
                    Promedio de {totalSemesters > 0 ? Math.round(totalCredits / totalSemesters) : 0} créditos por semestre
                  </p>
                </div>
              </div>
            </>
          )}

          {/* Progress indicator during animation */}
          {isAnimating && localPlan.length > 0 && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Mostrando {visibleSemesters} de {totalSemesters} semestres
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
