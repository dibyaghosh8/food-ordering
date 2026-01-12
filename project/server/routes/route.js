const express = require('express');
const router = express.Router();

const { registerUser, getAllUsers } = require('../controllers/register');
const { loginUser } = require('../controllers/login');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get("/users", getAllUsers); // optional

module.exports = router;
