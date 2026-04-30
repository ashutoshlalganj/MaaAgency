const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER || 'reyesraghav@gmail.com',
    pass: process.env.SMTP_PASS || 'your_app_password_here'
  }
});

// POST - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const contact = new Contact({ name, email, phone, subject, message });
    await contact.save();
    
    // Email to Admin
    const adminMailOptions = {
      from: process.env.SMTP_USER || 'reyesraghav@gmail.com',
      to: 'reyesraghav@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h3>New Contact Enquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    // Email to Customer
    const customerMailOptions = {
      from: process.env.SMTP_USER || 'reyesraghav@gmail.com',
      to: email,
      subject: 'Thank you for contacting Maa Agencies',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #f59e0b;">Thank You, ${name}!</h2>
          <p>We have received your message regarding <strong>${subject}</strong>. Our support team at Maa Agencies will get back to you shortly.</p>
          <p>Best Regards,<br><strong>Maa Agencies Team</strong><br>Hajipur, Vaishali, Bihar</p>
        </div>
      `
    };

    try {
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(customerMailOptions);
    } catch (mailError) {
      console.log('Mail sending failed:', mailError.message);
    }

    res.status(201).json({ success: true, message: 'Message sent successfully! We will contact you soon.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send message', error: error.message });
  }
});

// GET - Get all contacts (admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
