import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
};

export default function ProductCard({ Product }: { Product: Product }) {
  return (
    <div className="flex flex-col border border-blue-900 bg-gradient-to-br from-blue-950 via-gray-900 to-gray-950 rounded-2xl shadow-xl overflow-hidden max-w-[290px] min-w-[250px] mx-auto transition-transform hover:-translate-y-1 hover:scale-105 hover:shadow-blue-900/80 duration-200">
      <div className="relative w-full h-44 bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center overflow-hidden">
        {Product.imageUrl ? (
          <Image
            src={Product.imageUrl}
            alt={Product.name}
            width={240}
            height={176}
            className="object-contain w-full h-full drop-shadow"
            style={{ objectFit: "cover" }}
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-blue-400 text-5xl">?</div>
        )}
        {/* <span className="absolute top-3 left-3 bg-blue-800/80 text-blue-100 text-xs px-2 py-0.5 rounded shadow font-mono tracking-wider">
          #{Product.id}
        </span> */}
      </div>
      <div className="px-6 pt-4 flex flex-col gap-1 flex-1">
        <h2
          className="text-lg font-bold text-blue-100 truncate w-full mb-0.5 drop-shadow"
          title={Product.name}
        >
          {Product.name}
        </h2>
        <span className="text-sm text-blue-300 mb-1 opacity-80">Геймерская мышь</span>
        <div className="flex items-center gap-2 text-sm text-blue-300 mb-1">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse"></span>
            В наличии
          </span>
        </div>
        <span className="text-blue-200 mb-2 font-extrabold text-2xl mt-1 drop-shadow">
          {Product.price}₴
        </span>
      </div>
      <div className="flex flex-row gap-3 px-6 pb-5 mt-auto">
        <button className="flex-1 py-2 text-base text-white bg-gradient-to-r from-blue-700 to-blue-500 rounded-lg hover:from-blue-800 hover:to-blue-600 transition font-bold shadow tracking-wide">
          Купить
        </button>
        <button className="flex-1 py-2 text-xs text-blue-200 border border-blue-700 rounded-lg hover:bg-blue-950/40 transition font-semibold">
          Подробнее
        </button>
      </div>
    </div>
  );
}
