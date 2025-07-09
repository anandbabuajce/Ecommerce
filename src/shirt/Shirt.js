// src/pages/ShirtPage.js
import React from 'react';
import { useState } from 'react';
import './Shirt.css';
import { useNavigate } from 'react-router-dom';
import shirts from "./ShirtData";


const priceRanges = [
    { label: '₹0 - ₹499', min: 0, max: 499 },
    { label: '₹500 - ₹999', min: 500, max: 999 },
    { label: '₹1000 - ₹1499', min: 1000, max: 1499 },
];


export default function Shirt() {
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const navigate = useNavigate();

    const toggleSelection = (value, list, setList) => {
        setList(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };

    const filteredShirts = shirts.filter(shirt => {
        const colorMatch = selectedColors.length === 0 || selectedColors.includes(shirt.color);
        const sizeMatch = selectedSizes.length === 0 || selectedSizes.includes(shirt.size);
        const priceMatch = selectedPrices.length === 0 || selectedPrices.some(range => shirt.price >= range.min && shirt.price <= range.max);
        return colorMatch && priceMatch && sizeMatch;
    });

    return (
        <div className="shirt-page">
            {/* Filter Sidebar */}
            <aside className="sidebar">
                <h3>Color</h3>
                {['Blue', 'Red', 'Black', 'White', 'Green'].map(color => (
                    <label key={color}><input type="checkbox" onChange={() => toggleSelection(color, selectedColors, setSelectedColors)} /> {color}</label>
                ))}

                <h3>Price</h3>
                {priceRanges.map(range => (
                    <label key={range.label}><input type="checkbox" onChange={() => toggleSelection(range, selectedPrices, setSelectedPrices)} /> {range.label}</label>
                ))}

                <h3>Size</h3>
                {['S', 'M', 'L', 'XL'].map(size => (
                    <label key={size}><input type="checkbox" onChange={() => toggleSelection(size, selectedSizes, setSelectedSizes)} /> {size}</label>
                ))}
            </aside>

            {/* Shirt Grid */}
            <section className="shirt-grid">
                {filteredShirts.map((shirt, index) => (
                    <div className="shirt-card" key={index} onClick={() => navigate(`/shirt/${index}`)}>
                        <img src={shirt.image} alt={shirt.title} />
                        <h4>{shirt.title}</h4>
                        <p>₹{shirt.price}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
