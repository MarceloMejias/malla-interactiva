import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BodyWrapper from "@/components/utils/BodyWrapper";
import ServiceWorkerRegister from "@/components/utils/ServiceWorkerRegister";
import AppleSplashScreens from "@/components/utils/AppleSplashScreens";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ['500', '600', '700', '800'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ['500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Malla Interactiva USM - Calculadora de Progreso Académico",
    template: "%s | Malla Interactiva USM"
  },
  description: "Calculadora interactiva de progreso académico para todas las carreras de la Universidad Técnica Federico Santa María (UTFSM). Visualiza tu malla curricular, planifica tu graduación, gestiona requisitos y calcula tu avance académico con sistema drag & drop. Más de 40 carreras disponibles.",
  manifest: "site.webmanifest",
  keywords: [
    "UTFSM",
    "Universidad Técnica Federico Santa María",
    "malla curricular",
    "calculadora académica",
    "progreso académico",
    "ingeniería",
    "carreras universitarias",
    "plan de estudios",
    "requisitos de asignaturas",
    "graduación",
    "Casa Central",
    "Viña del Mar",
    "Vitacura",
    "San Joaquín",
    "Concepción",
    "informática",
    "civil",
    "industrial",
    "mecánica",
    "electrónica"
  ],
  authors: [{ name: "Marcelo Mejías", url: "https://github.com/marcelomejias" }],
  creator: "Marcelo Mejías",
  publisher: "UTFSM Community",
  
  // Open Graph (Facebook, Instagram, WhatsApp, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://marcelomejias.github.io/malla-interactiva/',
    title: 'Malla Interactiva USM - Calculadora de Progreso Académico UTFSM',
    description: 'Herramienta interactiva para visualizar y calcular tu progreso en carreras de la UTFSM. Planifica tu graduación, gestiona requisitos y calcula tu avance académico. Más de 40 carreras de Casa Central, Viña del Mar, Vitacura y más campus.',
    siteName: 'Malla Interactiva USM',
    images: [
      {
        url: 'https://marcelomejias.github.io/malla-interactiva/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Malla Interactiva USM - Calculadora de progreso académico para carreras UTFSM',
        type: 'image/png'
      }
    ]
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Malla Interactiva USM - Calculadora Académica UTFSM',
    description: 'Calcula tu progreso académico, visualiza requisitos y planifica tu graduación en carreras UTFSM. Drag & drop, plan de graduación y más de 40 carreras.',
    images: ['https://marcelomejias.github.io/malla-interactiva/thumbnail.png'],
    creator: '@marcelomejias'
  },
  
  icons: {
    icon: [
      { url: '/malla-interactiva/favicon.svg', type: 'image/svg+xml' },
      { url: '/malla-interactiva/icon.png', type: 'image/png', sizes: '192x192' },
      { url: '/malla-interactiva/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' }
    ],
    shortcut: '/malla-interactiva/favicon.svg',
    apple: [
      { url: '/malla-interactiva/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Malla USM',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-navbutton-color': '#f9fafb',
    'msapplication-TileColor': '#f9fafb',
    'msapplication-tap-highlight': 'no',
    'viewport-fit': 'cover',
    // Meta tags adicionales para compatibilidad
    'og:image': 'https://marcelomejias.github.io/malla-interactiva/thumbnail.png',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/png',
    'twitter:image': 'https://marcelomejias.github.io/malla-interactiva/thumbnail.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="overflow-x-hidden">
      <BodyWrapper className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden max-w-full`}>
        <ServiceWorkerRegister />
        <AppleSplashScreens />
        {children}
      </BodyWrapper>
    </html>
  );
}
