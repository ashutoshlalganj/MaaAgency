import { useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const showToast = (msg, type = 'success') => { setToast({ msg, type }); setTimeout(() => setToast(null), 4000); };

  const submitContact = async (e) => {
    e.preventDefault(); setLoading(true);
    try { const { data } = await axios.post(`${API}/contact`, form); showToast(data.message); setForm({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
    } catch { showToast('Failed to send message. Please try again.', 'error'); }
    setLoading(false);
  };

  return (
    <>
      {toast && <div className={`toast ${toast.type === 'error' ? 'error' : ''}`}>{toast.msg}</div>}
      <section className="page-header">
        <div className="container">
          <h1><span className="highlight">Contact</span> Us</h1>
          <p>Get in touch with Maa Agencies for free consultation, quotes, and support</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <form className="contact-form" onSubmit={submitContact}>
                <h2 style={{ marginBottom: 20 }}>Send Us A Message</h2>
                <input placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                <input placeholder="Phone Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
                <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
                  <option>General Enquiry</option><option>Solar Quote</option><option>Subsidy Help</option><option>Maintenance</option><option>Complaint</option><option>Partnership</option>
                </select>
                <textarea placeholder="Your Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  {loading ? <span className="spinner"></span> : 'Send Message →'}
                </button>
              </form>
            </div>
            <div className="contact-info-card">
              <h2 style={{ marginBottom: 24 }}>Get in Touch</h2>
              <div className="contact-info-item"><div className="icon">📞</div><div><h4>Phone</h4><p>8757686826</p></div></div>
              <div className="contact-info-item"><div className="icon">✉</div><div><h4>Email</h4><p>reyesraghav@gmail.com</p></div></div>
              <div className="contact-info-item"><div className="icon">📍</div><div><h4>Address</h4><p>Maa Agencies</p><p>Hajipur, Vaishali, Bihar</p></div></div>
              <div className="contact-info-item"><div className="icon">🕐</div><div><h4>Business Hours</h4><p>Mon - Sat: 9:00 AM - 7:00 PM</p><p>Sunday: Closed</p></div></div>
              <div style={{ background: 'rgba(245,158,11,.1)', borderRadius: 12, padding: 20, marginTop: 16 }}>
                <p style={{ color: '#f59e0b', fontWeight: 600, fontStyle: 'italic' }}>🌟 "PM सूर्य घर मुफ़्त बिजली योजना - आज ही आवेदन करें और 300 यूनिट तक मुफ़्त बिजली पाएं।"</p>
                <p style={{ color: '#94a3b8', fontSize: '.85rem', marginTop: 8 }}>We assist you with the complete PM Surya Ghar Yojana application process from start to finish.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
