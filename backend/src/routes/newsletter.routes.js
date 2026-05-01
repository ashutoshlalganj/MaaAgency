const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER || 'reyesraghav@gmail.com',
    pass: process.env.SMTP_PASS || 'your_app_password_here'
  }
});

// Welcome email when someone subscribes
const sendWelcomeEmail = async (email) => {
  const mailOptions = {
    from: `"EKOSYS Solar" <${process.env.SMTP_USER || 'reyesraghav@gmail.com'}>`,
    to: email,
    subject: '🌞 Welcome to EKOSYS Solar Newsletter!',
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #f59e0b, #f97316); padding: 30px; text-align: center;">
          <h1 style="color: #fff; margin: 0 0 8px; font-size: 1.8rem;">EKOSYS</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 0.9rem;">Think | Innovate — Powering a Greener Tomorrow</p>
        </div>
        <div style="padding: 30px; background: #fff;">
          <h2 style="color: #f59e0b; margin-bottom: 16px;">Welcome to the EKOSYS Family! 🎉</h2>
          <p style="color: #475569; line-height: 1.8; font-size: 1rem;">
            Thank you for subscribing to the EKOSYS Solar newsletter! You'll now receive weekly updates on:
          </p>
          <ul style="color: #475569; line-height: 2; font-size: 0.95rem;">
            <li>☀️ Latest solar products and offers</li>
            <li>💰 Government subsidy updates (PM Surya Ghar Yojana)</li>
            <li>🔋 New technology and tips to save on electricity</li>
            <li>📰 Industry news and Bihar solar updates</li>
          </ul>
          <div style="background: linear-gradient(135deg, rgba(245,158,11,0.1), rgba(249,115,22,0.05)); border-radius: 12px; padding: 20px; margin: 20px 0; text-align: center;">
            <p style="color: #f59e0b; font-weight: 700; font-style: italic; margin: 0;">
              "स्वच्छ ऊर्जा, सुरक्षित कल — सोलर अपनाएं, पैसे बचाएं!"
            </p>
          </div>
          <div style="text-align: center; margin-top: 24px;">
            <a href="https://ekosys.in/products" style="display: inline-block; background: linear-gradient(135deg, #f59e0b, #f97316); color: #fff; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: 600;">Explore Our Products →</a>
          </div>
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
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log('Welcome email failed:', err.message);
  }
};

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
    
    // Send welcome email
    sendWelcomeEmail(email);
    
    res.status(201).json({ success: true, message: 'Successfully subscribed! Check your email for a welcome message.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Subscription failed', error: error.message });
  }
});

// GET - Send weekly newsletter to all subscribers (call this via cron job or admin)
router.get('/send-weekly', async (req, res) => {
  try {
    const subscribers = await Newsletter.find({});
    if (subscribers.length === 0) {
      return res.json({ success: true, message: 'No subscribers found' });
    }

    const weeklyHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #f59e0b, #f97316); padding: 30px; text-align: center;">
          <h1 style="color: #fff; margin: 0 0 8px; font-size: 1.8rem;">EKOSYS</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 0.9rem;">Think | Innovate — Your Weekly Solar Update</p>
        </div>
        <div style="padding: 30px; background: #fff;">
          <h2 style="color: #334155; margin-bottom: 8px;">Namaste! 🙏</h2>
          <p style="color: #f59e0b; font-size: 0.9rem; margin-bottom: 20px;">Your weekly solar news from EKOSYS</p>
          
          <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #334155; margin-bottom: 12px;">☀️ This Week's Highlights</h3>
            <p style="color: #475569; line-height: 1.8;">
              • <strong>PM Surya Ghar Yojana</strong> — Get up to ₹78,000 subsidy on rooftop solar. Limited time offer!<br/>
              • <strong>New Solar Water Pumps</strong> — PM-KUSUM scheme offers up to 90% subsidy for farmers.<br/>
              • <strong>Energy Saving Tip:</strong> A 5kW solar system can save ₹8,000-12,000/month on electricity bills.
            </p>
          </div>

          <div style="background: linear-gradient(135deg, #0f172a, #1e293b); border-radius: 12px; padding: 24px; margin-bottom: 20px; text-align: center;">
            <p style="color: #f59e0b; font-size: 1.3rem; font-weight: 700; margin: 0 0 8px;">Special Offer This Week!</p>
            <p style="color: #94a3b8; margin: 0 0 16px;">Free site survey + ₹5,000 discount on installation</p>
            <a href="https://ekosys.in/contact" style="display: inline-block; background: linear-gradient(135deg, #f59e0b, #f97316); color: #fff; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-weight: 600;">Claim Offer →</a>
          </div>

          <div style="border-left: 4px solid #f59e0b; padding-left: 16px; margin: 20px 0;">
            <p style="color: #f59e0b; font-weight: 700; font-style: italic; margin: 0;">
              "प्रधानमंत्री सूर्य घर मुफ़्त बिजली योजना — अपने घर की छत पर सोलर लगाएं और बिजली बिल से छुटकारा पाएं!"
            </p>
          </div>
        </div>
        <div style="background: #0f172a; padding: 24px; text-align: center;">
          <p style="color: #f59e0b; font-weight: 700; margin: 0 0 8px; font-size: 1.1rem;">EKOSYS Solar</p>
          <p style="color: #94a3b8; margin: 0; font-size: 0.85rem;">📞 8757686826 | ✉ reyesraghav@gmail.com</p>
          <p style="color: #94a3b8; margin: 4px 0 0; font-size: 0.85rem;">📍 Hajipur, Vaishali, Bihar</p>
          <p style="color: #64748b; margin: 12px 0 0; font-size: 0.75rem;">You're receiving this because you subscribed to EKOSYS Solar updates.</p>
        </div>
      </div>
    `;

    let sent = 0;
    for (const sub of subscribers) {
      try {
        await transporter.sendMail({
          from: `"EKOSYS Solar" <${process.env.SMTP_USER || 'reyesraghav@gmail.com'}>`,
          to: sub.email,
          subject: '☀️ Your Weekly Solar Update from EKOSYS!',
          html: weeklyHtml
        });
        sent++;
      } catch (err) {
        console.log(`Failed to send to ${sub.email}:`, err.message);
      }
    }

    res.json({ success: true, message: `Weekly newsletter sent to ${sent}/${subscribers.length} subscribers` });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send weekly newsletter', error: error.message });
  }
});

module.exports = router;
