import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Slider from "./../components/Slider";
import Image from "next/image";
import Favorites from "@/components/Favorites";

export const metadata = {
  title: 'HyperByte | Главная',
};

export default function Home() {
  const categories = [
    { name: "Системники", image: "/pc.png" },
    { name: "Мышки", image: "/category/mouse.png" },
    { name: "Клавиатуры", image: "/keyboard.png" },
    { name: "Мониторы", image: "/monitor.png" },
    { name: "Наушники", image: "/headphones.png" },
    { name: "Коврики", image: "/pad.png" },
    { name: "Ноутбуки", image: "/laptop.png" },
    // { name: "Аксессуары", image: "/accessories.png" },
  ];

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
        <section className="py-16">
          <h2 className="text-4xl text-white text-center mb-24 drop-shadow-lg tracking-wide">Категорії</h2>
          <div className="flex flex-col md:flex-row gap-8 px-4 max-w-6xl mx-auto items-stretch justify-center">
            {/* Левая кнопка: Большой блок 'Системники' */}
            <div className="flex-shrink-0 flex flex-col justify-center md:w-1/3">
              <a
                href="/products/pc"
                className="relative group bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-sky-400/30 rounded-3xl px-8 py-16 flex flex-col items-center justify-center text-white shadow-2xl transition-all duration-300 ease-out h-full min-h-[340px] md:min-h-[420px] hover:scale-105 hover:shadow-sky-400/20 hover:z-10 hover:border-sky-400/60 animate-fade-in cursor-pointer backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="font-extrabold text-3xl sm:text-4xl tracking-tight text-center mb-8 text-white drop-shadow-lg group-hover:text-sky-200 transition-all duration-300">
                  {categories[0].name}
                </span>
                <p className="text-base text-sky-100/80 text-center leading-relaxed mb-6 max-w-[95%]">
                  Лучшие предложения категории «{categories[0].name}» — только на HyperByte!
                </p>
                <button
                  className="mt-2 px-8 py-3 rounded-full bg-sky-500 text-white font-semibold shadow-md shadow-sky-900/20 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-200"
                >
                  Подробнее
                </button>
                <div className="absolute inset-0 pointer-events-none rounded-3xl border-2 border-white/10 group-hover:border-sky-300/30 transition-all duration-300" />
              </a>
            </div>
            {/* Правая часть: Центрированные два ряда по 3 карточки */}
            <div className="flex flex-col justify-center items-center flex-1">
              <div className="flex flex-col gap-8 items-center justify-center">
                <div className="flex gap-8 justify-center">
                  {categories.slice(1, 4).map((cat, index) => {
                    let href = '#';
                    if (cat.name === 'Мышки') href = '/products/mouse';
                    else if (cat.name === 'Клавиатуры') href = '/products/keyboards';
                    else if (cat.name === 'Мониторы') href = '/products/monitors';
                    return (
                      <a
                        key={cat.name}
                        href={href}
                        className="relative group bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-sky-400/30 rounded-3xl px-6 py-10 flex flex-col items-center justify-center text-white shadow-xl transition-all duration-300 ease-out w-64 max-w-full hover:scale-105 hover:shadow-sky-400/20 hover:z-10 hover:border-sky-400/60 animate-fade-in cursor-pointer backdrop-blur-sm"
                        style={{ animationDelay: `${index * 80}ms` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-center mb-6 text-white drop-shadow-lg group-hover:text-sky-200 transition-all duration-300">
                          {cat.name}
                        </span>
                        <p className="text-sm text-sky-100/80 text-center leading-relaxed mb-4 max-w-[90%]">
                          Лучшие предложения категории «{cat.name}» — только на HyperByte!
                        </p>
                        <button
                          className="mt-2 px-6 py-2 rounded-full bg-sky-500 text-white font-semibold shadow-md shadow-sky-900/20 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-200"
                        >
                          Подробнее
                        </button>
                        <div className="absolute inset-0 pointer-events-none rounded-3xl border-2 border-white/10 group-hover:border-sky-300/30 transition-all duration-300" />
                      </a>
                    );
                  })}
                </div>
                <div className="flex gap-8 justify-center">
                  {categories.slice(4, 7).map((cat, index) => {
                    let href = '#';
                    if (cat.name === 'Наушники') href = '/products/headphones';
                    else if (cat.name === 'Коврики') href = '/products/pad';
                    else if (cat.name === 'Ноутбуки') href = '/products/laptop';
                    return (
                      <a
                        key={cat.name}
                        href={href}
                        className="relative group bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-sky-400/30 rounded-3xl px-6 py-10 flex flex-col items-center justify-center text-white shadow-xl transition-all duration-300 ease-out w-64 max-w-full hover:scale-105 hover:shadow-sky-400/20 hover:z-10 hover:border-sky-400/60 animate-fade-in cursor-pointer backdrop-blur-sm"
                        style={{ animationDelay: `${index * 80}ms` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-center mb-6 text-white drop-shadow-lg group-hover:text-sky-200 transition-all duration-300">
                          {cat.name}
                        </span>
                        <p className="text-sm text-sky-100/80 text-center leading-relaxed mb-4 max-w-[90%]">
                          Лучшие предложения категории «{cat.name}» — только на HyperByte!
                        </p>
                        <button
                          className="mt-2 px-6 py-2 rounded-full bg-sky-500 text-white font-semibold shadow-md shadow-sky-900/20 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-200"
                        >
                          Подробнее
                        </button>
                        <div className="absolute inset-0 pointer-events-none rounded-3xl border-2 border-white/10 group-hover:border-sky-300/30 transition-all duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
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
