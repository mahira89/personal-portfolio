const express = require('express');
const router = express.Router();
const {
  register,
  login
} = require('../controllers/authController');

// Public routes
router.post('/register', register);  // Create new account
router.post('/login', login);        // Login to account

module.exports = router;

