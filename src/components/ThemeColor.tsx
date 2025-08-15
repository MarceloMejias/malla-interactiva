'use client';

import { useEffect } from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';

export default function ThemeColor() {
  const darkMode = useDarkMode();

  useEffect(() => {
    // Actualizar meta theme-color para Safari
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', darkMode ? '#111827' : '#f9fafb');
    } else {
      // Crear meta tag si no existe
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = darkMode ? '#111827' : '#f9fafb';
      document.head.appendChild(meta);
    }

    // Actualizar meta apple-mobile-web-app-status-bar-style para Safari iOS
    const metaStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (metaStatusBar) {
      metaStatusBar.setAttribute('content', darkMode ? 'black-translucent' : 'default');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'apple-mobile-web-app-status-bar-style';
      meta.content = darkMode ? 'black-translucent' : 'default';
      document.head.appendChild(meta);
    }
  }, [darkMode]);

  return null;
}
