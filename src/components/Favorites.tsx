'use client';
import Image from "next/image";
import React from "react";

interface FavoritesProps {
  isLoggedIn: boolean;
}

export default function Favorites({ isLoggedIn }: FavoritesProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-16">
      <div className="relative">
        {/* Красивый фон с градиентом, blur и свечением */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 via-blue-900/40 to-purple-900/30 rounded-3xl" />
          <div className="absolute -top-10 -left-10 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-bounce-slow" />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-400/10 rounded-full blur-2xl" style={{ transform: 'translate(-50%, -50%)' }} />
          <div className="absolute inset-0 rounded-3xl border-2 border-cyan-400/10" />
        </div>
        {isLoggedIn ? (
          <div className="relative flex items-center">
            {/* Кнопка влево */}
            <button
              type="button"
              aria-label="Scroll left"
              className="hidden md:flex absolute -left-8 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-br from-cyan-500/80 via-blue-500/80 to-blue-900/80 hover:from-cyan-400 hover:to-blue-700 text-white rounded-full shadow-xl w-12 h-12 items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 opacity-90 hover:opacity-100 border-2 border-cyan-300/30"
              onClick={() => {
                const container = document.getElementById('favorites-scroll');
                if (container) container.scrollBy({ left: -320, behavior: 'smooth' });
              }}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            {/* Список карточек */}
            <div
              id="favorites-scroll"
              className="flex gap-10 overflow-x-auto pb-8 pt-6 hide-scrollbar rounded-3xl relative z-10 px-8 items-stretch min-h-[340px] w-full scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[1,2,3,4].map((id) => (
                <div key={id} className="min-w-[270px] max-w-xs bg-white/10 border border-cyan-400/30 rounded-2xl shadow-2xl flex flex-col items-stretch justify-between transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40 hover:border-cyan-400/70 backdrop-blur-lg animate-fade-in relative overflow-hidden p-0">
                  {/* Декоративный круг */}
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-cyan-400/20 rounded-full blur-2xl z-0" />
                  {/* Картинка товара на всю верхнюю часть карточки */}
                  <div className="w-full aspect-[4/3] rounded-t-2xl overflow-hidden bg-blue-900/30 flex items-center justify-center relative z-10">
                    <Image src="/images/1.jpg" alt="Product" fill className="object-cover w-full h-full" />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-between relative z-10 p-6 w-full">
                    <span className="font-bold text-lg text-white mb-2 text-center">Hator</span>
                    <span className="text-blue-100/80 text-base mb-3">Цена: <span className="font-semibold">999₴</span></span>
                    <button className="mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/70 via-blue-500/60 to-blue-900/60 text-white font-semibold shadow-md shadow-blue-900/10 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 hover:bg-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-200">
                      Подробнее
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Кнопка вправо */}
            <button
              type="button"
              aria-label="Scroll right"
              className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-br from-cyan-500/80 via-blue-500/80 to-blue-900/80 hover:from-cyan-400 hover:to-blue-700 text-white rounded-full shadow-xl w-12 h-12 items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 opacity-90 hover:opacity-100 border-2 border-cyan-300/30"
              onClick={() => {
                const container = document.getElementById('favorites-scroll');
                if (container) container.scrollBy({ left: 320, behavior: 'smooth' });
              }}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[180px] rounded-3xl relative z-10 p-10">
            <p className="text-xl text-blue-100 mb-4 text-center">Чтобы просматривать избранное, <a href='/login' className='text-cyan-400 underline hover:text-cyan-300 transition'>войдите</a> или <a href='/register' className='text-cyan-400 underline hover:text-cyan-300 transition'>зарегистрируйтесь</a>.</p>
          </div>
        )}
      </div>
    </section>
  );
}
