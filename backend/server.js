require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets if needed
// app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Database Connection
let dbConnected = false;

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✓ Connected to MongoDB');
    dbConnected = true;
  })
  .catch(err => {
    console.error('✗ MongoDB connection error:', err.message);
    console.warn('⚠ Proceeding without database - contact data will not be saved!');
    dbConnected = false;
  });
} else {
  console.log('⚠ No MONGODB_URI provided. Database connection skipped.');
}

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'Backend is running',
    dbConnected: dbConnected
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
