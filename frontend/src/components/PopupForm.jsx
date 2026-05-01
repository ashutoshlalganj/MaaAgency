import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Popup.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function PopupForm() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    requirement: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filled, setFilled] = useState(false);
  const timersRef = useRef([]);

  useEffect(() => {
    // Clear any old persistent storage from previous versions.
    if (localStorage.getItem("ekosys_popup_filled")) {
      localStorage.removeItem("ekosys_popup_filled");
    }

    // Check if user already filled the form in this browser session
    const alreadyFilled = sessionStorage.getItem("ekosys_popup_filled");
    if (alreadyFilled) {
      setFilled(true);
      return;
    }

    // First popup after 1 minute
    const firstTimer = setTimeout(() => {
      if (!sessionStorage.getItem("ekosys_popup_filled")) {
        setShow(true);
      }
    }, 60000);
    timersRef.current.push(firstTimer);

    // Subsequent popups every 5 minutes starting 6 minutes after page load
    const startRecurring = setTimeout(() => {
      const recurring = setInterval(() => {
        if (sessionStorage.getItem("ekosys_popup_filled")) {
          clearInterval(recurring);
          return;
        }
        setShow(true);
      }, 300000); // every 5 minutes
      timersRef.current.push(recurring);
    }, 360000); // 6 min = 1 min first + 5 min gap
    timersRef.current.push(startRecurring);

    // Also listen for manual open events (from "Get Free Quote" buttons)
    const handleOpenPopup = () => {
      // Only show popup if user hasn't already submitted in this session
      if (!sessionStorage.getItem("ekosys_popup_filled")) {
        setShow(true);
      }
    };
    window.addEventListener("openPopup", handleOpenPopup);

    return () => {
      timersRef.current.forEach((t) => clearTimeout(t));
      timersRef.current.forEach((t) => clearInterval(t));
      window.removeEventListener("openPopup", handleOpenPopup);
    };
  }, []);

  const closePopup = () => {
    setShow(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/popup`, form);
      setSubmitted(true);
      setFilled(true);
      sessionStorage.setItem("ekosys_popup_filled", "true");
      // Clear all timers so no more popups in this session
      timersRef.current.forEach((t) => {
        clearTimeout(t);
        clearInterval(t);
      });
      setTimeout(() => {
        setShow(false);
      }, 3000);
    } catch (err) {
      alert("Failed to submit. Please try again.");
    }
    setLoading(false);
  };

  if (!show) return null;

  return (
    <div
      className="popup-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) closePopup();
      }}
    >
      <div className="popup-container">
        <button className="popup-close" onClick={closePopup}>
          ✕
        </button>
        <div className="popup-header">
          <img src="/images/logo.png" alt="EKOSYS" className="popup-logo" />
        </div>
        <div className="popup-content">
          {!submitted ? (
            <>
              <h3>Get a Free Solar Quote!</h3>
              <p>
                Fill in your details and our solar expert will contact you
                within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="popup-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Your City"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  required
                />
                <textarea
                  placeholder="Your Requirement (Optional)"
                  value={form.requirement}
                  onChange={(e) =>
                    setForm({ ...form, requirement: e.target.value })
                  }
                ></textarea>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                >
                  {loading ? "Submitting..." : "Get Free Quote →"}
                </button>
              </form>
            </>
          ) : (
            <div className="popup-success">
              <div className="success-icon">✅</div>
              <h3>Thank You!</h3>
              <p>
                Your details have been submitted successfully. Our team from
                EKOSYS will contact you shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
