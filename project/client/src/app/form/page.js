"use client";
import React from "react";
import "../../styles/form.css"; 

const ContactForm = () => {
  return (
     <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae enim
          officiis excepturi ullam provident ipsum, fugit totam expedita nulla.
        </p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <b></b>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                405544 Sugar Camp Road,<br />
                Owatonna, Minnesota,<br />
                22545521
              </p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <b></b>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>000-000-0000</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <b></b>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>temporaryEmail@dummy.domain</p>
            </div>
          </div>

          <h2 className="txt">Connect with us</h2>
          <ul className="sci">
            <li>
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            </li>
          </ul>
        </div>

        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" required />
              <span>First Name</span>
            </div>
            <div className="inputBox">
              <input type="text" required />
              <span>Last Name</span>
            </div>
            <div className="inputBox">
              <input type="text" required />
              <span>Phone Number</span>
            </div>
            <div className="inputBox">
              <input type="text" required />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required></textarea>
              <span>Send Your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;