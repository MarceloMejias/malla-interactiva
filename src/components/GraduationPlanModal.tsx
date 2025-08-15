'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faGraduationCap, faCalendarAlt, faGripVertical } from '@fortawesome/free-solid-svg-icons';
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

  // Sincronizar con el plan externo
  useEffect(() => {
    setLocalPlan(graduationPlan);
  }, [graduationPlan]);

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

  // Funciones de drag & drop
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

  const handleDragOver = (e: React.DragEvent, semesterName: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverSemester(semesterName);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOverSemester(null);
  };

  const handleDrop = (e: React.DragEvent, toSemester: string) => {
    e.preventDefault();
    
    if (!draggedSubject || draggedSubject.fromSemester === toSemester) {
      setDragOverSemester(null);
      return;
    }

    // Verificar prerrequisitos antes de mover
    const canMove = validateMove(draggedSubject.subject, toSemester);
    if (!canMove) {
      alert('No se puede mover esta asignatura aquí debido a prerrequisitos no cumplidos en semestres anteriores.');
      setDragOverSemester(null);
      return;
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
                <p className="text-sm text-blue-700">
                  Arrastra las asignaturas entre semestres para reorganizar tu plan de graduación. 
                  Los créditos se recalcularán automáticamente.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {localPlan.slice(0, visibleSemesters).map((semesterPlan, index) => (
                  <div 
                    key={semesterPlan.semester}
                    className={`bg-white/50 backdrop-blur-sm rounded-2xl p-4 border transition-all duration-300 transform ${
                      isAnimating && index === visibleSemesters - 1 
                        ? 'scale-105 ring-2 ring-blue-400 shadow-lg border-blue-200' 
                        : dragOverSemester === semesterPlan.semester
                        ? 'scale-105 ring-2 ring-green-400 shadow-lg border-green-200 bg-green-50/50'
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
                        <p className="text-xs text-gray-600">
                          {semesterPlan.subjects.length} asignaturas • {semesterPlan.credits} créditos
                        </p>
                      </div>
                      {dragOverSemester === semesterPlan.semester && (
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      )}
                    </div>

                    {/* Drop zone visual cuando está vacío */}
                    {semesterPlan.subjects.length === 0 && dragOverSemester === semesterPlan.semester && (
                      <div className="border-2 border-dashed border-green-400 rounded-lg p-4 text-center text-green-600 text-sm mb-2">
                        <FontAwesomeIcon icon={faGripVertical} className="mb-2" />
                        <div>Suelta aquí la asignatura</div>
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
                            className={`p-2 rounded-lg text-white text-xs font-medium shadow-sm transition-all duration-200 cursor-move hover:shadow-md hover:scale-105 ${
                              isDragging ? 'opacity-50 scale-95' : 'opacity-100'
                            } ${!isAnimating ? 'hover:ring-2 hover:ring-white/30' : ''}`}
                            style={{ backgroundColor: subjectColor }}
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
                ))}
              </div>

              {/* Resumen de cambios */}
              <div className="mt-6 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <h5 className="font-semibold text-gray-800 mb-2">Resumen del Plan Modificado</h5>
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
