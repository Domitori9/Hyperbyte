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
      <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 min-h-screen pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4">
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
      <Footer />
    </>
  );
}