import Image from "next/image";
import styles from './CardComponent.module.css';
import React from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
};

export default function ProductCard({ Product }: { Product: Product }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        {Product.imageUrl ? (
          <Image
            src={Product.imageUrl}
            alt={Product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
            priority
          />
        ) : (
          <div className={styles.noImage}>
            Зображення відсутнє
          </div>
        )}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.productName}>{Product.name}</h3>
        <div className={styles.price}>{Product.price.toFixed(2)} ₴</div>
        <button className={styles.addToCartButton}>
          Додати в кошик
        </button>
      </div>
    </div>
  );
}

// Container component for the cards grid
export function ProductCardsGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.cardsContainer}>
      {children}
    </div>
  );
}


