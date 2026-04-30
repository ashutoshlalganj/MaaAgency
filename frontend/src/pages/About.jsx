import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>About <span className="highlight">Maa Agencies</span></h1>
          <p>Powering a Greener Tomorrow – Your trusted Solar EPC Partner in Bihar</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50, alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>Our <span className="highlight">Vision & Mission</span></h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: 16 }}>
                At Maa Agencies, we deliver end-to-end solar EPC solutions tailored for industrial, commercial, and institutional needs. From design to commissioning, our expert team ensures reliable, high-performance solar systems with full compliance and on-time delivery.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: 16 }}>
                Driven by innovation and backed by values of Integrity, Quality, and Customer Focus, we help you cut energy costs and embrace clean, sustainable power—confidently.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>
                Beyond solar, we also integrate advanced voltage and power control units, including Online UPS and Servo Stabilizers, to ensure stable output and seamless operation under all load conditions.
              </p>
            </div>
            <img src="/images/about.png" alt="Maa Agencies Solar Plant" style={{ borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,.15)' }} />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="section-title">Government <span className="highlight">Support</span></h2>
            <p style={{ fontSize: '1.2rem', color: '#555', fontStyle: 'italic' }}>
              "सोलर रूफटॉप लगाओ, बिजली का बिल बचाओ और पर्यावरण को स्वच्छ बनाओ।" - भारत सरकार
            </p>
          </div>
          
          <h2 className="section-title">Why <span className="highlight">Partner</span> With Us?</h2>
          <div className="cards-grid" style={{ marginTop: 40 }}>
            {[
              { icon: '🏆', title: 'Trusted in Bihar', desc: 'Based in Hajipur, Vaishali, we serve across Bihar with a strong reputation for reliability.' },
              { icon: '🏭', title: 'Industrial EPC', desc: 'Specialized in handling large-scale commercial and industrial solar power plants.' },
              { icon: '🛡️', title: 'Complete Compliance', desc: 'We handle all necessary approvals, net metering, and subsidy documentation for you.' },
              { icon: '🔌', title: 'Beyond Solar', desc: 'We provide power stability solutions including Online UPS and heavy-duty Servo Stabilizers.' },
              { icon: '🔧', title: 'Expert Maintenance', desc: 'Comprehensive post-installation support ensuring your plant runs at peak efficiency.' },
              { icon: '⏱️', title: 'On-Time Execution', desc: 'We value your time and guarantee project completion within the stipulated deadlines.' },
            ].map((c, i) => (
              <div className="card" key={i}>
                <div className="card-icon" style={{ background: 'rgba(245,158,11,.1)' }}>{c.icon}</div>
                <h3>{c.title}</h3><p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', textAlign: 'center', color: '#fff' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: 16 }}>Let's Build a Greener Future</h2>
          <p style={{ color: '#94a3b8', maxWidth: 600, margin: '0 auto 30px' }}>Join hands with Maa Agencies to transition your facility to clean, renewable, and cost-effective solar power.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us Today →</Link>
        </div>
      </section>
    </>
  );
}
