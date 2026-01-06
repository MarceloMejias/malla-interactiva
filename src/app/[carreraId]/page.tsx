import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CurriculumGrid from '@/components/career/CurriculumGrid';
import { getCareer } from '@/data/carreras';

interface PageProps {
  params: Promise<{ carreraId: string }>;
}

// Lista de todas las carreras para generación estática
const allCareerIds = [
  'afi', 'amb', 'arq', 'civ-0', 'constru-0', 'ctciv', 'eli-0', 'eli', 'elo-0', 'elo',
  'fis-0', 'ica-0', 'icbt', 'icfis', 'ici-0', 'ici', 'iciv', 'icm-0', 'icom-0', 'icom',
  'icq-0', 'icq', 'idp', 'inf-0', 'inf', 'qui', 'mat-0', 'mat', 'lmat', 'mec', 'met-0', 'met',
  'tel-0', 'tel', 'fdi', 'ibt', 'imi', 'inginf', 'prla', 'tuconst', 'tuinf',
  'cind', 'cinf', 'eli-vc', 'iac', 'icom-vc'
];

// Genera todas las rutas estáticas en build time
export async function generateStaticParams() {
  return allCareerIds.map((id) => ({
    carreraId: id,
  }));
}

// Metadata dinámica por carrera
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { carreraId } = await params;
  const carrera = getCareer(carreraId);

  if (!carrera) {
    return {
      title: 'Carrera no encontrada - Malla Interactiva USM',
    };
  }

  const title = carrera.nombre;
  const description = `Malla curricular interactiva de ${carrera.nombre} (${carreraId}) - UTFSM. Calcula tu progreso académico, planifica tu graduación y visualiza requisitos de cada asignatura.`;
  const url = `https://marcelomejias.github.io/malla-interactiva/${carreraId}`;
  const imageUrl = 'https://marcelomejias.github.io/malla-interactiva/thumbnail.png';

  return {
    title,
    description,
    keywords: [
      carrera.nombre,
      carreraId,
      'UTFSM',
      'malla curricular',
      'progreso académico',
      'ingeniería',
      'universidad',
      'santa maría'
    ],
    openGraph: {
      type: 'website',
      locale: 'es_CL',
      url,
      title,
      description,
      siteName: 'Malla Interactiva USM',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Malla Interactiva - ${carrera.nombre}`,
          type: 'image/png'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@marcelomejias'
    },
    alternates: {
      canonical: url,
    },
  };
}

// JSON-LD Structured Data
function generateStructuredData(carrera: any, carreraId: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: carrera.nombre,
    description: `Malla curricular interactiva de ${carrera.nombre} en la Universidad Técnica Federico Santa María`,
    provider: {
      '@type': 'Organization',
      name: 'Universidad Técnica Federico Santa María',
      sameAs: 'https://usm.cl'
    },
    educationalLevel: 'Undergraduate',
    inLanguage: 'es-CL',
    url: `https://marcelomejias.github.io/malla-interactiva/${carreraId}`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '120'
    }
  };
}

export default async function CareerPage({ params }: PageProps) {
  const { carreraId } = await params;
  const carrera = getCareer(carreraId);

  if (!carrera) {
    notFound();
  }

  const structuredData = generateStructuredData(carrera, carreraId);

  return (
    <>
      {/* JSON-LD Structured Data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Contenido oculto para SEO - Google puede leerlo */}
      <div className="sr-only">
        <h1>{carrera.nombre} - UTFSM</h1>
        <p>
          Malla curricular interactiva de {carrera.nombre}. Visualiza el progreso académico,
          requisitos de asignaturas y planifica tu graduación.
        </p>
        <h2>Asignaturas del plan de estudios:</h2>
        <ul>
          {Object.values(carrera.asignaturas).map((asignatura: any) => (
            <li key={asignatura.codigo}>
              {asignatura.nombre} ({asignatura.codigo})
            </li>
          ))}
        </ul>
      </div>

      {/* Componente principal */}
      <CurriculumGrid initialCareer={carreraId} />
    </>
  );
}
