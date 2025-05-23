import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export const metadata = {
  title: 'HyperByte | Клавиатуры',
};


export default function Keyboards() {
  return (
    <>
    <Header />
    <main> 
      <h1 className="text-blue-400 text-3xl text-center m-4">Клавиатуры</h1>
    </main>     
    <Footer />
    </>
  );
}