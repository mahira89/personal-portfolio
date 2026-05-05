const express = require('express');
const router = express.Router();
const {
  submitContact,
  getMessages
} = require('../controllers/contactController');
const { protect } = require('../middleware/auth');

// Public route - anyone can submit contact form
router.route('/')
  .post(submitContact);

// Protected route - only logged in users can view messages
router.route('/')
  .get(protect, getMessages);

module.exports = router;
