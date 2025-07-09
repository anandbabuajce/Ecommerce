import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './homepage/NavBar';
import Carousel from './homepage/Carousel';
import NewArrivals from './homepage/NewArrivals';
import TileGrid from './homepage/TileGrid';
import Footer from './homepage/Footer';
import SignIn from './homepage/SignIn';
import SignUp from './homepage/SignUp';
import Shirt from './shirt/Shirt';
import Pant from "./pant/Pant";
import ShirtDetails from "./shirt/ShirtDetails";
import PantDetails from "./pant/PantDetails";
import Cart from "./cart/Cart";
import {CartProvider} from "./cart/CartContext";

function AppRoutes() {
    const location = useLocation();
    const state = location.state;

    return (
        <CartProvider>
        <>
            <Navbar/>

            {/* Always render homepage content */}
            <Routes>
                <Route path="/" element={
                    <>
                        <Carousel />
                        <NewArrivals />
                        <TileGrid />
                        <Footer />
                    </>
                } />
                <Route path="/shirt" element={<Shirt/>} />
                <Route path="/pant" element={<Pant/>} />
                <Route path="/shirt/:id" element={<ShirtDetails />} />
                <Route path="/pant/:id" element={<PantDetails />} />
                <Route path="/cart" element={<Cart/>} />


            </Routes>

            {/* Show modals when routed with backgroundLocation */}
            {state?.backgroundLocation && (
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />

                </Routes>
            )}

            {/* Fallback: render modal even if directly on /signin or /signup */}
            {!state?.backgroundLocation && (
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            )}
        </>
        </CartProvider>
    );
}




export default function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}
