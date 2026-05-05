const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Static folder for uploads
app.use('/uploads', express.static('uploads'));

// Import routes
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/contact', contactRoutes);

// Home route
app.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: 'Portfolio API is running!',
    endpoints: {
      auth: {
        register: 'POST /api/auth/register',
        login: 'POST /api/auth/login'
      },
      projects: {
        getAll: 'GET /api/projects',
        getOne: 'GET /api/projects/:id',
        create: 'POST /api/projects (Admin)',
        update: 'PUT /api/projects/:id (Admin)',
        delete: 'DELETE /api/projects/:id (Admin)'
      },
      skills: {
        getAll: 'GET /api/skills',
        create: 'POST /api/skills (Admin)',
        update: 'PUT /api/skills/:id (Admin)',
        delete: 'DELETE /api/skills/:id (Admin)'
      },
      contact: {
        submit: 'POST /api/contact',
        getMessages: 'GET /api/contact (Admin)'
      }
    }
  });
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Error:', err.message));

// Error handler (should be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
