'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu"
import styles from './MenuBarMobile.module.scss'

export default function MenuBarMobile() {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

    return (
        <>
            <nav className={styles.menuBarMobile}>
                <Link href="/" className={styles.menuBarMobile__link}>
                    <Image 
                        src="/icon/home.svg" 
                        alt="home" 
                        width={24} 
                        height={24} 
                        className={styles.menuBarMobile__icon} 
                    />
                    <span className={styles.menuBarMobile__text}>Головна</span>
                </Link>

                <button 
                    onClick={() => setIsCategoriesOpen(true)}
                    className={styles.menuBarMobile__link}
                >
                    <Image 
                        src="/icon/catalog.svg" 
                        alt="catalog" 
                        width={24} 
                        height={24} 
                        className={styles.menuBarMobile__icon} 
                    />
                    <span className={styles.menuBarMobile__text}>Каталог</span>
                </button>

                <Link href="/cart" className={styles.menuBarMobile__link}>
                    <Image 
                        src="/icon/cart.svg" 
                        alt="cart" 
                        width={24} 
                        height={24} 
                        className={styles.menuBarMobile__icon} 
                    />
                    <span className={styles.menuBarMobile__text}>Кошик</span>
                </Link>

                <Link href="/" className={styles.menuBarMobile__link}>
                    <Image 
                        src="/icon/account.svg" 
                        alt="account" 
                        width={24} 
                        height={24} 
                        className={styles.menuBarMobile__icon} 
                    />
                    <span className={styles.menuBarMobile__text}>Акаунт</span>
                </Link>
            </nav>

            <CategoriesMenu 
                isOpen={isCategoriesOpen}
                onClose={() => setIsCategoriesOpen(false)}
            />
        </>
    )
}

