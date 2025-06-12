'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './ProductsSection.module.scss';

// Temporary mock data
const popularProducts = [
  {
    id: 1,
    title: 'Gaming Monitor 27"',
    price: '24999 ₴',
    image: '/images/products/6.jpg'
  },
  {
    id: 2,
    title: 'Gaming Chair',
    price: '15999 ₴',
    image: '/images/products/6.jpg'
  },
  {
    id: 3,
    title: 'Gaming PC',
    price: '89999 ₴',
    image: '/images/products/6.jpg'
  },
  {
    id: 4,
    title: 'Gaming Console',
    price: '39999 ₴',
    image: '/images/products/6.jpg'
  },
  {
    id: 5,
    title: 'Gaming Console',
    price: '39999 ₴',
    image: '/images/products/6.jpg'
  },
  {
    id: 6,
    title: 'Gaming Console',
    price: '39999 ₴',
    image: '/images/products/6.jpg'
  },
  {
    id: 7,
    title: 'Gaming Console',
    price: '39999 ₴',
    image: '/images/products/6.jpg'
  },
  {
    id: 8,
    title: 'Gaming Console',
    price: '39999 ₴',
    image: '/images/products/6.jpg'
  },
];

export default function PopularProducts() {
  return (
    <section className={styles.productsSection}>
      <h2 className={styles.sectionTitle}>Популярные товары</h2>
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
            <div className={styles.productCard}>
              <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.title} />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.price}>{product.price}</p>
                <button className={styles.cartButton}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  В корзину
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
} 