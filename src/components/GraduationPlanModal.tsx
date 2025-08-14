'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faGraduationCap, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

interface SemesterPlan {
  semester: string; // Cambio de number a string para formato "2025-1"
  subjects: Subject[];
  credits: number;
}

interface Subject {
  name: string;
  code: string;
  sctCredits: number;
  type: string;
}

interface GraduationPlanModalProps {
  show: boolean;
  graduationPlan: SemesterPlan[];
  isAnimating: boolean;
  onClose: () => void;
  colors: Record<string, string[]>;
}

export default function GraduationPlanModal({ 
  show, 
  graduationPlan, 
  isAnimating, 
  onClose, 
  colors 
}: GraduationPlanModalProps) {
  const [visibleSemesters, setVisibleSemesters] = useState(0);

  useEffect(() => {
    if (isAnimating && graduationPlan.length > 0) {
      setVisibleSemesters(0);
      const interval = setInterval(() => {
        setVisibleSemesters(prev => {
          if (prev >= graduationPlan.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 1000); // Mostrar un semestre cada segundo

      return () => clearInterval(interval);
    }
  }, [isAnimating, graduationPlan.length]);

  useEffect(() => {
    if (show && !isAnimating) {
      setVisibleSemesters(graduationPlan.length);
    }
  }, [show, isAnimating, graduationPlan.length]);

  if (!show) return null;

  const totalSemesters = graduationPlan.length;
  const totalCredits = graduationPlan.reduce((sum, semester) => sum + semester.credits, 0);

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
                {totalSemesters} semestres • {totalCredits} créditos restantes
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
          {graduationPlan.length === 0 ? (
            <div className="text-center py-12">
              <FontAwesomeIcon icon={faGraduationCap} className="text-6xl text-green-500 mb-4" />
              <h4 className="text-2xl font-bold text-gray-800 mb-2">¡Felicitaciones!</h4>
              <p className="text-gray-600">Ya has completado todas las asignaturas de la carrera.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {graduationPlan.slice(0, visibleSemesters).map((semesterPlan, index) => (
                <div 
                  key={semesterPlan.semester}
                  className={`bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 transition-all duration-500 transform ${
                    isAnimating && index === visibleSemesters - 1 
                      ? 'scale-105 ring-2 ring-blue-400 shadow-lg' 
                      : 'scale-100'
                  }`}
                >
                  {/* Header del semestre */}
                  <div className="flex items-center gap-2 mb-4">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-600" />
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {semesterPlan.semester}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {semesterPlan.subjects.length} asignaturas • {semesterPlan.credits} créditos
                      </p>
                    </div>
                  </div>

                  {/* Asignaturas */}
                  <div className="space-y-2">
                    {semesterPlan.subjects.map((subject) => {
                      const subjectColor = colors[subject.type]?.[0] || '#6b7280';
                      return (
                        <div 
                          key={subject.code}
                          className="p-2 rounded-lg text-white text-xs font-medium shadow-sm"
                          style={{ backgroundColor: subjectColor }}
                        >
                          <div className="font-bold">{subject.code}</div>
                          <div className="text-white/90 text-xs truncate" title={subject.name}>
                            {subject.name}
                          </div>
                          <div className="text-white/80 text-xs">
                            {subject.sctCredits} créditos
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Progress indicator during animation */}
          {isAnimating && graduationPlan.length > 0 && (
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
