import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeColor from "@/components/ThemeColor";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import AppleSplashScreens from "@/components/AppleSplashScreens";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Malla Interactiva",
  description: "Calculadora de progreso académico para la carrera de Ingeniería en Informática de la Universidad Técnica Federico Santa María",
  manifest: "site.webmanifest",
  keywords: ["UTFSM", "malla curricular", "ingeniería", "progreso académico", "universidad", "calculadora"],
  authors: [{ name: "Marcelo Mejías" }],
  creator: "Marcelo Mejías",
  publisher: "UTFSM Community",
  
  // Open Graph (Facebook, Instagram, WhatsApp, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://marcelomejias.github.io/malla-interactiva/',
    title: 'Malla Interactiva USM',
    description: 'Calculadora de progreso académico para carreras de la Universidad Técnica Federico Santa María. Drag & drop, plan de graduación y más de 20 carreras disponibles.',
    siteName: 'Malla Interactiva USM',
    images: [
      {
        url: 'https://marcelomejias.github.io/malla-interactiva/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Malla Interactiva USM - Calculadora de progreso académico',
        type: 'image/png'
      }
    ]
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Malla Interactiva UTFSM',
    description: 'Calculadora de progreso académico para carreras UTFSM. Drag & drop, plan de graduación y más de 20 carreras.',
    images: ['https://marcelomejias.github.io/malla-interactiva/thumbnail.png'],
    creator: '@marcelomejias'
  },
  
  icons: {
    icon: [
      { url: 'favicon.svg', type: 'image/svg+xml' },
      { url: 'icon.png', type: 'image/png', sizes: '192x192' },
      { url: 'android-chrome-512x512.png', type: 'image/png', sizes: '512x512' }
    ],
    shortcut: 'favicon.svg',
    apple: [
      { url: 'apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  other: {
    'theme-color': '#f9fafb',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden max-w-full`}
      >
        <ThemeColor />
        <ServiceWorkerRegister />
        <AppleSplashScreens />
        {children}
      </body>
    </html>
  );
}
