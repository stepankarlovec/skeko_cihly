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
  title: 'Použité cihly Pardubice | Radost z poctivé práce',
  description: 'Postavte si na zahradě něco s duší. Naše staré cihly v Pardubicích mají příběh. Zažijte ten pocit zadostiučinění z tvrdé práce a vlastního díla.',
  keywords: 'použité cihly Pardubice, staré cihly, tvoření na zahradě, zahradní gril, cihly s duší, poctivá práce',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="cs" className={`${oswald.variable} ${robotoSlab.variable}`}>
      <body className="font-sans text-stone-800 bg-stone-100" suppressHydrationWarning>{children}</body>
    </html>
  );
}
