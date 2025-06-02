'use client';
import ProductCard from "@/components/ProductCard";
import MonitorFilters from "@/components/MonitorFilters";
import styles from "../../styles/page.module.css";

// export const metadata = {
//   title: 'HyperByte | Мониторы',
// };

const products = [
  { id: 1, name: "Монитор ASUS", price: 8000, imageUrl: "/images/1.jpg" },
  { id: 2, name: "Монитор Samsung", price: 12000, imageUrl: "/images/1.jpg" },
  { id: 3, name: "Монитор LG", price: 9000, imageUrl: "/images/1.jpg" },
  { id: 4, name: "Монитор ASUS", price: 8000, imageUrl: "/images/1.jpg" },
  { id: 5, name: "Монитор Samsung", price: 12000, imageUrl: "/images/1.jpg" },
  { id: 6, name: "Монитор LG", price: 9000, imageUrl: "/images/1.jpg" },
];

export default function MonitorPage() {
  return (
    <>
  
      <div className={styles.container}>
        <div className={styles.filters}>
          <MonitorFilters />
        </div>
        <div className={styles.productsMain}>
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} Product={product} />
            ))}
          </div>
        </div>
      </div>
  
    </>
  );
}
