const express = require('express');
const router = express.Router();
const About = require('../models/About');
require('../models/db')

router.get('/', async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (error) {
    console.error('Error in /about route:', error.message);  // 👈 Add this
    res.status(500).json({ message: 'Error fetching about data', error: error.message });
  }
});


// (Optional) POST route to add initial data
router.post('/', async (req, res) => {
  try {
    const newAbout = new About({
      title: "Full Stack Developer",
      description: "I love building scalable web applications and solving real-world problems using technology."
    });
    const savedAbout = await newAbout.save();
    res.status(201).json(savedAbout);
  } catch (error) {
    res.status(400).json({ message: 'Error saving about data', error });
  }
});

module.exports = router;
