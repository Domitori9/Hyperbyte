'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './ProductsSection.module.scss';
import ProductCard from './ProductCard';

// Temporary mock data
const popularProducts = [
  {
    id: 1,
    title: 'Ігровий монітор 27"',
    price: '24999 ₴',
    image: '/images/products/6.jpg',
    category: 'monitor',
  },
  {
    id: 2,
    title: 'Ігрове крісло',
    price: '15999 ₴',
    image: '/images/products/6.jpg',
    category: 'other',
  },
  {
    id: 3,
    title: 'Ігровий ПК',
    price: '89999 ₴',
    image: '/images/products/6.jpg',
    category: 'pc',
  },
  {
    id: 4,
    title: 'Ігрова консоль',
    price: '39999 ₴',
    image: '/images/products/6.jpg',
    category: 'other',
  },
  {
    id: 5,
    title: 'Ігрова консоль',
    price: '39999 ₴',
    image: '/images/products/6.jpg',
    category: 'other',
  },
  {
    id: 6,
    title: 'Ігрова консоль',
    price: '39999 ₴',
    image: '/images/products/6.jpg',
    category: 'other',
  },
  {
    id: 7,
    title: 'Ігрова консоль',
    price: '39999 ₴',
    image: '/images/products/6.jpg',
    category: 'other',
  },
  {
    id: 8,
    title: 'Ігрова консоль',
    price: '39999 ₴',
    image: '/images/products/6.jpg',
    category: 'other',
  },
];

export default function PopularProducts() {
  return (
    <section className={styles.productsSection}>
      <h2 className={styles.sectionTitle}>Популярні товари</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className={styles.swiper}
      >
        {popularProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}