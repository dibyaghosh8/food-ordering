const User = require('../models/userModel');

const registerUser = async (req, res) => {
  const { username, email, number, password, confirmPassword } = req.body;

  if (!username || !email || !number || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = new User({ username, email, number, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: { username, email } });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

module.exports = { registerUser, getAllUsers };
