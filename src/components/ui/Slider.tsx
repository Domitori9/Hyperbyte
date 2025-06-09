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
        <div className="w-full max-w-[1440px] mx-auto my-4 sm:my-16 px-2 sm:px-0 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-1 relative overflow-hidden animate-fade-in">
          {/* Custom Navigation Buttons */}
          <button
            ref={navigationPrevRef}
            className="hidden sm:flex absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-6 h-6 sm:w-12 sm:h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:text-white hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-white/20 group"

          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-6 sm:h-6 transform group-hover:-translate-x-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            ref={navigationNextRef}
            className="hidden sm:flex absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-6 h-6 sm:w-12 sm:h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:text-white hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-white/20 group"

          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-6 sm:h-6 transform group-hover:translate-x-0.5 transition-transform">
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
            spaceBetween={16}
            slidesPerView={1}
            className="rounded-xl sm:rounded-2xl w-full h-[200px] sm:h-[500px] relative z-10 overflow-hidden"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center justify-end h-[200px] sm:h-[500px] w-full relative">
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 55vw"
                      className="object-cover w-full h-full"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>
                  <div className="relative z-10 w-full flex flex-col items-center justify-end pb-3 sm:pb-10 px-4">
                    <div className="text-base sm:text-3xl font-extrabold text-white drop-shadow-lg mb-1 sm:mb-2 animate-fade-in-up text-center">{slide.title}</div>
                    <div className="text-xs sm:text-lg text-white/90 font-medium text-center max-w-xl animate-fade-in-up delay-100">{slide.desc}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </>
    )
}