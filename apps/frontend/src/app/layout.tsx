import type { Metadata } from 'next';
import { Montserrat, Crimson_Pro } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Concordia Commerce',
  description: 'E-Commerce Dashboard',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.variable} ${crimsonPro.variable} font-body`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
