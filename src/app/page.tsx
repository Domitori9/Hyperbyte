import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Slider from "./../components/Slider";
import Image from "next/image";
import CategorySection from "@/components/CategorySection";
import PopularProducts from "@/components/PopularProducts";

export const metadata = {
  title: 'HyperByte | Главная',
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative z-10 min-h-screen pb-12">
        {/* <PopularProducts /> */}
        <section className="relative flex flex-col md:flex-row items-center justify-center pt-24 pb-16 gap-16 md:gap-32 min-h-screen w-full">
          {/* Левая часть — текст */}
          <div className="flex-1 flex flex-col items-start justify-center max-w-2xl animate-fade-in-up">
            <h1 className="text-sky-400 text-6xl sm:text-7xl font-extrabold mb-10 drop-shadow-2xl leading-tight">
              HyperByte — твой мир техники
            </h1>
            <p className="text-gray-200 text-2xl mb-12 leading-relaxed max-w-2xl">
              Добро пожаловать в HyperByte! Здесь вы найдёте лучшие новинки техники и аксессуаров для геймеров и профессионалов. Откройте для себя топовые устройства, которые подчеркнут ваш стиль и повысят продуктивность. <br className="hidden md:block" />
              <span className="text-sky-400 font-semibold">Погрузись в мир современных технологий!</span>
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#categories" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 text-white text-xl font-bold shadow-lg shadow-sky-900/20 opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-300 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-200">
                Смотреть категории
              </a>
              <a href="/about" className="inline-block px-10 py-4 rounded-full border-2 border-sky-400 text-sky-300 text-xl font-bold shadow-md hover:bg-sky-900/20 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-200">
                О нас
              </a>
            </div>
          </div>
          {/* Правая часть — слайдер */}
          <div className="flex-1 w-full max-w-3xl animate-fade-in-up delay-100">
            <Slider />
          </div>
        </section>
        {/* Категории */}
          <CategorySection />
      </div>

<PopularProducts />
      
      <Footer />
    </>
  );
}
