import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/styles/globals.css";
import { Roboto } from 'next/font/google';
import MenuBarMobile from "@/components/MenuBarMobile/MenuBarMobile";
{/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Інтернет-магазин",
  description: "Магазин комп'ютерної техніки",
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
        {/* CartProvider удалён, теперь используется только zustand */}
        <main className="flex-1">
          {children}
          <MenuBarMobile />
        </main>
      </body>
    </html>
  );
}
