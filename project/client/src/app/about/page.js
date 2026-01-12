"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from "framer-motion";
import "../../styles/about.css";

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const slides = [
    "/images/about/banner1.jpg",
    "/images/about/banner2.jpg",
    "/images/about/banner3.jpg",
    "/images/about/banner4.jpg",
    "/images/about/banner5.jpg",
  ];

  const startAutoSlide = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(slideInterval.current);
  };

  const moveSlide = (direction) => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev + direction + slides.length) % slides.length);
    startAutoSlide();
  };

  const goToSlide = (index) => {
    stopAutoSlide();
    setCurrentSlide(index);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  useEffect(() => {
    const track = document.getElementById("carouselTrack");
    if (track) {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
     <div>

      {/* Top Banner */}
      <section className="about-banner">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          ABOUT US
        </motion.h1>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="founder-container">
          <motion.div
            className="founder-img"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/about/founder.jpg" alt="Founder" />
          </motion.div>

          <motion.div
            className="founder-quote"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>“We spice tradition with creativity.”</h2>
            <p>
              <strong>"We didn’t just build a website to deliver food — we built a bridge between hunger and hustle, one order at a time."</strong>
            </p>
            <p className="founder-signature">— Jalen Rivera, Founder</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <motion.section
        className="why-choose"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>WHY CHOOSE US</h2>
        <p className="subtitle">Some of Our Features</p>

        <div className="features-grid">
          {[
            {
              icon: "fa-truck",
              title: "Free Delivery",
              desc: "Get your food delivered at no extra cost, fast and fresh!",
            },
            {
              icon: "fa-utensils",
              title: "Expert Chef",
              desc: "Our chefs are highly trained and bring global flavors to your plate.",
            },
            {
              icon: "fa-burger",
              title: "Awesome Recipe",
              desc: "We craft every dish with love, flavor, and a pinch of creativity.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              className="feature-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <i className={`fa-solid ${item.icon}`}></i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Our Chefs */}
      <section className="our-chefs">
        <div className="enhanced-heading">
          <span className="tagline">★ OUR TEAM</span>
          <h2 className="title">Meet Our Chefs</h2>
          <p className="subtext">The masters behind every flavor</p>
        </div>

        <div className="chefs-grid">
          {[
            { name: "Pranav Badgal", img: "/images/about/chef1.jpg" },
            { name: "Priyotosh Dey", img: "/images/about/chef2.jpg" },
            { name: "Puja Banerjee", img: "/images/about/chef3.jpg" },
          ].map((chef, idx) => (
            <motion.div
              key={chef.name}
              className="chef-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: false }}
            >
              <img src={chef.img} alt={`Chef ${chef.name}`} />
              <h3>{chef.name}</h3>
              <div className="social-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-wrapper">
        <div className="testimonial-heading">
          <span className="testimonial-subtitle">What They Say</span>
          <h2 className="testimonial-title">What Our Customers Say About Us</h2>
          <div className="testimonial-underline" />
        </div>

        <div className="testimonial-body">
          <div className="chef-bob-image">
            <img src="/images/about/chef.jpg" alt="Chef" />
          </div>

          <div className="testimonial-section">
            {[
              {
                name: "Ashmita Rao",
                img: "/images/about/user1.jpg",
                text: "“Absolutely delicious! The chicken was crispy even after delivery, and the sauce had the perfect kick. Generous portions too — I actually saved some for later.”",
                stars: "★★★★☆",
              },
              {
                name: "Ravi Kumawat",
                img: "/images/about/user2.jpg",
                text: "“Butter Paneer was so tasty and rich! delivery guy was really polite and respectful too.”",
                stars: "★★★★★",
              },
              {
                name: "Navnit Kumar",
                img: "/images/about/user3.jpg",
                text: "“Great flavor and perfectly smashed patties. Bun was a little squished in delivery, but it still tasted amazing. Fries held up better than I expected too.”",
                stars: "★★★★☆",
              },
              {
                name: "Somyadeep Bhowmik",
                img: "/images/about/user4.jpg",
                text: "“So fresh and vibrant! Every ingredient felt thoughtfully chosen. The tahini dressing tied it all together. I didn’t even miss the meat — and I usually do!”",
                stars: "★★★★★",
              },
            ].map((testimonial, index) => (
              <motion.div
                className="testimonial-card"
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img src={testimonial.img} className="profile-pic" alt={testimonial.name} />
                <div className="testimonial-content">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.text}</p>
                  <div className="stars">{testimonial.stars}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Carousel */}
      <section className="carousel-container">
        <div className="carousel" id="carouselTrack">
          {slides.map((src, index) => (
            <div className="carousel-slide" key={index}>
              <img src={src} alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </div>

        <button className="carousel-btn prev" onClick={() => moveSlide(-1)}>&#10094;</button>
        <button className="carousel-btn next" onClick={() => moveSlide(1)}>&#10095;</button>
        <button className="menu-btn">View Our Menu</button>

        <div className="carousel-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${currentSlide === i ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            ></span>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <motion.section
        className="newsletter-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="newsletter-card">
          <h2>Get discounts instantly</h2>
          <p>
            Join our foodie family and never miss a bite! Sign up now to get exclusive <strong>10% off</strong> on your first order, early access to new dishes, and delicious deals delivered straight to your inbox.
          </p>

          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button>Get started</button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-top">
          <div className="footer-column">
            <h4>Sign up for our newsletter</h4>
            <p>Don't worry, we reserve our newsletter for important news so we only send a few updates a year.</p>
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <div className="footer-column">
            <h4>Help and services</h4>
            <p>How does it work</p>
            <p>FAQS</p>
            <p>Contact</p>
          </div>
          <div className="footer-column">
            <h4>To explore</h4>
            <p>Accommodations</p>
            <p>Experiences</p>
            <p>Blog</p>
          </div>
          <div className="footer-column">
            <h4>Other possibilities</h4>
            <p>Give away</p>
            <p>Subscribe</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2022 Justinmind</p>
          <div className="footer-socials">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Page;
