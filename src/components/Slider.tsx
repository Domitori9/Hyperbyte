'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const slides = [
  {
    image: '/images/1.jpg',
    title: 'Новинка 1',
    desc: 'Описание новинки 1',
  },
  {
    image: '/images/ava.jpg',
    title: 'Новинка 2',
    desc: 'Описание новинки 2',
  },
  {
    image: '/images/1.jpg',
    title: 'Новинка 3',
    desc: 'Описание новинки 3',
  },
];

export default function Slider() {
    return (    
        <>
        <div className="max-w-[55%] mx-auto my-12">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={false} // Отключаем стрелки
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          spaceBetween={32}
          slidesPerView={1}
          className="rounded-2xl shadow-lg w-full h-[400px]" // например, фиксированная высота 400px
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center justify-center bg-gray-800 rounded-2xl w-full h-[400px]"> {/* фиксированная высота */}
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill // Next.js Image будет адаптироваться под контейнер
                    sizes="(max-width: 900px) 100vw, 55vw"
                    className="rounded-xl object-cover"
                  />
                </div>
                <div className="mt-4 mb-4 text-2xl font-bold text-center text-green-500">{slide.title}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
        </>
    )
}