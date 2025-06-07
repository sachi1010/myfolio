const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
 
  title: {type:String},
  description: {type:String},
});

module.exports = mongoose.model('About', aboutSchema);
