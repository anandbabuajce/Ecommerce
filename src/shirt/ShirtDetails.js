// src/pages/ShirtDetails.js
import { useParams } from "react-router-dom";
import shirts from "./ShirtData"; // export shirts array to separate file if not yet done
import './ShirtDetails.css';
import React, { useState } from 'react';
import { useCart } from '../cart/CartContext';

export default function ShirtDetails() {
    const { id } = useParams();
    const shirt = shirts[id];
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleSizeClick = (size) => setSelectedSize(size);
    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size.");
            return;
        }

        const cartItem = {
            id,
            title: shirt.title,
            price: parseInt(shirt.price.replace('₹', '')),
            image: shirt.image,
            size: selectedSize,
            quantity: quantity,
        };

        addToCart(cartItem); // ✅ Call context method
        alert("Added to cart!");
    };

    if (!shirt) return <h2>Shirt not found</h2>;

    return (
        <div className="details-container">
            <div className="image-section">
                <img src={shirt.image} alt={shirt.title} />
            </div>

            <div className="info-section">
                <h2>{shirt.title}</h2>
                <h3>₹{shirt.price}</h3>
                <p>Inclusive of all taxes</p>

                <div className="discount">
                    <strong>Get this for INR {parseInt(shirt.price.slice(1)) - 100}</strong><br />
                    Buy 2 and get Rs 200 Off*<br />
                    Code: <strong>B2G200</strong>
                </div>

                <h4>Select Size</h4>
                <div className="size-chart">
                    {['S', 'M', 'L', 'XL'].map(size => (
                        <button key={size}
                                className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                                onClick={() => handleSizeClick(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>

                <h5>Quantity</h5>
                <div className="quantity-controls">
                    <button className="plus" onClick={decrement}>-</button>
                    <span>{quantity}</span>
                    <button className="minus" onClick={increment}>+</button>
                </div>

                <div className="buttons">
                    <button className="add-to-bag" onClick={handleAddToCart}>ADD TO BAG</button>
                    <button className="size-chart-btn">SIZE CHART</button>
                </div>
            </div>
        </div>
    );
}
