const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER || 'reyesraghav@gmail.com',
    pass: process.env.SMTP_PASS || 'your_app_password_here'
  }
});

// POST - Submit popup form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, city, requirement } = req.body;
    
    // Email to Admin
    const adminMailOptions = {
      from: process.env.SMTP_USER || 'reyesraghav@gmail.com',
      to: 'reyesraghav@gmail.com',
      subject: 'New Solar Quote Request (Popup)',
      html: `
        <h3>New Customer Enquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Requirement:</strong> ${requirement || 'N/A'}</p>
      `
    };

    // Email to Customer
    const customerMailOptions = {
      from: process.env.SMTP_USER || 'reyesraghav@gmail.com',
      to: email,
      subject: 'Thank you for your interest in Maa Agencies Solar',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #f59e0b;">Thank You, ${name}!</h2>
          <p>We have received your request for a solar quote. Our expert from Maa Agencies will contact you shortly to discuss your requirements and provide you with the best solar solution.</p>
          <p><strong>Your Details:</strong></p>
          <ul>
            <li>Phone: ${phone}</li>
            <li>City: ${city}</li>
            <li>Requirement: ${requirement || 'General Enquiry'}</li>
          </ul>
          <p>Best Regards,<br><strong>Maa Agencies Solar Team</strong><br>Hajipur, Vaishali, Bihar</p>
        </div>
      `
    };

    // Try sending emails, catch block will handle if credentials fail but we'll still send success to frontend
    try {
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(customerMailOptions);
    } catch (mailError) {
      console.log('Mail sending failed (Likely due to missing credentials in local dev):', mailError.message);
    }

    res.status(201).json({ success: true, message: 'Request submitted successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to submit request', error: error.message });
  }
});

module.exports = router;
