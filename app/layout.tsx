import Navbar from '@/components/Header/navbar';
import Loading from '@/components/loading';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Library',
  description: 'Easily manage your books',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex min-h-screen flex-col pt-24 px-12 md:px-24">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}
