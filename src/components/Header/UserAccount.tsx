'use client'
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

type Props = {
  name?: string;
  avatarUrl?: string;
  isLoggedIn: boolean;
};

export default function UserAccount({ name, avatarUrl, isLoggedIn }: Props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  if (!isLoggedIn) {
    return (
      <div className="relative mr-7 flex items-center gap-3">
        <a
          href="/login"
          className="px-5 py-2 rounded-full text-white font-semibold bg-sky-500 shadow-md shadow-sky-900/20 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 hover:bg-sky-600 focus:outline-none"
        >
          Войти
        </a>
        <a
          href="/register"
          className="px-5 py-2 rounded-full text-white font-semibold bg-gray-700 shadow-md shadow-gray-900/20 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 hover:bg-gray-600 focus:outline-none"
        >
          Регистрация
        </a>
      </div>
    );
  }

  return (
    <div className="relative mr-7" ref={menuRef}>
      <button
        type="button"
        className="flex items-center space-x-3 focus:outline-none"
      >
        <div
          className="w-12 h-12 rounded-full overflow-hidden border-4 border-sky-400/30 shadow-lg cursor-pointer transition-all duration-200 hover:border-sky-400"
          onClick={() => setOpen((v) => !v)}
        >
          <Image
            src={avatarUrl || '/images/ava.jpg'}
            alt="Avatar"
            width={40}
            height={40}
            unoptimized
            className="object-cover w-full h-full"
          />
        </div>
        <span className="text-white font-semibold text-lg">{name}</span>
      </button>
      {open && (
        <div className="w-56 max-w-[90vw] bg-gradient-to-br from-gray-950 via-gray-900 to-sky-950 p-4 rounded-xl absolute right-0 top-full mt-2 z-20 shadow-xl border border-sky-400/30 backdrop-blur-xl animate-fade-in flex flex-col gap-2">
          <ul className="w-full flex flex-col gap-2">
            <li>
              <button
                className="w-full px-4 py-3 rounded-xl font-bold bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 text-white border-0 shadow-md hover:from-cyan-400 hover:to-sky-500 hover:scale-[1.03] transition-all duration-200 focus:outline-none text-base text-left"
                onClick={() => { window.location.href = '/profile'; }}
              >
                Аккаунт
              </button>
            </li>
            <li>
              <button
                className="w-full px-4 py-3 rounded-xl font-bold bg-gray-800/80 text-sky-200 border-0 shadow hover:bg-sky-500 hover:text-white hover:scale-[1.03] transition-all duration-200 focus:outline-none text-base text-left"
                onClick={e => e.currentTarget.blur()}
              >
                Мои заказы
              </button>
            </li>
            <li>
              <button
                className="w-full px-4 py-3 rounded-xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white border-0 shadow-md hover:from-red-400 hover:to-yellow-400 hover:scale-[1.03] transition-all duration-200 focus:outline-none text-base text-left"
                onClick={e => e.currentTarget.blur()}
              >
                Выйти с аккаунта
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
