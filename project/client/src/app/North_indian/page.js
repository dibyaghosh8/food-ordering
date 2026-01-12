'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/north_indian.css';

const NorthIndian = () => {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const filterItems = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const categories = ['paneer', 'chicken', 'mutton', 'veg', 'tandoori', 'all'];

  const products = [
     // Paneer Items
    { category: 'paneer', img: '/image/paneer1.jpg', title: 'Paneer Butter Masala', rating: '⭐ 4.6 • 20–25 mins • Park Street', price: '₹199' },
    { category: 'paneer', img: '/image/paneer2.jpg', title: 'Shahi Paneer', rating: '⭐ 4.4 • 25–30 mins • Gariahat', price: '₹189' },
    { category: 'paneer', img: '/image/paneer3.jpg', title: 'Paneer Tikka', rating: '⭐ 4.5 • 20–25 mins • Salt Lake', price: '₹219' },
    { category: 'paneer', img: '/image/paneer4.jpg', title: 'Kadai Paneer', rating: '⭐ 4.3 • 25–30 mins • Behala', price: '₹209' },
    { category: 'paneer', img: '/image/paneer5.jpg', title: 'Paneer Lababdar', rating: '⭐ 4.6 • 20–25 mins • Esplanade', price: '₹229' },
    { category: 'paneer', img: '/image/paneer6.jpg', title: 'Paneer Bhurji', rating: '⭐ 4.2 • 15–20 mins • New Town', price: '₹179' },
    { category: 'paneer', img: '/image/paneer7.jpg', title: 'Achari Paneer', rating: '⭐ 4.1 • 20–25 mins • Howrah', price: '₹199' },

    // Chicken Items
    { category: 'chicken', img: 'images/food/Chicken_Biriyani/Biriyani1.jpg', title: 'Butter Chicken', rating: '⭐ 4.7 • 20–25 mins • Behala', price: '₹249' },
    { category: 'chicken', img: 'images/food/Chicken_Biriyani/Biriyani2.jpg', title: 'Chicken Tikka Masala', rating: '⭐ 4.5 • 25–30 mins • Salt Lake', price: '₹239' },
    { category: 'chicken', img: 'images/food/Chicken_Biriyani/Biriyani3.jpg', title: 'Chicken Korma', rating: '⭐ 4.6 • 30–35 mins • Garia', price: '₹259' },
    { category: 'chicken', img: 'images/food/Chicken_Biriyani/Biriyani4.jpg', title: 'Chicken Do Pyaza', rating: '⭐ 4.3 • 20–25 mins • Sealdah', price: '₹219' },
    { category: 'chicken', img: 'images/food/Chicken_Biriyani/Biriyani5.jpg', title: 'Chicken Bharta', rating: '⭐ 4.4 • 20–25 mins • Shyambazar', price: '₹229' },
    { category: 'chicken', img: 'images/food/Chicken_Biriyani/Biriyani1.jpg', title: 'Chicken Curry', rating: '⭐ 4.2 • 15–20 mins • Dum Dum', price: '₹199' },
    { category: 'chicken', img: 'images/food/Chicken_Biriyani/Biriyani2.jpg', title: 'Chicken Mughlai', rating: '⭐ 4.1 • 25–30 mins • Esplanade', price: '₹269' },

    // Mutton Items
    { category: 'mutton', img: '/image/mutton1.jpg', title: 'Mutton Rogan Josh', rating: '⭐ 4.8 • 30–35 mins • Esplanade', price: '₹299' },
    { category: 'mutton', img: '/image/mutton2.jpg', title: 'Mutton Korma', rating: '⭐ 4.6 • 30–35 mins • Howrah', price: '₹289' },
    { category: 'mutton', img: '/image/mutton3.jpg', title: 'Mutton Do Pyaza', rating: '⭐ 4.5 • 35–40 mins • Gariahat', price: '₹279' },
    { category: 'mutton', img: '/image/mutton4.jpg', title: 'Mutton Curry', rating: '⭐ 4.4 • 25–30 mins • Dum Dum', price: '₹269' },
    { category: 'mutton', img: '/image/mutton5.jpg', title: 'Mutton Handi', rating: '⭐ 4.3 • 30–35 mins • Salt Lake', price: '₹289' },
    { category: 'mutton', img: '/image/mutton6.jpg', title: 'Mutton Masala', rating: '⭐ 4.2 • 25–30 mins • Park Street', price: '₹279' },
    { category: 'mutton', img: '/image/mutton7.jpg', title: 'Mutton Bhuna', rating: '⭐ 4.1 • 30–35 mins • Sealdah', price: '₹299' },

    // Veg Items
    { category: 'veg', img: '/image/veg1.jpg', title: 'Veg Kolhapuri', rating: '⭐ 4.3 • 20–25 mins • Dum Dum', price: '₹149' },
    { category: 'veg', img: '/image/veg2.jpg', title: 'Mix Veg Curry', rating: '⭐ 4.2 • 15–20 mins • New Town', price: '₹139' },
    { category: 'veg', img: '/image/veg3.jpg', title: 'Aloo Gobi', rating: '⭐ 4.1 • 15–20 mins • Garia', price: '₹129' },
    { category: 'veg', img: '/image/veg4.jpg', title: 'Chana Masala', rating: '⭐ 4.4 • 20–25 mins • Salt Lake', price: '₹139' },
    { category: 'veg', img: '/image/veg5.jpg', title: 'Veg Jalfrezi', rating: '⭐ 4.3 • 20–25 mins • Sealdah', price: '₹159' },
    { category: 'veg', img: '/image/veg6.jpg', title: 'Baingan Bharta', rating: '⭐ 4.2 • 15–20 mins • Esplanade', price: '₹149' },
    { category: 'veg', img: '/image/veg7.jpg', title: 'Dal Fry', rating: '⭐ 4.5 • 20–25 mins • Howrah', price: '₹119' },

    // Tandoori Items
    { category: 'tandoori', img: '/image/tandoori1.jpg', title: 'Tandoori Chicken', rating: '⭐ 4.7 • 25–30 mins • Shyambazar', price: '₹259' },
    { category: 'tandoori', img: '/image/tandoori2.jpg', title: 'Tandoori Roti with Sabzi', rating: '⭐ 4.1 • 20–25 mins • Sealdah', price: '₹129' },
    { category: 'tandoori', img: '/image/tandoori3.jpg', title: 'Tandoori Paneer Tikka', rating: '⭐ 4.5 • 25–30 mins • Dum Dum', price: '₹239' },
    { category: 'tandoori', img: '/image/tandoori4.jpg', title: 'Seekh Kebab', rating: '⭐ 4.4 • 20–25 mins • Esplanade', price: '₹199' },
    { category: 'tandoori', img: '/image/tandoori5.jpg', title: 'Tandoori Naan Set', rating: '⭐ 4.2 • 20–25 mins • Salt Lake', price: '₹119' },
    { category: 'tandoori', img: '/image/tandoori6.jpg', title: 'Tandoori Mushroom', rating: '⭐ 4.3 • 25–30 mins • Howrah', price: '₹159' },
    { category: 'tandoori', img: '/image/tandoori7.jpg', title: 'Afghani Chicken', rating: '⭐ 4.6 • 30–35 mins • Gariahat', price: '₹279' },
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
          <img src="images/food/Chicken_Biriyani/Biriyani1.jpg" alt="Logo" width="100" height="100" />
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
          <h1>NORTH-INDIAN</h1>
        </header>

        <div className="filters-container">
          <input
            type="text"
            placeholder="Search Item..."
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

        <footer className="footer">🚚 FREE DELIVERY on orders above ₹149</footer>
      </main>
    </div>
  );
};

export default NorthIndian;