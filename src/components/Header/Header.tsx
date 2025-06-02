'use client'
import { useState } from 'react';
import Link from 'next/link';
import Search from './Search';
import UserAccount from './UserAccount';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <header className="relative  animate-fade-in ">
            <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 flex flex-col gap-4">
                <div className="flex items-center justify-between py-6">
                    <Link href="/" aria-label="На главную">
                        <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-lg hover:text-blue-300 transition-colors duration-200">HyperByte</span>
                    </Link>
                    {/* Desktop nav */}
                    <nav className="hidden lg:flex gap-4 xl:gap-8 text-base xl:text-lg font-medium bg-white/10 backdrop-blur-2xl rounded-full shadow-lg px-4 xl:px-8 py-2">
                        <Link href="/products/pc" className="hover:!text-blue-300 transition-colors">Системники</Link>
                        <Link href="/products/mouse" className="hover:!text-blue-300 transition-colors">Мыши</Link>
                        <Link href="/products/keyboards" className="hover:!text-blue-300 transition-colors">Клавиатуры</Link>
                        <Link href="/products/monitor" className="hover:!text-blue-300 transition-colors">Мониторы</Link>
                        <Link href="/products/headphones" className="hover:!text-blue-300 transition-colors">Наушники</Link>
                        <Link href="/products/pad" className="hover:!text-blue-300 transition-colors">Коврики</Link>
                        <Link href="/products/laptop" className="hover:!text-blue-300 transition-colors">Ноутбуки</Link>
                        <span> |</span>
                        <Link href="/about" className="!text-purple-300 transition-colors">О нас</Link>
                    </nav>
                    {/* Burger button with SVG icon */}
                    <button
                        className={`lg:hidden flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 focus:outline-none ${mobileOpen ? 'bg-blue-600 shadow-2xl scale-110' : 'bg-white/10 hover:bg-white/20'}`}
                        onClick={() => setMobileOpen(v => !v)}
                        aria-label="Открыть меню"
                    >
                        <svg
                            className={`w-7 h-7 text-white transition-all duration-300 ${mobileOpen ? 'rotate-90' : ''}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="4" y1="7" x2="20" y2="7" className={`transition-all duration-300 ${mobileOpen ? 'translate-y-[10px] rotate-45' : ''}`} />
                            <line x1="4" y1="12" x2="20" y2="12" className={`transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                            <line x1="4" y1="17" x2="20" y2="17" className={`transition-all duration-300 ${mobileOpen ? '-translate-y-[10px] -rotate-45' : ''}`} />
                        </svg>
                    </button>
                    <div className="flex items-center gap-3">
                        <UserAccount username="Domitori" avatarUrl="/ava.jpg" />
                    </div>
                </div>
                {/* Mobile nav (modern side drawer) */}
                <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${mobileOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'} flex items-start justify-end`}> 
                    {/* Backdrop */}
                    <div className={`absolute inset-0 bg-black/50 backdrop-blur-md transition-all duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileOpen(false)} />
                    {/* Modern Side Drawer */}
                    <nav className="relative w-[90vw] max-w-sm h-full flex flex-col gap-6 justify-start pt-10 pb-8 px-6 bg-white/95 dark:bg-gray-900/95 shadow-2xl border-l-2 border-blue-200 dark:border-blue-900 rounded-l-3xl animate-fade-in-up select-none overflow-y-auto">
                        <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition z-20" onClick={() => setMobileOpen(false)} aria-label="Закрыть меню">
                            <svg className="w-6 h-6 text-blue-900 dark:text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                        <div className="flex flex-col gap-3 mt-8">
                            <Link href="/products/pc" className="py-3 px-4 rounded-xl font-bold text-blue-900 dark:text-blue-200 bg-gradient-to-r from-blue-100 via-sky-100 to-blue-50 dark:from-blue-900 dark:via-sky-900 dark:to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center" onClick={() => setMobileOpen(false)}>Системники</Link>
                            <Link href="/products/mouse" className="py-3 px-4 rounded-xl font-bold text-blue-900 dark:text-blue-200 bg-gradient-to-r from-blue-100 via-sky-100 to-blue-50 dark:from-blue-900 dark:via-sky-900 dark:to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center" onClick={() => setMobileOpen(false)}>Мыши</Link>
                            <Link href="/products/keyboards" className="py-3 px-4 rounded-xl font-bold text-blue-900 dark:text-blue-200 bg-gradient-to-r from-blue-100 via-sky-100 to-blue-50 dark:from-blue-900 dark:via-sky-900 dark:to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center" onClick={() => setMobileOpen(false)}>Клавиатуры</Link>
                            <Link href="/products/monitor" className="py-3 px-4 rounded-xl font-bold text-blue-900 dark:text-blue-200 bg-gradient-to-r from-blue-100 via-sky-100 to-blue-50 dark:from-blue-900 dark:via-sky-900 dark:to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center" onClick={() => setMobileOpen(false)}>Мониторы</Link>
                            <Link href="/products/headphones" className="py-3 px-4 rounded-xl font-bold text-blue-900 dark:text-blue-200 bg-gradient-to-r from-blue-100 via-sky-100 to-blue-50 dark:from-blue-900 dark:via-sky-900 dark:to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center" onClick={() => setMobileOpen(false)}>Наушники</Link>
                            <Link href="/products/pad" className="py-3 px-4 rounded-xl font-bold text-blue-900 dark:text-blue-200 bg-gradient-to-r from-blue-100 via-sky-100 to-blue-50 dark:from-blue-900 dark:via-sky-900 dark:to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center" onClick={() => setMobileOpen(false)}>Коврики</Link>
                            <Link href="/products/laptop" className="py-3 px-4 rounded-xl font-bold text-blue-900 dark:text-blue-200 bg-gradient-to-r from-blue-100 via-sky-100 to-blue-50 dark:from-blue-900 dark:via-sky-900 dark:to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center" onClick={() => setMobileOpen(false)}>Ноутбуки</Link>
                            <Link href="/about" className="py-3 px-4 rounded-xl font-bold text-blue-900 dark:text-blue-200 bg-gradient-to-r from-blue-100 via-sky-100 to-blue-50 dark:from-blue-900 dark:via-sky-900 dark:to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center" onClick={() => setMobileOpen(false)}>О нас</Link>
                        </div>
                    </nav>
                </div>
                <div className="flex justify-center pb-4">
                    <div className="w-full max-w-md animate-slide-up">
                        <Search />
                    </div>
                </div>
            </div>
        </header>
    );
}
