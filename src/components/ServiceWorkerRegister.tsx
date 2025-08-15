'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/'
          });
          
          console.log('[SW] Service Worker registered successfully:', registration);
          
          // Escuchar actualizaciones del service worker
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('[SW] New service worker available');
                  // Aquí podrías mostrar una notificación al usuario para recargar
                }
              });
            }
          });
          
          // Limpiar cache periódicamente
          if (registration.active) {
            registration.active.postMessage({ type: 'CLEAN_CACHE' });
          }
          
        } catch (error) {
          console.error('[SW] Service Worker registration failed:', error);
        }
      };
      
      // Registrar cuando la página esté cargada
      if (document.readyState === 'complete') {
        registerSW();
      } else {
        window.addEventListener('load', registerSW);
      }
      
      return () => {
        window.removeEventListener('load', registerSW);
      };
    }
  }, []);

  return null;
}
