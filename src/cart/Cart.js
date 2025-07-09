import React from 'react';
import { useCart } from './CartContext';
import './Cart.css';

export default function Cart() {
    const { cartItems, updateQuantity, removeFromCart } = useCart();

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <div className="cart-items">
                <h2>Shopping Cart ({cartItems.length} Items)</h2>
                {cartItems.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <img src={item.image} alt={item.title} />
                        <div>
                            <h4>{item.title}</h4>
                            <p>Size: {item.size}</p>
                            <p>₹{item.price}</p>
                            <div className="qty">
                                <button className="minus" onClick={() => updateQuantity(item.id, item.size, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button className="plus" onClick={() => updateQuantity(item.id, item.size, 1)}>+</button>
                            </div>
                            <button className="remove" onClick={() => removeFromCart(item.id, item.size)}>REMOVE</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="checkout-summary">
                <h3>Price Detail</h3>
                <p>Total MRP: ₹{total}</p>
                <p>Delivery: <span className="free">Free Delivery</span></p>
                <hr />
                <h2>Total Amount: ₹{total}</h2>
                <button className="checkout-btn">CHECKOUT</button>
            </div>
        </div>
    );
}
