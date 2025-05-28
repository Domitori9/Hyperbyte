import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Logitech G Pro X Superlight",
    price: "4 999₴",
    image: "/images/1.jpg",
  },
  {
    id: 2,
    title: "Hator HURRICANE",
    price: "2 499₴",
    image: "/images/2.jpg",
  },
  {
    id: 3,
    title: "Razer Viper Ultimate",
    price: "5 299₴",
    image: "/images/3.jpg",
  },
  {
    id: 4,
    title: "SteelSeries Apex Pro",
    price: "7 999₴",
    image: "/images/1.jpg",
  },
];

export default function PopularProducts() {
  return (
    <section className="w-full py-20 flex flex-col items-center justify-center bg-gradient-to-br from-gray-950/80 via-gray-900/70 to-sky-950/80 relative">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 mb-14 tracking-tight text-center drop-shadow-xl uppercase">
        Популярные товары
      </h2>
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative flex flex-col items-center justify-between bg-white/5 border-0 rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-sky-400/40"
          >
            {/* Абстрактный фон */}
            <div className="absolute inset-0 z-0">
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-sky-400/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-500/20 rounded-full blur-xl" />
              <div className="absolute left-1/2 top-1/2 w-28 h-28 bg-cyan-400/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
            </div>
            {/* Картинка */}
            <div className="w-full aspect-[4/3] flex items-center justify-center relative z-10">
              <Image
                src={product.image}
                alt={product.title}
                width={320}
                height={240}
                className="object-cover w-full h-full rounded-t-3xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Информация */}
            <div className="flex-1 flex flex-col items-center justify-between p-6 w-full relative z-10">
              <span className="font-extrabold text-lg text-sky-200 mb-2 text-center tracking-wider uppercase">
                {product.title}
              </span>
              <span className="text-sky-100/90 text-base mb-4">
                Цена: <span className="font-bold text-sky-300">{product.price}</span>
              </span>
              <button className="mt-2 px-7 py-2 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg shadow-blue-900/10 hover:from-cyan-400 hover:to-sky-500 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-200">
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
