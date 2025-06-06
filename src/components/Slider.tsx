'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';

const slides = [
  {
    image: '/images/1.jpg',
    title: 'Logitech G Pro X Superlight',
    desc: 'Logitech G Pro X Superlight - беспроводная игровая мышь с ультралегким дизайном и высокой точностью.',
  },
  {
    image: '/images/2.jpg',
    title: 'Hator HURRICANE',
    desc: 'Hator HURRICANE - игровая мышь с RGB подсветкой и высокой чувствительностью.',
  },
  {
    image: '/images/3.jpg',
    title: 'Razer Viper Ultimate',
    desc: 'Razer Viper Ultimate - беспроводная игровая мышь с высокой точностью и скоростью отклика.',
  },
];

export default function Slider() {
    const navigationPrevRef = useRef<HTMLButtonElement>(null);
    const navigationNextRef = useRef<HTMLButtonElement>(null);

    return (    
        <>
        <div className="max-w-4xl w-full mx-auto my-16 rounded-3xl bg-gradient-to-br from-blue-900/70 via-cyan-900/60 to-purple-900/60 shadow-2xl p-1 relative overflow-visible animate-fade-in">
          {/* Декоративные blur-элементы */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl z-0 animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl z-0 animate-bounce-slow" />
          
          {/* Custom Navigation Buttons */}
          <button
            ref={navigationPrevRef}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-blue-900/80 to-cyan-900/80 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center text-blue-200 hover:text-white hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            ref={navigationNextRef}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-blue-900/80 to-cyan-900/80 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center text-blue-200 hover:text-white hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
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
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            spaceBetween={32}
            slidesPerView={1}
            className="rounded-2xl w-full h-[500px] relative z-10"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center justify-end h-[500px] w-full relative">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 55vw"
                      className="object-cover w-full h-full scale-105 brightness-[.85] blur-[1px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent" />
                  </div>
                  <div className="relative z-10 w-full flex flex-col items-center justify-end pb-10">
                    <div className="text-3xl font-extrabold text-cyan-100 drop-shadow-lg mb-2 animate-fade-in-up text-center">{slide.title}</div>
                    <div className="text-lg text-blue-100/90 font-medium text-center max-w-xl animate-fade-in-up delay-100">{slide.desc}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </>
    )
}