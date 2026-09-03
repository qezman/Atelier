import type { Metadata } from 'next';
import { Newsreader, Public_Sans } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Atelier — Architecture & Interior Design Studio',
  description: 'Spaces that hold memory. An architecture and interior design studio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${publicSans.variable}`}>
      <body className="font-body antialiased bg-paper text-ink min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
