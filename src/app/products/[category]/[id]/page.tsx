"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "../styles/CategoryPage.module.scss";

const CATEGORY_LABELS: Record<string, string> = {
  pc: "ПК",
  mouse: "Миші",
  keyboard: "Клавіатури",
  monitor: "Монітори",
  headphones: "Навушники",
  pad: "Килимки",
  laptop: "Ноутбуки",
};
const CATEGORY_FIELDS: Record<string, { label: string; field: string }[]> = {
  pc: [
    { label: "CPU", field: "cpu" },
    { label: "GPU", field: "gpu" },
    { label: "RAM", field: "ram" },
  ],
  mouse: [
    { label: "Тип", field: "type" },
    { label: "DPI", field: "dpi" },
    { label: "Бренд", field: "brand" },
  ],
  keyboard: [
    { label: "Тип", field: "type" },
    { label: "Підсвітка", field: "backlight" },
    { label: "Бренд", field: "brand" },
  ],
  monitor: [
    { label: "Діагональ", field: "size" },
    { label: "Частота", field: "hz" },
    { label: "Роздільна здатність", field: "resolution" },
  ],
  headphones: [
    { label: "Тип", field: "type" },
    { label: "Мікрофон", field: "mic" },
    { label: "Бренд", field: "brand" },
  ],
  pad: [
    { label: "Розмір", field: "size" },
    { label: "Матеріал", field: "material" },
  ],
  laptop: [
    { label: "CPU", field: "cpu" },
    { label: "RAM", field: "ram" },
    { label: "Бренд", field: "brand" },
  ],
};

export default function ProductDetailPage() {
  const params = useParams();
  const { category, id } = params as { category: string; id: string };
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const res = await fetch(`/api/products?id=${id}`);
      const data = await res.json();
      setProduct(data.product || null);
      setLoading(false);
    }
    if (id) fetchProduct();
  }, [id]);

  if (loading) return <div className={styles.loading}>Завантаження...</div>;
  if (!product) return <div className={styles.empty}>Товар не знайдено</div>;

  return (
    <>
      <Header />
      <div className={styles.categoryPage + " dark"} style={{width: '100vw', minHeight: '100vh', maxWidth: '100vw', margin: 0, borderRadius: 0, boxShadow: 'none', padding: '4.5rem 0 3rem 0', background: 'linear-gradient(120deg, #181a20 60%, #23262f 100%)'}}>
        <div style={{
        minHeight: '80vh',
        maxWidth: 1200,
        margin: '4.5rem auto 2rem auto',
        borderRadius: 24,
        boxShadow: '0 8px 48px #0ea5e933',
        padding: '3.5rem 2.5rem 2.5rem 2.5rem',
        background: 'linear-gradient(135deg, #181a20 60%, #23262f 100%)',
        display: 'flex',
        flexDirection: 'row',
        gap: 48,
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}>
          <img
            src={product.image_url}
            alt={product.name}
            style={{
              width: 380,
              height: 380,
              objectFit: 'cover',
              borderRadius: 18,
              boxShadow: '0 2px 24px #0ea5e933',
              background: '#181a20',
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1, minWidth: 280 }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#38bdf8', marginBottom: 20, letterSpacing: 0.01 }}>{product.name}</h1>
            <div style={{ fontSize: '1.25rem', color: '#f3f4f6', marginBottom: 18 }}>{product.description}</div>
            <div style={{ fontSize: '1.7rem', fontWeight: 700, color: '#0ea5e9', marginBottom: 28 }}>{product.price} ₴</div>
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontWeight: 600, color: '#38bdf8', marginBottom: 10, fontSize: '1.1rem' }}>
                Категорія: {CATEGORY_LABELS[category] || category}
              </div>
              {CATEGORY_FIELDS[category]?.map(({ label, field }) => (
                product[field] ? (
                  <div key={field} style={{ marginBottom: 8, color: '#a1a1aa', fontSize: '1.13rem' }}>
                    <b style={{ color: '#38bdf8' }}>{label}: </b>{String(product[field])}
                  </div>
                ) : null
              ))}
            </div>
            <button style={{
            background: 'linear-gradient(90deg,#38bdf8 60%,#2563eb 100%)',
            color: 'white',
            border: 0,
            borderRadius: 12,
            padding: '1.1rem 2.5rem',
            fontWeight: 800,
            fontSize: '1.18rem',
            boxShadow: '0 2px 16px #38bdf81a',
            cursor: 'pointer',
            marginTop: 18,
            letterSpacing: 0.01,
          }}>
              Купити
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
