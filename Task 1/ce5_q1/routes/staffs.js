const express = require('express');
const router = express.Router();
const Staff = require('../models/staff');

// Endpoint to add a staff member
router.get('/add/:id/:name/:dept', async (req, res) => {
  const staff = new Staff({ id: req.params.id, name: req.params.name, dept: req.params.dept });
  await staff.save();
  res.json({ id: req.params.id, name: req.params.name, dept: req.params.dept });
});

// Endpoint to get all staff members
router.get('/all', async (req, res) => {
  const staffs = await Staff.find();
  res.json(staffs);
});

module.exports = router;
