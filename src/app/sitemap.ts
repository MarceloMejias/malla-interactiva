import { MetadataRoute } from 'next';
import { careersByCampus } from '@/data/carreras';

export const dynamic = 'force-static';

// Obtener todos los IDs de carreras automáticamente desde el índice
const allCareerIds = [
  ...careersByCampus.cc.map(c => c.Link),
  ...careersByCampus.vm.map(c => c.Link),
  ...careersByCampus.vc.map(c => c.Link),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://marcelomejias.github.io/malla-interactiva';
  const lastModified = new Date();

  // Página principal
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // Agregar todas las páginas de carreras
  allCareerIds.forEach((careerId) => {
    routes.push({
      url: `${baseUrl}/${careerId}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  return routes;
}
