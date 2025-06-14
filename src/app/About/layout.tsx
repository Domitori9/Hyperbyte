import Footer from "@/components/Footer/Footer";
import type { Metadata } from "next";
import Headers from "@/components/Header/Header";



export const metadata: Metadata = {
  title: "HyperByte | О нас",
  description: "Магазин компьютерной техники",
};



export default function AboutLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  
  return (  
    <>  
    <Headers />
        <main>  
          {children}
        </main>
    <Footer />
    </>
  );
}
