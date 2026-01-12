"use client";
import Link from "next/link";
import React, { useState } from "react";
import "../styles/Navbar.css";
const images = [
  "/images/biryani.jpg",
  "/images/kebab.jpg",
  "/images/north-indian.jpg",
  "/images/pizza.jpg", 
  "/images/cake.jpg",
  "/images/dosa.jpg",
  "/images/burger.jpg",
  "/images/chinese.jpg",
  "/images/rolls.jpg",
  "/images/momo.jpg",
  "/images/shawarma.jpg",
  "/images/pure-veg.jpg",
  "/images/ice-cream.jpg",
];
const allImages = [...images, ...images];
const foodTiles = [
  {
    title: "Chef Special Recipes",
    description: "Enjoy dishes curated by top chefs just for you.",
    icon: "👨‍🍳",
  },
  {
    title: "Easy Online Payment",
    description: "Pay seamlessly via UPI, cards, or wallets.",
    icon: "💳",
  },
  {
    title: "Trusted Reviews",
    description: "Rated highly by thousands of happy customers.",
    icon: "⭐",
  },
  {
    title: "Hygienic Kitchen",
    description: "Prepared in clean kitchens with safety measures.",
    icon: "🛡️",
  },
];

const dishes = [
  {
    name: "Cup Cake",
    image: "images/food/cakes/cake2.jpg",
    desc: "Signature biryani with secret spices.",
  },
  {
    name: "Juice",
    image: "images/food/juice/VirginM1_Juice.jpg",
    desc: "Indian twist on classic pizza.",
  },
  {
    name: "Pepperoni Pizza",
    image: "images/food/pizza/pizza4.jpg",
    desc: "Stuffed juicy burger with exotic toppings.",
  },
  {
    name: "White Sauce Pasta",
    image: "images/food/pasta/pasta2.jpg",
    desc: "Signature biryani with secret spices.",
  },
  {
    name: "Sweet Curd",
    image: "images/food/sweets/misti7.jpg",
    desc: "Indian twist on classic pizza.",
  },
  {
    name: "Tandoori Chicken",
    image: "images/food/tandoori/tandoori8.jpg",
    desc: "Stuffed juicy burger with exotic toppings.",
  },
  {
    name: "Cold Coffee",
    image: "images/food/Tea_Coffee/Coffee4.jpg",
    desc: "Stuffed juicy burger with exotic toppings.",
  },
  {
    name: "Egg Burger",
    image: "images/food/burger/burger4.jpg",
    desc: "Signature biryani with secret spices.",
  },
  {
    name: "Chicken Biryani",
    image: "images/food/Chicken_Biriyani/Biriyani1.jpg",
    desc: "Indian twist on classic pizza.",
  },
  {
    name: "Chicken Chowmein",
    image: "images/food/Chowmin/Chowmin1.jpg",
    desc: "Stuffed juicy burger with exotic toppings.",
  },
  {
    name: "Grilled Chicken",
    image: "images/food/tandoori/tandoori1.jpg",
    desc: "Stuffed juicy burger with exotic toppings.",
  },
  {
    name: "Butter Cookies",
    image: "images/food/Cookies/Cookies1.jpg",
    desc: "Signature biryani with secret spices.",
  },
  {
    name: "Egg Chicken Roll",
    image: "images/food/eggroll/roll3.jpg",
    desc: "Indian twist on classic pizza.",
  },
  {
    name: "Mutton Biryani",
    image: "/images/menu/chinese-rice.jpg",
    desc: "Stuffed juicy burger with exotic toppings.",
  },
  {
    name: "Phuchka (Pani Puri)",
    image: "images/food/Singara_Fuchka/fuchka2.jpg",
    desc: "Stuffed juicy burger with exotic toppings.",
  },
];



const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <img src="/images/logo.jpg" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><Link href="/#home">Home</Link></li>
          <li><Link href="/menu">Menu</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/form">Contact</Link></li>
        </ul>
        <ul className="nav-icons">
          <li className="icon-li" onClick={toggleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <li className="icon-li">
            <Link href="/contact"><i className="fa-solid fa-user"></i></Link>
          </li>
          <li className="icon-li">
            <Link href="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
          </li>
          <li className="icon-li" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </li>
        </ul>
      </nav>

      {/* Toggleable Search Bar */}
      {showSearch && (
        <div className="search-bar-container">
          <input
            type="text"
            className="search-toggle-input"
            placeholder="Search food, restaurants, etc."
          />
        </div>
      )}

      {/* Toggleable Menu Sidebar */}
      {showMenu && (
        <div className="menu-sidebar glassy-slide">
          <ul>
            <li><Link href="/gallery">🖼️ Gallery</Link></li>
            <li><Link href="/blog">📰 Blog</Link></li>
            <li><Link href="/offers">🎁 Offers</Link></li>
            <li><Link href="/testimonials">⭐ Reviews</Link></li>
            <li><Link href="/faq">❓ FAQ</Link></li>
            <li><Link href="/support">💬 Support</Link></li>
          </ul>
        </div>
      )}

      {/* video section */}
      <div className="hero-video">
        <video autoPlay loop muted playsInline>
          <source src="/video/hero1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-text">
          <h1>Welcome to Foodies World 🍽️</h1>
          <div className="search-section">
            <input
              type="text"
              className="search"
              placeholder="search for restaurant, item or more"
            />
            <ul>
              <li className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </li>
            </ul>
          </div>
          <p>Order your favourite food in just a click!</p>
        </div>
      </div>
      {/* 1st part Popular Categories */}

      <div className="food-scroll-container">
        <div className="food-card">
          <Link href="/biriyani"><img src="/images/biryani.jpg" alt="Biryani" /></Link>
          <p>Biryani</p>
        </div>
        <div className="food-card">
          <Link href="/North_indian"><img src="/images/north-indian.jpg" alt="North Indian" /></Link>
          <p>North Indian</p>
        </div>
        <div className="food-card">
          <img src="/images/pizza.jpg" alt="Pizza" />
          <p>Pizza</p>
        </div>
        <div className="food-card">
          <img src="/images/cake.jpg" alt="Cake" />
          <p>Cake</p>
        </div>
        <div className="food-card">
          <img src="/images/momo.jpg" alt="Momo" />
          <p>Momo</p>
        </div>
        <div className="food-card">
          <img src="/images/rolls.jpg" alt="Rolls" />
          <p>Rolls</p>
        </div>
        <div className="food-card">
          <img src="/images/burger.jpg" alt="Burger" />
          <p>Burger</p>
        </div>
        <div className="food-card">
          <img src="/images/ice-cream.jpg" alt="Ice Cream" />
          <p>Ice Cream</p>
        </div>
        <div className="food-card">
          <img src="/images/pure-veg.jpg" alt="Pure Veg" />
          <p>Pure Veg</p>
        </div>
        <div className="food-card">
          <img src="/images/chinese.jpg" alt="Chinese" />
          <p>Chinese</p>
        </div>
        <div className="food-card">
          <img src="/images/shawarma.jpg" alt="Shawarma" />
          <p>Shawarma</p>
        </div>
      </div>

      <div className="food-scroll-container">
        <div className="food-card">
          <Link href="/biriyani"><img src="/images/Noodles.jpg" alt="Biryani" /></Link>
          <p>Noodles</p>
        </div>
        <div className="food-card">
          <Link href="/North_indian"><img src="/images/kebab.jpg" alt="North Indian" /></Link>
          <p>kebab</p>
        </div>
        <div className="food-card">
          <img src="/images/South-Indian.jpg" alt="Pizza" />
          <p>South Indian</p>
        </div>
        <div className="food-card">
          <img src="/images/Pasta.jpg" alt="Cake" />
          <p>Pasta</p>
        </div>
        <div className="food-card">
          <img src="/images/Dosa.jpg" alt="Momo" />
          <p>Dosa</p>
        </div>
        <div className="food-card">
          <img src="/images/Salad.jpg" alt="Rolls" />
          <p>Salad</p>
        </div>
        <div className="food-card">
          <img src="/images/Pastry.jpg" alt="Burger" />
          <p>Pastry</p>
        </div>
        <div className="food-card">
          <img src="/images/Khichdi.jpg" alt="Ice Cream" />
          <p>Khichdi</p>
        </div>
        <div className="food-card">
          <img src="/images/Momo.jpg" alt="Pure Veg" />
          <p>Momo</p>
        </div>
        <div className="food-card">
          <img src="/images/Rolls.jpg" alt="Chinese" />
          <p>Rolls</p>
        </div>
        <div className="food-card">
          <img src="/images/Burger.jpg" alt="Burger" />
          <p>Burger</p>
        </div>
      </div>

      {/* Signature Dishes */}
      <section className="image-showcase">
        <h2 className="showcase-title">✨ Our Signature Dishes</h2>
        <div className="image-gallery">
          <div className="gallery-card">
            <img src="/images/food/Tea_Coffee/coffee2.jpg" alt="Coffee" />
            <p>Coffee</p>
            <button className="order-btn">Order Now</button>
          </div>
          <div className="gallery-card">
            <img src="/images/food/pizza/pizza5.jpg" alt="Pizza" />
            <p>Pizza</p>
            <button className="order-btn">Order Now</button>
          </div>
          <div className="gallery-card">
            <img src="/images/food/momo/momo1.jpg" alt="Momo" />
            <p>Momo</p>
            <button className="order-btn">Order Now</button>
          </div>
          <div className="gallery-card">
            <img src="/images/food/juice/juice2.jpg" alt="Juice" />
            <p>Juice</p>
            <button className="order-btn">Order Now</button>
          </div>
        </div>
      </section>


      <div className="special-offer-card">
        <div className="offer-text">
          <span className="offer-badge">Special Offer</span>
          <h2>GOOD FOOD, DRINKS & GREAT COMPANY!</h2>
          <p>Enjoy our exclusive special offers – fresh and delicious meals just for you.</p>
          <button className="order-now-btn">Order Now</button>
        </div>
        <div className="offer-image">
          <img src="images/food/burger/burger3.jpg" alt="Special Burger" />
          <div className="discount-tag">20% OFF</div>
        </div>
      </div>


      <br /><br />
      <h2 className="heading">Top restaurants</h2>
      <div className="food-scroll-container1">
        <div className="food-card1">
          <Link href="https://share.google/KPPGd8ZfiWcYaE3Vd" target="_blank" rel="noopener noreferrer">
            <img src="/images/Dominos_Pizza.jpg" alt="Domino’s Pizza" />
          </Link>
          <p>Domino’s Pizza</p>
        </div>

        <div className="food-card1">
          <Link href="https://share.google/ZRZJy7DybjACaCADs" target="_blank" rel="noopener noreferrer">
            <img src="/images/KFC.jpg" alt="KFC" />
          </Link>
          <p>KFC</p>
        </div>

        <div className="food-card1">
          <img src="/images/Chinese_Wok.jpg" alt="Chinese Wok" />
          <p>Chinese Wok</p>
        </div>

        <div className="food-card1">
          <img src="/images/Wow_Momo.jpg" alt="Wow Momo" />
          <p>Wow Momo</p>
        </div>

        <div className="food-card1">
          <img src="/images/Biryani_By_Kilo.jpg" alt="Biryani By Kilo" />
          <p>Biryani By Kilo</p>
        </div>

        <div className="food-card1">
          <img src="/images/Behrouz_Biryani.jpg" alt="Behrouz Biryani" />
          <p>Behrouz Biryani</p>
        </div>

        <div className="food-card1">
          <img src="/images/Faasos.jpg" alt="Faasos" />
          <p>Faasos</p>
        </div>

        <div className="food-card1">
          <img src="/images/Oven_Story_Pizza.jpg" alt="Oven Story Pizza" />
          <p>Oven Story Pizza</p>
        </div>

        <div className="food-card1">
          <img src="/images/McDonalds.jpg" alt="McDonald’s" />
          <p>McDonald’s</p>
        </div>

        <div className="food-card1">
          <img src="/images/Subway.jpg" alt="Subway" />
          <p>Subway</p>
        </div>

        <div className="food-card1">
          <img src="/images/The_Belgian_Waffle_Co.jpg" alt="The Belgian Waffle Co" />
          <p>The Belgian Waffle Co.</p>
        </div>

        <div className="food-card1">
          <img src="/images/Pizza_Hut.jpg" alt="Pizza Hut" />
          <p>Pizza Hut</p>
        </div>

        <div className="food-card1">
          <img src="/images/Haldirams.jpg" alt="Haldiram’s" />
          <p>Haldiram’s</p>
        </div>

        <div className="food-card1">
          <img src="/images/Sweet_Truth.jpg" alt="Sweet Truth" />
          <p>Sweet Truth</p>
        </div>

        <div className="food-card1">
          <img src="/images/Burger_King.jpg" alt="Burger King" />
          <p>Burger King</p>
        </div>
      </div>

      <br />
      <section className="scroll-sec">
        <div className="scroll-container">
          {allImages.map((img, index) => (
            <div className="scroll-item" key={index}>
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <div className="specialDealCard">
        <div className="deal-badge">New Offer</div>
        <img src="/images/pizza.jpg" alt="Special Sandwich" className="deal-image" />
        <div className="deal-content">
          <h2><span className="highlight">Our</span> <span className="special">Special offer</span></h2>
          <p className="deal-sub">going on this week.</p>
          <p className="deal-desc">A special deal has dropped for this week! Grab your favorite sandwich now. Limited time only!</p>
          <button className="deal-btn">Order Now</button>
        </div>
      </div>

      <main>
        <div className="card">
          <img src="images/food/Juice/lemon4_Juice.jpg" alt="Juice" />
          <div className="info">
            <h1>Juice<br /><small>Fresh & Chilled</small></h1>
            <p>₹60<br /><small>Made from real fruits</small></p>
            <button className="btn-as-p">Order Now</button>
          </div>
        </div>

        <div className="card">
          <img src="images/food/cakes/cake9.jpg" alt="Cake" />
          <div className="info">
            <h1>Cake<br /><small>Soft & Creamy</small></h1>
            <p>₹280<br /><small>Perfect for celebrations</small></p>
            <button className="btn-as-p">Order Now</button>
          </div>
        </div>

        <div className="card">
          <img src="images/food/Chicken_Biriyani/Biriyani5.jpg" alt="Chicken Biryani" />
          <div className="info">
            <h1>Chicken Biryani<br /><small>Spicy & Flavourful</small></h1>
            <p>₹120<br /><small>Served with raita</small></p>
            <button className="btn-as-p">Order Now</button>
          </div>
        </div>

        <div className="card">
          <img src="images/food/pasta/pasta6.jpg" alt="Pasta" />
          <div className="info">
            <h1>Pasta<br /><small>Italian Delight</small></h1>
            <p>₹150<br /><small>Cheesy & Delicious</small></p>
            <button className="btn-as-p">Order Now</button>
          </div>
        </div>

        <div className="card">
          <img src="images/food/sweets/misti4.jpg" alt="Sweets" />
          <div className="info">
            <h1>Sweets<br /><small>Traditional Bengali</small></h1>
            <p>₹40<br /><small>Freshly made</small></p>
            <button className="btn-as-p">Order Now</button>
          </div>
        </div>

        <div className="card">
          <img src="images/food/cookies/cookies5.jpg" alt="Cookies" />
          <div className="info">
            <h1>Cookies<br /><small>Crunchy Bites</small></h1>
            <p>₹90<br /><small>Perfect with tea</small></p>
            <button className="btn-as-p">Order Now</button>
          </div>
        </div>

        <div className="card">
          <img src="images/food/tandoori/tandoori5.jpg" alt="Tandoori" />
          <div className="info">
            <h1>Tandoori<br /><small>Smoky & Juicy</small></h1>
            <p>₹110<br /><small>Charcoal roasted</small></p>
            <button className="btn-as-p">Order Now</button>
          </div>
        </div>

        <div className="card">
          <img src="/images/food/Tea_Coffee/coffee5.jpg" alt="Coffee" />
          <div className="info">
            <h1>Coffee<br /><small>Hot & Energizing</small></h1>
            <p>₹70<br /><small>Freshly brewed</small></p>
            <button className="btn-as-p">Order Now</button>
          </div>
        </div>
      </main>


      <div className="benner">
        <img src="images/ads.jpg" alt="" />
        <div className="offer">
          <h2>Get up to</h2>
          <h1>50% OFF</h1>
          <h6>On your dining with our restaurant.</h6>
          <button className="btn">
            Explore all your favorite restaurants in one place
          </button>
        </div>
      </div>

      <div className="chef-spotlight-section">
        <h2 className="spotlight-heading">
          🍽️ Chef's Spotlight
        </h2>

        <div className="spotlight-grid">
          {dishes.map((dish, index) => (
            <div key={index} className="spotlight-card">
              <div className="card-image-wrapper">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="card-image"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  {dish.name}
                </h3>
                <p className="card-description">
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="food-info-section">
        <h2 className="food-info-heading">Experience the Difference with Every Bite</h2>
        <div className="tiles-container">
          {foodTiles.map((tile, index) => (
            <div key={index} className="tile-card">
              <div className="tile-icon">{tile.icon}</div>
              <h3>{tile.title}</h3>
              <p>{tile.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>
              We provide fast and delicious food delivery at your doorstep.
              Trusted by thousands of food lovers every day.
            </p>
          </div>

          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul>
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">Menu</Link></li>
              <li><Link href="#">Order Now</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <p>Email: support@foodie.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Address: 123 Street, Kolkata, India</p>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">Youtube</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Foodie. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;