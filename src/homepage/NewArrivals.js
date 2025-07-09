import React from 'react';
import './NewArrivals.css';

const products = [
    {
        title: 'Cotton Shirt',
        image: 'https://uathayam.in/cdn/shop/files/LP_4837_1800x1800.jpg?v=1741865875',
        price: '₹999',
    },
    {
        title: 'Formal Pants',
        image: 'https://uspoloassn.in/cdn/shop/files/3_df013e7f-23f4-4df0-b5df-d53cdb4f62b2.jpg',
        price: '₹1,299',
    },
    {
        title: 'Denim Jacket',
        image: 'https://www.highstar.in/cdn/shop/files/2_7f8f8f9f-473f-418a-aee2-59f073c7f64b.jpg?v=1725019552',
        price: '₹1,799',
    },
    {
        title: 'Cargo Pants',
        image: 'https://media.powerlook.in/catalog/product/3/1/31139560.jpg',
        price: '₹599',
    },
    {
        title: 'Chino Shorts',
        image: 'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/148791s.jpg?im=Resize,width=750',
        price: '₹849',
    },
];

export default function NewArrivals() {
    return (
        <section className="new-arrivals-section">
            <h2 className="heading">New Arrivals</h2>
            <div className="product-grid">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        <div className="image-container">
                            <img src={product.image} alt={product.title} className="product-image" />
                        </div>
                        <div className="product-details">
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-price">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
