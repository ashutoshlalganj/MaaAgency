const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

// POST - Submit enquiry
router.post('/', async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).json({ success: true, message: 'Enquiry submitted successfully! Our solar expert will reach out within 24 hours.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to submit enquiry', error: error.message });
  }
});

// GET - Get all enquiries
router.get('/', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, data: enquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
