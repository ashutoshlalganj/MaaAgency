const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');

// POST - Subscribe to newsletter
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(400).json({ success: false, message: 'This email is already subscribed!' });
    }
    const subscriber = new Newsletter({ email });
    await subscriber.save();
    res.status(201).json({ success: true, message: 'Successfully subscribed to our newsletter!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Subscription failed', error: error.message });
  }
});

module.exports = router;
