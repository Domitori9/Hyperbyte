'use client'
import { useState, useRef, useEffect, useCallback, memo } from 'react';
import Link from 'next/link';
import Search from './Search';
import UserAccount from './UserAccount';

// Categories Dropdown Component
const CategoriesDropdown = memo(() => {
  const [catOpen, setCatOpen] = useState(false);
  const catRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setCatOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setCatOpen(false);
    }, 300);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={catRef} 
      className="relative" 
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="
          // layout
          flex items-center gap-2 px-4 xl:px-8 py-2
          // background
          bg-white/10 backdrop-blur-2xl rounded-full shadow-lg
          // font
          text-base font-medium
          // hover
          hover:bg-white/20 transition-colors
          // focus
          focus:outline-none
        "
        aria-haspopup="true"
        aria-expanded={catOpen}
      >
        <span>Категории</span>
        <svg
          className={`
            w-5 h-5
            // color
            text-blue-300
            // (transition)
            transition-transform
            ${catOpen ? 'rotate-180' : ''}
          `}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {/* Dropdown Menu */}
      <div
        className={`
          absolute left-0 top-full mt-2 min-w-[220px]
          // background
          bg-gray-900
          // (border)
          rounded-2xl shadow-2xl border border-blue-800
          // padding
          py-2
          // (transition)
          transition-all duration-200 z-50
          ${catOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
        `}
        role="menu"
        aria-label="Категории"
      >
        <Link href="/products/pc" className="block px-6 py-3 text-gray-100 hover:bg-blue-900/40 transition-colors">Системники</Link>
        <Link href="/products/mouse" className="block px-6 py-3 text-gray-100 hover:bg-blue-900/40 transition-colors">Мыши</Link>
        <Link href="/products/keyboards" className="block px-6 py-3 text-gray-100 hover:bg-blue-900/40 transition-colors">Клавиатуры</Link>
        <Link href="/products/monitor" className="block px-6 py-3 text-gray-100 hover:bg-blue-900/40 transition-colors">Мониторы</Link>
        <Link href="/products/headphones" className="block px-6 py-3 text-gray-100 hover:bg-blue-900/40 transition-colors">Наушники</Link>
        <Link href="/products/pad" className="block px-6 py-3 text-gray-100 hover:bg-blue-900/40 transition-colors">Коврики</Link>
        <Link href="/products/laptop" className="block px-6 py-3 text-gray-100 hover:bg-blue-900/40 transition-colors">Ноутбуки</Link>
        <Link href="/about" className="block px-6 py-3 text-gray-100 hover:bg-blue-900/40 transition-colors whitespace-nowrap">О нас</Link>
      </div>
    </div>
  );
});

CategoriesDropdown.displayName = 'CategoriesDropdown';

export default function Header() {
  // State
  const [mobileOpen, setMobileOpen] = useState(false);

  // Effects
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Desktop Navigation
  const DesktopNav = memo(() => (
    <nav
      className="
        // layout
        hidden lg:flex gap-4 xl:gap-8 items-center w-full max-w-[1300px] mx-auto
        // font
        text-base font-medium
        // background
        bg-white/10 backdrop-blur-2xl rounded-full shadow-lg
        // padding
        px-4 xl:px-8 py-2
        // whitespace
        whitespace-nowrap
      "
    >
      <CategoriesDropdown />
      {/* Search */}
      <div className="hidden lg:flex flex-1 justify-center">
        <div className="w-full max-w-full animate-slide-up">
          <Search />
        </div>
      </div>
    </nav>
  ));

  DesktopNav.displayName = 'DesktopNav';

  // Mobile Navigation
  const MobileNav = memo(() => (
    <div className="flex w-full items-center justify-between lg:hidden">
      <div className="w-full mx-4">
        <Search />
      </div>
    </div>
  ));

  MobileNav.displayName = 'MobileNav';

  return (
    <header className="relative w-full animate-fade-in z-40">
      {/* Main Header */}
      <div className="w-full px-4 fixed bg-white/5 backdrop-blur-2xl sm:px-8 flex items-center justify-between gap-4 py-3 lg:py-6">
        {/* Logo (Desktop only) */}
        <Link href="/" aria-label="На главную" className="hidden lg:flex flex-shrink-0">
          <span
            className="
              // color
              text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-lg
              // hover
              hover:text-blue-300 transition-colors duration-200
            "
          >
            HyperByte
          </span>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* User Account (Desktop only) */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0 max-w-[160px] overflow-hidden justify-end">
          <UserAccount username="Domitori" avatarUrl="/ava.jpg" />
        </div>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>

      {/* Spacer */}
      <div className="h-[56px] lg:h-[88px]"></div>

      {/* Mobile Drawer */}
      <div
        className={`
          // layout
          lg:hidden fixed inset-0 z-[99] flex items-start justify-end
          // (transition)
          transition-all duration-300
          ${mobileOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        `}
      >
        {/* Backdrop */}
        <div
          className={`
            absolute inset-0 bg-black/50 backdrop-blur-md
            // (transition)
            transition-all duration-300
            ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer Content */}
        <nav
          className="
            // layout
            relative w-[90vw] max-w-sm h-full flex flex-col gap-6 justify-start pt-10 pb-8 px-6
            // background
            bg-gray-900/95
            // border
            shadow-2xl border-l-2 border-blue-900 rounded-l-3xl
            // animation
            animate-fade-in-up
            // scroll
            select-none overflow-y-auto z-[100]
          "
        >
          <button
            className="
              absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full
              // color
              bg-blue-900
              // hover
              hover:bg-blue-800
              // (transition)
              transition z-20
            "
            onClick={() => setMobileOpen(false)}
            aria-label="Закрыть меню"
          >
            <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div className="flex flex-col gap-3 mt-8">
            <Link href="/products/pc" className="py-3 px-4 rounded-xl font-bold text-blue-200 bg-gradient-to-r from-blue-900 via-sky-900 to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center" onClick={() => setMobileOpen(false)}>Системники</Link>
            <Link href="/products/mouse" className="py-3 px-4 rounded-xl font-bold text-blue-200 bg-gradient-to-r from-blue-900 via-sky-900 to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center" onClick={() => setMobileOpen(false)}>Мыши</Link>
            <Link href="/products/keyboards" className="py-3 px-4 rounded-xl font-bold text-blue-200 bg-gradient-to-r from-blue-900 via-sky-900 to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center" onClick={() => setMobileOpen(false)}>Клавиатуры</Link>
            <Link href="/products/monitor" className="py-3 px-4 rounded-xl font-bold text-blue-200 bg-gradient-to-r from-blue-900 via-sky-900 to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center" onClick={() => setMobileOpen(false)}>Мониторы</Link>
            <Link href="/products/headphones" className="py-3 px-4 rounded-xl font-bold text-blue-200 bg-gradient-to-r from-blue-900 via-sky-900 to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center" onClick={() => setMobileOpen(false)}>Наушники</Link>
            <Link href="/products/pad" className="py-3 px-4 rounded-xl font-bold text-blue-200 bg-gradient-to-r from-blue-900 via-sky-900 to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center" onClick={() => setMobileOpen(false)}>Коврики</Link>
            <Link href="/products/laptop" className="py-3 px-4 rounded-xl font-bold text-blue-200 bg-gradient-to-r from-blue-900 via-sky-900 to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center" onClick={() => setMobileOpen(false)}>Ноутбуки</Link>
            <Link href="/about" className="py-3 px-4 rounded-xl font-bold text-blue-200 bg-gradient-to-r from-blue-900 via-sky-900 to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center whitespace-nowrap" onClick={() => setMobileOpen(false)}>О нас</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
