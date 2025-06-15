"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useCartStore } from '@/lib/cartStore';
import { fetchProductById } from '@/utils/fetchProductById';
import productStyles from "../styles/ProductPage.module.scss";

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
  const addToCart = useCartStore((state: any) => state.addToCart);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const productData = await fetchProductById(id);
      setProduct(productData);
      setLoading(false);
    }
    if (id) fetchProduct();
  }, [id]);

  const handleAdd = () => {
    if (!product) return;
    addToCart({
      id: product.id,
      title: product.name,
      price: product.price,
      image: product.image_url,
      category: product.category,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  if (loading) return <div className={productStyles.loading}>Завантаження...</div>;
  if (!product) return <div className={productStyles.empty}>Товар не знайдено</div>;

  // --- Блок преимуществ ---
  const benefits = [
    { text: "Гарантія 12 міс." },
    { text: "Швидка доставка" },
    { text: "Топ сервіс" },
  ];

  return (
    <>
      <Header />
      <div className={productStyles.productPageContainer}>
        <div className={productStyles.productCard}>
          <div className={productStyles.productImageBlock}>
            <img
              src={product.image_url}
              alt={product.name}
            />
          </div>
          <div className={productStyles.productInfoBlock}>
            <h1 className={productStyles.productTitle}>{product.name}</h1>
            <div className={productStyles.productCategory}>{CATEGORY_LABELS[category] || category}</div>
            <div className={productStyles.productId}><b>ID:</b> {product.id}</div>
            <div className={productStyles.productDescription}>{product.description}</div>
            <div className={productStyles.productPrice}>{product.price} ₴</div>
            <div className={productStyles.productSpecs}>
              {CATEGORY_FIELDS[category]?.map(({ label, field }) => (
                product[field] ? (
                  <div key={field} className={productStyles.productSpec}>
                    <span className={productStyles.productSpecLabel}>{label}</span>
                    <span>{String(product[field])}</span>
                  </div>
                ) : null
              ))}
            </div>
            <button
              onClick={handleAdd}
              className={productStyles.productAddButton + (added ? ' ' + productStyles.added : '')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{marginRight: 8}}>
                <circle cx="8" cy="21" r="1"/>
                <circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
              {added ? 'Додано!' : 'До кошика'}
            </button>
            <div className={productStyles.benefitsBlock}>
              {benefits.map((b, i) => (
                <div className={productStyles.benefitItem} key={i}>
                  {b.text}
                </div>
              ))}
            </div>
            <div className={productStyles.deliveryBlock}>
              Доставка по Україні 1-3 дні. Оплата при отриманні. Повернення 14 днів.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
