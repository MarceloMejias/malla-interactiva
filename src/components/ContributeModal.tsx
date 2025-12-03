'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHandsHelping, faCode, faBug, faLightbulb, faBolt, faPalette, faMobile, faSave, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faGithub as faGithubBrand, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

interface ContributeModalProps {
  show: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export default function ContributeModal({ show, onClose, darkMode }: ContributeModalProps) {
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
            <div className="modal-header green">
              <div className="modal-header-content">
                <div className="modal-header-title">
                  <div className="modal-icon-container">
                    <FontAwesomeIcon icon={faHandsHelping} className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="modal-title">Contribuir al Proyecto</h3>
                    <p className="modal-subtitle">Ayuda a mejorar la malla interactiva</p>
                  </div>
                </div>
                <div style={{ flex: 1 }}></div>
                <button
                  onClick={onClose}
                  className="modal-close-button"
                  aria-label="Cerrar"
                >
                  <FontAwesomeIcon icon={faTimes} className="modal-close-icon" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className={`modal-content ${darkMode ? 'dark' : 'light'}`}>
              {/* Introducción */}
              <div className="mb-6">
                <p className="text-base mb-4">
                  Este proyecto es de código abierto y está en constante evolución. 
                </p>
              </div>

              {/* Formas de contribuir */}
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faHandsHelping} className="text-green-500" />
                  ¿Cómo puedes contribuir?
                </h4>
                
                <div className="space-y-4">
                  {/* Reportar errores */}
                  <div className={`modal-card ${darkMode ? 'dark' : 'red-light'}`}>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={faBug} className="text-white text-sm" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-base mb-1">Reportar Errores</h5>
                          <p className="text-sm opacity-80">
                            ¿Encontraste un problema? ¿Información incorrecta? ¿Un ramo que falta?
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://github.com/MarceloMejias/malla-interactiva/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-action-button red flex-shrink-0"
                      >
                        <FontAwesomeIcon icon={faBug} />
                        Reportar Problema
                      </a>
                    </div>
                  </div>

                  {/* Sugerir mejoras */}
                  <div className={`modal-card ${darkMode ? 'dark' : 'yellow-light'}`}>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={faLightbulb} className="text-white text-sm" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-base mb-1">Sugerir Mejoras</h5>
                          <p className="text-sm opacity-80">
                            ¿Tienes una idea para mejorar la aplicación? ¿Una nueva funcionalidad?
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://github.com/MarceloMejias/malla-interactiva/discussions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-action-button yellow flex-shrink-0"
                      >
                        <FontAwesomeIcon icon={faLightbulb} />
                        Compartir Idea
                      </a>
                    </div>
                  </div>

                  {/* Contribuir código */}
                  <div className={`modal-card ${darkMode ? 'dark' : 'blue-light'}`}>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={faCode} className="text-white text-sm" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-base mb-1">Contribuir Código</h5>
                          <p className="text-sm opacity-80">
                            ¿Eres desarrollador? Puedes contribuir directamente al código del proyecto.
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://github.com/MarceloMejias/malla-interactiva"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-action-button blue flex-shrink-0"
                      >
                        <FontAwesomeIcon icon={faGithubBrand} />
                        Ver en GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stack tecnológico */}
              <div className="modal-section">
                <h4 className="modal-section-title">
                  <FontAwesomeIcon icon={faCode} className="text-blue-500" />
                  Stack Tecnológico
                </h4>
                <div className={`modal-card ${darkMode ? 'dark' : 'light'} p-4`}>
                  <div className="space-y-4">
                    {/* Frontend Framework */}
                    <div>
                      <h5 className="text-xs font-semibold opacity-60 mb-2 uppercase tracking-wide">Framework & Runtime</h5>
                      <div className="flex flex-wrap gap-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black dark:bg-white/10 border border-gray-200 dark:border-gray-700">
                          <FontAwesomeIcon icon={faReact} className="text-white dark:text-gray-300" />
                          <span className="text-sm font-medium">Next.js 16</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/10 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-800">
                          <FontAwesomeIcon icon={faReact} className="text-blue-600 dark:text-blue-400" />
                          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">React 19</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-600/10 dark:bg-orange-500/20 border border-orange-200 dark:border-orange-800">
                          <FontAwesomeIcon icon={faBolt} className="text-orange-600 dark:text-orange-400" />
                          <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Turbopack</span>
                        </div>
                      </div>
                    </div>

                    {/* Languages & Styling */}
                    <div>
                      <h5 className="text-xs font-semibold opacity-60 mb-2 uppercase tracking-wide">Lenguajes & Estilos</h5>
                      <div className="flex flex-wrap gap-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/10 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-800">
                          <FontAwesomeIcon icon={faCode} className="text-blue-600 dark:text-blue-400" />
                          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">TypeScript</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-600/10 dark:bg-cyan-500/20 border border-cyan-200 dark:border-cyan-800">
                          <FontAwesomeIcon icon={faPalette} className="text-cyan-600 dark:text-cyan-400" />
                          <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">Tailwind CSS 4</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-600/10 dark:bg-green-500/20 border border-green-200 dark:border-green-800">
                          <FontAwesomeIcon icon={faPython} className="text-green-600 dark:text-green-400" />
                          <span className="text-sm font-medium text-green-700 dark:text-green-300">Python</span>
                        </div>
                      </div>
                    </div>

                    {/* Animation & Icons */}
                    <div>
                      <h5 className="text-xs font-semibold opacity-60 mb-2 uppercase tracking-wide">UI & Animaciones</h5>
                      <div className="flex flex-wrap gap-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-600/10 dark:bg-purple-500/20 border border-purple-200 dark:border-purple-800">
                          <FontAwesomeIcon icon={faBolt} className="text-purple-600 dark:text-purple-400" />
                          <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Framer Motion</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-600/10 dark:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-800">
                          <FontAwesomeIcon icon={faLightbulb} className="text-indigo-600 dark:text-indigo-400" />
                          <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Font Awesome</span>
                        </div>
                      </div>
                    </div>

                    {/* Data & PWA */}
                    <div>
                      <h5 className="text-xs font-semibold opacity-60 mb-2 uppercase tracking-wide">Características</h5>
                      <div className="flex flex-wrap gap-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-600/10 dark:bg-gray-500/20 border border-gray-200 dark:border-gray-700">
                          <FontAwesomeIcon icon={faMobile} className="text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium">PWA</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-600/10 dark:bg-gray-500/20 border border-gray-200 dark:border-gray-700">
                          <FontAwesomeIcon icon={faSave} className="text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium">Local Storage</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-600/10 dark:bg-gray-500/20 border border-gray-200 dark:border-gray-700">
                          <FontAwesomeIcon icon={faMoon} className="text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium">Modo Oscuro</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nota final */}
              <div className={`modal-card ${darkMode ? 'green-dark' : 'green-light'}`}>
                <p className="text-sm text-center">
                  <strong>¡Gracias por tu interés!</strong> Toda contribución, por pequeña que sea, hace una gran diferencia. 💚
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
