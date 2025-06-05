import ProductCard from "@/components/ProductCard";
import KeyboardFilters from "@/components/KeyboardFilters";
import HeadphonesFilters from "@/components/HeadphonesFilters";
import MouseFilters from "@/components/MouseFilters";
import MonitorFilters from "@/components/MonitorFilters";
import PadFilters from "@/components/PadFilters";
import LaptopFilters from "@/components/LaptopFilters";
import PCFilters from "@/components/PCFilters";
import styles from "../../styles/page.module.css";
import { notFound } from "next/navigation";

// This file defines the product category page in a Next.js application.
const productsData: Record<string, any[]> = {
  pc: [
    { id: 1, name: "ПК Gaming Pro", price: 25000, imageUrl: "/images/1.jpg" },
    { id: 2, name: "ПК Gaming Pro", price: 25000, imageUrl: "/images/1.jpg" },
    { id: 3, name: "ПК Gaming Pro", price: 25000, imageUrl: "/images/1.jpg" },
    { id: 4, name: "ПК Gaming Pro", price: 25000, imageUrl: "/images/1.jpg" },
  ],
  mouse: [
    { id: 1, name: "Мышка A4Tech", price: 350, imageUrl: "/images/1.jpg" },
    { id: 2, name: "Мышка A4Tech", price: 350, imageUrl: "/images/1.jpg" },
    { id: 3, name: "Мышка A4Tech", price: 350, imageUrl: "/images/1.jpg" },
    { id: 4, name: "Мышка A4Tech", price: 350, imageUrl: "/images/1.jpg" },
  ],
  keyboards: [
    { id: 1, name: "Клавиатура Logitech", price: 1200, imageUrl: "/images/1.jpg" },
  ],
  monitor: [
    { id: 1, name: "Монитор ASUS", price: 8000, imageUrl: "/images/1.jpg" },
  ],
  headphones: [
    { id: 1, name: "Наушники HyperX", price: 2500, imageUrl: "/images/1.jpg" },
  ],
  pad: [
    { id: 1, name: "Коврик Razer", price: 800, imageUrl: "/images/1.jpg" },
  ],
  laptop: [
    { id: 1, name: "Ноутбук ASUS ROG", price: 35000, imageUrl: "/images/1.jpg" },
  ],
};

// Mapping of product categories to their respective filter components
const filtersMap: Record<string, React.FC> = {
  pc: PCFilters,
  mouse: MouseFilters,
  keyboards: KeyboardFilters,
  monitor: MonitorFilters,
  headphones: HeadphonesFilters,
  pad: PadFilters,
  laptop: LaptopFilters,
};

// Маппинг метаданных для каждой категории
const metadataMap: Record<string, { title: string; description: string }> = {
  pc: { title: "ПК", description: "Игровые ПК Hyperbyte" },
  mouse: { title: "Мыши", description: "Игровые мыши Hyperbyte" },
  keyboards: { title: "Клавиатуры", description: "Игровые клавиатуры Hyperbyte" },
  monitor: { title: "Мониторы", description: "Игровые мониторы Hyperbyte" },
  headphones: { title: "Наушники", description: "Игровые наушники Hyperbyte" },
  pad: { title: "Коврики", description: "Игровые коврики Hyperbyte" },
  laptop: { title: "Ноутбуки", description: "Игровые ноутбуки Hyperbyte" },
};

// Функция генерации метаданных для Next.js App Router
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await Promise.resolve(params);
  const meta = metadataMap[slug] || { title: "Категория", description: "Товары Hyperbyte" };
  return {
    title: meta.title,
    description: meta.description,
  };
}

// Next.js 14+ App Router: params must be awaited in dynamic routes
export default async function ProductCategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = await Promise.resolve(params);
  const products = productsData[slug];
  const FilterComponent = filtersMap[slug];

  if (!products || !FilterComponent) return notFound();

  return (
    <>
    <h1 className="text-center text-5xl mt-24">{metadataMap[slug]?.title || "Категория"}</h1>
    <div className={styles.container}>
      <div className={styles.filters}>
        <FilterComponent />
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
