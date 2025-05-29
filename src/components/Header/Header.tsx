import Link from 'next/link';
import Search from './Search';
import UserAccount from './UserAccount';

export default function Header() {
    return (
        <header className="relative h-[260px] rounded-b-3xl shadow-xl animate-fade-in bg-gray-900 border-b-1 border-blue-200 before:content-[''] before:absolute before:inset-0 before:rounded-b-3xl before:bg-gradient-to-br before:from-blue-900/40 before:via-transparent before:to-transparent before:pointer-events-none">
            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-center justify-between px-10 pt-7">
                    <Link href="/" aria-label="На главную">
                        <span className="text-3xl font-extrabold tracking-tight text-white drop-shadow-lg hover:text-blue-300 transition-colors duration-200">HyperByte</span>
                    </Link>
                    <div className="hidden md:flex backdrop-blur-3xl bg-white/10 rounded-full shadow-lg px-6 py-2">
                        <nav className="flex gap-8 text-lg font-medium">
                            <Link href="/products/pc" className="hover:!text-blue-300 transition-colors">Системники</Link>
                            <Link href="/products/mouse" className="hover:!text-blue-300 transition-colors">Мыши</Link>
                            <Link href="/products/keyboards" className="hover:!text-blue-300 transition-colors">Клавиатуры</Link>
                            <Link href="/products/monitor" className="hover:!text-blue-300 transition-colors">Мониторы</Link>
                            <Link href="/products/headphones" className="hover:!text-blue-300 transition-colors">Наушники</Link>
                            <Link href="/products/pad" className="hover:!text-blue-300 transition-colors">Коврики</Link>
                            <Link href="/products/laptop" className="hover:!text-blue-300 transition-colors">Ноутбуки</Link>
                            <Link href="/about" className="hover:!text-blue-300 transition-colors">О нас</Link>
                        </nav>
                    </div>
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
