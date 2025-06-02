import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/MouseFilters";
import styles from "../../styles/page.module.css";

// export const metadata = {
//   title: 'HyperByte | Мышки',
// };
// This file is part of HyperByte, a fictional e-commerce platform.
const products = [
  { id: 1, name: "Мышка A4Tech", price: 350, imageUrl: "/images/1.jpg" },
  { id: 2, name: "Logitech G102", price: 800, imageUrl: "/images/2.jpg" },
  { id: 3, name: "Razer DeathAdder", price: 1600, imageUrl: "/images/3.jpg" },
  { id: 4, name: "Мышка A4Tech", price: 350, imageUrl: "/images/4.jpg" },
  { id: 5, name: "Logitech G102", price: 800, imageUrl: "/images/5.jpg" },
  { id: 6, name: "Razer DeathAdder", price: 1600, imageUrl: "/images/6.jpg" },
  { id: 7, name: "Мышка A4Tech", price: 350, imageUrl: "/images/7.jpg" },
  { id: 8, name: "Logitech G102", price: 800, imageUrl: "/images/8.jpg" },
  { id: 9, name: "Razer DeathAdder", price: 1600, imageUrl: "/images/9.jpg" },
  { id: 10, name: "Мышка A4Tech", price: 350, imageUrl: "/images/1.jpg" },
  { id: 11, name: "Logitech G102", price: 800, imageUrl: "/images/1.jpg" },
  { id: 12, name: "Razer DeathAdder", price: 1600, imageUrl: "/images/1.jpg" },
];

export default function MousePage() {
  return ( 
    <>
  
      <div className={styles.container}>
      {/* Левая панель фильтров */}
      <div className={styles.filters}>
        <ProductFilters />
      </div>
      {/* Правая часть — товары */}
      <div className={styles.productsMain}>
        <div className={styles.productsGrid}>
          {/* Карточка товара */}
          {products.map((product) => (
            <ProductCard key={product.id} Product={product} />
          ))}
        </div>
      </div>
    </div>
 
    </>
  )
}
