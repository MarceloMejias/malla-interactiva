'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBookOpen, faCheckCircle, faLightbulb, faExclamationTriangle, faGraduationCap, faClock, faCalendarAlt, faRoute, faStar, faFileAlt, faBan, faLock, faSave, faSync, faBullseye, faTrash, faExclamationCircle, faUserTie, faChartLine, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
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
          className="modal-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
            className={`modal-container ${darkMode ? 'dark' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="modal-header blue">
              <div className="modal-header-content">
                <div className="modal-header-title">
                  <div className="modal-icon-container">
                    <FontAwesomeIcon icon={faBookOpen} className="text-white" />
                  </div>
                  <div>
                    <h3 className="modal-title">Guía de Estudio</h3>
                    <p className="modal-subtitle">Todo lo que necesitas saber</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="modal-close-button"
                  aria-label="Cerrar"
                >
                  <FontAwesomeIcon icon={faTimes} className="modal-close-icon" />
                </button>
              </div>
            </div>

            {/* Switch de pestañas - Fuera del header */}
            <div className="modal-tabs">
              <div className="modal-tabs-container">
                <button
                  onClick={() => setSelectedTab('usage')}
                  className={`modal-tab-button ${selectedTab === 'usage' ? 'active blue' : `inactive ${darkMode ? 'dark' : 'light'}`}`}
                  title="Usar la Malla"
                  aria-label="Usar la Malla"
                >
                  <FontAwesomeIcon icon={faBookOpen} className="modal-tab-icon" />
                </button>
                
                <button
                  onClick={() => setSelectedTab('planning')}
                  className={`modal-tab-button ${selectedTab === 'planning' ? 'active indigo' : `inactive ${darkMode ? 'dark' : 'light'}`}`}
                  title="Tomar Ramos"
                  aria-label="Tomar Ramos"
                >
                  <FontAwesomeIcon icon={faGraduationCap} className="modal-tab-icon" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className={`modal-content pt-0 ${darkMode ? 'dark' : 'light'}`}>
              
              {/* Contenido: Usar la Malla */}
              {selectedTab === 'usage' && (
                <div>
                  {/* Sección: Estados de asignaturas */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                      Estados de Asignaturas
                    </h4>
                    <div className="space-y-3">
                      <div className={`p-3 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-lg bg-green-500 flex items-center justify-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-white text-xs" />
                          </div>
                          <span className="font-semibold">Aprobado</span>
                        </div>
                        <p className="text-sm opacity-80">Haz clic una vez en una asignatura para marcarla como aprobada.</p>
                      </div>
                      
                      <div className={`p-3 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-lg bg-yellow-500 flex items-center justify-center">
                            <FontAwesomeIcon icon={faFileAlt} className="text-white text-xs" />
                          </div>
                          <span className="font-semibold">Cursando</span>
                        </div>
                        <p className="text-sm opacity-80">Haz clic dos veces para marcarla como en curso.</p>
                      </div>
                      
                      <div className={`p-3 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-lg bg-red-500 flex items-center justify-center">
                            <FontAwesomeIcon icon={faBan} className="text-white text-xs" />
                          </div>
                          <span className="font-semibold">Reprobado</span>
                        </div>
                        <p className="text-sm opacity-80">Haz clic tres veces para marcarla como reprobada.</p>
                      </div>
                      
                      <div className={`p-3 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-lg bg-gray-400 flex items-center justify-center">
                            <FontAwesomeIcon icon={faClock} className="text-white text-xs" />
                          </div>
                          <span className="font-semibold">Pendiente</span>
                        </div>
                        <p className="text-sm opacity-80">Haz clic cuatro veces para volver al estado inicial.</p>
                      </div>
                    </div>
                  </div>

                  {/* Sección: Prerrequisitos */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500" />
                      Prerrequisitos
                    </h4>
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-blue-50'}`}>
                      <p className="text-sm mb-2">
                        Las asignaturas muestran sus prerrequisitos en la parte inferior de cada tarjeta.
                      </p>
                      <p className="text-sm mb-2">
                        <strong>Haz clic en un prerrequisito</strong> para navegar automáticamente a esa asignatura en la malla.
                      </p>
                      <p className="text-sm">
                        Si un prerrequisito no está aprobado, la asignatura estará bloqueada y tendrá un <FontAwesomeIcon icon={faLock} className="text-red-500" />.
                      </p>
                    </div>
                  </div>

                  {/* Sección: Calculadora */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-purple-500" />
                      Calculadora de Progreso
                    </h4>
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-purple-50'}`}>
                      <p className="text-sm mb-2">
                        La barra flotante en la parte inferior muestra tu progreso en tiempo real:
                      </p>
                      <ul className="text-sm space-y-1 ml-4 list-disc">
                        <li>Asignaturas aprobadas / Total de asignaturas</li>
                        <li>Créditos acumulados / Créditos totales</li>
                        <li>Porcentaje de avance</li>
                      </ul>
                      <p className="text-sm mt-3">
                        <strong>Botón "Plan de Graduación":</strong> Genera automáticamente un plan semestre por semestre con las asignaturas que te faltan.
                      </p>
                    </div>
                  </div>

                  {/* Sección: Consejos de Uso */}
                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <FontAwesomeIcon icon={faExclamationTriangle} className="text-orange-500" />
                      Consejos de Uso
                    </h4>
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-orange-50'}`}>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <FontAwesomeIcon icon={faSave} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span><strong>Datos Locales:</strong> Tu progreso se guarda en tu navegador. Usa el mismo dispositivo para ver tus datos.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FontAwesomeIcon icon={faSync} className="text-purple-500 flex-shrink-0 mt-0.5" />
                          <span><strong>Actualización:</strong> Actualiza tu progreso regularmente para mantener la precisión del plan.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FontAwesomeIcon icon={faBullseye} className="text-blue-500 flex-shrink-0 mt-0.5" />
                          <span><strong>Navegación:</strong> Haz clic en los prerrequisitos para navegar rápidamente entre asignaturas relacionadas.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FontAwesomeIcon icon={faTrash} className="text-red-500 flex-shrink-0 mt-0.5" />
                          <span><strong>Restablecer:</strong> Usa el botón "Restablecer" en la barra inferior si quieres empezar de nuevo.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Contenido: Tomar Ramos */}
              {selectedTab === 'planning' && (
                <div>
                  {/* Sección: ¿Qué son los Créditos SCT? */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <FontAwesomeIcon icon={faClock} className="text-indigo-500" />
                      ¿Qué son los Créditos SCT?
                    </h4>
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-indigo-50'}`}>
                      <p className="text-sm mb-3">
                        <strong>SCT (Sistema de Créditos Transferibles)</strong> es una medida estandarizada de la carga académica de una asignatura.
                      </p>
                      <div className="space-y-2 text-sm">
                        <p><strong>1 Crédito SCT = 27-30 horas de trabajo total</strong></p>
                        <p className="ml-4 text-xs opacity-80">
                          Incluye: clases presenciales, laboratorios, estudio individual, tareas, trabajos y preparación de evaluaciones.
                        </p>
                      </div>
                      <div className={`mt-3 p-3 rounded-lg ${darkMode ? 'bg-gray-600/50' : 'bg-white/50'}`}>
                        <p className="text-sm font-semibold mb-2">Ejemplos de carga de trabajo:</p>
                        <ul className="text-xs space-y-1 ml-4 list-disc opacity-90">
                          <li><strong>Asignatura de 5 SCT:</strong> ~135-150 horas totales en el semestre</li>
                          <li><strong>Asignatura de 10 SCT:</strong> ~270-300 horas totales en el semestre</li>
                          <li><strong>Semestre de 30 SCT:</strong> ~810-900 horas totales de dedicación</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sección: Cómo Elegir Tus Ramos */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <FontAwesomeIcon icon={faRoute} className="text-blue-500" />
                      Cómo Elegir Tus Ramos
                    </h4>
                    <div className="space-y-3">
                      
                      {/* Paso 1: Carga académica */}
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-blue-50'}`}>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">1</span>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold mb-2">Planifica tu Carga Académica</h5>
                            <p className="text-sm opacity-90 mb-2">
                              <strong>Carga normal:</strong> 25-30 créditos SCT por semestre
                            </p>
                            <ul className="text-xs space-y-1 ml-4 list-disc opacity-80">
                              <li>30 SCT = Carga completa (tiempo completo dedicado a estudios)</li>
                              <li>25-28 SCT = Carga normal recomendada</li>
                              <li>20-24 SCT = Carga reducida (si trabajas o tienes otras responsabilidades)</li>
                              <li>35+ SCT = Sobrecarga (requiere autorización y alto rendimiento previo)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Paso 2: Prerrequisitos */}
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-green-50'}`}>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">2</span>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold mb-2">Respeta los Prerrequisitos</h5>
                            <p className="text-sm opacity-90 mb-2">
                              Los prerrequisitos existen por una razón: necesitas los conocimientos previos.
                            </p>
                            <ul className="text-xs space-y-1 ml-4 list-disc opacity-80">
                              <li>Revisa SIEMPRE los prerrequisitos antes de inscribir un ramo</li>
                              <li>No puedes tomar un ramo sin haber aprobado sus prerrequisitos</li>
                              <li>Si repruebas un ramo, deberás volverlo a tomar antes de avanzar</li>
                              <li>Algunos ramos tienen múltiples prerrequisitos en cadena</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Paso 3: Balance */}
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-yellow-50'}`}>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">3</span>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold mb-2">Balancea Dificultad y Tiempo</h5>
                            <p className="text-sm opacity-90 mb-2">
                              No todas las asignaturas tienen la misma dificultad, incluso con los mismos créditos.
                            </p>
                            <ul className="text-xs space-y-1 ml-4 list-disc opacity-80">
                              <li>Mezcla ramos difíciles con otros más llevaderos</li>
                              <li>Considera la carga de laboratorios y trabajos grupales</li>
                              <li>Evita tomar demasiados ramos con proyectos grandes simultáneamente</li>
                              <li>Ten en cuenta tus horarios de clases y tiempos de traslado</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Paso 4: Progresión */}
                      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-purple-50'}`}>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">4</span>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold mb-2">Mantente al Día con la Malla</h5>
                            <p className="text-sm opacity-90 mb-2">
                              Seguir el avance sugerido te ayuda a no atrasarte y mantener un ritmo constante.
                            </p>
                            <ul className="text-xs space-y-1 ml-4 list-disc opacity-80">
                              <li>Intenta seguir la secuencia de semestres recomendada</li>
                              <li>Prioriza ramos que son prerrequisitos de muchos otros</li>
                              <li>Si te atrasas, enfócate primero en desbloquear cadenas críticas</li>
                              <li>Consulta con tu asesor académico para hacer un plan personalizado</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Sección: Estrategias de Planificación */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <FontAwesomeIcon icon={faCalendarAlt} className="text-teal-500" />
                      Estrategias de Planificación
                    </h4>
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-teal-50'}`}>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-semibold mb-1 flex items-center gap-2">
                            <FontAwesomeIcon icon={faChartLine} className="text-teal-500" /> Planificación a Largo Plazo
                          </p>
                          <p className="text-xs opacity-80 ml-6">
                            Usa el <strong>"Plan de Graduación"</strong> para visualizar cuántos semestres te quedan y organizar tu avance.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1 flex items-center gap-2">
                            <FontAwesomeIcon icon={faBullseye} className="text-blue-500" /> Prioriza Ramos Críticos
                          </p>
                          <p className="text-xs opacity-80 ml-6">
                            Identifica ramos que son prerrequisitos de muchos otros y priorízalos en tu planificación.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1 flex items-center gap-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" /> Marca tu Progreso Real
                          </p>
                          <p className="text-xs opacity-80 ml-6">
                            Actualiza regularmente tus asignaturas aprobadas para que el plan de graduación sea preciso.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1 flex items-center gap-2">
                            <FontAwesomeIcon icon={faSync} className="text-purple-500" /> Ajusta Según Resultados
                          </p>
                          <p className="text-xs opacity-80 ml-6">
                            Si repruebas un ramo, reorganiza tu plan considerando que deberás retomarlo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sección: Consejos */}
                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <FontAwesomeIcon icon={faStar} className="text-orange-500" />
                      Consejos Importantes
                    </h4>
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-orange-50'}`}>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <FontAwesomeIcon icon={faExclamationCircle} className="text-orange-500 flex-shrink-0 mt-0.5" />
                          <span><strong>Disponibilidad:</strong> La disponibilidad de ramos puede variar cada semestre. Consulta con tu escuela.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FontAwesomeIcon icon={faUserTie} className="text-blue-500 flex-shrink-0 mt-0.5" />
                          <span><strong>Asesoría Académica:</strong> El plan de graduación es una referencia; siempre consulta con tu asesor académico.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FontAwesomeIcon icon={faLock} className="text-red-500 flex-shrink-0 mt-0.5" />
                          <span><strong>Cadenas de Prerrequisitos:</strong> Algunos ramos bloquean el avance de múltiples asignaturas. Identifícalos y priorízalos.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FontAwesomeIcon icon={faHourglassHalf} className="text-teal-500 flex-shrink-0 mt-0.5" />
                          <span><strong>Tiempo de Dedicación:</strong> Considera que 30 SCT equivalen a un trabajo de tiempo completo (~45 horas semanales).</span>
                        </li>
                      </ul>
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
