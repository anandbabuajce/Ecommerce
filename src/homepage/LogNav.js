import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
export default function LogNav() {
    const location = useLocation();
    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo">
                <Link to="/" className="logo" state={{ backgroundLocation: location }}>
                    ShopLogo
                </Link>

            </div>

            {/* Center Links */}
            <div className="center-links">
                <Link to="/shirt">Shirts</Link>
                <Link to="/pant">Pants</Link>
            </div>

            {/* Right Icons */}
            <div className="right-icons">
                <Link to="/cart">
                    <FaShoppingCart className="cart-icon" />
                </Link>
                <Link to="/profile" state={{ backgroundLocation: location }}>
                            <FaUser size={24} color="white" />
                </Link>
            </div>
        </nav>
    );
}
