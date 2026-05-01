import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function Counter({ end, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let s = 0; const step = Math.ceil(end / 60);
        const t = setInterval(() => { s += step; if (s >= end) { setCount(end); clearInterval(t); } else setCount(s); }, 20);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{prefix}{count.toLocaleString('en-IN')}{suffix}</span>;
}

const systemsData = {
  ongrid: {
    title: 'On-Grid Solar System', subtitle: 'Connected to the main grid',
    img: '/images/ongrid.png',
    desc: 'Connected to the main grid, ideal for reducing electricity bills with net metering benefits. Generates power during the day and exports excess energy to the grid.',
    features: ['No batteries required', 'Net metering benefits', 'Government subsidy eligible', 'Lowest maintenance', 'Fastest ROI'],
  },
  offgrid: {
    title: 'Off-Grid Solar System', subtitle: 'Battery-based system',
    img: '/images/offgrid.png',
    desc: 'Battery-based system for areas with limited or no grid access—ensuring complete energy independence. Stores energy during the day for use at night or during power cuts.',
    features: ['Complete energy independence', '24/7 battery backup', 'Ideal for rural areas', 'No electricity bills', 'Immune to grid failures'],
  },
  hybrid: {
    title: 'Hybrid Solar System', subtitle: 'Grid + Battery Backup',
    img: '/images/hybrid.png',
    desc: 'A smart mix of grid and battery backup for uninterrupted power and maximum reliability. Enjoy net metering benefits while staying protected from power cuts.',
    features: ['Grid connection + Battery', 'Automatic switchover', 'Smart energy management', 'Net metering support', 'Highest reliability'],
  }
};

const faqs = [
  { q: 'What is the cost of a solar system in Bihar?', a: 'The cost varies by capacity. Generally, residential systems cost ₹55,000 to ₹65,000 per kW before subsidy. With PM Surya Ghar Yojana, you can get significant discounts.' },
  { q: 'How does PM Surya Ghar Yojana work?', a: 'Under this scheme, households can get up to ₹78,000 subsidy for installing on-grid rooftop solar systems, directly credited to their bank accounts.' },
  { q: 'Do you provide solar street lights?', a: 'Yes! We offer efficient outdoor lighting powered by the sun, perfect for roads, parks, and campuses.' },
  { q: 'What other products does EKOSYS offer?', a: 'Apart from solar systems, we provide Solar Water Heaters, Solar Atta Chakki, Online UPS, and high-performance Servo Stabilizers.' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('ongrid');
  const [openFaq, setOpenFaq] = useState(null);
  const current = systemsData[activeTab];

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1><span className="highlight">EKOSYS</span> – Powering a Greener Tomorrow</h1>
              <p className="tagline">We deliver end-to-end solar EPC solutions tailored for industrial, commercial, and institutional needs. From design to commissioning, our expert team ensures reliable, high-performance solar systems with full compliance and on-time delivery.</p>
              
              <div style={{ background: 'rgba(245,158,11,.15)', padding: '15px', borderRadius: '10px', marginBottom: '20px', borderLeft: '4px solid #f59e0b' }}>
                <p style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '1.1rem', margin: 0 }}>
                  "PM सूर्य घर मुफ़्त बिजली योजना - 125 यूनिट तक मुफ़्त बिजली और ₹78,000 तक की सब्सिडी!" - भारत सरकार
                </p>
              </div>

              <div className="hero-btns">
                <Link to="/contact" className="btn btn-primary">Get Free Consultation →</Link>
                <Link to="/products" className="btn btn-outline">Explore Products</Link>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/hero-banner.png" alt="EKOSYS Solar Solutions" />
              <div className="hero-float f1">⚡ High Performance</div>
              <div className="hero-float f2">🌞 Green Energy</div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card"><div className="num"><Counter end={1000} suffix="+" /></div><div className="label">Projects Completed</div></div>
            <div className="stat-card"><div className="num"><Counter end={10} suffix="+ MW" /></div><div className="label">Capacity Installed</div></div>
            <div className="stat-card"><div className="num"><Counter end={15} suffix=" Yrs" /></div><div className="label">Industry Experience</div></div>
            <div className="stat-card"><div className="num"><Counter end={100} suffix="%" /></div><div className="label">Customer Satisfaction</div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose <span className="highlight">EKOSYS</span>?</h2>
          <p className="section-subtitle">Driven by innovation and backed by values of Integrity, Quality, and Customer Focus.</p>
          <div className="cards-grid">
            {[
              { icon: '💡', title: 'End-to-End EPC', desc: 'From initial design to final commissioning, we handle the entire solar lifecycle for industrial and commercial setups.', bg: 'rgba(245,158,11,.1)' },
              { icon: '🏭', title: 'Industrial Expertise', desc: 'Specialized in large-scale setups, providing stable output and seamless operation under all load conditions.', bg: 'rgba(14,165,233,.1)' },
              { icon: '🔌', title: 'Power Control Units', desc: 'We integrate advanced voltage and power control units, including Online UPS and Servo Stabilizers.', bg: 'rgba(34,197,94,.1)' },
              { icon: '🏛️', title: 'Govt. Compliance', desc: 'Full compliance with local regulations and assistance in claiming government subsidies like PM Surya Ghar.', bg: 'rgba(168,85,247,.1)' },
              { icon: '🛡️', title: 'Quality Assurance', desc: 'We use only top-tier components ensuring maximum efficiency, longevity, and high return on investment.', bg: 'rgba(236,72,153,.1)' },
              { icon: '⏱️', title: 'On-Time Delivery', desc: 'Our expert team ensures your solar plant is commissioned strictly within the agreed timeline.', bg: 'rgba(245,158,11,.1)' },
            ].map((c, i) => (
              <div className="card" key={i}>
                <div className="card-icon" style={{ background: c.bg }}>{c.icon}</div>
                <h3>{c.title}</h3><p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 className="section-title">Government <span className="highlight">Initiatives</span></h2>
            <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <p style={{ fontSize: '1.2rem', color: '#333', fontStyle: 'italic', marginBottom: '15px' }}>
                "स्वच्छ ऊर्जा, सुरक्षित कल - सोलर अपनाएं, पैसे बचाएं और पर्यावरण को सुरक्षित बनाएं।"
              </p>
              <p style={{ fontSize: '1.2rem', color: '#333', fontStyle: 'italic', marginBottom: '15px' }}>
                "पीएम सूर्य घर योजना से हर घर रौशन, हर घर आत्मनिर्भर। आज ही सोलर लगवाएं और सब्सिडी का लाभ उठाएं।"
              </p>
              <p style={{ color: '#f59e0b', fontWeight: 'bold' }}>- नवीन एवं नवीकरणीय ऊर्जा मंत्रालय, भारत सरकार</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Diverse <span className="highlight">Solutions</span></h2>
          <div className="systems-tabs">
            {Object.keys(systemsData).map(k => (
              <button key={k} className={`tab-btn ${activeTab === k ? 'active' : ''}`} onClick={() => setActiveTab(k)}>
                {systemsData[k].title}
              </button>
            ))}
          </div>
          <div className="system-content">
            <img src={current.img} alt={current.title} />
            <div className="system-info">
              <h3>{current.title}</h3>
              <p style={{ fontSize: '.9rem', color: '#f59e0b', fontWeight: 600, marginBottom: 8 }}>{current.subtitle}</p>
              <p>{current.desc}</p>
              <div className="system-features">
                {current.features.map((f, i) => <div className="system-feature" key={i}><span className="check">✓</span><span>{f}</span></div>)}
              </div>
              <Link to="/products" className="btn btn-primary" style={{ marginTop: 20 }}>Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f1f5f9' }}>
        <div className="container">
          <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {faqs.map((f, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>{f.q}<span>{openFaq === i ? '−' : '+'}</span></div>
                {openFaq === i && <div className="faq-answer">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', textAlign: 'center', color: '#fff' }}>
        <div className="container">
          <h2 className="cta-heading">Ready to switch to Solar?</h2>
          <p className="cta-subtext">Join hundreds of satisfied customers in Bihar. Contact EKOSYS today for a customized solar proposal.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary">Contact Us Now →</Link>
            <Link to="/products" className="btn btn-secondary">Explore Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
