import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
};

export default function ProductCard({ Product }: { Product: Product }) {
  return (
    <div className="flex flex-col border border-blue-900 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 rounded-2xl shadow-2xl overflow-hidden max-w-[320px] mx-auto transition-transform hover:-translate-y-2 hover:shadow-blue-900/60 duration-200">
      {Product.imageUrl && (
        <div className="w-full h-48 bg-gradient-to-br from-blue-950 to-blue-800 flex items-center justify-center overflow-hidden">
          <Image
            src={Product.imageUrl}
            alt={Product.name}
            width={320}
            height={192}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            unoptimized
          />
        </div>
      )}
      <div className="px-7 pt-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-blue-200 mb-1 text-center w-full truncate">{Product.name}</h2>
        <p className="text-blue-400 mb-3 text-center text-sm opacity-80">Лучший выбор для вас!</p>
        <div className="mb-5">
          <span className="text-3xl font-extrabold text-blue-300 drop-shadow">{Product.price}₴</span>
        </div>
      </div>
      <div className="flex px-7 pb-7">
        <a
          aria-describedby="tier-company"
          className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white bg-gradient-to-r from-blue-700 to-blue-500 border-none rounded-full transition hover:from-blue-800 hover:to-blue-600 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 text-base font-semibold shadow-lg"
          href="#"
        >
          Купить
        </a>
      </div>
    </div>
  );
}
