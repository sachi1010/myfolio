const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  year: String,
});

module.exports = mongoose.model('Education', EducationSchema);
