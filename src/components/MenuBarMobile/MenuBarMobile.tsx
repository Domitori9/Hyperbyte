'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu"

export default function MenuBarMobile() {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

    return (
        <>
            <nav className="fixed bottom-5 left-3 right-3 rounded-full flex justify-between items-center
            bg-white/10 backdrop-blur-md
            z-50 h-18 min-[1023px]:hidden px-6 w-auto">
                
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

