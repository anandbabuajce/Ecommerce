import React from 'react';
import './Footer.css';
import { FaInstagram, FaYoutube, FaFacebookF, FaPhoneAlt, FaClock, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <p>&copy; 2025 YourCompany. All rights reserved.</p>
            </div>

            <hr className="footer-divider" />

            <div className="footer-content">
                {/* COMPANY */}
                <div className="footer-column">
                    <h4>COMPANY</h4>
                    <ul>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Affiliate Program</li>
                        <li>Stores</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                {/* SOCIAL HANDLES */}
                <div className="footer-column">
                    <h4>SOCIAL HANDLES</h4>
                    <ul className="social-links">
                        <li><FaInstagram /> <span>Instagram</span></li>
                        <li><FaYoutube /> <span>YouTube</span></li>
                        <li><FaFacebookF /> <span>Facebook</span></li>
                    </ul>
                </div>

                {/* SUPPORT */}
                <div className="footer-column">
                    <h4>SUPPORT</h4>
                    <ul>
                        <li><FaEnvelope /> support@example.com</li>
                        <li><FaPhoneAlt /> +91 9876543210</li>
                        <li><FaClock /> Mon - Sat : 10:30 AM - 06:00 PM</li>
                    </ul>
                </div>

                {/* REGISTERED ADDRESS */}
                <div className="footer-column">
                    <h4>REGISTERED OFFICE ADDRESS</h4>
                    <p>YourCompany Pvt Ltd</p>
                    <p>123 Corporate Park, G02-1502,<br />
                        XYZ Lane, Near Express Highway,<br />
                        Bengaluru, India - 560001</p>
                </div>
            </div>
        </footer>
    );
}
