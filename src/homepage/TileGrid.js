import React from 'react';
import './TileGrid.css';

const cards = [
    { image: 'https://i.pinimg.com/736x/12/43/f1/1243f1f37db46051549c1e5285713fb2.jpg', text: 'SHIRTS', size: 'tall' },
    { image: 'https://i.pinimg.com/736x/d7/fe/cf/d7fecfd102ea83a8816a0acc10b4975b.jpg', text: 'SWEATSHIRTS', size: 'small' },
    { image: 'https://i.pinimg.com/736x/3b/b3/48/3bb348268f2acd20533fa9f6faf131be.jpg', text: 'POLO SHIRTS', size: 'wide' },
    { image: 'https://i.pinimg.com/736x/21/5d/25/215d25c0abe021a076bde40bdeb79e0a.jpg', text: 'JACKETS', size: 'medium' },
    { image: 'https://i.pinimg.com/736x/59/3e/92/593e92a347c026b2880ddfce72747c92.jpg', text: 'GRAPGIC TEE', size: 'medium' },
    { image: 'https://i.pinimg.com/736x/f4/54/5f/f4545f99897fe6e659010a4529579730.jpg', text: 'TRACKPANTS', size: 'wide-short' },
    { image: 'https://i.pinimg.com/736x/17/4c/69/174c69c57e6e45d635c749ef652fd082.jpg', text: 'BLAZER & SUITS', size: 'tall-short' },
    { image: 'https://i.pinimg.com/736x/95/3e/d4/953ed49e07214a7297cf1191e4103621.jpg', text: 'PANTS', size: 'small-long' },
    { image: 'https://i.pinimg.com/736x/59/29/c6/5929c65453b93dced4b59b3bb19ef05b.jpg', text: 'CO-ORD', size: 'medium' },
    { image: 'https://i.pinimg.com/736x/5c/90/15/5c90150cb30556ab2e8dddc4cfecc126.jpg', text: 'DENIM', size: 'medium-short' },
    { image: 'https://i.pinimg.com/736x/8e/5d/bc/8e5dbcd66e3bcfc31bcd992e4e85f398.jpg', text: 'SHORTS', size: 'small' },
];

export default function TileGrid() {
    return (
        <section id="bdown" className="masonry-section">
            <h1>Category Collections</h1>
            <div className="masonry-grid">
                {cards.map((card, index) => (
                    <div key={index} className={`masonry-card ${card.size}`}>
                        <img src={card.image} alt={card.text} />
                        <div className="overlay">
                            <p>{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
