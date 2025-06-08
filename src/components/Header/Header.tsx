'use client'
import { useState, useCallback, memo, useRef } from 'react';
import Link from 'next/link';
import Search from './Search';
import UserAccount from './UserAccount';

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
  { name: 'Мониторы', href: '/products/monitor' },
  { name: 'Наушники', href: '/products/headphones' },
  { name: 'Коврики', href: '/products/pad' },
  { name: 'Ноутбуки', href: '/products/laptop' },
  { name: 'О нас', href: '/about' },
];

// Styles
const styles = {
  header: {
    base: 'relative w-full animate-fade-in z-40',
    container: 'w-full px-4 fixed bg-white/5 backdrop-blur-2xl sm:px-8 flex items-center justify-between gap-6 py-3 lg:py-6',
    spacer: 'h-[56px] lg:h-[88px]',
  },
  logo: {
    container: 'hidden lg:flex flex-shrink-0',
    text: 'text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-lg hover:text-blue-300 transition-colors duration-200',
  },
  nav: {
    container: 'hidden lg:flex gap-4 xl:gap-8 items-center w-full max-w-[1300px] mx-auto text-base font-medium bg-white/10 backdrop-blur-2xl rounded-full shadow-lg px-4 xl:px-8 py-2 whitespace-nowrap',
    search: 'hidden lg:flex flex-1 justify-center',
  },
  categories: {
    container: 'relative',
    button: 'flex items-center gap-2 px-4 xl:px-8 py-2 bg-white/10 backdrop-blur-2xl rounded-full shadow-lg text-base font-medium hover:bg-white/20 transition-colors focus:outline-none',
    icon: 'w-5 h-5 text-blue-300 transition-transform',
    dropdown: 'absolute left-0 top-full mt-2 min-w-[220px] bg-gray-900 rounded-2xl shadow-2xl border border-blue-800 py-2 transition-all duration-200 z-50',
    link: 'block px-6 py-3 text-gray-100 hover:bg-blue-900/40 transition-colors',
  },
  mobile: {
    container: 'flex w-full items-center justify-between lg:hidden',
    search: 'w-full mx-4',
    drawer: {
      container: 'lg:hidden fixed inset-0 z-[99] flex items-start justify-end transition-all duration-300',
      backdrop: 'absolute inset-0 bg-black/50 backdrop-blur-md transition-all duration-300',
      content: 'relative w-[90vw] max-w-sm h-full flex flex-col gap-6 justify-start pt-10 pb-8 px-6 bg-gray-900/95 shadow-2xl border-l-2 border-blue-900 rounded-l-3xl animate-fade-in-up select-none overflow-y-auto z-[100]',
      closeButton: 'absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 hover:bg-blue-800 transition z-20',
      link: 'py-3 px-4 rounded-xl font-bold text-blue-200 bg-gradient-to-r from-blue-900 via-sky-900 to-blue-800 shadow hover:scale-105 hover:shadow-xl transition-all duration-200 text-center',
    },
  },
  user: {
    container: 'hidden lg:flex items-center gap-4 flex-shrink-0',
    cart: {
      container: 'relative',
      button: 'flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-2xl hover:bg-white/20 transition-colors cursor-pointer',
      counter: 'absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg border-2 border-gray-900',
      dropdown: 'absolute right-0 top-full mt-2 w-80 bg-gray-900 rounded-2xl shadow-2xl border border-blue-800 py-4 transition-all duration-200 z-50',
      empty: 'px-6 py-8 text-center text-gray-400',
      items: 'max-h-[400px] overflow-y-auto',
      item: 'flex items-center gap-4 px-6 py-3 hover:bg-blue-900/40 transition-colors',
      itemImage: 'w-12 h-12 rounded-lg object-cover',
      itemInfo: 'flex-1',
      itemName: 'text-sm font-medium text-white',
      itemPrice: 'text-sm text-blue-300',
      total: 'px-6 py-4 border-t border-blue-800/50 mt-2',
      totalText: 'flex justify-between text-sm font-medium text-white',
      cartButton: 'mt-4 mx-6 py-2.5 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl text-sm font-medium transition-all duration-200 text-center block w-[calc(100%-3rem)] shadow-lg hover:shadow-xl hover:scale-[1.02]',
    },
  },
} as const;

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
      className={styles.categories.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={styles.categories.button}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>Категории</span>
        <svg
          className={`${styles.categories.icon} ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`${styles.categories.dropdown} ${
          isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        role="menu"
        aria-label="Категории"
      >
        {CATEGORIES.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className={styles.categories.link}
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
  <nav className={styles.nav.container}>
    <CategoriesDropdown />
    <div className={styles.nav.search}>
      <div className="w-full max-w-full animate-slide-up">
        <Search />
      </div>
    </div>
  </nav>
));

DesktopNav.displayName = 'DesktopNav';

const MobileNav = memo(() => (
  <div className={styles.mobile.container}>
    <div className={styles.mobile.search}>
      <Search />
    </div>
  </div>
));

MobileNav.displayName = 'MobileNav';

const MobileDrawer = memo(({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <div
    className={`${styles.mobile.drawer.container} ${
      isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
    }`}
  >
    <div
      className={`${styles.mobile.drawer.backdrop} ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    />
    <nav className={styles.mobile.drawer.content}>
      <button
        className={styles.mobile.drawer.closeButton}
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
            className={styles.mobile.drawer.link}
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

const CartDropdown = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
  }, []);

  // Mock cart items - replace with actual cart data later
  const cartItems = [
    {
      id: 1,
      name: 'Gaming Mouse X1',
      price: 2999,
      image: '/images/1.jpg',
    },
    {
      id: 2,
      name: 'Mechanical Keyboard Pro',
      price: 4999,
      image: '/images/2.jpg',
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div 
      className={styles.user.cart.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={styles.user.cart.button}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <img src="/icon/cart.svg" alt="Корзина" className="w-5 h-5 brightness-0 invert" />
        {cartItems.length > 0 && (
          <div className={styles.user.cart.counter}>
            {cartItems.length}
          </div>
        )}
      </button>
      <div
        className={`${styles.user.cart.dropdown} ${
          isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        role="menu"
        aria-label="Корзина"
      >
        {cartItems.length > 0 ? (
          <>
            <div className={styles.user.cart.items}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.user.cart.item}>
                  <img src={item.image} alt={item.name} className={styles.user.cart.itemImage} />
                  <div className={styles.user.cart.itemInfo}>
                    <div className={styles.user.cart.itemName}>{item.name}</div>
                    <div className={styles.user.cart.itemPrice}>{item.price.toLocaleString()} ₴</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.user.cart.total}>
              <div className={styles.user.cart.totalText}>
                <span>Итого:</span>
                <span>{total.toLocaleString()} ₴</span>
              </div>
            </div>
            <Link href="/cart" className={styles.user.cart.cartButton}>
              Перейти в корзину
            </Link>
          </>
        ) : (
          <div className={styles.user.cart.empty}>
            В корзине пока ничего нет
          </div>
        )}
      </div>
    </div>
  );
});

CartDropdown.displayName = 'CartDropdown';

// Main Component
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useCallback(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header.base}>
      <div className={styles.header.container}>
        {/* Logo */}
        <Link href="/" aria-label="На главную" className={styles.logo.container}>
          <span className={styles.logo.text}>HyperByte</span>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* User Account */}
        <div className={styles.user.container}>
          <UserAccount username="Domitori" avatarUrl="/ava.jpg" />
          <CartDropdown />
        </div>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>

      {/* Spacer */}
      <div className={styles.header.spacer} />

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
