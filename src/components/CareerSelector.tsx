interface Career {
  Nombre: string;
  Link: string;
  Color?: string;
}

interface CareerSelectorProps {
  show: boolean;
  casaCentralCareers: Career[];
  vinaConcepcionCareers: Career[];
  darkMode: boolean;
  onCareerSelect: (careerLink: string) => void;
}

export default function CareerSelector({
  show,
  casaCentralCareers,
  vinaConcepcionCareers,
  darkMode,
  onCareerSelect
}: CareerSelectorProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-70 flex items-center justify-center p-4">
      <div className={`backdrop-blur-lg rounded-3xl shadow-2xl border max-w-5xl w-full max-h-[80vh] overflow-hidden ${
        darkMode ? 'bg-gray-800/95 border-gray-600' : 'bg-white/95 border-white/30'
      }`}>
        {/* Header */}
        <div className={`backdrop-blur-sm border-b p-6 ${
          darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50/80 border-gray-200'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Selecciona tu Carrera
              </h2>
              <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Elige la carrera para ver su malla curricular interactiva
              </p>
            </div>
          </div>
        </div>
        
        {/* Contenido del popup */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Sección Viña del Mar / Concepción */}
          <div className="mb-8">
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Viña del Mar / Concepción
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vinaConcepcionCareers.map((career) => (
                <button
                  key={career.Link}
                  onClick={() => onCareerSelect(career.Link)}
                  className={`backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border hover:shadow-lg hover:scale-105 text-left ${
                    darkMode 
                      ? 'bg-gray-700/30 border-gray-600 hover:bg-gray-600/40' 
                      : 'bg-white/40 border-white/50 hover:bg-white/60'
                  }`}
                  style={{ 
                    borderColor: career.Color ? `${career.Color}40` : undefined,
                    backgroundColor: career.Color ? `${career.Color}10` : undefined
                  }}
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
                      <div className={`text-xs mt-1 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {career.Link}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Sección Casa Central / San Joaquín */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Casa Central / San Joaquín
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {casaCentralCareers.map((career) => (
                <button
                  key={career.Link}
                  onClick={() => onCareerSelect(career.Link)}
                  className={`backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border hover:shadow-lg hover:scale-105 text-left ${
                    darkMode 
                      ? 'bg-gray-700/30 border-gray-600 hover:bg-gray-600/40' 
                      : 'bg-white/40 border-white/50 hover:bg-white/60'
                  }`}
                  style={{ 
                    borderColor: career.Color ? `${career.Color}40` : undefined,
                    backgroundColor: career.Color ? `${career.Color}10` : undefined
                  }}
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
                      <div className={`text-xs mt-1 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {career.Link}
                      </div>
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
