'use client';
import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./admin.module.scss";

const CATEGORY_OPTIONS = [
  { value: "pc", label: "ПК" },
  { value: "mouse", label: "Миші" },
  { value: "keyboard", label: "Клавіатури" },
  { value: "monitor", label: "Монітори" },
  { value: "headphones", label: "Навушники" },
  { value: "pad", label: "Килимки" },
  { value: "laptop", label: "Ноутбуки" },
];

const CATEGORY_FIELDS: Record<string, { label: string; field: string; type?: string; options?: string[] }[]> = {
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

export default function AdminPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [editProduct, setEditProduct] = useState<any | null>(null);
  const [form, setForm] = useState<any>({ name: "", price: "", category: "", description: "", image_url: "" });
  const [isAdmin, setIsAdmin] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Проверка прав администратора
    fetch("/api/auth/profile").then(async (res) => {
      const data = await res.json();
      setIsAdmin(data.profile?.is_admin === true);
    });
  }, []);

  useEffect(() => {
    if (!isAdmin) return;
    fetch("/api/products").then(async (res) => {
      const data = await res.json();
      setProducts(data.products || []);
      setLoading(false);
    });
  }, [isAdmin]);

  if (!isAdmin) {
    return (
      <>
        <Header />
        <div className={styles.adminPage}><h2>Доступ заборонено</h2></div>
        <Footer />
      </>
    );
  }

  const handleInput = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      const newProduct = await res.json();
      setForm({ name: "", price: "", category: "", description: "", image_url: "" });
      setProducts((prev) => [...prev, newProduct]);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Видалити товар?")) return;
    await fetch(`/api/products?id=${id}`, { method: "DELETE" });
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleEdit = (product: any) => {
    setEditProduct(product);
    setForm(product);
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`/api/products?id=${editProduct.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setProducts((prev) => prev.map((p) => (p.id === editProduct.id ? { ...p, ...form } : p)));
      setEditProduct(null);
      setForm({ name: "", price: "", category: "", description: "", image_url: "" });
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    // Можно реализовать загрузку на Supabase Storage или другой backend endpoint
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.url) setForm((prev: any) => ({ ...prev, image_url: data.url }));
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className={styles.adminPage}>
        <h1>Адмін-панель</h1>
        <form className={styles.form} onSubmit={editProduct ? handleUpdate : handleAdd}>
          <input name="name" value={form.name} onChange={handleInput} placeholder="Назва" required />
          <input name="price" value={form.price} onChange={handleInput} placeholder="Ціна" required />
          <select name="category" value={form.category} onChange={handleInput} required className={styles.select}>
            <option value="">Оберіть категорію</option>
            {CATEGORY_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          {CATEGORY_FIELDS[form.category]?.map(field => (
            field.options ? (
              <select
                key={field.field}
                name={field.field}
                value={form[field.field] || ""}
                onChange={handleInput}
                className={styles.select}
                required
              >
                <option value="">{field.label}</option>
                {field.options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                key={field.field}
                name={field.field}
                value={form[field.field] || ""}
                onChange={handleInput}
                placeholder={field.label}
                className={styles.select}
                required
              />
            )
          ))}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className={styles.select}
          />
          <input name="image_url" value={form.image_url} onChange={handleInput} placeholder="Зображення (URL)" />
          <textarea name="description" value={form.description} onChange={handleInput} placeholder="Опис" />
          <button type="submit">{editProduct ? "Оновити" : "Додати"}</button>
          {editProduct && <button type="button" onClick={() => { setEditProduct(null); setForm({ name: "", price: "", category: "", description: "", image_url: "" }); }}>Скасувати</button>}
        </form>
        <input className={styles.search} value={search} onChange={e => setSearch(e.target.value)} placeholder="Пошук товару..." />
        {loading ? <div>Завантаження...</div> : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Назва</th>
                <th>Ціна</th>
                <th>Категорія</th>
                <th>Опис</th>
                <th>Зображення</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>{p.category}</td>
                  <td>{p.description}</td>
                  <td>{p.image_url && <img src={p.image_url} alt={p.name} style={{ width: 60 }} />}</td>
                  <td>
                    <button onClick={() => handleEdit(p)}>Змінити</button>
                    <button onClick={() => handleDelete(p.id)}>Видалити</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </>
  );
}
