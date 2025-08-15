import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeColor from "@/components/ThemeColor";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

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
  manifest: "/site.webmanifest",
  keywords: ["UTFSM", "malla curricular", "ingeniería", "progreso académico", "universidad", "calculadora"],
  authors: [{ name: "Marcelo Mejías" }],
  creator: "Marcelo Mejías",
  publisher: "UTFSM Community",
  
  // Open Graph (Facebook, Instagram, WhatsApp, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://marcelomejias.github.io/malla-interactiva/',
    title: 'Malla Interactiva UTFSM',
    description: 'Calculadora de progreso académico para carreras de la Universidad Técnica Federico Santa María. Drag & drop, plan de graduación y más de 20 carreras disponibles.',
    siteName: 'Malla Interactiva UTFSM',
    images: [
      {
        url: 'https://marcelomejias.github.io/malla-interactiva/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Malla Interactiva UTFSM - Calculadora de progreso académico'
      }
    ]
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Malla Interactiva UTFSM',
    description: 'Calculadora de progreso académico para carreras UTFSM. Drag & drop, plan de graduación y más de 20 carreras.',
    images: ['https://marcelomejias.github.io/malla-interactiva/og-image.svg'],
    creator: '@marcelomejias'
  },
  
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' }
    ],
    shortcut: '/favicon.svg',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ]
  },
  other: {
    'theme-color': '#f9fafb',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'msapplication-navbutton-color': '#f9fafb',
    'msapplication-TileColor': '#f9fafb',
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
        {children}
      </body>
    </html>
  );
}
