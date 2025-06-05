import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Slider from "./../components/Slider";
import CategorySection from "@/components/CategorySection";
import PopularProducts from "@/components/PopularProducts";

export const metadata = {
  title: 'HyperByte | Главная',
};

export default function Home() {
  return (
    <>
      {/* Шапка сайта */}
      <Header />
      <div className="relative z-10 min-h-screen pb-12">
        {/* Главный промо-блок */}
        <section className="relative flex flex-col xl:flex-row items-center justify-between w-full max-w-[1440px] mx-auto px-2 sm:px-8 py-12 gap-12 xl:gap-24 min-h-[60vh] xl:min-h-[100vh]">
          {/* Левая часть — текстовый блок */}
          <div className="flex-1 flex flex-col items-start justify-center w-full xl:w-1/2 animate-fade-in-up">
            <h1 className="text-sky-400 text-4xl text-center sm:text-left sm:text-6xl xl:text-7xl font-extrabold mb-8 drop-shadow-2xl leading-tight">
              HyperByte — твой мир техники
            </h1>
            <p className="text-justify text-lg  sm:text-2xl mb-10 leading-relaxed">
              Добро пожаловать в HyperByte! Здесь вы найдёте лучшие новинки техники и аксессуаров для геймеров и профессионалов. Откройте для себя топовые устройства, которые подчеркнут ваш стиль и повысят продуктивность.
              <br className="hidden md:block" />
              <span className="text-sky-400 font-semibold block mt-2">Погрузись в мир современных технологий!</span>
            </p>
            {/* Кнопки действий */}
            <div className="flex flex-wrap gap-5">
              <a href="/about" className="inline-block px-10 py-4 rounded-full border-2 border-sky-400 text-sky-300 text-xl font-bold shadow-md hover:bg-sky-900/20 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-200">
                О нас
              </a>
              <a href="#categories" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 text-white text-xl font-bold shadow-lg shadow-sky-900/20 opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-300 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-200">
                Смотреть категории
              </a>
            </div>
          </div>
          {/* Правая часть — слайдер товаров */}
          <div className="flex-1 w-full xl:w-1/2 max-w-2xl animate-fade-in-up delay-100 mt-12 xl:mt-0 flex items-center justify-center">
            <div className="w-full">
              <Slider />
            </div>
          </div>
        </section>
        {/* Секция категорий товаров */}
        {/* <CategorySection /> */}
      </div>

      {/* Популярные товары */}
      <PopularProducts />

      {/* Секция Контакты */}
      <section id="contacts" className="bg-slate-900  py-16 px-4 mt-12 rounded-3xl shadow-xl max-w-4xl mx-auto mb-16 animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-400 mb-8 text-center drop-shadow">Контакты</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-lg text-gray-200">
          {/* Почта */}
          <div className="flex items-center gap-3">
            <span className="text-cyan-300"> Почта: </span>
            <a href="mailto:info@hyperbyte.ru" className="hover:text-sky-300 transition">info@hyperbyte.ru</a>
          </div>
          {/* Телефон */}
          <div className="flex items-center gap-3">
            <span className="text-cyan-300"> Телефон: </span>
            <a href="tel:+79991234567" className="hover:text-sky-300 transition">+38 (068) 912 95 19</a>
          </div>
          {/* Адрес */}
          <div className="flex items-center gap-3">
           <span className="text-cyan-300"> Адрес: </span>
            <span>г. Харьков, пр. Победа, д. 46</span>
          </div>
        </div>
      </section>
      {/* Конец секции Контакты */}

      {/* Подвал сайта */}
      <Footer />
    </>
  );
}
