import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Slider from "@/components/ui/Slider";
import PopularProducts from "@/components/products/PopularProducts";
import NewProducts from "@/components/products/NewProducts";
import ComingSoonProducts from "@/components/products/ComingSoonProducts";

export const metadata = {
  title: 'HyperByte | Главная',
};

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="w-full">
        <Slider />
      </section>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Welcome Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              HyperByte — твой мир техники
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Добро пожаловать в HyperByte! Здесь вы найдёте лучшие новинки техники и аксессуаров для геймеров и профессионалов.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/about" 
                className="px-6 py-3 rounded-full border-2 border-sky-400 text-sky-400 hover:bg-sky-400/10 transition-colors"
              >
                О нас
              </a>
              {/* <a 
                href="#categories" 
                className="px-6 py-3 rounded-full  bg-sky-500 text-white hover:bg-sky-600 transition-colors"
              >
                Смотреть категории
              </a> */}
            </div>
          </div>
        </section>

        {/* New Products */}
        <section>
          <NewProducts />
        </section>

        {/* Popular Products */}
        <section >
          <PopularProducts />
        </section>

        {/* Coming Soon Products */}
        <section >
          <ComingSoonProducts />
        </section>

        {/* Contacts Section */}
        <section id="contacts" className="py-12 sm:py-16">
          <div className="bg-slate-900 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Контакты
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-gray-300">
              <a 
                href="mailto:info@hyperbyte.ru" 
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <span className="text-sky-400">Почта:</span>
                info@hyperbyte.ru
              </a>
              <a 
                href="tel:+380689129519" 
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <span className="text-sky-400">Телефон:</span>
                +38 (068) 912 95 19
              </a>
              <div className="flex items-center gap-2">
                <span className="text-sky-400">Адрес:</span>
                г. Харьков, пр. Победа, д. 46
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
