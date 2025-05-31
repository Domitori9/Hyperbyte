"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Logitech G Pro X Superlight", price: 4999, imageUrl: "/images/1.jpg" },
  { id: 2, name: "Hator HURRICANE", price: 2499, imageUrl: "/images/2.jpg" },
  { id: 3, name: "Razer Viper Ultimate", price: 5299, imageUrl: "/images/3.jpg" },
  { id: 4, name: "SteelSeries Apex Pro", price: 7999, imageUrl: "/images/4.jpg" },
  { id: 5, name: "HyperX Cloud II", price: 2999, imageUrl: "/images/5.jpg" },
  { id: 6, name: "ASUS ROG Strix", price: 8999, imageUrl: "/images/6.jpg" },
  { id: 7, name: "MSI Clutch GM41", price: 1999, imageUrl: "/images/7.jpg" },
  { id: 9, name: "Logitech G915", price: 5999, imageUrl: "/images/8.jpg" },
  { id: 10, name: "Logitech G915", price: 5999, imageUrl: "/images/8.jpg" },
  { id: 11, name: "Logitech G915", price: 5999, imageUrl: "/images/8.jpg" },
  { id: 12, name: "Logitech G915", price: 5999, imageUrl: "/images/8.jpg" },
  { id: 13, name: "Logitech G915", price: 5999, imageUrl: "/images/8.jpg" },
];

export default function PopularProducts() {
  return (
    <section className="w-full py-20 flex flex-col items-center justify-center bg-gradient-to-br from-gray-950/80 via-gray-900/70 to-sky-950/80 relative">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 mb-14 tracking-tight text-center drop-shadow-xl uppercase">
        Популярные товары
      </h2>
      {      /* Фон для слайдера */}
      <div className="w-full max-w-6xl px-4 ">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="popular-products-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard Product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
