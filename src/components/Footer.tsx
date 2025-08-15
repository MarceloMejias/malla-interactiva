import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <>
      {/* Estilos CSS para la animación */}
      <style jsx>{`
        @keyframes fadeInFromWhite {
          0% { 
            opacity: 0;
            background: linear-gradient(
              to bottom, 
              ${darkMode ? '#ffffff' : '#ffffff'} 0%, 
              ${darkMode ? '#374151' : '#6b7280'} 100%
            );
            transform: translateY(10px);
          }
          100% { 
            opacity: 1;
            background: transparent;
            transform: translateY(0);
          }
        }
        .animate-fadeInFromWhite {
          animation: fadeInFromWhite 0.2s ease-out forwards;
        }
      `}</style>
      
      <div className={`mt-12 text-center text-sm animate-fadeInFromWhite ${
        darkMode ? 'text-gray-400' : 'text-gray-500'
      }`}>
        <div className="flex items-center justify-center gap-6">
          <span className="animate-fadeInFromWhite" style={{ animationDelay: '0.05s' }}>
            Actualizado: Agosto 2025
          </span>
          
          <a
            href="https://github.com/MarceloMejias/malla-interactiva"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 transition-colors duration-300 animate-fadeInFromWhite ${
              darkMode 
                ? 'text-gray-400 hover:text-white' 
                : 'text-gray-500 hover:text-gray-900'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            <FontAwesomeIcon icon={faGithub} className="text-sm" />
            <span>GitHub</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
          </a>
        </div>
      </div>
    </>
  );
}
