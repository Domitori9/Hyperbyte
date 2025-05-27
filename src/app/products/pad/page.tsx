import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: 'HyperByte | Коврики',
};

const products = [
  { id: 1, name: "Коврик Razer", price: 800, imageUrl: "/images/1.jpg" },
  { id: 2, name: "Коврик Logitech", price: 600, imageUrl: "/images/1.jpg" },
  { id: 3, name: "Коврик HyperX", price: 700, imageUrl: "/images/1.jpg" },
  { id: 4, name: "Коврик Razer", price: 800, imageUrl: "/images/1.jpg" },
  { id: 5, name: "Коврик Logitech", price: 600, imageUrl: "/images/1.jpg" },
  { id: 6, name: "Коврик HyperX", price: 700, imageUrl: "/images/1.jpg" },
];

export default function PadPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-extrabold text-center text-white mb-12 drop-shadow-lg tracking-wide">
            Коврики
          </h1>
          {/* Фильтры */}
          <div className="flex flex-wrap gap-4 justify-center items-end mb-12 p-8 rounded-2xl bg-gray-800/90 shadow-xl border border-blue-400/30 backdrop-blur-md animate-fade-in">
            {/* Производитель */}
            <div className="flex flex-col">
              <label className="text-white mb-1 font-semibold" htmlFor="brand">Производитель</label>
              <select id="brand" className="rounded-xl px-4 py-2 bg-gray-700 text-white border border-blue-400/30 focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200 hover:border-blue-400">
                <option>Все</option>
                <option>Razer</option>
                <option>Logitech</option>
                <option>HyperX</option>
              </select>
            </div>
            {/* Цена */}
            <div className="flex flex-col">
              <label className="text-white mb-1 font-semibold">Цена, ₴</label>
              <div className="flex gap-2">
                <input type="number" placeholder="от" min="0" className="w-20 rounded-xl px-3 py-2 bg-gray-700 text-white border border-blue-400/30 focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200 hover:border-blue-400 hide-arrows" />
                <input type="number" placeholder="до" min="0" className="w-20 rounded-xl px-3 py-2 bg-gray-700 text-white border border-blue-400/30 focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200 hover:border-blue-400 hide-arrows" />
              </div>
            </div>
            {/* Размер */}
            <div className="flex flex-col">
              <label className="text-white mb-1 font-semibold" htmlFor="size">Размер</label>
              <select id="size" className="rounded-xl px-4 py-2 bg-gray-700 text-white border border-blue-400/30 focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200 hover:border-blue-400">
                <option>Все</option>
                <option>Маленький</option>
                <option>Средний</option>
                <option>Большой</option>
              </select>
            </div>
            {/* Сбросить */}
            <button className="ml-2 mt-6 px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-md shadow-blue-900/10 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 hover:bg-blue-700 focus:outline-none">
              Сбросить
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} Product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
