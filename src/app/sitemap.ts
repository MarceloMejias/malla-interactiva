import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const allCareerIds = [
  'afi', 'amb', 'arq', 'civ-0', 'constru-0', 'ctciv', 'eli-0', 'eli', 'elo-0', 'elo',
  'fis-0', 'ica-0', 'icbt', 'icfis', 'ici-0', 'ici', 'iciv', 'icm-0', 'icom-0', 'icom',
  'icq-0', 'icq', 'idp', 'inf-0', 'inf', 'qui', 'mat-0', 'mat', 'lmat', 'mec', 'met-0', 'met',
  'tel-0', 'tel', 'fdi', 'ibt', 'imi', 'inginf', 'prla', 'tuconst', 'tuinf',
  'cind', 'cinf', 'eli-vc', 'iac', 'icom-vc'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://marcelomejias.github.io/malla-interactiva';
  const lastModified = new Date();

  // Página principal
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // Agregar todas las páginas de carreras
  allCareerIds.forEach((careerId) => {
    routes.push({
      url: `${baseUrl}/${careerId}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  return routes;
}
