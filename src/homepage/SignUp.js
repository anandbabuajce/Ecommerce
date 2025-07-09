import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sign.css';

export default function SignUp() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        role: '',
        mobile: '',
        address: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const res = await fetch("http://localhost:8080/api/users/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            alert("Registration successful");
            navigate(-1); // go back
        } else {
            const err = await res.text();
            alert("Error: " + err);
        }
    };

    const handleBackgroundClick = () => navigate(-1);
    const stopPropagation = (e) => e.stopPropagation();

    return (
        <div className="modal-backdrop" onClick={handleBackgroundClick}>
            <div className="modal-box" onClick={stopPropagation}>
                <h2>Sign Up</h2>
                <input type="text" name="username" placeholder="Name" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <input type="text" name="role" placeholder="Role(USER/ADMIN)" onChange={handleChange} />
                <input type="tel" name="mobile" placeholder="Mobile Number" onChange={handleChange} />
                <textarea name="address" placeholder="Address" rows={3} onChange={handleChange}></textarea>
                <button className="auth-action-btn" onClick={handleSubmit}>Sign Up</button>
            </div>
        </div>
    );
}
