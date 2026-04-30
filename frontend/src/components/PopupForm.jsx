import { useState, useEffect } from 'react';
import axios from 'axios';
import './Popup.css';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function PopupForm() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', requirement: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show popup after 1 minute (60000 ms)
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem('solar_popup_seen');
      if (!hasSeen) {
        setShow(true);
      }
    }, 60000);

    const handleOpenPopup = () => {
      setShow(true);
    };
    
    window.addEventListener('openPopup', handleOpenPopup);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('openPopup', handleOpenPopup);
    };
  }, []);

  const closePopup = () => {
    setShow(false);
    localStorage.setItem('solar_popup_seen', 'true');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/popup`, form);
      setSubmitted(true);
      setTimeout(() => {
        closePopup();
      }, 3000);
    } catch (err) {
      alert('Failed to submit. Please try again.');
    }
    setLoading(false);
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={closePopup}>✕</button>
        <div className="popup-content">
          {!submitted ? (
            <>
              <h3>Get a Free Solar Quote!</h3>
              <p>Fill in your details and our solar expert will contact you.</p>
              <form onSubmit={handleSubmit} className="popup-form">
                <input type="text" placeholder="Your Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                <input type="email" placeholder="Your Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                <input type="tel" placeholder="Your Phone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required />
                <input type="text" placeholder="Your City" value={form.city} onChange={e => setForm({...form, city: e.target.value})} required />
                <textarea placeholder="Your Requirement (Optional)" value={form.requirement} onChange={e => setForm({...form, requirement: e.target.value})}></textarea>
                <button type="submit" disabled={loading} className="btn btn-primary">
                  {loading ? 'Submitting...' : 'Submit Details'}
                </button>
              </form>
            </>
          ) : (
            <div className="popup-success">
              <div className="success-icon">✅</div>
              <h3>Thank You!</h3>
              <p>Your details have been submitted successfully. We have also sent a confirmation email to you.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
