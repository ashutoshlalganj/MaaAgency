import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "/subsidy", label: "Govt Subsidy" },
    { to: "/installation", label: "Installation" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img
            src="/images/logo.png"
            alt="EKOSYS Logo"
            className="nav-logo-img"
          />
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={pathname === l.to ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="nav-cta">
          <a
            href="#"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event("openPopup"));
            }}
          >
            Get Free Quote
          </a>
        </div>
        <button
          type="button"
          className="mobile-toggle"
          aria-label={open ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={pathname === l.to ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <button
          type="button"
          className="btn btn-primary mobile-cta-btn"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            window.dispatchEvent(new Event("openPopup"));
          }}
        >
          Get Free Quote →
        </button>
      </div>
    </nav>
  );
}
