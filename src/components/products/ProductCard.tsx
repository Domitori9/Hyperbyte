'use client';

import React from 'react';
import Link from 'next/link';
import { useCartStore } from '@/lib/cartStore';
import { ProductCardProps } from '../../types/shop';
import styles from './ProductsSection.module.scss';

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image, category }) => {
  const addToCart = useCartStore((state: any) => state.addToCart);
  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, title, price, image, category });
  };
  return (
    <Link href={`/products/${category}/${id}`} className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <img src={image || "/ava.jpg"} alt={title} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price}</p>
        <button className={styles.cartButton} onClick={handleAdd}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          До кошика
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
