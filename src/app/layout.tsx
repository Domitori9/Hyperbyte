import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto } from 'next/font/google';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Интернет-магазин",
  description: "Магазин компьютерной техники",
};


const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'], // Укажите необходимые начертания
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${roboto.className} min-h-screen flex flex-col`}> 
        
        <main className="flex-1">  
          {children}
        </main>
        
        
      </body>
    </html>
  );
}
