'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import styles from './ProductsSection.module.scss';
import ProductCard from './ProductCard';

export default function NewProducts() {
	const [products, setProducts] = useState<any[]>([]);
	useEffect(() => {
		fetch('/api/products')
			.then((res) => res.json())
			.then((data) => {
				setProducts((data.products || []).slice(0, 6));
			});
	}, []);
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
				{products.map((product) => (
					<SwiperSlide key={product.id}>
						<ProductCard
							id={product.id}
							title={product.name || product.title}
							price={product.price}
							image={product.image_url || product.image}
							category={product.category}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}