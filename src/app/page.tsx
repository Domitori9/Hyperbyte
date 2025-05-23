import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Slider from "./../components/Slider";
import Image from "next/image";

export const metadata = {
  title: 'HyperByte | Главная',
};

export default function Home() {
  const categories = [
    { name: "Системники", image: "/pc.png" },
    { name: "Мишки", image: "/category/mouse.png" },
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
      <section className="relative min-h-screen overflow-hidden" style={{ background: 'radial-gradient(circle at 70% 30%, #1e293b 0%, #0f172a 80%)' }}>
        {/* Decorative blurred blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-900 opacity-40 rounded-full filter blur-3xl z-0" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-900 opacity-30 rounded-full filter blur-2xl z-0" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-900 opacity-20 rounded-full filter blur-2xl z-0" style={{ transform: 'translate(-50%, -50%)' }} />
        <div className="relative z-10">
          <h1 className="text-blue-400 text-5xl text-center m-12">Новинки!</h1>
          <p className="text-gray-400 text-center m-4">
            Здесь вы можете найти самые свежие новинки!
          </p>
          <section>
            <Slider />
          </section>
          <section className="py-16">
            <h2 className="text-4xl text-white text-center mb-24 drop-shadow-lg tracking-wide ">Категорії</h2>
            <div className="flex flex-col md:flex-row gap-8 px-4 max-w-6xl mx-auto items-stretch justify-center">
              {/* Большой блок "Системники" слева */}
              <div className="flex-shrink-0 flex flex-col justify-center md:w-1/3">
                <div className="relative group bg-white/10 backdrop-blur-md border border-blue-400/30 rounded-3xl px-8 py-16 flex flex-col items-center justify-center text-white shadow-2xl transition-all duration-300 ease-out h-full min-h-[340px] md:min-h-[420px] hover:scale-105 hover:shadow-blue-400/30 hover:z-10 hover:border-blue-400/60 animate-fade-in">
                  <span className="font-extrabold text-3xl sm:text-4xl tracking-tight text-center mb-8 text-white drop-shadow-lg group-hover:text-blue-200 transition-all duration-300">
                    {categories[0].name}
                  </span>
                  <p className="text-base text-blue-100/80 text-center leading-relaxed mb-6 max-w-[95%]">
                    Лучшие предложения категории «{categories[0].name}» — только на HyperByte!
                  </p>
                  <button
                    className="mt-2 px-8 py-3 rounded-full bg-white/20 text-blue-100 font-semibold shadow-md shadow-blue-900/10 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 hover:bg-blue-400/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    Подробнее
                  </button>
                  <div className="absolute inset-0 pointer-events-none rounded-3xl border-2 border-white/10 group-hover:border-blue-300/30 transition-all duration-300" />
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl z-0" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl z-0" />
                </div>
              </div>
              {/* Центрированные два ряда по 3 карточки справа */}
              <div className="flex flex-col justify-center items-center flex-1">
                <div className="flex flex-col gap-8 items-center justify-center">
                  <div className="flex gap-8 justify-center">
                    {categories.slice(1, 4).map((cat, index) => (
                      <div
                        key={cat.name}
                        className="relative group bg-white/10 backdrop-blur-md border border-blue-400/20 rounded-3xl px-6 py-10 flex flex-col items-center justify-center text-white shadow-xl transition-all duration-300 ease-out w-64 max-w-full hover:scale-105 hover:shadow-blue-400/30 hover:z-10 hover:border-blue-400/60 animate-fade-in"
                        style={{ animationDelay: `${index * 80}ms` }}
                      >
                        <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-center mb-6 text-white drop-shadow-lg group-hover:text-blue-200 transition-all duration-300">
                          {cat.name}
                        </span>
                        <p className="text-sm text-blue-100/80 text-center leading-relaxed mb-4 max-w-[90%]">
                          Лучшие предложения категории «{cat.name}» — только на HyperByte!
                        </p>
                        <button
                          className="mt-2 px-6 py-2 rounded-full bg-white/20 text-blue-100 font-semibold shadow-md shadow-blue-900/10 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 hover:bg-blue-400/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                        >
                          Подробнее
                        </button>
                        <div className="absolute inset-0 pointer-events-none rounded-3xl border-2 border-white/10 group-hover:border-blue-300/30 transition-all duration-300" />
                        <div className="absolute -top-8 -right-8 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl z-0" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-400/10 rounded-full blur-xl z-0" />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-8 justify-center">
                    {categories.slice(4, 7).map((cat, index) => (
                      <div
                        key={cat.name}
                        className="relative group bg-white/10 backdrop-blur-md border border-blue-400/20 rounded-3xl px-6 py-10 flex flex-col items-center justify-center text-white shadow-xl transition-all duration-300 ease-out w-64 max-w-full hover:scale-105 hover:shadow-blue-400/30 hover:z-10 hover:border-blue-400/60 animate-fade-in"
                        style={{ animationDelay: `${index * 80}ms` }}
                      >
                        <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-center mb-6 text-white drop-shadow-lg group-hover:text-blue-200 transition-all duration-300">
                          {cat.name}
                        </span>
                        <p className="text-sm text-blue-100/80 text-center leading-relaxed mb-4 max-w-[90%]">
                          Лучшие предложения категории «{cat.name}» — только на HyperByte!
                        </p>
                        <button
                          className="mt-2 px-6 py-2 rounded-full bg-white/20 text-blue-100 font-semibold shadow-md shadow-blue-900/10 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 hover:bg-blue-400/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                        >
                          Подробнее
                        </button>
                        <div className="absolute inset-0 pointer-events-none rounded-3xl border-2 border-white/10 group-hover:border-blue-300/30 transition-all duration-300" />
                        <div className="absolute -top-8 -right-8 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl z-0" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-400/10 rounded-full blur-xl z-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* <section>
        <h1 className="flex justify-center text-5xl text-blue-400">Наши продукты</h1>
      </section> */}
      <Footer />
    </>
  );
}
