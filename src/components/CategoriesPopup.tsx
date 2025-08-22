import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { SubjectColors } from '@/types/curriculum';

interface CategoriesPopupProps {
  show: boolean;
  colors: SubjectColors;
  darkMode: boolean;
  onClose: () => void;
}

export default function CategoriesPopup({ show, colors, darkMode, onClose }: CategoriesPopupProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-60 flex items-center justify-center p-4">
      <div className={`backdrop-blur-lg rounded-3xl shadow-2xl border max-w-4xl w-full max-h-[80vh] overflow-hidden ${
        darkMode ? 'bg-gray-800/95 border-gray-600' : 'bg-white/95 border-white/30'
      }`}>
        {/* Header del popup */}
        <div className={`backdrop-blur-lg text-white p-6 flex items-center justify-between ${
          darkMode ? 'bg-gray-700/80' : 'bg-gradient-to-r from-blue-600/80 to-indigo-600/80'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 backdrop-blur-sm rounded-full flex items-center justify-center ${
              darkMode ? 'bg-gray-600/50' : 'bg-white/20'
            }`}>
              <FontAwesomeIcon icon={faInfoCircle} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Categorías de Asignaturas</h3>
              <p className="text-sm text-white/80">
                Colores utilizados para organizar las materias por área
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className={`group text-white/80 hover:text-white transition-colors p-2 rounded-full backdrop-blur-sm ${
              darkMode ? 'hover:bg-gray-600/30' : 'hover:bg-white/10'
            }`}
            style={{ aspectRatio: '1/1', minWidth: '40px', minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Cerrar"
          >
            <FontAwesomeIcon icon={faTimes} className="transition-transform duration-150 group-hover:scale-125" />
          </button>
        </div>
        
        {/* Contenido del popup */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(colors).map(([key, colorArray]) => (
              <div 
                key={key} 
                className={`backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border hover:shadow-lg ${
                  darkMode 
                    ? 'bg-gray-700/50 hover:bg-gray-700/70 border-gray-600' 
                    : 'bg-white/50 hover:bg-white/60 border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-6 h-6 rounded-full shadow-lg border-2 border-white/30 flex-shrink-0"
                    style={{ backgroundColor: colorArray[0] }}
                  />
                  <div className="flex-1">
                    <span className={`text-sm font-medium ${
                      darkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>{colorArray[1]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
