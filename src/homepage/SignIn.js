import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './Sign.css';

export default function SignIn() {
    const navigate = useNavigate();
    const location = useLocation();
    const [form, setForm] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const res = await fetch("http://localhost:8080/api/users/signin", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            const user = await res.json();
            alert(user.message);
            localStorage.setItem("user", JSON.stringify(user)); // save user for navbar access
            navigate(-1); // go back or redirect to homepage
        } else {
            alert("Invalid credentials");
        }
    };

    const handleBackgroundClick = () => navigate(-1);
    const stopPropagation = (e) => e.stopPropagation();

    return (
        <div className="modal-backdrop" onClick={handleBackgroundClick}>
            <div className="modal-box" onClick={stopPropagation}>
                <h2>Sign In</h2>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button className="auth-action-btn" onClick={handleSubmit}>Sign In</button>
                <p className="auth-link-text">
                    New user? <Link to="/signup" state={{ backgroundLocation: location }}>Sign Up</Link>
                </p>
            </div>
        </div>
    );
}
