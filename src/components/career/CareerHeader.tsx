import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBookOpen, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

interface CareerHeaderProps {
  careerName: string;
  careerColor?: string;
  darkMode: boolean;
  onBackToCareerSelector: () => void;
  onShowGuide?: () => void;
  onShowContribute?: () => void;
}

export default function CareerHeader({ 
  careerName, 
  careerColor, 
  darkMode, 
  onBackToCareerSelector,
  onShowGuide,
  onShowContribute
}: Readonly<CareerHeaderProps>) {
  return (
    <div 
      className={`sticky top-0 z-40 -mx-1 md:mx-0 md:relative md:mb-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      {/* Extensión para la barra de notificaciones */}
      <div className="h-[env(safe-area-inset-top)] md:hidden" />
      
      {/* Contenedor de botones y título */}
      <div className="px-1 py-2 md:px-0 md:py-0">
        {/* Fila de botones */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <button
            onClick={onBackToCareerSelector}
            className={`flex items-center gap-1 md:gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600' 
                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-sm'
            }`}
            title="Cambiar carrera"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-sm md:text-sm" />
            <span className="font-extralight tracking-tight text-sm md:text-sm hidden sm:inline">Cambiar carrera</span>
            <span className="font-extralight tracking-tight text-sm md:text-sm sm:hidden">Cambiar</span>
          </button>
          
          {/* Botones de acción */}
          <div className="flex items-center gap-2">
            {onShowGuide && (
              <button
                onClick={onShowGuide}
                className={`flex items-center gap-1 md:gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-blue-700 hover:bg-blue-600 text-blue-100 border border-blue-600' 
                    : 'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 shadow-sm'
                }`}
                title="Guía de estudio"
              >
                <FontAwesomeIcon icon={faBookOpen} className="text-sm md:text-sm" />
                <span className="text-sm md:text-sm font-medium hidden lg:inline">Guía</span>
              </button>
            )}
            
            {onShowContribute && (
              <button
                onClick={onShowContribute}
                className={`flex items-center gap-1 md:gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-green-700 hover:bg-green-600 text-green-100 border border-green-600' 
                    : 'bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 shadow-sm'
                }`}
                title="Contribuir al proyecto"
              >
                <FontAwesomeIcon icon={faHandsHelping} className="text-sm md:text-sm" />
                <span className="text-sm md:text-sm font-medium hidden lg:inline">Contribuir</span>
              </button>
            )}
          </div>
        </div>
        
        {/* Título de la carrera */}
        <h2
          className="font-black tracking-tight text-xl md:text-3xl leading-tight text-center px-2 pb-2 md:pb-0"
          style={careerColor ? { color: careerColor } : {}}
        >
          {careerName}
        </h2>
      </div>
    </div>
  );
}
