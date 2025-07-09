import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const stored = localStorage.getItem('cartItems');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems(prev => {
            const existing = prev.find(p => p.id === item.id && p.size === item.size);
            if (existing) {
                return prev.map(p =>
                    p.id === item.id && p.size === item.size
                        ? { ...p, quantity: p.quantity + item.quantity }
                        : p
                );
            }
            return [...prev, item];
        });
    };

    const updateQuantity = (id, size, amount) => {
        setCartItems(prev =>
            prev.map(p =>
                p.id === id && p.size === size
                    ? { ...p, quantity: Math.max(1, p.quantity + amount) }
                    : p
            )
        );
    };

    const removeFromCart = (id, size) => {
        setCartItems(prev => prev.filter(p => !(p.id === id && p.size === size)));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
