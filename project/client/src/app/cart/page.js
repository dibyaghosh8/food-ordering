"use client";
import React, { useState, useEffect } from "react";
import "../../styles/cart.css";

const foodItems = [
  { title: "Chicken Biryani", img: "images/food/Chicken_Biriyani/Biriyani3.jpg", price: 570, rating: 4.6, category: "biryani" },
  { title: "Chicken Biryani", img: "images/food/Chicken_Biriyani/Biriyani2.jpg", price: 140, rating: 4.6, category: "biryani" },
  { title: "Veg Biryani", img: "images/food/Chicken_Biriyani/Biriyani1.jpg", price: 100, rating: 4.3, category: "biryani" },
  { title: "Chicken Biryani", img: "images/food/Chicken_Biriyani/Biriyani4.jpg", price: 250, rating: 4.6, category: "biryani" },
  { title: "Chicken Biryani", img: "images/food/Chicken_Biriyani/Biriyani5.jpg", price: 340, rating: 4.6, category: "biryani" },
  { title: "Veg Biryani", img: "images/food/Chicken_Biriyani/Biriyani3.jpg", price: 190, rating: 4.3, category: "biryani" },
  { title: "Chicken Biryani", img: "images/food/Chicken_Biriyani/Biriyani2.jpg", price: 140, rating: 4.6, category: "biryani" },
  { title: "Veg Biryani", img: "images/food/Chicken_Biriyani/Biriyani1.jpg", price: 100, rating: 4.3, category: "biryani" },
  { title: "Chicken Biryani", img: "images/food/Chicken_Biriyani/Biriyani4.jpg", price: 250, rating: 4.6, category: "biryani" },
  { title: "Chicken Biryani", img: "images/food/Chicken_Biriyani/Biriyani5.jpg", price: 340, rating: 4.6, category: "biryani" },
  { title: "Veg Biryani", img: "images/food/Chicken_Biriyani/Biriyani3.jpg", price: 190, rating: 4.3, category: "biryani" },
  { title: "Chicken Biryani", img: "images/food/Chicken_Biriyani/Biriyani5.jpg", price: 340, rating: 4.6, category: "biryani" },


/*
  { title: "Paneer Meal", img: "images/food/meal.jpg", price: 90, rating: 4.1, category: "meal" },

  { title: "North Thali", img: "images/food/north.jpg", price: 150, rating: 4.4, category: "north" },

  { title: "Chinese Combo", img: "images/food/chinese.jpg", price: 120, rating: 4.2, category: "chinese" },

  { title: "South Dosa", img: "images/food/south.jpg", price: 80, rating: 4.0, category: "south" },

  { title: "Burger", img: "images/food/fast.jpg", price: 60, rating: 4.0, category: "fast" },
*/

  { title: "Ice Cream", img: "images/food/sweets/misti1.jpg", price: 40, rating: 4.7, category: "dessert" },
  { title: "Ice Cream", img: "images/food/sweets/misti2.jpg", price: 40, rating: 4.5, category: "dessert" },
  { title: "Ice Cream", img: "images/food/sweets/misti3.jpg", price: 40, rating: 4.0, category: "dessert" },
  { title: "Ice Cream", img: "images/food/sweets/misti4.jpg", price: 40, rating: 3.7, category: "dessert" },
  { title: "Ice Cream", img: "images/food/sweets/misti4.jpg", price: 40, rating: 4.7, category: "dessert" },
  { title: "Ice Cream", img: "images/food/sweets/misti5.jpg", price: 40, rating: 4.7, category: "dessert" },
  { title: "Ice Cream", img: "images/food/sweets/misti6.jpg", price: 40, rating: 4.3, category: "dessert" },
  { title: "Ice Cream", img: "images/food/sweets/misti7.jpg", price: 40, rating: 4.7, category: "dessert" },
  { title: "Ice Cream", img: "images/food/sweets/misti8.jpg", price: 40, rating: 4.7, category: "dessert" },
  { title: "Ice Cream", img: "images/food/sweets/misti9.jpg", price: 40, rating: 4.7, category: "dessert" },
  { title: "Ice Cream", img: "images/food/sweets/misti10.jpg", price: 40, rating: 4.7, category: "dessert" },
  { title: "Ice Cream", img: "images/food/sweets/misti11.jpg", price: 40, rating: 4.7, category: "dessert" },
  { title: "Ice Cream", img: "images/food/sweets/misti12.jpg", price: 40, rating: 4.7, category: "dessert" },

  { title: "Juice", img: "images/food/juice/Banana_Juice.jpg", price: 30, rating: 4.5, category: "juice" },
  { title: "Juice", img: "images/food/juice/Blackberry_Juice.jpg", price: 30, rating: 4.5, category: "juice" },
  { title: "Juice", img: "images/food/juice/Dragon_juice.jpg", price: 30, rating: 4.5, category: "juice" },
  { title: "Juice", img: "images/food/juice/juice1.jpg", price: 30, rating: 4.5, category: "juice" },
  { title: "Juice", img: "images/food/juice/juice2.jpg", price: 30, rating: 4.5, category: "juice" },
  { title: "Juice", img: "images/food/juice/Kiwi_Juice.jpg", price: 30, rating: 4.5, category: "juice" },
  { title: "Juice", img: "images/food/juice/Lemon1_Juice.jpg", price: 30, rating: 4.5, category: "juice" },
  { title: "Juice", img: "images/food/juice/Lemon2_Juice.jpg", price: 30, rating: 4.5, category: "juice" },
  { title: "Juice", img: "images/food/juice/Lemon3_Juice.jpg", price: 30, rating: 4.5, category: "juice" },
  { title: "Juice", img: "images/food/juice/Lemon4_Juice.jpg", price: 30, rating: 4.5, category: "juice" },
  { title: "Juice", img: "images/food/juice/Strawberry_juice.jpg", price: 30, rating: 4.5, category: "juice" },
  { title: "Juice", img: "images/food/juice/VirginM1_Juice.jpg", price: 30, rating: 4.5, category: "juice" },
];

const categories = ["all", "biryani", "north", "chinese", "south", "fast", "dessert", "juice", "meal"];

const highlightProduct = {
  title: "Tandoori Chicken",
  img: "images/food/tandoori/tandoori2.jpg",
  color: "Stuffed juicy burger with exotic toppings.",
  rating: 4.1,
  reviews: 724,
  assured: true,
  discount: "46.43% off",
  originalPrice: 280,
  price: 150,
  coinOffer: "Or Pay ₹140 + 25🪙",
  delivery: "Delivery by Aug 7, Thu",
};

const CartPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [quantities, setQuantities] = useState({});
  const [highlightQty, setHighlightQty] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [timer, setTimer] = useState(2 * 3600 + 33 * 60 + 24);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${h}h ${m}m ${s}s`;
  };

  const filteredItems = selectedCategory === "all"
    ? foodItems
    : foodItems.filter((item) => item.category === selectedCategory);

  const increaseQty = (title) => {
    setQuantities((prev) => ({
      ...prev,
      [title]: (prev[title] || 0) + 1,
    }));
  };

  const decreaseQty = (title) => {
    setQuantities((prev) => ({
      ...prev,
      [title]: Math.max((prev[title] || 0) - 1, 0),
    }));
  };

  const getTotalItems = () => Object.values(quantities).reduce((a, b) => a + b, 0);
  const getTotalPrice = () =>
    foodItems.reduce((acc, item) => acc + (quantities[item.title] || 0) * item.price, 0);

  return (
    <>
      {/* ✅ Main Layout */}
      <div className="cart-container">
        {/* ✅ Fixed Left Sidebar */}
        <div className="sidebar">
          <h2>🧾 Menu</h2>
          <ul className="sidebar-list">
            <li>🛒 My Cart</li>
            <li>❤️ Wishlist</li>
            <li>📦 Order Summary</li>
            <li>📃 My Orders</li>
            <li>📝 Notes / Instructions</li>
          </ul>

          <h3>🍽️ Filter</h3>
          <div className="dropdown-container">
            <button className="menu-button" onClick={() => setShowDropdown((prev) => !prev)}>
              Choose Category
            </button>
            {showDropdown && (
              <div className="dropdown-list">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`dropdown-item ${selectedCategory === cat ? "active" : ""}`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setShowDropdown(false);
                    }}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ✅ Right Content Area */}
        <div className="right-content">
          <div className="highlight-card">
            <img src={highlightProduct.img} alt="Highlight Product" className="highlight-img" />
            <div className="highlight-details">
              <h2>{highlightProduct.title}</h2>
              <p>{highlightProduct.color}</p>
              <div className="highlight-rating">
                <span>⭐ {highlightProduct.rating}</span> <span>({highlightProduct.reviews})</span>{" "}
                {highlightProduct.assured && <span className="assured">✔️ Assured</span>}
              </div>
              <div className="highlight-pricing">
                <span className="discount">{highlightProduct.discount}</span>
                <span className="original">₹{highlightProduct.originalPrice * highlightQty}</span>
                <span className="price">₹{highlightProduct.price * highlightQty}</span>
                <div className="coin-offer">{highlightProduct.coinOffer}</div>
              </div>
              <p className="delivery">{highlightProduct.delivery}</p>
              <p className="order-timer">Order in <span>{formatTime(timer)}</span></p>

              <div className="quantity-control">
                <button onClick={() => setHighlightQty((prev) => Math.max(1, prev - 1))}>-</button>
                <span>{highlightQty}</span>
                <button onClick={() => setHighlightQty((prev) => prev + 1)}>+</button>
              </div>

              <div className="highlight-buttons">
                <button>🗑️ Remove</button>
                <button>💾 Save for later</button>
                <button>⚡ Buy this now</button>
              </div>
            </div>
          </div>

          <div className="card-grid">
            {filteredItems.map((item, index) => (
              <div className="card" key={index}>
                <div className="card-inner">
                  <div className="card-front">
                    <img src={item.img} alt={item.title} className="card-img" />
                  </div>
                  <div className="card-back">
                    <h3>{item.title}</h3>
                    <p>Price: ₹{item.price}</p>
                    <p>⭐ {item.rating}</p>
                    <div className="quantity-control">
                      <button onClick={() => decreaseQty(item.title)}>-</button>
                      <span>{quantities[item.title] || 0}</span>
                      <button onClick={() => increaseQty(item.title)}>+</button>
                    </div>
                    <p>Total: ₹{(quantities[item.title] || 0) * item.price}</p>
                    <button className="order-btn">Order Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Bottom Total Summary */}
      <div className="bottom-summary">
        <span>🛒 Total Items: <strong>{getTotalItems()}</strong></span>
        <span>💰 Total Price: <strong>₹{getTotalPrice()}</strong></span>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </>
  );
};

export default CartPage;
