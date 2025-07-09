import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';

const images = [
    'https://images.pexels.com/photos/15498009/pexels-photo-15498009.jpeg',
    'https://images.pexels.com/photos/4067754/pexels-photo-4067754.jpeg',
    'https://images.pexels.com/photos/5738029/pexels-photo-5738029.jpeg',
];

export default function Carousel() {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const total = images.length;
    const intervalRef = useRef(null);

    const goToNext = () => {
        setCurrent((prev) => prev + 1);
    };

    const goToPrev = () => {
        if (current === 0) {
            setIsTransitioning(false);
            setCurrent(total); // jump to clone before animating back
        } else {
            setCurrent((prev) => prev - 1);
        }
    };

    useEffect(() => {
        startAutoSlide();
        return stopAutoSlide;
    },);

    const startAutoSlide = () => {
        intervalRef.current = setInterval(goToNext, 3000);
    };

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current);
    };

    const handleTransitionEnd = () => {
        if (current === total) {
            setIsTransitioning(false);
            setCurrent(0); // jump to real first image
        } else if (current === -1) {
            setIsTransitioning(false);
            setCurrent(total - 1); // jump to real last image
        }
    };

    useEffect(() => {
        if (!isTransitioning) {
            const timeout = setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [isTransitioning]);

    return (
        <div
            className="carousel-container"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
        >
            <div
                className="carousel-track"
                style={{
                    transform: `translateX(-${current * 100}%)`,
                    transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {/* Original slides */}
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Slide ${index + 1}`} className="carousel-slide" />
                ))}
                {/* Clone of first image at the end */}
                <img src={images[0]} alt="Clone First" className="carousel-slide" />
            </div>
            <div className="carousel-overlay">
                <h1 className="carousel-heading">Discover Our New Collection</h1>
                <p className="carousel-subheading">Trendy. Timeless. Tailored for You.</p>
                <a href="#bdown">
                <button className="carousel-button">Browse</button>
                </a>
            </div>

            {/* Arrow buttons */}
            <button className="carousel-btn left" onClick={goToPrev}>
                ❮
            </button>
            <button className="carousel-btn right" onClick={goToNext}>
                ❯
            </button>
        </div>
    );
}
