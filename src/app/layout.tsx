import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Link from 'next/link';
import { homePath, ticketsPath } from '@/paths';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Road to Next',
  description: 'App developed whilst learning the core components of Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-gray-200`}
      >
        <nav className="flex gap-4 items-center justify-between py-2.5 px-5 border-b sticky">
          <div>
            <Link href={homePath()} className="text-lg font-bold">
              Home
            </Link>
          </div>
          <div>
            <Link href={ticketsPath()} className="text-sm underline">
              Tickets
            </Link>
          </div>
        </nav>
        <main
          className="min-h-screen flex-1
        overflow-y-auto overflow-x-hidden py-24 px-8
        bg-secondary/20
        flex flex-col"
        >
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
