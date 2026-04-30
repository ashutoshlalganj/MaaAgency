const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/solarDB';
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => console.log('❌ MongoDB Connection Error:', err.message));

// Routes
const contactRoutes = require('./src/routes/contact.routes');
const enquiryRoutes = require('./src/routes/enquiry.routes');
const newsletterRoutes = require('./src/routes/newsletter.routes');
const calculatorRoutes = require('./src/routes/calculator.routes');
const popupRoutes = require('./src/routes/popup.routes');

app.use('/api/contact', contactRoutes);
app.use('/api/enquiry', enquiryRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/calculator', calculatorRoutes);
app.use('/api/popup', popupRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SuryaShakti Solar API is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
