// Получение списка товаров по категории
export async function fetchProductsByCategory(category: string) {
  const res = await fetch(`/api/products?category=${category}`);
  if (!res.ok) return [];
  const data = await res.json();
  return data.products || [];
}
