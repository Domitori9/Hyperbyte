import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, imageUrl, slug }) => {
  return (
    <Link href={`/products/${slug}/${id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{price.toLocaleString()} ₴</p>
      </div>
    </Link>
  );
};

export default ProductCard; 