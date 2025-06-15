// Интерфейсы для корзины и карточки товара

export interface CartItem {
  id: number | string;
  title: string;
  price: string;
  image: string;
  category: string;
  quantity: number;
}

export interface ProductCardProps {
  id: number | string;
  title: string;
  price: string;
  image: string;
  category: string;
  // ...другие свойства, если есть
}

export interface UserAccountProps {
  username: string;
  avatarUrl?: string;
}
