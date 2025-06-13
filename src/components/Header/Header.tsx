'use client'

import { useState, useCallback, memo, useRef, useEffect } from 'react';
import Link from 'next/link';
import Search from '@/components/Header/search/Search';
import UserAccount from '@/components/Header/UserAccount/UserAccount';
import styles from './Header.module.scss';

const menuItems = [
    { id: 1, name: 'ПК', href: '/products/pc' },
    { id: 2, name: 'Миші', href: '/products/mouse' },
    { id: 3, name: 'Клавіатури', href: '/products/keyboards' },
    { id: 4, name: 'Монітори', href: '/products/monitors' },
    { id: 5, name: 'Навушники', href: '/products/headphones' },
    { id: 6, name: 'Килимки', href: '/products/pad' },
    { id: 7, name: 'Ноутбуки', href: '/products/laptop' },
    { id: 8, name: 'О нас', href: '/about' },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [user, setUser] = useState<{ username: string; avatarUrl?: string } | null>(null);
    const [loading, setLoading] = useState(true);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMenuOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [handleClickOutside]);

    useEffect(() => {
        async function fetchProfile() {
            setLoading(true);
            try {
                const res = await fetch('/api/auth/profile');
                if (res.ok) {
                    const data = await res.json();
                    setUser({
                        username: data.profile?.name || data.user?.user_metadata?.name || data.user?.email || 'Профіль',
                        avatarUrl: data.profile?.avatar_url || data.user?.user_metadata?.avatar_url || undefined,
                    });
                } else {
                    setUser(null);
                }
            } catch {
                setUser(null);
            } finally {
                setLoading(false);
            }
        }
        fetchProfile();
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    HyperByte
                </Link>

                <div className={styles.center}>
                    <div className={styles.categories} ref={menuRef}>
                        <button 
                            className={styles.categoriesButton}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            Меню
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6"/>
                            </svg>
                        </button>
                        <div className={`${styles.categoriesDropdown} ${isMenuOpen ? styles.open : ''}`}>
                            {menuItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className={styles.categoryLink}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <Search />
                </div>

                <div className={styles.right}>
                    {loading ? null : user ? (
                        <UserAccount username={user.username} avatarUrl={user.avatarUrl} />
                    ) : (
                        <Link href="/login" className={styles.loginButton}>Войти</Link>
                    )}
                    <Link href="/cart" className={styles.cartButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="8" cy="21" r="1"/>
                            <circle cx="19" cy="21" r="1"/>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                        </svg>
                        <span className={styles.cartCount}>0</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default memo(Header);
