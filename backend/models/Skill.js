const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Skill name is required'],
    unique: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['frontend', 'backend', 'database', 'devops', 'tools'],
    required: true
  },
  proficiency: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  icon: {
    type: String,
    default: 'code'
  },
  yearsOfExperience: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);
