import ProductCard from "@/components/ProductCard";
import LaptopFilters from "@/components/LaptopFilters";
import styles from "../../styles/page.module.css";

// export const metadata = {
//   title: 'HyperByte | Ноутбуки',
// };

const products = [
  { id: 1, name: "Ноутбук ASUS ROG", price: 35000, imageUrl: "/images/1.jpg" },
  { id: 2, name: "Ноутбук MSI", price: 40000, imageUrl: "/images/1.jpg" },
  { id: 3, name: "Ноутбук HP", price: 28000, imageUrl: "/images/1.jpg" },
  { id: 4, name: "Ноутбук ASUS ROG", price: 35000, imageUrl: "/images/1.jpg" },
  { id: 5, name: "Ноутбук MSI", price: 40000, imageUrl: "/images/1.jpg" },
  { id: 6, name: "Ноутбук HP", price: 28000, imageUrl: "/images/1.jpg" },
];

export default function LaptopPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.filters}>
          <LaptopFilters />
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
