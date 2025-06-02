import ProductCard from "@/components/ProductCard";
import HeadphonesFilters from "@/components/HeadphonesFilters";
import styles from "../../styles/page.module.css";

// export const metadata = {
//   title: 'HyperByte | Наушники',
// };

const products = [
  { id: 1, name: "Наушники HyperX", price: 2500, imageUrl: "/images/1.jpg" },
  { id: 2, name: "Наушники Razer", price: 3000, imageUrl: "/images/1.jpg" },
  { id: 3, name: "Наушники Logitech", price: 2000, imageUrl: "/images/1.jpg" },
  { id: 4, name: "Наушники HyperX", price: 2500, imageUrl: "/images/1.jpg" },
  { id: 5, name: "Наушники Razer", price: 3000, imageUrl: "/images/1.jpg" },
  { id: 6, name: "Наушники Logitech", price: 2000, imageUrl: "/images/1.jpg" },
];

export default function HeadphonesPage() {
  return (
    <>
      
      <div className={styles.container}>
        <div className={styles.filters}>
          <HeadphonesFilters />
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
