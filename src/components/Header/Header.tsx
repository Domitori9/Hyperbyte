'use client'
import { useState, useCallback, memo, useRef } from 'react';
import Link from 'next/link';
import Search from '@/components/Header/search/Search';
import UserAccount from '@/components/Header/UserAccount/UserAccount';
import styles from './Header.module.scss';

// Types
type Category = {
  name: string;
  href: string;
};

// Constants
const CATEGORIES: Category[] = [
  { name: 'Системники', href: '/products/pc' },
  { name: 'Мыши', href: '/products/mouse' },
  { name: 'Клавиатуры', href: '/products/keyboards' },
  { name: 'Мониторы', href: '/products/monitors' },
  { name: 'Наушники', href: '/products/headphones' },
  { name: 'Коврики', href: '/products/pad' },
  { name: 'Ноутбуки', href: '/products/laptop' },
  { name: 'О нас', href: '/about' },
];

// Components
const CategoriesDropdown = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
  }, []);

  return (
    <div 
      className={styles.categories}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={styles.categoriesButton}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>Категории</span>
        <svg
          className={`${styles.categoriesIcon} ${isOpen ? styles.open : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`${styles.categoriesDropdown} ${
          isOpen ? '' : styles.hidden
        }`}
        role="menu"
        aria-label="Категории"
      >
        {CATEGORIES.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className={styles.categoriesLink}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
});

CategoriesDropdown.displayName = 'CategoriesDropdown';

const DesktopNav = memo(() => (
  <nav className={styles.nav}>
    <CategoriesDropdown />
    <div className={styles.navSearch}>
      <Search />
    </div>
  </nav>
));

DesktopNav.displayName = 'DesktopNav';

const MobileNav = memo(() => (
  <div className={styles.mobileContainer}>
    <div className={styles.mobileSearch}>
      <Search />
    </div>
  </div>
));

MobileNav.displayName = 'MobileNav';

const MobileDrawer = memo(({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <div
    className={`${styles.mobileDrawerContainer} ${
      isOpen ? '' : styles.hidden
    }`}
  >
    <div
      className={`${styles.mobileDrawerBackdrop} ${
        isOpen ? '' : styles.hidden
      }`}
      onClick={onClose}
    />
    <nav className={styles.mobileDrawerContent}>
      <button
        className={styles.mobileDrawerCloseButton}
        onClick={onClose}
        aria-label="Закрыть меню"
      >
        <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <div className="flex flex-col gap-3 mt-8">
        {CATEGORIES.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className={styles.mobileDrawerLink}
            onClick={onClose}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </nav>
  </div>
));

MobileDrawer.displayName = 'MobileDrawer';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleCartMouseEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsCartOpen(true);
  }, []);

  const handleCartMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsCartOpen(false), 300);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Hyperbyte</span>
        </Link>
        
        <DesktopNav />
        
        <div className="lg:hidden flex items-center">
          <MobileNav />
        </div>
        
        <div className={styles.user}>
          <div 
            className={styles.userCartContainer}
            onMouseEnter={handleCartMouseEnter}
            onMouseLeave={handleCartMouseLeave}
          >
            <button className={styles.userCartButton} aria-label="Корзина">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className={styles.userCartCounter}>0</span>
            </button>
            <div className={`${styles.userCartDropdown} ${isCartOpen ? '' : styles.hidden}`}>
              <div className={styles.userCartItems}>
                {/* Здесь будет список товаров в корзине */}
                <div className={styles.userCartEmpty}>
                  Корзина пуста
                </div>
              </div>
              <div className={styles.userCartTotal}>
                <div className={styles.userCartTotalText}>
                  <span>Итого:</span>
                  <span>0 ₽</span>
                </div>
              </div>
              <button className={styles.userCartButton}>
                Оформить заказ
              </button>
            </div>
          </div>
          <UserAccount username="User" />
        </div>
      </div>
      <div className={styles.spacer} />
    </header>
  );
}
