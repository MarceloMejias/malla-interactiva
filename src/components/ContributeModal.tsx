'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHandsHelping, faCode, faBug, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faGithub as faGithubBrand } from '@fortawesome/free-brands-svg-icons';

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
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center">
                        <FontAwesomeIcon icon={faBug} className="text-white text-sm" />
                      </div>
                      <h5 className="font-semibold text-base">Reportar Errores</h5>
                    </div>
                    <p className="text-sm opacity-80 mb-3">
                      ¿Encontraste un problema? ¿Información incorrecta? ¿Un ramo que falta?
                    </p>
                    <a
                      href="https://github.com/MarceloMejias/malla-interactiva/discussions/new?category=bugs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-action-button red"
                    >
                      <FontAwesomeIcon icon={faBug} />
                      Reportar Problema
                    </a>
                  </div>

                  {/* Sugerir mejoras */}
                  <div className={`modal-card ${darkMode ? 'dark' : 'yellow-light'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center">
                        <FontAwesomeIcon icon={faLightbulb} className="text-white text-sm" />
                      </div>
                      <h5 className="font-semibold text-base">Sugerir Mejoras</h5>
                    </div>
                    <p className="text-sm opacity-80 mb-3">
                      ¿Tienes una idea para mejorar la aplicación? ¿Una nueva funcionalidad?
                    </p>
                    <a
                      href="https://github.com/MarceloMejias/malla-interactiva/discussions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-action-button yellow"
                    >
                      <FontAwesomeIcon icon={faLightbulb} />
                      Compartir Idea
                    </a>
                  </div>

                  {/* Contribuir código */}
                  <div className={`modal-card ${darkMode ? 'dark' : 'blue-light'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                        <FontAwesomeIcon icon={faCode} className="text-white text-sm" />
                      </div>
                      <h5 className="font-semibold text-base">Contribuir Código</h5>
                    </div>
                    <p className="text-sm opacity-80 mb-3">
                      ¿Eres desarrollador? Puedes contribuir directamente al código del proyecto.
                    </p>
                    <a
                      href="https://github.com/MarceloMejias/malla-interactiva"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-action-button blue"
                    >
                      <FontAwesomeIcon icon={faGithubBrand} />
                      Ver en GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Stack tecnológico */}
              <div className="modal-section">
                <h4 className="modal-section-title">Stack Tecnológico</h4>
                <div className={`modal-card ${darkMode ? 'dark' : 'light'}`}>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">⚛️</span>
                      <span>Next.js 16</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">📘</span>
                      <span>TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">🎨</span>
                      <span>Tailwind CSS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">🎭</span>
                      <span>Framer Motion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-500">⚡</span>
                      <span>Turbopack</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">🐍</span>
                      <span>Python (scripts)</span>
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
