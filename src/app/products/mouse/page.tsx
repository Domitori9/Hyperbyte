import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: 'HyperByte | Мышки',
};

const products = [
  { id: 1, name: "Мышка A4Tech", price: 350, imageUrl: "/images/1.jpg" },
  { id: 2, name: "Logitech G102", price: 800, imageUrl: "/images/1.jpg" },
  { id: 3, name: "Razer DeathAdder", price: 1600, imageUrl: "/images/1.jpg" },
  { id: 4, name: "Мышка A4Tech", price: 350, imageUrl: "/images/1.jpg" },
  { id: 5, name: "Logitech G102", price: 800, imageUrl: "/images/1.jpg" },
  { id: 6, name: "Razer DeathAdder", price: 1600, imageUrl: "/images/1.jpg" },
  { id: 7, name: "Мышка A4Tech", price: 350, imageUrl: "/images/1.jpg" },
  { id: 8, name: "Logitech G102", price: 800, imageUrl: "/images/1.jpg" },
  { id: 9, name: "Razer DeathAdder", price: 1600, imageUrl: "/images/1.jpg" },
  { id: 10, name: "Мышка A4Tech", price: 350, imageUrl: "/images/1.jpg" },
  { id: 11, name: "Logitech G102", price: 800, imageUrl: "/images/1.jpg" },
  { id: 12, name: "Razer DeathAdder", price: 1600, imageUrl: "/images/1.jpg" },
];

export default function MousePage() {
  return (
    <>
      <Header />
      <main>
      <section className="relative min-h-screen pt-8 pb-16 overflow-hidden" style={{ background: 'radial-gradient(circle at 70% 30%, #3b82f6 0%, #1e293b 70%)' }}>
        {/* Decorative blurred blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400 opacity-30 rounded-full filter blur-3xl z-0" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 opacity-20 rounded-full filter blur-2xl z-0" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-400 opacity-10 rounded-full filter blur-2xl z-0" style={{ transform: 'translate(-50%, -50%)' }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg tracking-wide">
            Мышки
          </h1>
          {/* Фильтры */}
          <div className="flex flex-wrap gap-4 justify-center items-end mb-10 p-6 rounded-2xl bg-gradient-to-r from-blue-900/60 via-blue-800/40 to-cyan-900/30 shadow-xl border border-cyan-400/20 backdrop-blur-md animate-fade-in">
            {/* Производитель */}
            <div className="flex flex-col">
              <label className="text-blue-100 mb-1 font-semibold" htmlFor="brand">Производитель</label>
              <select id="brand" className="rounded-xl px-4 py-2 bg-blue-900/60 text-white border border-cyan-400/20 focus:ring-2 focus:ring-cyan-400 outline-none transition-all duration-200 hover:border-cyan-300">
                <option>Все</option>
                <option>A4Tech</option>
                <option>Logitech</option>
                <option>Razer</option>
              </select>
            </div>
            {/* Цена */}
            <div className="flex flex-col">
              <label className="text-blue-100 mb-1 font-semibold">Цена, ₴</label>
              <div className="flex gap-2">
                <input type="number" placeholder="от" min="0" className="w-20 rounded-xl px-3 py-2 bg-blue-900/60 text-white border border-cyan-400/20 focus:ring-2 focus:ring-cyan-400 outline-none transition-all duration-200 hover:border-cyan-300 hide-arrows" />
                <input type="number" placeholder="до" min="0" className="w-20 rounded-xl px-3 py-2 bg-blue-900/60 text-white border border-cyan-400/20 focus:ring-2 focus:ring-cyan-400 outline-none transition-all duration-200 hover:border-cyan-300 hide-arrows" />
              </div>
            </div>
            {/* Тип сенсора */}
            <div className="flex flex-col">
              <label className="text-blue-100 mb-1 font-semibold" htmlFor="sensor">Тип сенсора</label>
              <select id="sensor" className="rounded-xl px-4 py-2 bg-blue-900/60 text-white border border-cyan-400/20 focus:ring-2 focus:ring-cyan-400 outline-none transition-all duration-200 hover:border-cyan-300">
                <option>Все</option>
                <option>Оптический</option>
                <option>Лазерный</option>
              </select>
            </div>
            {/* Сбросить */}
            <button className="ml-2 mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/70 via-blue-500/60 to-blue-900/60 text-white font-semibold shadow-md shadow-blue-900/10 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 hover:bg-cyan-400/40 focus:outline-none">
              Сбросить
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} Product={product} />
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}