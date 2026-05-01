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
      subject: '🌞 New Solar Quote Request — EKOSYS',
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #f59e0b, #f97316); padding: 24px; text-align: center;">
            <h2 style="color: #fff; margin: 0; font-size: 1.5rem;">🌞 New Quote Request</h2>
          </div>
          <div style="padding: 30px; background: #fff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px; font-weight: 600; color: #334155;">Name:</td><td style="padding: 10px; color: #475569;">${name}</td></tr>
              <tr style="background: #f8fafc;"><td style="padding: 10px; font-weight: 600; color: #334155;">Email:</td><td style="padding: 10px; color: #475569;">${email}</td></tr>
              <tr><td style="padding: 10px; font-weight: 600; color: #334155;">Phone:</td><td style="padding: 10px; color: #475569;">${phone}</td></tr>
              <tr style="background: #f8fafc;"><td style="padding: 10px; font-weight: 600; color: #334155;">City:</td><td style="padding: 10px; color: #475569;">${city}</td></tr>
              <tr><td style="padding: 10px; font-weight: 600; color: #334155;">Requirement:</td><td style="padding: 10px; color: #475569;">${requirement || 'General Enquiry'}</td></tr>
            </table>
          </div>
          <div style="background: #0f172a; padding: 16px; text-align: center;">
            <p style="color: #94a3b8; margin: 0; font-size: 0.85rem;">EKOSYS Solar — Think | Innovate</p>
          </div>
        </div>
      `
    };

    // Email to Customer
    const customerMailOptions = {
      from: `"EKOSYS Solar" <${process.env.SMTP_USER || 'reyesraghav@gmail.com'}>`,
      to: email,
      subject: '🌞 Thank You for Choosing EKOSYS Solar!',
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #f59e0b, #f97316); padding: 30px; text-align: center;">
            <h1 style="color: #fff; margin: 0 0 8px; font-size: 1.8rem;">EKOSYS</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 0.9rem;">Think | Innovate — Powering a Greener Tomorrow</p>
          </div>
          <div style="padding: 30px; background: #fff;">
            <h2 style="color: #f59e0b; margin-bottom: 16px;">Namaste ${name} ji! 🙏</h2>
            <p style="color: #475569; line-height: 1.8; font-size: 1rem;">
              Thank you for your interest in EKOSYS Solar solutions! We have received your request and our solar expert will contact you within <strong>24 hours</strong> to discuss the best solution for your needs.
            </p>
            <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <p style="margin: 0 0 8px; font-weight: 600; color: #334155;">Your Request Summary:</p>
              <p style="margin: 4px 0; color: #64748b;">📞 Phone: ${phone}</p>
              <p style="margin: 4px 0; color: #64748b;">📍 City: ${city}</p>
              <p style="margin: 4px 0; color: #64748b;">📋 Requirement: ${requirement || 'General Enquiry'}</p>
            </div>
            <div style="background: linear-gradient(135deg, rgba(245,158,11,0.1), rgba(249,115,22,0.05)); border-radius: 12px; padding: 20px; margin: 20px 0; text-align: center;">
              <p style="color: #f59e0b; font-weight: 700; font-style: italic; margin: 0;">
                "PM सूर्य घर मुफ़्त बिजली योजना — ₹78,000 तक की सब्सिडी पाएं!"
              </p>
            </div>
            <p style="color: #475569; line-height: 1.7;">
              <strong>Why EKOSYS?</strong><br/>
              ✅ 500+ Installations across Bihar<br/>
              ✅ MNRE Approved, Tier-1 Equipment<br/>
              ✅ Complete Subsidy Assistance<br/>
              ✅ 25-Year Performance Warranty
            </p>
          </div>
          <div style="background: #0f172a; padding: 24px; text-align: center;">
            <p style="color: #f59e0b; font-weight: 700; margin: 0 0 8px; font-size: 1.1rem;">EKOSYS Solar</p>
            <p style="color: #94a3b8; margin: 0; font-size: 0.85rem;">📞 8757686826 | ✉ reyesraghav@gmail.com</p>
            <p style="color: #94a3b8; margin: 4px 0 0; font-size: 0.85rem;">📍 Hajipur, Vaishali, Bihar</p>
          </div>
        </div>
      `
    };

    try {
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(customerMailOptions);
    } catch (mailError) {
      console.log('Mail sending failed:', mailError.message);
    }

    res.status(201).json({ success: true, message: 'Request submitted successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to submit request', error: error.message });
  }
});

module.exports = router;
