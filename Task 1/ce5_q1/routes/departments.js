const express = require('express');
const router = express.Router();
const Department = require('../models/department');
const Staff = require('../models/staff');

// Endpoint to add a department
router.get('/add/:code', async (req, res) => {
  const dept = new Department({ code: req.params.code });
  await dept.save();
  res.json({ code: req.params.code });
});

// Endpoint to get all departments
router.get('/all', async (req, res) => {
  const depts = await Department.find();
  res.json(depts);
});

// Endpoint to get all departments with their staff
router.get('/all/withstaff', async (req, res) => {
  const depts = await Department.find();
  const result = await Promise.all(depts.map(async dept => {
    const staffs = await Staff.find({ dept: dept.code });
    return { code: dept.code, staffs };
  }));
  res.json(result);
});

module.exports = router;
