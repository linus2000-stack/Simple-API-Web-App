const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // Import database connection

const departmentRoutes = require('./routes/departments'); // Import department routes
const staffRoutes = require('./routes/staffs'); // Import staff routes

const app = express();

// Use body-parser to parse JSON bodies
app.use(bodyParser.json());

// Set up routes
app.use('/dept', departmentRoutes);
app.use('/staff', staffRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
