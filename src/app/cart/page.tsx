'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useCartStore } from '@/lib/cartStore';
import { CheckoutModal } from '@/components/cart/CheckoutModal';
import styles from './cart.module.scss'

export default function CartPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const cart = useCartStore((state: any) => state.cart);
    const updateQuantity = useCartStore((state: any) => state.updateQuantity);
    const removeFromCart = useCartStore((state: any) => state.removeFromCart);
    const clearCart = useCartStore((state: any) => state.clearCart);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    const total = cart.reduce((sum: number, item: any) => sum + Number(item.price) * item.quantity, 0);

    const handleCheckout = (data: { email: string; city: string; address: string; fullname: string; card: string }) => {
        setIsCheckoutOpen(false);
        setOrderSuccess(true);
        clearCart();
        setTimeout(() => setOrderSuccess(false), 3000);
    };

    return (
        <div className={styles.cartContainer}>
            <div className={styles.cartContent}>
                <div className={styles.cartHeader}>
                    <h1>Кошик</h1>
                </div>

                {isLoading ? (
                    <div>Завантаження...</div>
                ) : cart.length === 0 ? (
                    <div className={styles.emptyCart}>
                        <div className={styles.iconWrapper}>
                            <Image 
                                src="/icon/cart.svg" 
                                alt="cart" 
                                width={40} 
                                height={40}
                            />
                        </div>
                        <h2>Ваш кошик порожній</h2>
                        <p>Додайте товари до кошика, щоб оформити замовлення</p>
                        <Link href="/" className={styles.continueShopping}>
                            Перейти до покупок
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className={styles.cartItems}>
                            {cart.map((item: any) => (
                                <div className={styles.cartItem} key={item.id}>
                                    <div className={styles.itemImage}>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <h3>{item.title}</h3>
                                        <div className={styles.itemMeta}>{item.category}</div>
                                        <div className={styles.itemPrice}>{item.price} грн</div>
                                    </div>
                                    <div className={styles.quantityControl}>
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <div className={styles.itemPrice}>{Number(item.price) * item.quantity} грн</div>
                                    <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>
                                        Видалити
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className={styles.cartSummary}>
                            <div className={styles.summaryRow}>
                                <span>Всього товарів:</span>
                                <span>{cart.reduce((sum: number, item: any) => sum + item.quantity, 0)}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Сума до сплати:</span>
                                <span>{total} грн</span>
                            </div>
                            <button className={styles.checkoutButton} disabled={cart.length === 0} onClick={() => setIsCheckoutOpen(true)}>Оформити замовлення</button>
                            <button className={styles.checkoutButton} style={{background:'#ef4444',marginTop:'0.5rem'}} onClick={clearCart}>Очистити кошик</button>
                        </div>
                    </>
                )}
            </div>
            <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} onSubmit={handleCheckout} />
            {orderSuccess && (
                <div className={styles.orderSuccess}>Дякуємо за замовлення! Ми зв'яжемося з вами найближчим часом.</div>
            )}
        </div>
    )
}