const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
require('../models/db');

// POST
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.json({ success: false, error: 'All fields are required.' });
  }

  try {
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.json({ success: true, message: 'Message saved successfully!' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});


module.exports = router;
