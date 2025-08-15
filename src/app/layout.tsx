import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeColor from "@/components/ThemeColor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Malla Interactiva - Ingeniería en Informática UTFSM",
  description: "Calculadora de progreso académico para la carrera de Ingeniería en Informática de la Universidad Técnica Federico Santa María",
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
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden max-w-full`}
      >
        <ThemeColor />
        {children}
      </body>
    </html>
  );
}
