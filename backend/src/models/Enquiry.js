const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  roofArea: { type: String },
  monthlyBill: { type: String },
  systemType: { type: String, enum: ['on-grid', 'off-grid', 'hybrid'], default: 'on-grid' },
  message: { type: String },
  status: { type: String, enum: ['pending', 'contacted', 'converted', 'closed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Enquiry', enquirySchema);
