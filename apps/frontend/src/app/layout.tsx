import type { Metadata } from 'next';
import { Montserrat, Crimson_Pro } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { ThemeProvider } from './theme-provider';
import { AppLayout } from '@/shared/layout';

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
    <html lang="en">
      <body
        className={`${montserrat.variable} ${crimsonPro.variable} font-body`}
      >
        <Providers>
          <ThemeProvider>
            <AppLayout>{children}</AppLayout>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
