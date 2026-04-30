import { useState } from 'react';
import { Link } from 'react-router-dom';

const products = {
  solarSystems: [
    { name: 'On-Grid Solar System', price: 'Get Quote', desc: 'Connected to the main grid, ideal for reducing electricity bills with net metering benefits.', specs: 'Residential | Commercial | Net Metering', img: '/images/ongrid.png' },
    { name: 'Off-Grid Solar System', price: 'Get Quote', desc: 'Battery-based system for areas with limited or no grid access—ensuring complete energy independence.', specs: 'Battery Backup | Remote Areas', img: '/images/offgrid.png' },
    { name: 'Hybrid Solar System', price: 'Get Quote', desc: 'A smart mix of grid and battery backup for uninterrupted power and maximum reliability.', specs: 'Smart Backup | Grid Connection', img: '/images/hybrid.png' },
  ],
  specialty: [
    { name: 'Solar Street Lights', price: 'Get Quote', desc: 'Efficient outdoor lighting powered by the sun, perfect for roads, parks, and campuses. Automatic dawn to dusk operation.', specs: 'LED | Weatherproof | Auto On/Off', img: '/images/street-light.png' },
    { name: 'Solar Water Heaters', price: 'Get Quote', desc: 'Cost-effective and eco-friendly hot water solutions for homes and industries. Cuts down your water heating bills drastically.', specs: 'ETC / FPC | Insulated Tank', img: '/images/water-heater.png' },
    { name: 'Solar Atta Chakki', price: 'Get Quote', desc: 'Clean, solar-powered flour mill grinding units designed for rural and small-scale applications. Low operational cost.', specs: 'Heavy Duty | Solar Powered', img: '/images/atta-chakki.png' },
  ],
  powerUnits: [
    { name: 'Online UPS Systems', price: 'Get Quote', desc: 'Reliable Online UPS systems to ensure uninterrupted power supply and protect critical equipment from voltage fluctuations and outages.', specs: 'Zero Transfer Time | Pure Sine Wave', img: '/images/online-ups.png' },
    { name: 'Servo Stabilizers', price: 'Get Quote', desc: 'High-performance servo stabilizers ensure consistent voltage output, protecting sensitive machinery from power fluctuations.', specs: 'Heavy Duty | Fast Correction', img: '/images/servo-stabilizer.png' },
  ]
};

export default function Products() {
  const [tab, setTab] = useState('solarSystems');
  const tabs = [
    { key: 'solarSystems', label: '☀ Solar Systems' },
    { key: 'specialty', label: '🌟 Specialty Solar Products' },
    { key: 'powerUnits', label: '⚡ Power & Voltage Units' },
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Our <span className="highlight">Products</span></h1>
          <p>Maa Agencies offers a wide variety of solar and power systems to meet diverse energy needs.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="systems-tabs">
            {tabs.map(t => (
              <button key={t.key} className={`tab-btn ${tab === t.key ? 'active' : ''}`} onClick={() => setTab(t.key)}>{t.label}</button>
            ))}
          </div>
          <div className="cards-grid">
            {products[tab].map((p, i) => (
              <div className="product-card" key={i}>
                <img src={p.img} alt={p.name} style={{ height: 250, width: '100%', objectFit: 'cover' }} />
                <div className="product-info">
                  <h3>{p.name}</h3>
                  <p style={{ fontSize: '.85rem', color: '#f59e0b', marginTop: 4, fontWeight: 600 }}>{p.specs}</p>
                  <p style={{ margin: '15px 0', minHeight: '60px' }}>{p.desc}</p>
                  <Link to="/contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '.9rem', width: '100%', textAlign: 'center', display: 'block' }}>{p.price} →</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '50px', background: 'rgba(245,158,11,.1)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #f59e0b' }}>
            <p style={{ color: '#f59e0b', fontWeight: 'bold', margin: 0, fontStyle: 'italic' }}>
              "प्रधानमंत्री सूर्य घर मुफ़्त बिजली योजना - अपने घर की छत पर सोलर पैनल लगाएं और ₹78,000 तक की सब्सिडी पाएं।"
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
