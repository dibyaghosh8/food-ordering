"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "../../styles/menu.css"; 
const Page = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const menuContainerRef = useRef(null);

  const handleFilter = (category) => {
    setActiveCategory(category);
  };

  const scrollLeft = () => {
    menuContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    menuContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);
    faders.forEach((fader) => appearOnScroll.observe(fader));
  }, []);

  const categories = [
    "all",
    "starters",
    "main-course",
    "rice",
    "chinese",
    "fast",
    "north",
    "south",
    "desserts",
  ];

  const foodItems = [
     { category: 'starters', img: '/images/menu/paneer-tikka.jpg', title: 'Paneer Tikka' },
    { category: 'starters', img: '/images/menu/spring-roll.jpg', title: 'Veg Spring Rolls' },
    { category: 'starters', img: '/images/menu/nachos.jpg', title: 'Cheesy Nachos' },
    { category: 'starters', img: '/images/menu/manchurian.jpg', title: 'Veg Manchurian Balls' },
    { category: "starters", img: "/images/menu/paneer-tikka.jpg", title: "Paneer Tikka" },
    { category: "starters", img: "/images/menu/dim-sum.jpg", title: "Steamed Dimsum" },
    { category: "starters", img: "/images/menu/potato-wedges.jpg", title: "Potato Wedges" },
    { category: "main-course", img: "/images/menu/butter-chicken.jpg", title: "Butter Chicken" },
    { category: "main-course", img: "/images/menu/dal-makhani.jpg", title: "Dal Makhani" },
    { category: "main-course", img: "/images/menu/chicken-curry.jpg", title: "Chicken Curry" },
    { category: "main-course", img: "/images/menu/paneer-butter-masala.jpg", title: "Paneer Butter Masala" },
    { category: "main-course", img: "/images/menu/rajma.jpg", title: "Rajma Masala" },
    { category: "main-course", img: "/images/menu/kofta.jpg", title: "Malai Kofta" },
    { category: "main-course", img: "/images/menu/egg-curry.jpg", title: "Egg Curry" },
    { category: "main-course", img: "/images/menu/mix-veg.jpg", title: "Mix Veg Curry" },
    { category: "rice", img: "/images/menu/fried-rice.jpg", title: "Veg Fried Rice" },
    { category: "rice", img: "/images/menu/biryani.jpg", title: "Biryani" },
    { category: "rice", img: "/images/menu/pulao.jpg", title: "Veg Pulao" },
    { category: "rice", img: "/images/menu/jeera-rice.jpg", title: "Jeera Rice" },
    { category: "rice", img: "/images/menu/steamed-rice.jpg", title: "Steamed Rice" },
    { category: "rice", img: "/images/menu/chicken-pulao.jpg", title: "Chicken Pulao" },
    { category: "rice", img: "/images/menu/chinese-rice.jpg", title: "Egg Fried Rice" },
    { category: "rice", img: "/images/menu/kashmiri-pulao.jpg", title: "Kashmiri Pulao" },
    { category: "chinese", img: "/images/menu/noodles.jpg", title: "Hakka Noodles" },
    { category: "chinese", img: "/images/menu/chinese-rice.jpg", title: "Chinese Fried Rice" },
    { category: "chinese", img: "/images/menu/manchurian.jpg", title: "Veg Manchurian" },
    { category: "chinese", img: "/images/menu/chili-chicken.jpg", title: "Chili Chicken" },
    { category: "chinese", img: "/images/menu/spring-roll.jpg", title: "Spring Rolls" },
    { category: "chinese", img: "/images/menu/schezwan-noodles.jpg", title: "Schezwan Noodles" },
    { category: "chinese", img: "/images/menu/dimsum.jpg", title: "Steamed Momos" },
    { category: "chinese", img: "/images/menu/fried-momo.jpg", title: "Fried Momos" },
    { category: "fast", img: "/images/menu/burger.jpg", title: "Cheese Burger" },
    { category: "fast", img: "/images/menu/pizza.jpg", title: "Veg Pizza" },
    { category: "fast", img: "/images/menu/sandwich.jpg", title: "Club Sandwich" },
    { category: "fast", img: "/images/menu/wrap.jpg", title: "Chicken Wrap" },
    { category: "fast", img: "/images/menu/french-fries.jpg", title: "French Fries" },
    { category: "fast", img: "/images/menu/hotdog.jpg", title: "Hot Dog" },
    { category: "fast", img: "/images/menu/pasta.jpg", title: "Red Sauce Pasta" },
    { category: "fast", img: "/images/menu/taco.jpg", title: "Spicy Taco" },
    { category: "north", img: "/images/menu/rajma.jpg", title: "Rajma Masala" },
    { category: "north", img: "/images/menu/chole.jpg", title: "Chole Bhature" },
    { category: "north", img: "/images/menu/paratha.jpg", title: "Aloo Paratha" },
    { category: "north", img: "/images/menu/naan.jpg", title: "Butter Naan" },
    { category: "north", img: "/images/menu/dal-makhani.jpg", title: "Dal Makhani" },
    { category: "north", img: "/images/menu/paneer.jpg", title: "Paneer Lababdar" },
    { category: "north", img: "/images/menu/punjabi-thali.jpg", title: "Punjabi Thali" },
    { category: "north", img: "/images/menu/tandoori.jpg", title: "Tandoori Chicken" },
    { category: "south", img: "/images/menu/dosa.jpg", title: "Masala Dosa" },
    { category: "south", img: "/images/menu/idli.jpg", title: "Idli Sambhar" },
    { category: "south", img: "/images/menu/uttapam.jpg", title: "Onion Uttapam" },
    { category: "south", img: "/images/menu/rasam.jpg", title: "Tomato Rasam" },
    { category: "south", img: "/images/menu/upma.jpg", title: "Rava Upma" },
    { category: "south", img: "/images/menu/pongal.jpg", title: "Ven Pongal" },
    { category: "south", img: "/images/menu/vada.jpg", title: "Medu Vada" },
    { category: "south", img: "/images/menu/sambhar.jpg", title: "Sambhar Rice" },
    { category: "desserts", img: "/images/menu/ice-cream.jpg", title: "Vanilla Ice Cream" },
    { category: "desserts", img: "/images/menu/gulab-jamun.jpg", title: "Gulab Jamun" },
    { category: "desserts", img: "/images/menu/cake.jpg", title: "Chocolate Cake" },
    { category: "desserts", img: "/images/menu/rasgulla.jpg", title: "Rasgulla" },
    { category: "desserts", img: "/images/menu/brownie.jpg", title: "Brownie" },
    { category: "desserts", img: "/images/menu/jalebi.jpg", title: "Jalebi" },
    { category: "desserts", img: "/images/menu/custard.jpg", title: "Fruit Custard" },
    { category: "desserts", img: "/images/menu/pudding.jpg", title: "Vanilla Pudding" },
  ];

  return (
    <div className="App">
      <header>
        <div className="logo">Foodies World 🍽️</div>
        <nav>
          <a href="#">Home</a>
          <a href="#" className="active">Menu</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>
        <button className="book-btn">Book A Table</button>
      </header>

      <section className="hero">
        <h3>EXPLORE OUR MENUS</h3>
        <h1>Try Our Specialities</h1>

        <div className="category">
          {categories.map((cat) => (
            <span
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => handleFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ")}
            </span>
          ))}
        </div>

        <div className="cards-container" ref={menuContainerRef}>
          {foodItems
            .filter((item) => activeCategory === "all" || item.category === activeCategory)
            .map((item, index) => (
              <div className="card fade-in" key={index}>
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <button>Explore</button>
              </div>
            ))}
        </div>

        <div className="carousel-controls">
          <button onClick={scrollLeft}>←</button>
          <button onClick={scrollRight}>→</button>
        </div>
      </section>

      <section className="news-section fade-in">
        <h2>Latest News</h2>
        <div className="news-cards">
          <div className="news-card fade-in">
            <img src="images/food/Mutton_Biriyani/Biriyani1.jpg" alt="News 1" />
            <span className="tag">Trending</span>
            <h3>New Menu Launch</h3>
            <a href="#">Read more →</a>
            <button>Explore</button>
          </div>
          <div className="news-card fade-in">
            <img src="images/food/Mutton_Biriyani/Biriyani1.jpg" alt="News 2" />
            <span className="tag">Update</span>
            <h3>Chef Special Recipes</h3>
            <a href="#">Discover →</a>
            <button>Try Now</button>
          </div>
        </div>
      </section>

      <section className="chef-section fade-in">
        <h2>Meet Our Chefs</h2>
        <div className="chef-cards">
          <div className="chef-card fade-in">
            <img src="/images/about/chef1.jpg" alt="Chef Arya" />
            <h3>Chef Arya</h3>
            <p>Master of Fusion Cuisine</p>
            <div className="social-icons">👨‍🍳 👍 ❤️</div>
            <button>View Profile</button>
          </div>
          <div className="chef-card fade-in">
            <img src="/images/about/chef2.jpg" alt="Chef Rohan" />
            <h3>Chef Rohan</h3>
            <p>Pastry & Dessert Expert</p>
            <div className="social-icons">🍰 ⭐ 🔥</div>
            <button>View Profile</button>
          </div>
        </div>
      </section>

      <section className="testimonial-section fade-in">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonial-card fade-in">
            <img src="/images/about/user1.jpg" alt="Customer 1" />
            <p>"The food was absolutely amazing! Highly recommend the biryani!"</p>
            <h4>— Neha S.</h4>
          </div>
          <div className="testimonial-card fade-in">
            <img src="/images/about/user2.jpg" alt="Customer 2" />
            <p>"Fast delivery and the best customer service I've ever seen!"</p>
            <h4>— Rahul D.</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
