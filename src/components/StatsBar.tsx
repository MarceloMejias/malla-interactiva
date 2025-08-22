'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faRotateLeft, faPlay, faCoins, faBookOpen, faChartPie } from '@fortawesome/free-solid-svg-icons';

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
  darkMode?: boolean;
}

export default function StatsBar({ stats, onShowCategories, onReset, onPlayGraduationPlan, darkMode = false }: StatsBarProps) {
  const handleReset = () => {
    onReset();
  };

  return (
    <div className="fixed bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 z-50">
  <div className={`${darkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white/60 border-gray-100'} rounded-2xl shadow-2xl border p-2 md:p-4 mx-auto max-w-3xl backdrop-blur-md`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-6">
          {/* Stats y progreso */}
          <div className="flex flex-row items-center justify-between gap-2 md:gap-6 flex-1">
            {/* Stats */}
            <div className="flex items-center gap-2 md:gap-6 flex-1">
              <div className="flex flex-col items-center flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faCoins} className="text-green-500 text-base md:text-lg" />
                  <span className="text-base md:text-lg font-bold text-green-700">{stats.approvedCredits}</span>
                  <span className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>/ {stats.totalCredits}</span>
                </div>
                <div className={`text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} font-medium`}>Créditos</div>
              </div>
              <div className="flex flex-col items-center flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faBookOpen} className="text-blue-500 text-base md:text-lg" />
                  <span className="text-base md:text-lg font-bold text-blue-700">{stats.approvedSubjects}</span>
                  <span className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>/ {stats.totalSubjects}</span>
                </div>
                <div className={`text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} font-medium`}>Asignaturas</div>
              </div>
            </div>
            {/* Progreso */}
            <div className="flex flex-col items-center flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faChartPie} className="text-purple-500 text-base md:text-lg" />
                <span className="text-base md:text-lg font-bold text-purple-700">{stats.percentage.toFixed(1)}%</span>
              </div>
              <div className={`w-full md:max-w-xs mt-1`}>
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2 overflow-hidden`}>
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${stats.percentage}%` }}
                  />
                </div>
              </div>
              <div className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium mt-1`}>Progreso</div>
            </div>
          </div>
          {/* Acciones */}
          <div className="flex items-center justify-center gap-3 md:gap-2 md:justify-end mt-2 md:mt-0">
            <button
              onClick={onPlayGraduationPlan}
              className="w-12 h-12 md:w-10 md:h-10 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
              title="Ver plan de graduación"
            >
              <FontAwesomeIcon icon={faPlay} className="text-lg" />
            </button>
            <button
              onClick={onShowCategories}
              className="w-12 h-12 md:w-10 md:h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
              title="Ver categorías de asignaturas"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="text-lg" />
            </button>
            <button
              onClick={handleReset}
              className="w-12 h-12 md:w-10 md:h-10 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300"
              title="Reiniciar progreso"
            >
              <FontAwesomeIcon icon={faRotateLeft} className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
