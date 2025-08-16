import Head from 'next/head';
import { generateOGImageUrl } from '@/hooks/useOGImage';

interface DynamicOGProps {
  title?: string;
  subtitle?: string;
  carrera?: string;
  theme?: 'default' | 'engineering' | 'success';
  description?: string;
}

export default function DynamicOG({
  title = 'Malla Interactiva UTFSM',
  subtitle = 'Calculadora de progreso académico',
  carrera,
  theme = 'engineering',
  description = 'Calculadora de progreso académico para carreras de la Universidad Técnica Federico Santa María'
}: DynamicOGProps) {
  const ogImageUrl = generateOGImageUrl({ title, subtitle, carrera, theme });
  
  const fullTitle = carrera ? `${title} - ${carrera}` : title;
  const fullDescription = carrera 
    ? `${description} para la carrera de ${carrera}` 
    : description;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://marcelomejias.github.io/malla-interactiva/" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://marcelomejias.github.io/malla-interactiva/" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={ogImageUrl} />
    </Head>
  );
}
