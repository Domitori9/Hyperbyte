'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu"

export default function MenuBarMobile() {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

    return (
        <>
            <nav className="fixed bottom-0 left-0 right-0 flex justify-between items-center
            bg-gray-800/50 backdrop-blur-md
            z-50 h-18 min-[1023px]:hidden px-6 w-full">
                
                <Link href="/" className="flex flex-col p-3 items-center justify-center text-sm hover:bg-white/30 rounded-xl transition-colors">
                  <Image src="/icon/home.svg" alt="home" width={24} height={24} className="brightness-0 invert" />
                    <span className="text-xs mt-2">Главная</span>
                </Link>
                <button 
                    onClick={() => setIsCategoriesOpen(true)}
                    className="flex flex-col p-3 items-center justify-center text-sm hover:bg-white/30 rounded-xl transition-colors"
                >
                  <Image src="/icon/catalog.svg" alt="home" width={24} height={24} className="brightness-0 invert" />
                    <span className="text-xs mt-2">Каталог</span>
                </button>

                <Link href="/cart" className="flex flex-col p-3 items-center justify-center text-sm hover:bg-white/30 rounded-xl transition-colors">
                  <Image src="/icon/cart.svg" alt="cart" width={24} height={24} className="brightness-0 invert" />
                    <span className="text-xs mt-2">Корзина</span>
                </Link>

                <Link href="/" className="flex flex-col p-3 items-center justify-center text-sm hover:bg-white/30 rounded-xl transition-colors">
                  <Image src="/icon/account.svg" alt="account" width={24} height={24} className="brightness-0 invert" />
                    <span className="text-xs mt-2">Аккаунт</span>
                </Link>

            </nav>

            <CategoriesMenu 
                isOpen={isCategoriesOpen}
                onClose={() => setIsCategoriesOpen(false)}
            />
        </>
    )
}

