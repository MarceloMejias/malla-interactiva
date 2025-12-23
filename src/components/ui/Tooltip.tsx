'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  delay?: number;
}

export default function Tooltip({ content, children, delay = 5000 }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detectar si es un dispositivo táctil
    const checkTouchDevice = () => {
      const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
      const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(hasCoarsePointer || hasTouchSupport);
    };
    
    checkTouchDevice();
  }, []);

  useEffect(() => {
    // Detectar modo oscuro
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // Observar cambios en el modo oscuro
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    // No mostrar tooltip en dispositivos táctiles
    if (isTouchDevice) return;
    
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.bottom
      });
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'inline-block', width: '100%' }}
      >
        {children}
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'fixed',
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: 'translate(-50%, 0.5rem)',
              zIndex: 9999,
              pointerEvents: 'none'
            }}
            className="tooltip-container"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl text-gray-900 dark:text-white text-sm px-3 py-2 rounded-lg shadow-xl border border-gray-200/50 dark:border-white/20 max-w-xs">
              {content}
            </div>
            <div 
              className="tooltip-arrow"
              style={{
                position: 'absolute',
                left: '50%',
                top: '-0.25rem',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '0.375rem solid transparent',
                borderRight: '0.375rem solid transparent',
                borderBottom: `0.375rem solid ${isDark ? 'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.9)'}`
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
