import { create } from 'zustand';
import type { CartItem } from '../types/shop';

interface CartState {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number | string) => void;
  updateQuantity: (id: number | string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: typeof window !== 'undefined' && localStorage.getItem('cart')
    ? (JSON.parse(localStorage.getItem('cart') as string) as CartItem[])
    : [],
  addToCart: (item: Omit<CartItem, 'quantity'>) => set((state: CartState) => {
    const found = state.cart.find((i: CartItem) => i.id === item.id);
    let newCart: CartItem[];
    if (found) {
      newCart = state.cart.map((i: CartItem) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
    } else {
      newCart = [...state.cart, { ...item, quantity: 1 }];
    }
    localStorage.setItem('cart', JSON.stringify(newCart));
    return { cart: newCart };
  }),
  removeFromCart: (id: number | string) => set((state: CartState) => {
    const newCart = state.cart.filter((i: CartItem) => i.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    return { cart: newCart };
  }),
  updateQuantity: (id: number | string, quantity: number) => set((state: CartState) => {
    if (quantity < 1) return { cart: state.cart };
    const newCart = state.cart.map((i: CartItem) => i.id === id ? { ...i, quantity } : i);
    localStorage.setItem('cart', JSON.stringify(newCart));
    return { cart: newCart };
  }),
  clearCart: () => {
    localStorage.setItem('cart', JSON.stringify([]));
    set({ cart: [] });
  },
}));
