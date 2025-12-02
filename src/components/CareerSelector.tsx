import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVersions, setSelectedVersions] = useState<Record<string, 'new' | 'old'>>({});
  
  if (!show) return null;

  const getCareerCode = (careerLink: string) => {
    const parts = careerLink.split('/');
    return parts.length > 1 ? parts[1] : parts[0];
  };

  // Verificar si una carrera tiene versión antigua disponible
  const hasOldVersion = (careerLink: string) => {
    return careerLink.endsWith('-0');
  };

  // Obtener el código base de la carrera (sin el -0)
  const getBaseCareerCode = (careerLink: string) => {
    return careerLink.replace('-0', '');
  };

  // Agrupar carreras que tienen versión antigua y nueva
  const groupCareers = (careers: Career[]) => {
    const grouped: Array<{ base: Career; old?: Career }> = [];
    const processed = new Set<string>();

    careers.forEach(career => {
      const baseCode = getBaseCareerCode(career.Link);
      
      if (processed.has(baseCode)) return;
      processed.add(baseCode);

      const oldVersion = careers.find(c => c.Link === `${baseCode}-0`);
      const newVersion = careers.find(c => c.Link === baseCode && !hasOldVersion(c.Link));

      if (newVersion && oldVersion) {
        grouped.push({ base: newVersion, old: oldVersion });
      } else {
        grouped.push({ base: career });
      }
    });

    return grouped;
  };

  // Filtrar carreras agrupadas por búsqueda
  const filterGroupedCareers = (groups: Array<{ base: Career; old?: Career }>) => {
    if (!searchTerm) return groups;
    return groups.filter(group => 
      group.base.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const groupedVinaCareers = filterGroupedCareers(groupCareers(vinaCareers));
  const groupedCasaCentralCareers = filterGroupedCareers(groupCareers(casaCentralCareers));
  const groupedVitacuraCareers = filterGroupedCareers(groupCareers(vitacuraCareers));

  const totalResults = groupedVinaCareers.length + groupedCasaCentralCareers.length + groupedVitacuraCareers.length;

  // Determinar fondo: blanco sólido si no hay carrera, translúcido si hay una activa
  const modalBg = !campus || !careerCode
    ? (darkMode ? 'bg-gray-900' : 'bg-white')
    : 'bg-white/40 dark:bg-gray-800/60 backdrop-blur-lg';

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          className="fixed inset-0 z-60 flex items-start justify-center pt-12 md:pt-24 p-2 md:p-4" 
          style={{backdropFilter: 'blur(6px)'}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className={`${modalBg} rounded-3xl shadow-2xl border border-white/30 dark:border-gray-600 max-w-5xl w-full max-h-[98vh] md:max-h-[80vh] overflow-hidden flex flex-col`}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
        {/* Header con gradiente y botón cerrar */}
        <div className={`backdrop-blur-lg text-white p-6 flex items-center justify-between ${
          darkMode ? 'bg-gradient-to-r from-gray-700/80 to-blue-700/80' : 'bg-gradient-to-r from-blue-600/80 to-indigo-600/80'
        }`}>
          <div>
            <h2 className="text-2xl font-bold">Selecciona tu Carrera</h2>
            <p className="text-sm text-white/80 mt-1">Elige la carrera para ver su malla curricular interactiva</p>
          </div>
          <button
            onClick={onClose}
            className={`group text-white/80 hover:text-white transition-all p-2 rounded-full backdrop-blur-sm hover:scale-110 ${!canClose ? 'opacity-40 cursor-not-allowed' : ''}`}
            style={{ aspectRatio: '1/1', minWidth: '40px', minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Cerrar"
            tabIndex={canClose ? 0 : -1}
            disabled={!canClose}
          >
            <FontAwesomeIcon icon={faTimes} className="transition-transform duration-150" />
          </button>
        </div>

        {/* Contenido del modal */}
        <div className="overflow-y-auto max-h-[70vh] md:max-h-[60vh]">
          {/* Barra de búsqueda y toggle */}
          <div className={`sticky top-0 z-10 px-6 pt-6 pb-8 mb-6 space-y-4 ${
            darkMode 
              ? 'bg-gradient-to-b from-gray-800 from-70% via-gray-800/90 to-transparent' 
              : 'bg-gradient-to-b from-white from-70% via-white/90 to-transparent'
          }`}>
            <div className="relative">
              <FontAwesomeIcon 
                icon={faSearch} 
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
              />
              <input
                type="text"
                placeholder="Buscar carrera..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 rounded-2xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? 'bg-gray-800/80 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white/80 border-gray-200 text-gray-800 placeholder-gray-500'
                }`}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              )}
            </div>
            
            {searchTerm && (
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {totalResults} {totalResults === 1 ? 'resultado encontrado' : 'resultados encontrados'}
              </p>
            )}
          </div>

          {/* Sección Viña del Mar*/}
          {groupedVinaCareers.length > 0 && (
            <div className="mb-8 px-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
                <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600" />
                Viña del Mar / Concepción
                <span className={`text-sm font-normal ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  ({groupedVinaCareers.length})
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {groupedVinaCareers.map((group) => {
                  const baseCode = getBaseCareerCode(group.base.Link);
                  const currentVersion = selectedVersions[baseCode] || 'new';
                  const currentCareer = currentVersion === 'old' && group.old ? group.old : group.base;
                  
                  return (
                    <motion.button
                      key={baseCode}
                      onClick={() => onCareerSelect('vm', getCareerCode(currentCareer.Link))}
                      className={`backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border-2 hover:shadow-lg hover:scale-105 text-left ${
                        darkMode ? 'border-gray-600' : 'border-white/50'
                      }`}
                      style={{ borderColor: currentCareer.Color || '#6B7280' }}
                      layout
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full flex-shrink-0"
                          style={{ backgroundColor: currentCareer.Color || '#6B7280' }}
                        />
                        <div className="flex-1 min-w-0">
                          <motion.span 
                            key={currentVersion}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className={`text-sm font-medium block ${
                              darkMode ? 'text-gray-200' : 'text-gray-800'
                            }`}
                          >
                            {currentCareer.Nombre.replaceAll(/\s*\(Malla Antigua\)\s*/gi, '')}
                          </motion.span>
                        </div>
                        {group.old && (
                          <div 
                            onClick={(e) => e.stopPropagation()}
                            className={`relative flex items-center rounded-full p-1 gap-0 ${
                              darkMode ? 'bg-gray-700/50' : 'bg-gray-100'
                            }`}
                          >
                            <motion.div
                              layout
                              className={`absolute rounded-full shadow-sm transition-colors duration-300 ${
                                currentVersion === 'new'
                                  ? darkMode 
                                    ? 'bg-blue-600' 
                                    : 'bg-blue-500'
                                  : darkMode
                                    ? 'bg-amber-600' 
                                    : 'bg-amber-500'
                              }`}
                              style={{
                                left: currentVersion === 'new' ? '4px' : '50%',
                                right: currentVersion === 'new' ? '50%' : '4px',
                                top: '4px',
                                bottom: '4px',
                              }}
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                            <div
                              role="button"
                              tabIndex={0}
                              onClick={() => setSelectedVersions(prev => ({ ...prev, [baseCode]: 'new' }))}
                              onKeyDown={(e) => e.key === 'Enter' && setSelectedVersions(prev => ({ ...prev, [baseCode]: 'new' }))}
                              className={`relative z-10 px-4 py-2 text-xs font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                                currentVersion === 'new'
                                  ? 'text-white' 
                                  : darkMode
                                    ? 'text-gray-400'
                                    : 'text-gray-600'
                              }`}
                            >
                              Nueva
                            </div>
                            <div
                              role="button"
                              tabIndex={0}
                              onClick={() => setSelectedVersions(prev => ({ ...prev, [baseCode]: 'old' }))}
                              onKeyDown={(e) => e.key === 'Enter' && setSelectedVersions(prev => ({ ...prev, [baseCode]: 'old' }))}
                              className={`relative z-10 px-4 py-2 text-xs font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                                currentVersion === 'old'
                                  ? 'text-white'
                                  : darkMode
                                    ? 'text-gray-400'
                                    : 'text-gray-600'
                              }`}
                            >
                              Antigua
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
            </div>
          </div>
          )}

          {/* Sección Casa Central */}
          {groupedCasaCentralCareers.length > 0 && (
          <div className="mb-8 px-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
              <FontAwesomeIcon icon={faGraduationCap} className="text-indigo-600" />
              Casa Central / San Joaquín
              <span className={`text-sm font-normal ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                ({groupedCasaCentralCareers.length})
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedCasaCentralCareers.map((group) => {
                    const baseCode = getBaseCareerCode(group.base.Link);
                    const currentVersion = selectedVersions[baseCode] || 'new';
                    const currentCareer = currentVersion === 'old' && group.old ? group.old : group.base;
                    
                    return (
                      <motion.button
                        key={baseCode}
                        onClick={() => onCareerSelect('cc', getCareerCode(currentCareer.Link))}
                        className={`backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border-2 hover:shadow-lg hover:scale-105 text-left ${
                          darkMode ? 'border-gray-600' : 'border-white/50'
                        }`}
                        style={{ borderColor: currentCareer.Color || '#6B7280' }}
                        layout
                      >
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-4 h-4 rounded-full flex-shrink-0"
                            style={{ backgroundColor: currentCareer.Color || '#6B7280' }}
                          />
                          <div className="flex-1 min-w-0">
                            <span 
                              className={`text-sm font-medium block ${
                                darkMode ? 'text-gray-200' : 'text-gray-800'
                              }`}
                            >
                              {currentCareer.Nombre.replaceAll(/\s*\(Malla Antigua\)\s*/gi, '')}
                            </span>
                          </div>
                          {group.old && (
                            <div 
                              onClick={(e) => e.stopPropagation()}
                              className={`relative flex items-center rounded-full p-1 gap-0 ${
                                darkMode ? 'bg-gray-700/50' : 'bg-gray-100'
                              }`}
                            >
                              <motion.div
                                layout
                                className={`absolute rounded-full shadow-sm transition-colors duration-300 ${
                                  currentVersion === 'new'
                                    ? darkMode 
                                      ? 'bg-blue-600' 
                                      : 'bg-blue-500'
                                    : darkMode
                                      ? 'bg-amber-600' 
                                      : 'bg-amber-500'
                                }`}
                                style={{
                                  left: currentVersion === 'new' ? '4px' : '50%',
                                  right: currentVersion === 'new' ? '50%' : '4px',
                                  top: '4px',
                                  bottom: '4px',
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              />
                              <div
                                role="button"
                                tabIndex={0}
                                onClick={() => setSelectedVersions(prev => ({ ...prev, [baseCode]: 'new' }))}
                                onKeyDown={(e) => e.key === 'Enter' && setSelectedVersions(prev => ({ ...prev, [baseCode]: 'new' }))}
                                className={`relative z-10 px-4 py-2 text-xs font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                                  currentVersion === 'new'
                                    ? 'text-white' 
                                    : darkMode
                                      ? 'text-gray-400'
                                      : 'text-gray-600'
                                }`}
                              >
                                Nueva
                              </div>
                              <div
                                role="button"
                                tabIndex={0}
                                onClick={() => setSelectedVersions(prev => ({ ...prev, [baseCode]: 'old' }))}
                                onKeyDown={(e) => e.key === 'Enter' && setSelectedVersions(prev => ({ ...prev, [baseCode]: 'old' }))}
                                className={`relative z-10 px-4 py-2 text-xs font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                                  currentVersion === 'old'
                                    ? 'text-white'
                                    : darkMode
                                      ? 'text-gray-400'
                                      : 'text-gray-600'
                                }`}
                              >
                                Antigua
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
            </div>
          </div>
          )}

          {/* Sección Vitacura */}
          {groupedVitacuraCareers.length > 0 && (
          <div className="mb-8 px-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
              <FontAwesomeIcon icon={faGraduationCap} className="text-purple-600" />
              Vitacura
              <span className={`text-sm font-normal ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                ({groupedVitacuraCareers.length})
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedVitacuraCareers.map((group) => {
                    const baseCode = getBaseCareerCode(group.base.Link);
                    const currentVersion = selectedVersions[baseCode] || 'new';
                    const currentCareer = currentVersion === 'old' && group.old ? group.old : group.base;
                    
                    return (
                      <motion.button
                        key={baseCode}
                        onClick={() => onCareerSelect('vc', getCareerCode(currentCareer.Link))}
                        className={`backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border-2 hover:shadow-lg hover:scale-105 text-left ${
                          darkMode ? 'border-gray-600' : 'border-white/50'
                        }`}
                        style={{ borderColor: currentCareer.Color || '#6B7280' }}
                        layout
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-4 h-4 rounded-full flex-shrink-0"
                            style={{ backgroundColor: currentCareer.Color || '#6B7280' }}
                          />
                          <div className="flex-1 min-w-0">
                            <span 
                              className={`text-sm font-medium block ${
                                darkMode ? 'text-gray-200' : 'text-gray-800'
                              }`}
                            >
                              {currentCareer.Nombre.replaceAll(/\s*\(Malla Antigua\)\s*/gi, '')}
                            </span>
                          </div>
                          {group.old && (
                            <div 
                              onClick={(e) => e.stopPropagation()}
                              className={`relative flex items-center rounded-full p-1 gap-0 ${
                                darkMode ? 'bg-gray-700/50' : 'bg-gray-100'
                              }`}
                            >
                              <motion.div
                                layout
                                className={`absolute rounded-full shadow-sm transition-colors duration-300 ${
                                  currentVersion === 'new'
                                    ? darkMode 
                                      ? 'bg-blue-600' 
                                      : 'bg-blue-500'
                                    : darkMode
                                      ? 'bg-amber-600' 
                                      : 'bg-amber-500'
                                }`}
                                style={{
                                  left: currentVersion === 'new' ? '4px' : '50%',
                                  right: currentVersion === 'new' ? '50%' : '4px',
                                  top: '4px',
                                  bottom: '4px',
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              />
                              <div
                                role="button"
                                tabIndex={0}
                                onClick={() => setSelectedVersions(prev => ({ ...prev, [baseCode]: 'new' }))}
                                onKeyDown={(e) => e.key === 'Enter' && setSelectedVersions(prev => ({ ...prev, [baseCode]: 'new' }))}
                                className={`relative z-10 px-4 py-2 text-xs font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                                  currentVersion === 'new'
                                    ? 'text-white' 
                                    : darkMode
                                      ? 'text-gray-400'
                                      : 'text-gray-600'
                                }`}
                              >
                                Nueva
                              </div>
                              <div
                                role="button"
                                tabIndex={0}
                                onClick={() => setSelectedVersions(prev => ({ ...prev, [baseCode]: 'old' }))}
                                onKeyDown={(e) => e.key === 'Enter' && setSelectedVersions(prev => ({ ...prev, [baseCode]: 'old' }))}
                                className={`relative z-10 px-4 py-2 text-xs font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                                  currentVersion === 'old'
                                    ? 'text-white'
                                    : darkMode
                                      ? 'text-gray-400'
                                      : 'text-gray-600'
                                }`}
                              >
                                Antigua
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
            </div>
          </div>
          )}

          {/* Mensaje si no hay resultados */}
          {totalResults === 0 && searchTerm && (
            <div className="text-center py-12 px-6">
              <FontAwesomeIcon icon={faSearch} className={`text-6xl mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-300'}`} />
              <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                No se encontraron resultados
              </h4>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Intenta con otro término de búsqueda
              </p>
            </div>
          )}

        </div>
      </motion.div>
    </motion.div>
      )}
    </AnimatePresence>
  );
}
