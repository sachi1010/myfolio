const express = require('express');
const router = express.Router();
const About = require('../models/About');
require('../models/db');

router.get('/', async (req, res) => {
  try {
    const aboutData = await About.find();
    console.log(aboutData)
    res.json(aboutData);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching about data', error: err });
  }
});


module.exports = router;
