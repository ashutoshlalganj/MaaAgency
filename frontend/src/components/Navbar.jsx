import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/products', label: 'Products' },
    { to: '/solar-systems', label: 'Solar Systems' },
    { to: '/subsidy', label: 'Govt Subsidy' },
    { to: '/calculator', label: 'Calculator' },
    { to: '/installation', label: 'Installation' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="sun">☀</span>
          <span>Maa Agencies</span>
        </Link>
        <div className="nav-links">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={pathname === l.to ? 'active' : ''}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="nav-cta">
          <a href="#" className="btn btn-primary" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openPopup')); }}>Get Free Quote</a>
        </div>
        <button className="mobile-toggle" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(l => (
          <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <a href="#" className="btn btn-primary" onClick={(e) => { e.preventDefault(); setOpen(false); window.dispatchEvent(new Event('openPopup')); }}>Get Free Quote</a>
      </div>
    </nav>
  );
}
