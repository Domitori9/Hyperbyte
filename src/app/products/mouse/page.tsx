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