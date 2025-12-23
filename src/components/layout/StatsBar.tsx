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

export default function StatsBar({ stats, onShowCategories, onReset, onPlayGraduationPlan, darkMode = false }: Readonly<StatsBarProps>) {
  const handleReset = () => {
    onReset();
  };

  return (
    <div className="fixed bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 z-50 mb-0 md:mb-0">
      <div className={`${darkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white/60 border-gray-100'} rounded-2xl md:shadow-2xl border p-4 mx-auto max-w-3xl md:max-w-5xl backdrop-blur-md`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-6">
          {/* Stats y progreso */}
          <div className="flex flex-row items-center justify-between gap-2 md:gap-6 flex-1">
            {/* Stats */}
            <div className="flex items-center gap-2 md:gap-6 flex-1">
              <div className="flex flex-col items-center flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faCoins} className="text-green-500 text-base md:text-lg" />
                  <span className="font-semibold tabular-nums text-base md:text-lg text-green-700">{stats.approvedCredits}</span>
                  <span className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>/ {stats.totalCredits}</span>
                </div>
                <div className={`font-light text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Créditos</div>
              </div>
              <div className="flex flex-col items-center flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faBookOpen} className="text-blue-500 text-base md:text-lg" />
                  <span className="font-semibold tabular-nums text-base md:text-lg text-blue-700">{stats.approvedSubjects}</span>
                  <span className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>/ {stats.totalSubjects}</span>
                </div>
                <div className={`font-light text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Asignaturas</div>
              </div>
            </div>
            {/* Progreso */}
            <div className="flex flex-col items-center flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faChartPie} className="text-purple-500 text-base md:text-lg" />
                <span className="font-semibold tabular-nums text-base md:text-lg text-purple-700">{stats.percentage.toFixed(1)}%</span>
              </div>
              <div className={`w-full md:max-w-xs mt-1`}>
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2 overflow-hidden`}>
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${stats.percentage}%` }}
                  />
                </div>
              </div>
              <div className={`font-light text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>Progreso</div>
            </div>
          </div>
          {/* Acciones */}
          <div className="flex items-center justify-center gap-2 md:gap-2 md:justify-end mt-2 md:mt-0">
            <button
              onClick={onPlayGraduationPlan}
              className="flex-1 md:flex-none h-11 md:h-10 md:w-auto md:px-4 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
              title="Ver plan de graduación"
            >
              <FontAwesomeIcon icon={faPlay} className="text-lg md:text-base" />
              <span className="font-extralight tracking-tight text-sm">Plan</span>
            </button>
            <button
              onClick={onShowCategories}
              className="flex-1 md:flex-none h-11 md:h-10 md:w-auto md:px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
              title="Ver categorías de asignaturas"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="text-lg md:text-base" />
              <span className="font-extralight tracking-tight text-sm">Categorías</span>
            </button>
            <button
              onClick={handleReset}
              className="h-11 w-11 md:h-10 md:w-auto md:px-4 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300"
              title="Reiniciar progreso"
            >
              <FontAwesomeIcon icon={faRotateLeft} className="text-lg md:text-base" />
              <span className="font-extralight tracking-tight text-sm hidden md:inline">Reiniciar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
