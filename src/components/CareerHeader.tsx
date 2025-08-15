import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface CareerHeaderProps {
  careerName: string;
  careerColor?: string;
  darkMode: boolean;
  onBackToCareerSelector: () => void;
}

export default function CareerHeader({ 
  careerName, 
  careerColor, 
  darkMode, 
  onBackToCareerSelector 
}: CareerHeaderProps) {
  return (
    <div className="flex items-center justify-center mb-3 md:mb-6 gap-2 md:gap-4">
      <button
        onClick={onBackToCareerSelector}
        className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 ${
          darkMode 
            ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600' 
            : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-sm'
        }`}
        title="Cambiar carrera"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-xs md:text-sm" />
        <span className="text-xs md:text-sm font-medium hidden sm:inline">Cambiar carrera</span>
        <span className="text-xs md:text-sm font-medium sm:hidden">Cambiar</span>
      </button>
      
      <h2
        className="text-xl md:text-3xl font-black text-center flex-1 leading-tight"
        style={careerColor ? { color: careerColor } : {}}
      >
        {careerName}
      </h2>
      
      {/* Espacio para mantener el título centrado */}
      <div className="w-12 md:w-32"></div>
    </div>
  );
}
