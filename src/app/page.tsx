import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Slider from "./../components/Slider";
import Image from "next/image";
import Favorites from "@/components/Favorites";
import CategorySection from "@/components/CategorySection";

export const metadata = {
  title: 'HyperByte | Главная',
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative z-10">
        <h1 className="text-blue-400 text-5xl text-center m-12">Новинки!</h1>
        <p className="text-gray-400 text-center m-4">
          Здесь вы можете найти самые свежие новинки!
        </p>
        <section>
          <Slider />
        </section>
        {/* Категории */}
        <CategorySection />
        <section className="max-w-7xl mx-auto px-4 mb-16">
          <h2 className="text-3xl text-blue-300 font-bold mb-6 mt-8 text-left drop-shadow-lg tracking-wide flex items-center gap-3">
            <svg className="w-8 h-8 text-cyan-400 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            Избранное
          </h2>
          <div className="relative">
            <Favorites isLoggedIn={true} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
