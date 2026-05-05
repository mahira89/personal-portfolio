const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/projectController');
const { protect, authorize } = require('../middleware/auth');

// Public routes
router.route('/')
  .get(getProjects);  // Anyone can view projects

// Get single project (public)
router.route('/:id')
  .get(getProject);

// Protected routes (admin only)
router.route('/')
  .post(protect, authorize('admin'), createProject);

router.route('/:id')
  .put(protect, authorize('admin'), updateProject)
  .delete(protect, authorize('admin'), deleteProject);

module.exports = router;
