export default function Blog() {
  const blogs = [
    { tag: 'Guide', title: 'A Complete Guide to Installing Solar in Bihar', excerpt: 'Everything you need to know about rooftop solar installation in Bihar. Sizing your system, net metering, and subsidies.', img: '/images/installation.png' },
    { tag: 'Subsidy', title: 'PM Surya Ghar Yojana — How to Get ₹78,000 Subsidy', excerpt: 'A step-by-step guide to applying for the PM Surya Ghar Muft Bijli Yojana. Eligibility criteria, required documents, and process.', img: '/images/subsidy.png' },
    { tag: 'Products', title: 'Solar Street Lights: A Bright Idea for Rural India', excerpt: 'How solar street lights are transforming rural and urban landscapes with clean, reliable, and maintenance-free illumination.', img: '/images/street-light.png' },
    { tag: 'Industrial', title: 'Online UPS vs Servo Stabilizers', excerpt: 'Understanding the difference between Online UPS and Servo Stabilizers. Which power control unit is right for your industrial setup?', img: '/images/online-ups.png' },
    { tag: 'Innovation', title: 'Solar Atta Chakki: Modernizing Rural Business', excerpt: 'How solar-powered flour mills (Atta Chakkis) are reducing operational costs and increasing profits for rural businesses.', img: '/images/atta-chakki.png' },
    { tag: 'Efficiency', title: 'Cut Heating Costs with Solar Water Heaters', excerpt: 'A deep dive into how Solar Water Heaters can drastically reduce your electricity bills for both residential and commercial properties.', img: '/images/water-heater.png' }
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Solar <span className="highlight">Knowledge Center</span></h1>
          <p>Expert guides, tips, and the latest news on solar energy</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="cards-grid">
            {blogs.map((b, i) => (
              <div className="blog-card" key={i}>
                <img src={b.img} alt={b.title} style={{ height: 200, objectFit: 'cover', width: '100%' }} />
                <div className="blog-card-body">
                  <span className="tag">{b.tag}</span>
                  <h3>{b.title}</h3>
                  <p>{b.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '50px', background: 'rgba(245,158,11,.1)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #f59e0b', textAlign: 'center' }}>
            <p style={{ color: '#f59e0b', fontWeight: 'bold', margin: 0, fontStyle: 'italic', fontSize: '1.2rem' }}>
              "स्वच्छ ऊर्जा अपनाएं, आने वाली पीढ़ियों का भविष्य सुरक्षित बनाएं।"
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
