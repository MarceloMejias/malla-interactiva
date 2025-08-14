'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faRotateLeft, faPlay } from '@fortawesome/free-solid-svg-icons';

interface Stats {
  approvedCredits: number;
  totalCredits: number;
  approvedSubjects: number;
  totalSubjects: number;
  percentage: number;
}

interface StatsBarProps {
  stats: Stats;
  onShowCategories: () => void;
  onReset: () => void;
  onPlayGraduationPlan: () => void;
}

export default function StatsBar({ stats, onShowCategories, onReset, onPlayGraduationPlan }: StatsBarProps) {
  const handleReset = () => {
    onReset();
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <div className="bg-white/80 rounded-xl shadow-lg border border-gray-200 p-4 mx-auto max-w-3xl">
        <div className="flex items-center justify-between gap-6">
          {/* Stats */}
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">
                {stats.approvedCredits}
              </div>
              <div className="text-sm text-gray-700">Créditos</div>
              <div className="text-sm text-gray-500">de {stats.totalCredits}</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">
                {stats.approvedSubjects}
              </div>
              <div className="text-sm text-gray-700">Asignaturas</div>
              <div className="text-sm text-gray-500">de {stats.totalSubjects}</div>
            </div>
          </div>

          {/* Progress - Centered */}
          <div className="flex items-center gap-3 flex-1 justify-center">
            <div className="text-center flex-shrink-0">
              <div className="text-lg font-bold text-purple-600">
                {stats.percentage.toFixed(1)}%
              </div>
              <div className="text-sm text-gray-700">Progreso</div>
            </div>
            <div className="flex-1 max-w-xs">
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${stats.percentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPlayGraduationPlan}
              className="w-9 h-9 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-md hover:scale-105"
              title="Ver plan de graduación"
            >
              <FontAwesomeIcon icon={faPlay} className="text-sm" />
            </button>
            <button
              onClick={onShowCategories}
              className="w-9 h-9 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-md hover:scale-105"
              title="Ver categorías de asignaturas"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="text-sm" />
            </button>
            <button
              onClick={handleReset}
              className="w-9 h-9 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-md hover:scale-105"
              title="Reiniciar progreso"
            >
              <FontAwesomeIcon icon={faRotateLeft} className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
