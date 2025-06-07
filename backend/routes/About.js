const express = require('express');
const router = express.Router();
const About = require('../models/About');


router.get('/', async (req, res) => {
  try {
    const aboutData = await About.findOne();
    res.json(aboutData);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching about data', error: err });
  }
});


module.exports = router;
