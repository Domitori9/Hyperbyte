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
              {/* <a href="#categories" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 text-white text-xl font-bold shadow-lg shadow-sky-900/20 opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-300 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-200">
                Смотреть категории
              </a> */}
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
      
      
      {/* Секция Контакты */}
      <section id="contacts" className="bg-slate-900 py-16 px-4 mt-12 rounded-3xl shadow-xl max-w-4xl mx-auto mb-16 animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-400 mb-8 text-center drop-shadow">Контакты</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-lg text-gray-200">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
            <a href="mailto:info@hyperbyte.ru" className="hover:text-sky-300 transition">info@hyperbyte.ru</a>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.7 1.06l1.1 2.2a2 2 0 001.7 1.06h2.28a2 2 0 012 2v2.28a2 2 0 01-1.06 1.7l-2.2 1.1a2 2 0 00-1.06 1.7V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
            <a href="tel:+79991234567" className="hover:text-sky-300 transition">+7 (999) 123-45-67</a>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span>г. Харьков, пр. Победа, д. 46</span>
          </div>
        </div>
      </section>
      {/* Конец секции Контакты */}

      <Footer />
    </>
  );
}
