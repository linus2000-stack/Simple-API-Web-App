const mongoose = require('mongoose');

// Define the Department schema
const departmentSchema = new mongoose.Schema({
  code: String
});

// Export the Department model
module.exports = mongoose.model('Department', departmentSchema);
