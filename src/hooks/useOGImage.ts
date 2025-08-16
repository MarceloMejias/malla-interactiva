import { useEffect, useState } from 'react';

interface OGImageOptions {
  title?: string;
  subtitle?: string;
  carrera?: string;
  theme?: 'default' | 'engineering' | 'success';
}

const BASE_URL = 'https://marcelomejias.github.io/malla-interactiva';

export function useOGImage(options: OGImageOptions = {}) {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams();
    
    if (options.title) {
      params.set('title', options.title);
    }
    
    if (options.subtitle) {
      params.set('subtitle', options.subtitle);
    }
    
    if (options.carrera) {
      params.set('carrera', options.carrera);
    }
    
    if (options.theme) {
      params.set('theme', options.theme);
    }

    const url = `${BASE_URL}/api/og${params.toString() ? `?${params.toString()}` : ''}`;
    setImageUrl(url);
  }, [options.title, options.subtitle, options.carrera, options.theme]);

  return imageUrl;
}

// Función auxiliar para generar URLs de OG dinámicamente
export function generateOGImageUrl(options: OGImageOptions = {}): string {
  const params = new URLSearchParams();
  
  if (options.title) {
    params.set('title', options.title);
  }
  
  if (options.subtitle) {
    params.set('subtitle', options.subtitle);
  }
  
  if (options.carrera) {
    params.set('carrera', options.carrera);
  }
  
  if (options.theme) {
    params.set('theme', options.theme);
  }

  return `${BASE_URL}/api/og${params.toString() ? `?${params.toString()}` : ''}`;
}

// Ejemplos de uso predefinidos
export const OGImagePresets = {
  default: () => generateOGImageUrl({
    title: 'Malla Interactiva UTFSM',
    subtitle: 'Calculadora de progreso académico',
    theme: 'engineering'
  }),
  
  success: (carrera: string) => generateOGImageUrl({
    title: '¡Plan Completado!',
    subtitle: 'Felicitaciones por tu graduación',
    carrera,
    theme: 'success'
  }),
  
  carrera: (carrera: string) => generateOGImageUrl({
    title: 'Malla Interactiva',
    subtitle: 'Planifica tu carrera académica',
    carrera,
    theme: 'engineering'
  })
};
