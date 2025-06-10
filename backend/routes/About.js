const express = require('express');
const router = express.Router();
const About = require('../models/About');
require('../models/db')

router.get('/', async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (error) {
    console.error(error.message); 
    res.status(500).json(error.message );
  }
});




module.exports = router;
