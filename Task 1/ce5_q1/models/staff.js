const mongoose = require('mongoose');

// Define the Staff schema
const staffSchema = new mongoose.Schema({
  id: Number,
  name: String,
  dept: String
});

// Export the Staff model
module.exports = mongoose.model('Staff', staffSchema);
