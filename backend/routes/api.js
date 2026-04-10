const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const path = require('path');
const fs = require('fs');

// POST /api/contact - Handle contact form submission
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'Please provide all required fields' });
    }

    // Save to database
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    console.log('Contact message saved:', { name, email, subject, message });
    return res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    let errorMessage = 'Server error, could not send message';
    
    // Provide more specific error messages
    if (error.name === 'ValidationError') {
      errorMessage = 'Invalid data provided: ' + Object.values(error.errors).map(e => e.message).join(', ');
    } else if (error.message.includes('ECONNREFUSED')) {
      errorMessage = 'Database connection failed. Please try again later.';
    }
    
    res.status(500).json({ success: false, error: errorMessage });
  }
});

// GET /api/download/cv/:format - Download CV
router.get('/download/cv/:format', (req, res) => {
  const format = req.params.format.toLowerCase();
  let fileName = '';
  
  if (format === 'pdf') {
    fileName = 'resume.pdf';
  } else if (format === 'docx') {
    fileName = 'resume.docx';
  } else {
    return res.status(400).send('Invalid download format requested.');
  }

  const filePath = path.join(__dirname, '..', 'assets', fileName);

  // Check if file exists, then send
  if (fs.existsSync(filePath)) {
    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error('File download error:', err);
        res.status(500).send('Error downloading file');
      }
    });
  } else {
    res.status(404).send('CV file not found on the server.');
  }
});

module.exports = router;
