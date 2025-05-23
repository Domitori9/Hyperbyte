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

      <h1 className="text-blue-400 text-5xl text-center m-4">Новинки!</h1>
      <p className="text-gray-400 text-center m-4">
        Здесь вы можете найти самые свежие новинки!
      </p>

      <section>
        <Slider />
      </section>

      <section className="py-10">
        <h2 className="text-4xl text-white text-center mb-8">Категорії</h2>
        <div className="grid grid-cols-4 gap-4 px-4 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <div
              key={cat.name}
              className={`bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center text-white hover:bg-gray-700 transition ${index === 0 ? "row-span-2 col-span-1" : "h-40"}`}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                width={80}
                height={80}
                className="mb-2"
              />
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* <section>
        <h1 className="flex justify-center text-5xl text-blue-400">Наши продукты</h1>
      </section> */}

      <Footer />
    </>
  );
}
