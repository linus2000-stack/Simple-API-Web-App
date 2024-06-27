const mongoose = require('mongoose');

// Define the database name
const dbName = "echo";

// Connect to MongoDB
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Handle connection errors
db.on('error', console.error.bind(console, 'connection error:'));

// Confirm connection
db.once('open', function() {
  console.log("Connected to the database");
});

module.exports = db;
