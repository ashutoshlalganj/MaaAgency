import { Link } from 'react-router-dom';

export default function Installation() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Installation <span className="highlight">Process</span></h1>
          <p>From site survey to commissioning — Maa Agencies ensures a hassle-free experience.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', marginBottom: 50 }}>
            <img src="/images/installation.png" alt="Solar Installation" style={{ borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,.15)' }} />
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>Professional <span className="highlight">Installation</span></h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>Our expert team guarantees strict compliance and on-time delivery for all industrial, commercial, and residential projects. Based in Hajipur, Vaishali, we manage everything from initial design to final commissioning.</p>
              
              <div style={{ background: 'rgba(245,158,11,.1)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #f59e0b', marginTop: 20 }}>
                <p style={{ color: '#f59e0b', fontStyle: 'italic', margin: 0 }}>
                  "गुणवत्ता और सुरक्षा के साथ - आपके घर और व्यापार के लिए बेहतरीन सोलर।"
                </p>
              </div>
            </div>
          </div>

          <h2 className="section-title">Our <span className="highlight">8-Step</span> Process</h2>
          <div className="steps-grid" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
            {[
              { n: '01', t: 'Free Site Survey', d: 'Our engineers visit your site to assess roof space, shadowing, structure, and load requirements. We create a custom 3D rooftop design.' },
              { n: '02', t: 'Custom System Design', d: 'Based on the survey, we design a system tailored to your budget and energy needs, selecting the right capacity and components.' },
              { n: '03', t: 'Government Approvals', d: 'We handle all DISCOM approvals and PM Surya Ghar subsidy registrations. The net metering application is filed by our team.' },
              { n: '04', t: 'Professional Installation', d: 'Our certified team installs the mounting structures, solar panels, and wiring. We also integrate voltage stabilizers if required.' },
              { n: '05', t: 'Net Meter & Commissioning', d: 'DISCOM installs the bi-directional net meter. The system is tested, commissioned, and connected to the grid seamlessly.' },
              { n: '06', t: 'Subsidy Disbursement', d: 'We upload all necessary documents to the national portal, ensuring your subsidy arrives in your bank account promptly.' },
              { n: '07', t: 'Monitoring & Maintenance', d: 'We provide comprehensive maintenance and monitoring to ensure your plant operates at peak efficiency year-round.' },
              { n: '08', t: 'Long-Term Performance', d: 'Enjoy 25+ years of clean, sustainable power generation with significant reductions in your energy costs.' },
            ].map((s, i) => (
              <div className="card" key={i} style={{ display: 'flex', gap: 20, alignItems: 'start' }}>
                <div className="step-num" style={{ flexShrink: 0 }}>{s.n}</div>
                <div><h3>{s.t}</h3><p>{s.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: 16 }}>Ready for a Site Survey?</h2>
          <p style={{ color: '#94a3b8', maxWidth: 500, margin: '0 auto 30px' }}>Contact Maa Agencies today to schedule a free site visit by our expert engineers.</p>
          <Link to="/contact" className="btn btn-primary">Book Free Survey →</Link>
        </div>
      </section>
    </>
  );
}
