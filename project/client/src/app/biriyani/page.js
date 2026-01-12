'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/north_indian.css'; 

const Biryani = () => {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const filterItems = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const categories = ['chicken', 'mutton', 'egg', 'veg', 'special', 'all'];

  const products = [
    { category: 'chicken', img: 'images/food/Chicken_Biriyani/Biriyani1.jpg', title: 'Chicken Biryani', rating: '⭐ 4.6 • 20–25 mins • Park Street', price: '₹199' },
    { category: 'chicken', img: 'images/food/Chicken_Biriyani/Biriyani2.jpg', title: 'Spicy Chicken Dum', rating: '⭐ 4.5 • 25–30 mins • Gariahat', price: '₹229' },
    { category: 'mutton', img: 'images/food/Chicken_Biriyani/Biriyani3.jpg', title: 'Mutton Biryani', rating: '⭐ 4.8 • 30–35 mins • Salt Lake', price: '₹299' },
    { category: 'egg', img: 'images/food/Chicken_Biriyani/Biriyani4.jpg', title: 'Egg Biryani', rating: '⭐ 4.2 • 15–20 mins • Behala', price: '₹139' },
    { category: 'veg', img: 'images/food/Chicken_Biriyani/Biriyani5.jpg', title: 'Veg Biryani', rating: '⭐ 4.1 • 20–25 mins • Esplanade', price: '₹149' },
    { category: 'special', img: 'images/food/Chicken_Biriyani/Biriyani6.jpg', title: 'Special Kolkata Biryani', rating: '⭐ 4.9 • 30–35 mins • New Town', price: '₹349' },
  ];

  const filteredProducts =
    category === 'all' ? products : products.filter((item) => item.category === category);

  const finalProducts = filteredProducts.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOrderClick = (item) => {
    router.push(`/order?item=${encodeURIComponent(item.title)}`);
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img src="images/Biryani.jpg" alt="Logo" width="100" height="100" />
        </div>
        <ul>
          {categories.map((cat) => (
            <li
              key={cat}
              className={category === cat ? 'active' : ''}
              onClick={() => filterItems(cat)}
            >
              <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1>🍛 BIRYANI SPECIALS</h1>
        </header>

        <div className="filters-container">
          <input
            type="text"
            placeholder="Search Biryani..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="filters">
            <button>Filter ⬇</button>
            <button>Sort By ⬇</button>
          </div>
        </div>

        <section className="product-grid">
          {finalProducts.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.img} alt={item.title} />
              <div className="label">{item.rating}</div>
              <h3>{item.title}</h3>
              <p className="price">{item.price}</p>
              <div className="buttonGroup">
                <button className="cartButton">
                  <img src="images/food/Chicken_Biriyani/Biriyani1.jpg" alt="Add to Cart" />
                </button>
                <button className="orderButton" onClick={() => handleOrderClick(item)}>
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </section>

        <footer className="footer">🍽️ FREE DELIVERY on all biryani orders above ₹149</footer>
      </main>
    </div>
  );
};

export default Biryani;
