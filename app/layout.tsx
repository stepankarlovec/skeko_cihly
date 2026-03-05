import type {Metadata} from 'next';
import { Oswald, Roboto_Slab } from 'next/font/google';
import './globals.css'; // Global styles

const oswald = Oswald({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Levné staré cihly Pardubice | Materiál s duší pro vaše projekty',
  description: 'Hledáte poctivé staré cihly v Pardubicích? Nabízíme kvalitní očištěné cihly z bouraček. Ideální na zídky, ploty, vinné sklepy i zahradní grily. Levné a dostupné ihned.',
  keywords: 'staré cihly Pardubice, levné cihly, bouračkové cihly, retro cihly, lícové zdivo, cihly bazar, Pardubický kraj, Skeko cihly',
  authors: [{ name: 'Skeko.cz' }],
  openGraph: {
    title: 'Levné staré cihly Pardubice – Postavte si sen vlastníma rukama',
    description: 'Poctivý materiál, který má historii. Staré pálené cihly připravené k odběru v Pardubicích. Skvělá cena, okamžitá dostupnost.',
    url: 'https://skeko.cz/levne-cihly-pardubice',
    siteName: 'Cihly s duší Pardubice',
    locale: 'cs_CZ',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://skeko.cz/levne-cihly-pardubice',
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="cs" className={`${oswald.variable} ${robotoSlab.variable}`}>
      <body className="font-sans text-stone-800 bg-stone-100" suppressHydrationWarning>{children}</body>
    </html>
  );
}
