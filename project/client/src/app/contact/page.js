
"use client";
import React, { useState } from "react";
import "../../styles/contact.css";

const RegisterLoginPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [isLogin, setIsLogin] = useState(true);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { fullName, email, phone, password, confirmPassword } = form;
  const newErrors = [];

  if (!isLogin) {
    if (fullName.trim().length < 3) newErrors.push("❌ Full name must be at least 3 characters.");
    if (!/^\d{10}$/.test(phone)) newErrors.push("❌ Mobile number must be 10 digits.");
    if (password !== confirmPassword) newErrors.push("❌ Passwords do not match.");
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.push("❌ Invalid email format.");
  if (password.length < 8) newErrors.push("❌ Password must be at least 8 characters.");
  if (!/[A-Z]/.test(password)) newErrors.push("❌ Password must include an uppercase letter.");
  if (!/[a-z]/.test(password)) newErrors.push("❌ Password must include a lowercase letter.");
  if (!/[0-9]/.test(password)) newErrors.push("❌ Password must include a number.");
  if (!/[!@#$%^&*]/.test(password)) newErrors.push("❌ Password must include a special character.");

  return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);
    const apiURL = isLogin ? "http://localhost:5000/api/login" : "http://localhost:5000/api/register";

    const payload = isLogin
      ? { email: form.email, password: form.password }
      : {
          username: form.fullName,
          email: form.email,
          number: form.phone,
          password: form.password,
          confirmPassword: form.confirmPassword,
        };

    try {
      const res = await fetch(apiURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors([`❌ ${data.message}`]);
      } else {
        alert(data.message || (isLogin ? " Login successful!" : " Registration successful!"));
        setForm({
          fullName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (err) {
      setErrors(["❌ Server error. Please try again later."]);
    }
  };

  return (
   <div className="contact-container">
      {/* Toggle Buttons */}
      <div className="toggle-buttons">
        <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}> Login</button>
        <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}> Register</button>
      </div>

      <h2>{isLogin ? "🔐 Login" : "📝 Register"}</h2>
      <p>{isLogin ? "Welcome back! Please log in." : "Please fill out the form to create an account."}</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input
              type="text"
              name="fullName"
              placeholder="👤 Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="📱 Mobile Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="📧 Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="🔒 Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        {!isLogin && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="🔁 Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        )}
        <button type="submit">{isLogin ? " Login" : " Register"}</button>
      </form>

      {errors.length > 0 && (
        <div className="error-box">
          <h4>⚠️ Please fix the following:</h4>
          <ul>
            {errors.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RegisterLoginPage;
