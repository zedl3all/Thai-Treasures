import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
    persist(
        (set, get) => ({
            items: [], // { id, quantity }

            addToCart: (productId) =>
                set((state) => {
                    const existing = state.items.find((item) => item.id === productId);
                    if (existing) {
                        return {
                            items: state.items.map((item) =>
                                item.id === productId
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                        };
                    }
                    return { items: [...state.items, { id: productId, quantity: 1 }] };
                }),

            removeFromCart: (productId) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== productId),
                })),

            updateQuantity: (productId, quantity) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === productId ? { ...item, quantity } : item
                    ),
                })),

            clearCart: () => set({ items: [] }),

            getTotalItems: () => {
                return get().items.reduce((acc, item) => acc + item.quantity, 0);
            },

            getTotalPrice: (products) => {
                const items = get().items;
                return items.reduce((total, cartItem) => {
                    const product = products.find((p) => p.id === cartItem.id);
                    return total + (product?.price || 0) * cartItem.quantity;
                }, 0);
            },
        }),
        {
            name: 'cart-storage',
        }
    )
);