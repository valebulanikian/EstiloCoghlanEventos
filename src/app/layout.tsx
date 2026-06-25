import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estilo Coghlan | Salón de Eventos en Coghlan, CABA",
  description:
    "Estilo Coghlan es un salón de eventos en el barrio de Coghlan, CABA. Un espacio único para casamientos, cumpleaños de 15, eventos sociales y corporativos.",
  keywords: [
    "Estilo Coghlan",
    "salón de eventos",
    "salón de fiestas",
    "Coghlan",
    "CABA",
    "casamientos",
    "cumpleaños de 15",
    "eventos corporativos",
    "eventos sociales",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}