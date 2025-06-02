import ProductCard from "@/components/ProductCard";
import PadFilters from "@/components/PadFilters";
import styles from "../../styles/page.module.css";

// export const metadata = {
//   title: 'HyperByte | Коврики',
// };

const products = [
  { id: 1, name: "Коврик Razer", price: 800, imageUrl: "/images/1.jpg" },
  { id: 2, name: "Коврик Logitech", price: 600, imageUrl: "/images/1.jpg" },
  { id: 3, name: "Коврик HyperX", price: 700, imageUrl: "/images/1.jpg" },
  { id: 4, name: "Коврик Razer", price: 800, imageUrl: "/images/1.jpg" },
  { id: 5, name: "Коврик Logitech", price: 600, imageUrl: "/images/1.jpg" },
  { id: 6, name: "Коврик HyperX", price: 700, imageUrl: "/images/1.jpg" },
];

export default function PadPage() {
  return (
    <>

      <div className={styles.container}>
        <div className={styles.filters}>
          <PadFilters />
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
