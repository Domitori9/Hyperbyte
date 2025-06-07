"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "@/components/products/ProductCard";
import { useRef } from "react";
import type { Swiper as SwiperType } from 'swiper';

const products = [
  { id: 1, name: "ASUS ROG Swift OLED", price: 89999, imageUrl: "/images/1.jpg" },
  { id: 2, name: "Logitech G Pro X Superlight 2", price: 15999, imageUrl: "/images/2.jpg" },
  { id: 3, name: "SteelSeries Apex Pro TKL Wireless", price: 24999, imageUrl: "/images/3.jpg" },
  { id: 4, name: "Razer DeathAdder V3 Pro", price: 12999, imageUrl: "/images/4.jpg" },
  { id: 5, name: "HyperX Cloud III Wireless", price: 17999, imageUrl: "/images/5.jpg" },
  { id: 6, name: "Corsair K70 RGB Pro", price: 19999, imageUrl: "/images/6.jpg" },
];

export default function ComingSoonProducts() {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="w-full py-12 flex flex-col items-center justify-center relative">
      <div className="w-full px-4 relative">
        <h2 className="text-3xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 tracking-tight drop-shadow-xl uppercase text-left">
          Скоро в продаже
        </h2>
        {/* Custom Navigation Buttons */}
        <button
          ref={navigationPrevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-blue-900/80 to-cyan-900/80 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center text-blue-200 hover:text-white hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          ref={navigationNextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-blue-900/80 to-cyan-900/80 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center text-blue-200 hover:text-white hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper: SwiperType) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }
          }}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 5.5 },
          }}
          style={{ paddingTop: 45, paddingBottom: 45, paddingLeft: 20, paddingRight: 20 }}  
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