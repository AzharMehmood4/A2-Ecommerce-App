const express = require('express');
const mongoose = require('mongoose'); // ✅ ADD THIS
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');

const app = express();

// ✅ Middleware
app.use(cors({
  origin: '*' // Allow all origins for development
}));
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// Default route
app.get('/', (req, res) => {
  res.send('Backend is working fine! 🚀');
});

// ✅ Use auth routes
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 API: http://192.168.1.5:${PORT}/api/auth/signup`);
});