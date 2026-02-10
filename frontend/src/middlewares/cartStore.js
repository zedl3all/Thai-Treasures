import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
    persist(
        (set) => ({
            cartCount: 0,
            addToCart: () =>
                set((state) => ({ cartCount: state.cartCount + 1 })),
            clearCart: () => set({ cartCount: 0 }),
        }),
        {
            name: 'cart-storage', // key ใน localStorage
        }
    )
);
