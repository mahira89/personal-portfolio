const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  technologies: [{
    type: String,
    required: true
  }],
  imageUrl: {
    type: String,
    default: 'https://via.placeholder.com/800x400?text=Project+Image'
  },
  githubUrl: {
    type: String,
    match: [/^(https?:\/\/)?(www\.)?github\.com\/.*/, 'Invalid GitHub URL']
  },
  liveUrl: {
    type: String,
    default: ''
  },
  featured: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    enum: ['web', 'mobile', 'desktop', 'other'],
    default: 'web'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
