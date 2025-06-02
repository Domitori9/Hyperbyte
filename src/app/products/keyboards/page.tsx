import ProductCard from "@/components/ProductCard";
import KeyboardFilters from "@/components/KeyboardFilters";
import styles from "../../styles/page.module.css";

// export const metadata = {
//   title: 'HyperByte | Клавиатуры',
// };

const products = [
  { id: 1, name: "Клавиатура Logitech", price: 1200, imageUrl: "/images/1.jpg" },
  { id: 2, name: "Клавиатура Razer", price: 2500, imageUrl: "/images/2.jpg" },
  { id: 3, name: "Клавиатура HyperX", price: 1800, imageUrl: "/images/3.jpg" },
  { id: 4, name: "Клавиатура Logitech", price: 1200, imageUrl: "/images/4.jpg" },
  { id: 5, name: "Клавиатура Razer", price: 2500, imageUrl: "/images/5.jpg" },
  { id: 6, name: "Клавиатура HyperX", price: 1800, imageUrl: "/images/6.jpg" },
];

export default function KeyboardsPage() {
  return (
    <>
    
      <div className={styles.container}>
        <div className={styles.filters}>
          <KeyboardFilters />
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