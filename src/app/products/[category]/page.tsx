'use client';
import { useEffect, useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import type { ProductCardProps } from '@/types/shop';
import styles from "./styles/CategoryPage.module.scss";
import { useParams } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { fetchProductsByCategory } from '@/utils/fetchProductsByCategory';

const CATEGORY_MAP: Record<string, string> = {
  pc: "ПК",
  mouse: "Миші",
  keyboard: "Клавіатури",
  monitor: "Монітори",
  headphones: "Навушники",
  pad: "Килимки",
  laptop: "Ноутбуки",
};

const FILTERS: Record<string, { label: string; field: string; options: string[] }[]> = {
  pc: [
    { label: "CPU", field: "cpu", options: ["Intel", "AMD", "Apple"] },
    { label: "GPU", field: "gpu", options: ["NVIDIA", "AMD", "Intel"] },
    { label: "RAM", field: "ram", options: ["8GB", "16GB", "32GB", "64GB+"] },
  ],
  mouse: [
    { label: "Тип", field: "type", options: ["Провідна", "Бездротова"] },
    { label: "DPI", field: "dpi", options: ["800", "1600", "3200", "6400+"] },
    { label: "Бренд", field: "brand", options: ["Logitech", "Razer", "SteelSeries", "Hator"] },
  ],
  keyboard: [
    { label: "Тип", field: "type", options: ["Механічна", "Мембранна"] },
    { label: "Підсвітка", field: "backlight", options: ["RGB", "Без підсвітки"] },
    { label: "Бренд", field: "brand", options: ["Logitech", "Razer", "SteelSeries", "HyperX"] },
  ],
  monitor: [
    { label: "Діагональ", field: "size", options: ["24", "27", "32", "34+"] },
    { label: "Частота", field: "hz", options: ["60Hz", "75Hz", "144Hz", "240Hz"] },
    { label: "Роздільна здатність", field: "resolution", options: ["FullHD", "2K", "4K"] },
  ],
  headphones: [
    { label: "Тип", field: "type", options: ["Накладні", "Вакуумні", "Повнорозмірні"] },
    { label: "Мікрофон", field: "mic", options: ["З мікрофоном", "Без мікрофона"] },
    { label: "Бренд", field: "brand", options: ["HyperX", "Razer", "SteelSeries", "Sony"] },
  ],
  pad: [
    { label: "Розмір", field: "size", options: ["Малий", "Середній", "Великий"] },
    { label: "Матеріал", field: "material", options: ["Тканина", "Пластик", "Метал"] },
  ],
  laptop: [
    { label: "CPU", field: "cpu", options: ["Intel", "AMD", "Apple"] },
    { label: "RAM", field: "ram", options: ["8GB", "16GB", "32GB", "64GB+"] },
    { label: "Бренд", field: "brand", options: ["Apple", "Asus", "HP", "Lenovo"] },
  ],
};

export default function CategoryPage() {
  const params = useParams();
  const category = params?.category as string;
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>( {} );

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const productsData = await fetchProductsByCategory(category);
      setProducts(productsData);
      setLoading(false);
    }
    if (category) fetchProducts();
  }, [category]);

  const handleFilterChange = (field: string, value: string) => {
    setSelectedFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredProducts = products.filter((product: any) => {
    return FILTERS[category]?.every((filter) => {
      if (!selectedFilters[filter.field]) return true;
      return (
        product[filter.field]?.toString().toLowerCase() ===
        selectedFilters[filter.field].toLowerCase()
      );
    });
  });

  return (
    <>
      <Header />
      <div className={styles.categoryPage + " dark"}>
        <h1 className={styles.title}>{CATEGORY_MAP[category] || "Товари"}</h1>
        <div className={styles.filters}>
          {FILTERS[category]?.map((filter) => (
            <div key={filter.field} className={styles.filterBlock}>
              <div className={styles.filterLabel}>{filter.label}</div>
              <div className={styles.filterOptions}>
                {filter.options.map((option) => (
                  <button
                    key={option}
                    className={
                      styles.filterOptionButton +
                      (selectedFilters[filter.field] === option ? ' ' + styles.active : '')
                    }
                    onClick={() => handleFilterChange(filter.field, option)}
                    type="button"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        {loading ? (
          <div className={styles.loading}>Завантаження...</div>
        ) : filteredProducts.length === 0 ? (
          <div className={styles.empty}>Нічого не знайдено</div>
        ) : (
          <div className={styles.productsGrid}>
            {filteredProducts.map((product: any) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.name || product.title}
                price={product.price}
                image={product.image_url || product.image}
                category={product.category}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
