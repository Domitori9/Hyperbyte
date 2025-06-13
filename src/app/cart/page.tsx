'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import styles from './cart.module.scss'

interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    image: string
}

export default function CartPage() {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [isLoading, setIsLoading] = useState(true)

    // This will be replaced with actual API call
    useEffect(() => {
        // Simulating API call
        const fetchCartItems = async () => {
            try {
                // TODO: Replace with actual API call
                // const response = await fetch('/api/cart')
                // const data = await response.json()
                // setCartItems(data)
                
                // Temporary mock data
                setCartItems([])
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching cart items:', error)
                setIsLoading(false)
            }
        }

        fetchCartItems()
    }, [])

    const updateQuantity = async (itemId: string, newQuantity: number) => {
        if (newQuantity < 1) return

        try {
            // TODO: Replace with actual API call
            // await fetch(`/api/cart/${itemId}`, {
            //     method: 'PATCH',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ quantity: newQuantity })
            // })

            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === itemId ? { ...item, quantity: newQuantity } : item
                )
            )
        } catch (error) {
            console.error('Error updating quantity:', error)
        }
    }

    const removeItem = async (itemId: string) => {
        try {
            // TODO: Replace with actual API call
            // await fetch(`/api/cart/${itemId}`, { method: 'DELETE' })

            setCartItems(prevItems => prevItems.filter(item => item.id !== itemId))
        } catch (error) {
            console.error('Error removing item:', error)
        }
    }

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    if (isLoading) {
        return (
            <div className={styles.cartContainer}>
                <div className={styles.cartContent}>
                    <div className={styles.emptyCart}>
                        <p>Завантаження...</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.cartContainer}>
            <div className={styles.cartContent}>
                <div className={styles.cartHeader}>
                    <h1>Кошик</h1>
                </div>

                {cartItems.length === 0 ? (
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
                            {cartItems.map((item) => (
                                <div key={item.id} className={styles.cartItem}>
                                    <div className={styles.itemImage}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <h3>{item.name}</h3>
                                        <div className={styles.itemMeta}>
                                            Артикул: {item.id}
                                        </div>
                                        <div className={styles.itemPrice}>
                                            {item.price} ₴
                                        </div>
                                    </div>
                                    <div className={styles.quantityControl}>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        className={styles.removeButton}
                                        onClick={() => removeItem(item.id)}
                                    >
                                        <Image
                                            src="/icon/trash.svg"
                                            alt="remove"
                                            width={24}
                                            height={24}
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className={styles.cartSummary}>
                            <div className={styles.summaryRow}>
                                <span>Проміжний підсумок</span>
                                <span>{calculateTotal()} ₴</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Доставка</span>
                                <span>Безкоштовно</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Разом</span>
                                <span>{calculateTotal()} ₴</span>
                            </div>
                            <button
                                className={styles.checkoutButton}
                                onClick={() => {
                                    // TODO: Implement checkout logic
                                    console.log('Proceeding to checkout...')
                                }}
                            >
                                Оформити замовлення
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
} 