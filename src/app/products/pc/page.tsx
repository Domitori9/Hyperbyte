import ProductCard from "@/components/ProductCard";
import PCFilters from "@/components/PCFilters";
import styles from "../../styles/page.module.css";

// export const metadata = {
//   title: 'HyperByte | Системники',
// };

const products = [
  { id: 1, name: "ПК Gaming Pro", price: 25000, imageUrl: "/images/1.jpg" },
  { id: 2, name: "ПК Workstation", price: 35000, imageUrl: "/images/1.jpg" },
  { id: 3, name: "ПК Home", price: 18000, imageUrl: "/images/1.jpg" },
  { id: 4, name: "ПК Gaming Pro", price: 25000, imageUrl: "/images/1.jpg" },
  { id: 5, name: "ПК Workstation", price: 35000, imageUrl: "/images/1.jpg" },
  { id: 6, name: "ПК Home", price: 18000, imageUrl: "/images/1.jpg" },
];

export default function PCPage() {
  return (
    <>

      <div className={styles.container}>
        <div className={styles.filters}>
          <PCFilters />
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
