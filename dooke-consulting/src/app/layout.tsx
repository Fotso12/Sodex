import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'DOOKE CONSULTING | Innovation Numerique - Developpement Logiciel, Web & Mobile',
  description:
    "Dooke Consulting est la division numerique du groupe Dooke Corporation. Specialisee dans le developpement logiciel, web et mobile.",
  openGraph: {
    title: 'DOOKE CONSULTING | Innovation Numerique',
    description: 'Division numerique du groupe Dooke Corporation. Logiciel, Web, Mobile, Maintenance.',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
