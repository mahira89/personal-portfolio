const express = require('express');
const router = express.Router();
const {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill
} = require('../controllers/skillController');
const { protect, authorize } = require('../middleware/auth');

// Public route - anyone can view skills
router.route('/')
  .get(getSkills);

// Protected routes (admin only)
router.route('/')
  .post(protect, authorize('admin'), createSkill);

router.route('/:id')
  .put(protect, authorize('admin'), updateSkill)
  .delete(protect, authorize('admin'), deleteSkill);

module.exports = router;
