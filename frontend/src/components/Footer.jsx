import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API}/newsletter`, { email });
      setMsg(data.message);
      setEmail('');
      setTimeout(() => setMsg(''), 3000);
    } catch (err) {
      setMsg(err.response?.data?.message || 'Subscription failed');
    }
  };

  return (
    <>
      <section className="newsletter">
        <div className="container">
          <h2>Stay Updated with Solar News</h2>
          <p>Get the latest updates on PM Surya Ghar Subsidy, new products, and solar tips.</p>
          <form className="newsletter-form" onSubmit={subscribe}>
            <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
            <button type="submit">Subscribe</button>
          </form>
          {msg && <p style={{ color: '#fff', marginTop: 12 }}>{msg}</p>}
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <img src="/images/logo.png" alt="EKOSYS" style={{ height: '45px', marginBottom: '16px', objectFit: 'contain' }} />
              <p>Powering a Greener Tomorrow. We deliver end-to-end solar EPC solutions tailored for industrial, commercial, and institutional needs. Cut your energy costs and embrace sustainable power confidently.</p>
              <p>📞 8757686826<br/>✉ ekosys.corp@gmail.com<br/>📍Hajipur, Vaishali, Bihar</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/products">Products</Link>
              <Link to="/subsidy">Govt Subsidy</Link>
              <Link to="/installation">Installation</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="footer-links">
              <h4>Our Products</h4>
              <Link to="/products">On-Grid / Off-Grid / Hybrid</Link>
              <Link to="/products">Solar Street Lights</Link>
              <Link to="/products">Solar Water Heaters</Link>
              <Link to="/products">Solar Water Pumps</Link>
              <Link to="/products">Inverters & Batteries</Link>
              <Link to="/products">UPS & Stabilizers</Link>
            </div>
            <div className="footer-links">
              <h4>Support</h4>
              <Link to="/contact">Contact Us</Link>
              <Link to="/installation">Installation Guide</Link>
              <Link to="/subsidy">Subsidy Information</Link>
              <p style={{ marginTop: '20px', color: '#f59e0b', fontStyle: 'italic', fontSize: '0.9rem' }}>
                "PM सूर्य घर योजना के तहत ₹78,000 तक की सब्सिडी प्राप्त करें - भारत सरकार"
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 EKOSYS. All Rights Reserved. | Vaishali, Bihar</p>
          </div>
        </div>
      </footer>
    </>
  );
}
