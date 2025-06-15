// Получение информации о товаре по id
export async function fetchProductById(id: string) {
  const res = await fetch(`/api/products?id=${id}`);
  if (!res.ok) return null;
  const data = await res.json();
  return data.product || null;
}
