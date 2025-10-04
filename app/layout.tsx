import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Centre Ennour - Bien-être & Santé | Ikram Yassine",
  description: "Découvrez le Centre Ennour, votre espace dédié au bien-être, à la beauté et à la santé à Beni Mellal. Soins personnalisés par Ikram Yassine : kinésithérapie, nutrition, amincissement, épilation définitive et soins anti-âge.",
  keywords: "bien-être, santé, kinésithérapie, nutrition, amincissement, épilation définitive, soins anti-âge, Beni Mellal, Ikram Yassine, Centre Ennour, massage, soins esthétiques",
  authors: [{ name: "Centre Ennour" }],
  creator: "Centre Ennour",
  publisher: "Centre Ennour",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://centre-ennour.ma'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Centre Ennour - Bien-être & Santé",
    description: "Votre espace dédié au bien-être, à la beauté et à la santé à Beni Mellal. Soins personnalisés par Ikram Yassine.",
    url: 'https://centre-ennour.ma',
    siteName: 'Centre Ennour',
    locale: 'fr_MA',
    type: 'website',
    images: [
      {
        url: '/media/center-nour-logo 1.png',
        width: 1200,
        height: 630,
        alt: 'Centre Ennour - Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Centre Ennour - Bien-être & Santé",
    description: "Votre espace dédié au bien-être, à la beauté et à la santé à Beni Mellal.",
    images: ['/media/center-nour-logo 1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-sec`} 
      >
        {children}
      </body>
    </html>
  );
}
