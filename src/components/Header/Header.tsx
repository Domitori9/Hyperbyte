import Link from 'next/link';
import Search from './Search';
import UserAccount from './UserAccount';

export default function Header() {
    return (
        <header className="relative bg-cover bg-center h-[300px] z-10" style={{ backgroundImage: "url(/images/2.jpg)" }}>
            <div className="absolute inset-0 bg-black/50 z-0" />
            
            <div className="relative z-10 grid grid-cols-[200px_1fr_150px] items-center gap-4 pt-6 pb-4 px-4">

                <div className="ml-8">
                    <Link href="/" aria-label="На главную">
                        <strong className='text-2xl text-white'>HyperByte</strong>
                    </Link>
                </div>

                <div className="flex justify-center w-full">
                    <div className="w-full max-w-[600px]">
                        <Search />
                    </div>
                </div>

                <div className="mr-1 flex justify-end">
                    <UserAccount
                        isLoggedIn={true} 
                      name='Dima'  avatarUrl="/images/ava.jpg" // замените на свой путь или ссылку
                    />
                </div>
                
            </div>
        </header>
    );
}
