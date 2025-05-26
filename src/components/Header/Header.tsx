import Link from 'next/link';
import Search from './Search';
import UserAccount from './UserAccount';

export default function Header() {
    return (
        <header className="relative bg-gradient-to-br from-[#1a1833] via-[#2d225a] to-[#3a2d6d] h-[260px] shadow-xl animate-fade-in">
            <div className="absolute inset-0 bg-black/60 z-0 rounded-b-3xl" />
            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-center justify-between px-10 pt-7">
                    <Link href="/" aria-label="На главную">
                        <span className="text-3xl font-extrabold tracking-tight text-white drop-shadow-lg hover:text-purple-300 transition-colors duration-200">HyperByte</span>
                    </Link>
                    <nav className="hidden md:flex gap-8 text-lg font-medium">
                        <Link href="/products/pc" className="text-white/90 hover:text-purple-300 transition-colors">Системники</Link>
                        <Link href="/products/mouse" className="text-white/90 hover:text-purple-300 transition-colors">Мыши</Link>
                        <Link href="/products/keyboards" className="text-white/90 hover:text-purple-300 transition-colors">Клавиатуры</Link>
                        <Link href="/products/monitor" className="text-white/90 hover:text-purple-300 transition-colors">Мониторы</Link>
                        <Link href="/products/headphones" className="text-white/90 hover:text-purple-300 transition-colors">Наушники</Link>
                        <Link href="/products/pad" className="text-white/90 hover:text-purple-300 transition-colors">Коврики</Link>
                        <Link href="/products/laptop" className="text-white/90 hover:text-purple-300 transition-colors">Ноутбуки</Link>
                        <Link href="/about" className="text-white/90 hover:text-purple-300 transition-colors">О нас</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <UserAccount isLoggedIn={true} name='Dima' avatarUrl="/images/ava.jpg" />
                    </div>
                </div>
                <div className="flex justify-center px-4 pb-6">
                    <div className="w-full max-w-[520px] animate-slide-up">
                        <Search />
                    </div>
                </div>
            </div>
        </header>
    );
}
