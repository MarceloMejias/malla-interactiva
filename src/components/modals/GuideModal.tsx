'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBookOpen, faCheckCircle, faLightbulb, faCoins, faExclamationTriangle, faGraduationCap, faClock, faCalendarAlt, faRoute, faStar, faFileAlt, faBan, faLock, faSave, faSync, faBullseye, faTrash, faExclamationCircle, faUserTie, faChartLine, faHourglassHalf, faGripVertical } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface GuideModalProps {
  show: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export default function GuideModal({ show, onClose, darkMode }: GuideModalProps) {
  const [selectedTab, setSelectedTab] = useState<'usage' | 'planning'>('usage');

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-60 flex items-center justify-center p-2 md:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
            className={`bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 dark:border-gray-600 max-w-4xl w-full max-h-[95vh] md:max-h-[85vh] overflow-hidden flex flex-col ${darkMode ? 'dark' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600/80 to-indigo-600/80 text-white p-6 backdrop-blur-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faBookOpen} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Guía</h3>
                    <p className="text-sm text-white/80">Todo lo que necesitas saber</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="group/close text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 aspect-square min-w-[40px] min-h-[40px] flex items-center justify-center"
                  aria-label="Cerrar"
                >
                  <FontAwesomeIcon icon={faTimes} className="transition-transform duration-150 group-hover/close:scale-125" />
                </button>
              </div>
            </div>

            {/* Content con scroll */}
            <div className={`overflow-y-auto flex-1 pb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              
              {/* Toggle de pestañas - Sticky con gradiente */}
              <div 
                className={`sticky top-0 z-10 px-6 pt-6 pb-8 pointer-events-none ${
                  darkMode 
                    ? 'bg-gradient-to-b from-gray-800 via-gray-800/70 to-gray-800/0' 
                    : 'bg-gradient-to-b from-white via-white/80 to-white/0'
                }`}
              >
              <div className="flex items-center justify-center pointer-events-auto">
              <div 
                className={`relative flex items-center rounded-full p-1 gap-0 backdrop-blur-md ${
                  darkMode ? 'bg-gray-700/70' : 'bg-gray-100/70'
                }`}
              >
                <motion.div
                  layout
                  className={`absolute rounded-full shadow-md ${
                    selectedTab === 'usage'
                      ? 'bg-blue-600'
                      : 'bg-indigo-600'
                  }`}
                  style={{
                    left: selectedTab === 'usage' ? '4px' : '50%',
                    right: selectedTab === 'usage' ? '50%' : '4px',
                    top: '4px',
                    bottom: '4px',
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedTab('usage')}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedTab('usage')}
                  className={`relative z-10 px-6 py-2 text-sm font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    selectedTab === 'usage'
                      ? 'text-white' 
                      : darkMode
                        ? 'text-gray-400'
                        : 'text-gray-600'
                  }`}
                >
                  <FontAwesomeIcon icon={faBookOpen} className="text-sm" />
                  Usar Malla
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedTab('planning')}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedTab('planning')}
                  className={`relative z-10 px-6 py-2 text-sm font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    selectedTab === 'planning'
                      ? 'text-white'
                      : darkMode
                        ? 'text-gray-400'
                        : 'text-gray-600'
                  }`}
                >
                  <FontAwesomeIcon icon={faGraduationCap} className="text-sm" />
                    Tomar Ramos
                </div>
              </div>
              </div>
            </div>

              {/* Contenido: Usar la Malla */}
              {selectedTab === 'usage' && (
                <div className={`px-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {/* Sección: Estados de asignaturas */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                      Estados de Asignaturas
                    </h4>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-blue-50'} border-2 ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}>
                        <div className="flex flex-col items-center text-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <FontAwesomeIcon icon={faClock} className="text-white text-lg" />
                          </div>
                          <div>
                            <h5 className="font-bold text-base mb-1">Pendiente</h5>
                            <p className="text-xs opacity-70">Estado inicial de asignaturas no cursadas</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`p-4 rounded-xl border-2 ${darkMode ? 'bg-green-900/30 border-green-900' : 'bg-green-50 border-green-200'}`}>
                        <div className="flex flex-col items-center text-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-white text-lg" />
                          </div>
                          <div>
                            <h5 className="font-bold text-base mb-1">Aprobada</h5>
                            <p className="text-xs opacity-70">Click para marcar/desmarcar como aprobada</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-2 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                        <div className="flex flex-col items-center text-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <FontAwesomeIcon icon={faLock} className="text-white text-lg" />
                          </div>
                          <div>
                            <h5 className="font-bold text-base mb-1">Bloqueada</h5>
                            <p className="text-xs opacity-70">Completa prerrequisitos para desbloquear</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sección: Prerrequisitos */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <FontAwesomeIcon icon={faRoute} className="text-blue-500" />
                      Navegación por Prerrequisitos
                    </h4>
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-blue-50'} border-2 ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <FontAwesomeIcon icon={faLightbulb} className="text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold mb-1">Chips Interactivos</p>
                            <p className="text-xs opacity-80">
                              Los prerrequisitos aparecen como chips de colores en cada tarjeta de asignatura.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <FontAwesomeIcon icon={faRoute} className="text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold mb-1">Navegación Rápida</p>
                            <p className="text-xs opacity-80">
                              <strong>Haz clic en cualquier chip</strong> para saltar directamente a esa asignatura en la malla.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <FontAwesomeIcon icon={faLock} className="text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold mb-1">Indicador Visual</p>
                            <p className="text-xs opacity-80">
                              Cada chip muestra un punto: <span className="text-green-500">●</span> aprobado o <span className="text-red-500">●</span> pendiente.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sección: Calculadora */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <FontAwesomeIcon icon={faChartLine} className="text-purple-500" />
                      Barra de Progreso
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-2 ${darkMode ? 'border-purple-800' : 'border-purple-200'}`}>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-white" />
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Estadísticas en Vivo</h5>
                            <ul className="text-xs space-y-1 opacity-80">
                              <li>• Asignaturas aprobadas</li>
                              <li>• Créditos acumulados</li>
                              <li>• Porcentaje de avance</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-green-900/30 border border-green-900' : 'bg-green-50 border border-green-200'} border-2 ${darkMode ? 'border-green-800' : 'border-green-200'}`}>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <FontAwesomeIcon icon={faGraduationCap} className="text-white" />
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Plan de Graduación</h5>
                            <p className="text-xs opacity-80">
                              Haz clic en el botón para abrir el modal de planificación personalizada.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sección: Plan de Graduación Interactivo */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <FontAwesomeIcon icon={faGraduationCap} className="text-green-500" />
                      Plan de Graduación Interactivo
                    </h4>
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-2 ${darkMode ? 'border-green-800' : 'border-green-200'}`}>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold mb-2">Generación Automática</p>
                          <p className="text-xs opacity-80">
                            El sistema genera automáticamente un plan semestre por semestre basado en:
                          </p>
                          <ul className="text-xs space-y-1 ml-4 mt-2 opacity-80">
                            <li>• Asignaturas que te faltan por aprobar</li>
                            <li>• Respeto de prerrequisitos y dependencias</li>
                            <li>• Distribución equilibrada de carga (25-30 créditos)</li>
                          </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3">
                          <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-900/30 border border-blue-800' : 'bg-blue-50 border border-blue-200'}`}>
                            <div className="flex items-start gap-2 mb-2">
                              <FontAwesomeIcon icon={faGripVertical} className="text-blue-500 flex-shrink-0 mt-0.5" />
                              <p className="text-sm font-semibold">Arrastra y Suelta</p>
                            </div>
                            <p className="text-xs opacity-80">
                              Puedes reorganizar las asignaturas arrastrándolas entre semestres para personalizar tu plan.
                            </p>
                          </div>

                          <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-900/30 border border-purple-800' : 'bg-purple-50 border border-purple-200'}`}>
                            <div className="flex items-start gap-2 mb-2">
                              <FontAwesomeIcon icon={faExclamationTriangle} className="text-purple-500 flex-shrink-0 mt-0.5" />
                              <p className="text-sm font-semibold">Validación Automática</p>
                            </div>
                            <p className="text-xs opacity-80">
                              El sistema valida que los prerrequisitos se cumplan antes de permitir mover una asignatura.
                            </p>
                          </div>

                          <div className={`p-3 rounded-lg ${darkMode ? 'bg-orange-900/30 border border-orange-800' : 'bg-orange-50 border border-orange-200'}`}>
                            <div className="flex items-start gap-2 mb-2">
                              <FontAwesomeIcon icon={faBan} className="text-orange-500 flex-shrink-0 mt-0.5" />
                              <p className="text-sm font-semibold">Límite de Créditos</p>
                            </div>
                            <p className="text-xs opacity-80">
                              No puedes agregar asignaturas que excedan los 35 créditos por semestre sin elevar solicitud formal (límite normal).
                            </p>
                          </div>

                          <div className={`p-3 rounded-lg ${darkMode ? 'bg-teal-900/30 border border-teal-800' : 'bg-teal-50 border border-teal-200'}`}>
                            <div className="flex items-start gap-2 mb-2">
                              <FontAwesomeIcon icon={faSave} className="text-teal-500 flex-shrink-0 mt-0.5" />
                              <p className="text-sm font-semibold">Guardado Local</p>
                            </div>
                            <p className="text-xs opacity-80">
                              Tu plan personalizado se guarda automáticamente en tu navegador.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sección: Consejos de Uso */}
                  <div>
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <FontAwesomeIcon icon={faStar} className="text-orange-500" />
                      Consejos Rápidos
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-l-4 border-green-500`}>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faSave} className="text-green-500 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Guardado Automático</p>
                            <p className="text-xs opacity-80">Tu progreso se guarda localmente en tu navegador.</p>
                          </div>
                        </div>
                      </div>
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-l-4 border-blue-500`}>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faBullseye} className="text-blue-500 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Navegación Rápida</p>
                            <p className="text-xs opacity-80">Click en prerrequisitos para saltar entre ramos.</p>
                          </div>
                        </div>
                      </div>
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-l-4 border-purple-500`}>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faSync} className="text-purple-500 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Mantén Actualizado</p>
                            <p className="text-xs opacity-80">Actualiza regularmente para planes precisos.</p>
                          </div>
                        </div>
                      </div>
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-red-50'} border-l-4 border-red-500`}>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faTrash} className="text-red-500 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Restablecer</p>
                            <p className="text-xs opacity-80">Usa el botón "Restablecer" para empezar de cero.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Contenido: Tomar Asignaturas */}
              {selectedTab === 'planning' && (
                <div className={`px-6 ${darkMode ? 'dark' : 'light'}`}>
                  {/* Sección: ¿Qué son los Créditos SCT? */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <FontAwesomeIcon icon={faCoins} className="text-indigo-500" />
                      ¿Qué son los Créditos SCT?
                    </h4>
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-2 ${darkMode ? 'border-indigo-800' : 'border-indigo-200'}`}>
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-sm font-semibold mb-2">
                            Sistema de Créditos Transferibles (SCT)
                          </h5>
                          <p className="text-xs opacity-80">
                            Es una medida estandarizada de la carga académica de una asignatura.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3">
                          <div className={`p-3 rounded-lg ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-50'} border ${darkMode ? 'border-indigo-800' : 'border-indigo-200'}`}>
                            <p className="text-sm font-bold mb-1">1 Crédito SCT</p>
                            <p className="text-xs opacity-80">= 27-30 horas de trabajo total</p>
                            <p className="text-xs opacity-70 mt-2">
                              Incluye: clases, laboratorios, estudio, tareas y evaluaciones.
                            </p>
                          </div>

                          <div className="space-y-2">
                            <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                              <p className="text-xs font-semibold">5 SCT: ~135-150 horas/semestre</p>
                            </div>
                            <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                              <p className="text-xs font-semibold">10 SCT: ~270-300 horas/semestre</p>
                            </div>
                            <div className={`p-3 rounded-lg ${darkMode ? 'bg-pink-900/30' : 'bg-pink-50'}`}>
                              <p className="text-xs font-semibold">30 SCT: ~810-900 horas/semestre</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sección: Cómo Elegir Tus Asignaturas */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <FontAwesomeIcon icon={faRoute} className="text-blue-500" />
                      Guía de Selección de Asignaturas
                    </h4>
                    <div className="space-y-3">
                      
                      {/* Paso 1: Carga académica */}
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-blue-50'} border-l-4 border-blue-500`}>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
                            <span className="text-white text-lg font-bold">1</span>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-bold text-base mb-2 flex items-center gap-2">
                              Planifica tu Carga Académica
                            </h5>
                            <p className="text-sm mb-2"><strong>Carga recomendada:</strong> 25-30 créditos SCT por semestre</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              {/* Carga Reducida */}
                              <div className={`p-3 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-50'}`}>
                                <p className="font-semibold">20-24 SCT</p>
                                <p className="opacity-70">Carga reducida</p>
                              </div>
                              {/* Carga Normal */}
                              <div className={`p-3 rounded-lg ${darkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'}`}>
                                <p className="font-semibold">25-28 SCT</p>
                                <p className="opacity-70">Carga normal</p>
                              </div>
                              {/* Carga Completa */}
                              <div className={`p-3 rounded-lg ${darkMode ? 'bg-orange-900/30' : 'bg-orange-50'}`}>
                                <p className="font-semibold">30-32 SCT</p>
                                <p className="opacity-70">Tiempo completo</p>
                              </div>
                              {/* Sobrecarga */}
                              <div className={`p-3 rounded-lg ${darkMode ? 'bg-red-900/30' : 'bg-red-50'}`}>
                                <p className="font-semibold">33+ SCT</p>
                                <p className="opacity-70">Sobrecarga</p>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Paso 2: Prerrequisitos */}
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-pink-50'} border-l-4 border-pink-500`}>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-md">
                            <span className="text-white text-lg font-bold">2</span>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-bold text-base mb-2 flex items-center gap-2">
                              Prioriza Asignaturas Clave
                            </h5>
                            <p className="text-sm mb-2">Enfócate en asignaturas que <strong>desbloquean otras asignaturas</strong> para mantener tu progreso fluido.</p>

                          </div>
                        </div>
                      </div>

                      {/* Paso 3: Balance */}
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-yellow-50'} border-l-4 border-yellow-500`}>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center flex-shrink-0 shadow-md">
                            <span className="text-white text-lg font-bold">3</span>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-bold text-base mb-2 flex items-center gap-2">
                              Balancea Dificultad y Tiempo
                            </h5>
                            <p className="text-sm opacity-90 mb-2">
                              No todas las asignaturas tienen la misma dificultad.
                            </p>
                            <ul className="text-xs space-y-1 opacity-80">
                              <li>• Mezcla asignaturas difíciles con otras más llevaderas</li>
                              <li>• Considera laboratorios y trabajos grupales</li>
                              <li>• Evita muchos proyectos grandes simultáneamente</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Paso 4: Progresión */}
                      {/* Paso 4: Progresión */}
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-purple-50'} border-l-4 border-purple-500`}>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                            <span className="text-white text-lg font-bold">4</span>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-bold text-base mb-2 flex items-center gap-2">
                              Mantén Progreso Constante
                            </h5>
                            <p className="text-sm opacity-90 mb-2">
                              Seguir el avance sugerido te ayuda a mantener un ritmo constante.
                            </p>
                            <ul className="text-xs space-y-1 opacity-80">
                              <li>• Sigue la secuencia de semestres recomendada</li>
                              <li>• Consulta con tu jefe de carrera si te atrasas mucho</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Sección: Estrategias de Planificación */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <FontAwesomeIcon icon={faLightbulb} className="text-teal-500" />
                      Estrategias de Planificación
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-l-4 border-teal-500`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <FontAwesomeIcon icon={faChartLine} className="text-white" />
                          </div>
                          <h5 className="font-bold text-base">Visión a Largo Plazo</h5>
                        </div>
                        <p className="text-xs opacity-80">
                          Usa el <strong>Plan de Graduación</strong> para visualizar cuántos semestres te quedan y organizar tu avance estratégicamente.
                        </p>
                      </div>

                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-l-4 border-blue-500`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <FontAwesomeIcon icon={faBullseye} className="text-white" />
                          </div>
                          <h5 className="font-bold text-base">Asignaturas Críticas</h5>
                        </div>
                        <p className="text-xs opacity-80">
                          Identifica asignaturas que son prerrequisitos de muchas otras y priórízalas para no bloquear tu avance futuro.
                        </p>
                      </div>

                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-l-4 border-green-500`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-white" />
                          </div>
                          <h5 className="font-bold text-base">Actualiza tu Progreso</h5>
                        </div>
                        <p className="text-xs opacity-80">
                          Marca regularmente tus asignaturas aprobadas para mantener el plan de graduación actualizado y preciso.
                        </p>
                      </div>

                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-l-4 border-purple-500`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <FontAwesomeIcon icon={faSync} className="text-white" />
                          </div>
                          <h5 className="font-bold text-base">Ajusta Sobre la Marcha</h5>
                        </div>
                        <p className="text-xs opacity-80">
                          Si repruebas una asignatura, reorganiza tu plan considerando que deberás retomarla antes de continuar.
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Sección: Consejos */}
                  <div>
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <FontAwesomeIcon icon={faStar} className="text-orange-500" />
                      Consejos Importantes
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-l-4 border-orange-500`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <FontAwesomeIcon icon={faExclamationCircle} className="text-white" />
                          </div>
                          <h5 className="font-bold text-base">Disponibilidad</h5>
                        </div>
                        <p className="text-xs opacity-80">
                          La disponibilidad de asignaturas puede variar cada semestre.
                        </p>
                      </div>


                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-l-4 border-red-500`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center shadow-md flex-shrink-0">
                            <FontAwesomeIcon icon={faLock} className="text-white" />
                          </div>
                          <h5 className="font-bold text-base">Cadenas Críticas</h5>
                        </div>
                        <p className="text-xs opacity-80">
                          Algunas asignaturas bloquean el avance de múltiples otras. Identifícalas y priorízalas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
