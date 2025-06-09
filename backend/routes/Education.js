const express = require('express');
const router = express.Router();
const Education = require('../models/Education');
require('../models/db')
router.get('/', async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
