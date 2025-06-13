'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './ProductsSection.module.scss';
import ProductCard from './ProductCard';

// Temporary mock data
const newProducts = [
	{
		id: 1,
		title: 'Ігрова миша RGB',
		price: '2999 ₴',
		image: '/images/products/6.jpg',
		category: 'mouse',
	},
	{
		id: 2,
		title: 'Механічна клавіатура',
		price: '5999 ₴',
		image: '/images/products/6.jpg',
		category: 'keyboard',
	},
	{
		id: 3,
		title: 'Ігрова гарнітура',
		price: '3999 ₴',
		image: '/images/products/6.jpg',
		category: 'headphones',
	},
	{
		id: 4,
		title: 'Ігровий килимок',
		price: '1999 ₴',
		image: '/images/products/6.jpg',
		category: 'pad',
	},
];

export default function NewProducts() {
	return (
		<section className={styles.productsSection}>
			<h2 className={styles.sectionTitle}>Новинки</h2>
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
				{newProducts.map((product) => (
					<SwiperSlide key={product.id}>
						<ProductCard {...product} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}