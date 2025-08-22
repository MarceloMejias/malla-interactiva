import { useState } from 'react';

interface Career {
  Nombre: string;
  Link: string;
  Color?: string;
}

interface CareerSelectorProps {
  show: boolean;
  casaCentralCareers: Career[];
  sanJoaquinCareers: Career[];
  vitacuraCareers: Career[];
  concepcionCareers: Career[];
  vinaCareers: Career[];
  darkMode: boolean;
  onCareerSelect: (campus: string, careerCode: string) => void;
  onClose: () => void;
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function CareerSelector({
  show,
  casaCentralCareers,
  vinaCareers,
  sanJoaquinCareers,
  vitacuraCareers,
  concepcionCareers,
  darkMode,
  onCareerSelect,
  onClose,
  canClose = false,
  campus,
  careerCode
}: CareerSelectorProps & { canClose?: boolean; campus?: string; careerCode?: string }) {
  const [isClosing, setIsClosing] = useState(false);
  if (!show) return null;

  const getCareerCode = (careerLink: string) => {
    const parts = careerLink.split('/');
    return parts.length > 1 ? parts[1] : parts[0];
  };

  // Determinar fondo: blanco sólido si no hay carrera, translúcido si hay una activa
  const modalBg = !campus || !careerCode
    ? (darkMode ? 'bg-gray-900' : 'bg-white')
    : 'bg-white/40 dark:bg-gray-800/60 backdrop-blur-lg';

  return (
    <div className="fixed inset-0 z-60 flex items-start justify-center pt-12 md:pt-24 p-2 md:p-4" style={{backdropFilter: 'blur(6px)'}}>
      <div className={`${modalBg} rounded-3xl shadow-2xl border border-white/30 dark:border-gray-600 max-w-5xl w-full max-h-[98vh] md:max-h-[80vh] overflow-hidden flex flex-col animate-fade-in-up`}>
        {/* Header con gradiente y botón cerrar */}
        <div className={`backdrop-blur-lg text-white p-6 flex items-center justify-between ${
          darkMode ? 'bg-gradient-to-r from-gray-700/80 to-blue-700/80' : 'bg-gradient-to-r from-blue-600/80 to-indigo-600/80'
        }`}>
          <div>
            <h2 className="text-2xl font-bold">Selecciona tu Carrera</h2>
            <p className="text-sm text-white/80 mt-1">Elige la carrera para ver su malla curricular interactiva</p>
          </div>
          <button
            onClick={() => {
              if (!canClose) return;
              setIsClosing(true);
              setTimeout(() => { setIsClosing(false); onClose(); }, 120);
            }}
            className={`group text-white/80 hover:text-white transition-colors p-2 rounded-full backdrop-blur-sm ${!canClose ? 'opacity-40 cursor-not-allowed' : ''}`}
            style={{ aspectRatio: '1/1', minWidth: '40px', minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.15s', transform: isClosing ? 'scale(0.9)' : undefined }}
            aria-label="Cerrar"
            tabIndex={canClose ? 0 : -1}
            disabled={!canClose}
            onMouseEnter={e => { if (canClose) (e.currentTarget as HTMLElement).style.transform = 'scale(1.15)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = isClosing ? 'scale(0.9)' : 'scale(1)'; }}
          >
            <FontAwesomeIcon icon={faTimes} className="transition-transform duration-150" />
          </button>
        </div>

        {/* Contenido del modal */}
        <div className="p-6 overflow-y-auto max-h-[70vh] md:max-h-[60vh]">
          {/* Sección Viña del Mar*/}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Viña del Mar / Concepción</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vinaCareers.map((career) => (
                <button
                  key={career.Link}
                  onClick={() => onCareerSelect('vm', getCareerCode(career.Link))}
                  className={`backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border hover:shadow-lg hover:scale-105 text-left ${
                    darkMode ? 'border-gray-600' : 'border-white/50'
                  }`}
                  style={{}}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: career.Color || '#6B7280' }}
                    />
                    <div className="flex-1">
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-gray-200' : 'text-gray-800'
                      }`}>
                        {career.Nombre}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Sección Casa Central */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Casa Central / San Joaquín</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {casaCentralCareers.map((career) => (
                    <button
                      key={career.Link}
                      onClick={() => onCareerSelect('cc', getCareerCode(career.Link))}
                      className={`backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border hover:shadow-lg hover:scale-105 text-left ${
                        darkMode ? 'border-gray-600' : 'border-white/50'
                      }`}
                      style={{}}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full flex-shrink-0"
                          style={{ backgroundColor: career.Color || '#6B7280' }}
                        />
                        <div className="flex-1">
                          <span className={`text-sm font-medium ${
                            darkMode ? 'text-gray-200' : 'text-gray-800'
                          }`}>
                            {career.Nombre}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
            </div>
          </div>

          {/* Sección Vitacura */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Vitacura</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {vitacuraCareers.map((career) => (
                    <button
                      key={career.Link}
                      onClick={() => onCareerSelect('vc', getCareerCode(career.Link))}
                      className={`backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border hover:shadow-lg hover:scale-105 text-left ${
                        darkMode ? 'border-gray-600' : 'border-white/50'
                      }`}
                      style={{}}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full flex-shrink-0"
                          style={{ backgroundColor: career.Color || '#6B7280' }}
                        />
                        <div className="flex-1">
                          <span className={`text-sm font-medium ${
                            darkMode ? 'text-gray-200' : 'text-gray-800'
                          }`}>
                            {career.Nombre}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
