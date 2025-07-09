// src/pages/ShirtPage.js
import React, {useState} from 'react';
import './Pant.css';
import pants from "./PantData";
import {useNavigate} from "react-router-dom";


const priceRanges = [
    { label: '₹0 - ₹499', min: 0, max: 499 },
    { label: '₹500 - ₹999', min: 500, max: 999 },
    { label: '₹1000 - ₹1499', min: 1000, max: 1499 },
];

export default function Pant() {
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const navigate = useNavigate();

    const toggleSelection = (value, list, setList) => {
        setList(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };

    const filteredPants = pants.filter(pant => {
        const colorMatch = selectedColors.length === 0 || selectedColors.includes(pant.color);
        const sizeMatch = selectedSizes.length === 0 || selectedSizes.includes(pant.size);
        const priceMatch = selectedPrices.length === 0 || selectedPrices.some(range => pant.price >= range.min && pant.price <= range.max);
        return colorMatch && priceMatch && sizeMatch;
    });

    return (
        <div className="pant-page">
            {/* Filter Sidebar */}
            <aside className="sidebar">
                <h3>Color</h3>
                {['Blue', 'Red', 'Black', 'White', 'Green','Brown'].map(color => (
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
            <section className="pant-grid">
                {filteredPants.map((pant, index) => (
                    <div className="pant-card" key={index} onClick={() => navigate(`/pant/${index}`)}>
                        <img src={pant.image} alt={pant.title} />
                        <h4>{pant.title}</h4>
                        <p>₹{pant.price}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
