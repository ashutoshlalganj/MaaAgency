import { useState } from "react";
import { Link } from "react-router-dom";

const categoryBanners = {
  solarSystems: {
    img: "/images/solar-systems-banner.png",
    title: "☀ Solar Systems",
    subtitle: "On-Grid, Off-Grid & Hybrid Solutions for Every Need",
  },
  specialty: {
    img: "/images/specialty-solar-banner.png",
    title: "🌟 Specialty Solar Products",
    subtitle: "Street Lights, Water Heaters, Pumps & More",
  },
  powerUnits: {
    img: "/images/power-units-banner.png",
    title: "⚡ Power & Voltage Units",
    subtitle: "UPS, Stabilizers, Inverters & Batteries",
  },
};

const solarSystemsDetailed = [
  {
    name: "On-Grid Solar System",
    img: "/images/ongrid.png",
    desc: "An On-Grid Solar System is directly connected to the utility power grid. It is the most popular and cost-effective solar setup for homes and businesses. Solar panels generate DC electricity, which an inverter converts to AC. The system feeds excess power back to the grid through net metering, earning you credits and dramatically reducing your electricity bills.",
    extraDesc:
      "On-Grid systems are ideal for urban and semi-urban areas where consistent grid power is available. With government subsidies under PM Surya Ghar Yojana, homeowners can save up to ₹78,000. These systems require minimal maintenance, have a lifespan of 25+ years, and offer the highest return on investment among all solar types.",
    features: [
      "No batteries required – lowest upfront cost",
      "Net metering benefits – sell excess power to grid",
      "Highest return on investment (ROI)",
      "Government subsidy available up to ₹78,000",
      "Ideal for reducing electricity bills by 90%",
      "Low maintenance – 25+ year lifespan",
      "Best for homes, offices, and commercial buildings",
    ],
    specs: "Available: 1kW to 100kW+ | Residential | Commercial | Industrial",
    price: "Starting ₹55,000/kW (after subsidy)",
  },
  {
    name: "Off-Grid Solar System",
    img: "/images/offgrid.png",
    desc: "An Off-Grid Solar System operates completely independently from the utility grid. It uses solar panels to charge a battery bank during daylight hours, and the stored energy powers your home or business around the clock. This system is the perfect solution for remote locations, farms, and areas with frequent or prolonged power cuts.",
    extraDesc:
      "Off-Grid systems provide true energy independence. They are engineered with high-capacity lithium or tubular batteries that store surplus solar energy for nighttime use. With advanced charge controllers and pure sine wave inverters, these systems deliver stable, clean power to all your appliances—even in the most remote corners of Bihar and beyond.",
    features: [
      "Complete energy independence – no grid dependency",
      "24/7 reliable power with battery backup",
      "Immune to grid failures and power cuts",
      "Perfect for remote/rural areas",
      "Powers all appliances including AC, refrigerator",
      "Advanced battery management system (BMS)",
      "Expandable capacity as your needs grow",
    ],
    specs:
      "Available: 1kW to 50kW+ | Battery: Lithium / Tubular | Rural | Remote Areas",
    price: "Starting ₹85,000/kW (with battery)",
  },
  {
    name: "Hybrid Solar System",
    img: "/images/hybrid.png",
    desc: "A Hybrid Solar System combines the best of On-Grid and Off-Grid technologies. It is connected to the utility grid AND has battery backup, ensuring uninterrupted power supply regardless of grid availability. The intelligent hybrid inverter automatically switches between solar, battery, and grid power for maximum efficiency.",
    extraDesc:
      "Hybrid systems are the most versatile and future-ready solar solution. During the day, solar panels power your home while simultaneously charging batteries and feeding excess to the grid. At night or during power cuts, the battery seamlessly takes over. You enjoy net metering benefits while staying protected from outages—the ultimate peace of mind.",
    features: [
      "Grid connection + Battery backup combined",
      "Automatic seamless switchover during outages",
      "Net metering benefits with backup security",
      "Intelligent energy management system",
      "Highest reliability and flexibility",
      "Perfect for areas with intermittent power cuts",
      "Future-proof – expandable battery storage",
    ],
    specs: "Available: 3kW to 100kW+ | Smart Inverter | Battery + Grid",
    price: "Starting ₹95,000/kW (with battery)",
  },
];

const specialtyProducts = [
  {
    name: "Solar Street Lights",
    img: "/images/street-light.png",
    desc: "High-performance solar LED street lights for roads, highways, parks, campuses, and rural areas. Fully automatic with dusk-to-dawn operation, motion sensors, and weather-resistant construction. These self-sufficient lights require zero electricity from the grid.",
    features: [
      "LED technology – 50,000 hours lifespan",
      "Automatic dusk-to-dawn operation",
      "Motion sensor for energy saving",
      "IP65 weatherproof rating",
      "No wiring or electricity costs",
    ],
    specs: "Available: 12W to 120W | All-in-One & Split Type | IP65 Rated",
  },
  {
    name: "Solar Water Heaters",
    img: "/images/water-heater.png",
    desc: "Energy-efficient solar water heating systems for homes, hotels, hospitals, and industries. Available in Evacuated Tube Collector (ETC) and Flat Plate Collector (FPC) variants. Cuts water heating costs by up to 80% with zero running costs after installation.",
    features: [
      "ETC & FPC technology available",
      "Hot water available even on cloudy days",
      "80% savings on water heating bills",
      "Durable & low maintenance",
      "5-year comprehensive warranty",
    ],
    specs: "Capacity: 100L to 1000L | ETC / FPC | Residential & Commercial",
  },
  {
    name: "Solar Water Pumps",
    img: "/images/solar-water-pump.png",
    desc: "Solar-powered water pumping systems for agriculture, irrigation, and drinking water supply. These DC and AC submersible pumps run directly on solar energy, eliminating diesel and electricity costs. Ideal for farmers under the PM-KUSUM scheme with up to 90% government subsidy.",
    features: [
      "DC & AC submersible models available",
      "PM-KUSUM scheme – up to 90% subsidy",
      "Zero running cost – no diesel/electricity",
      "Suitable for borewell depths up to 300 feet",
      "Built for Indian agricultural conditions",
    ],
    specs: "1HP to 10HP | DC / AC Submersible | KUSUM Eligible",
  },
  {
    name: "Solar Atta Chakki",
    img: "/images/atta-chakki.png",
    desc: "Clean, solar-powered flour mill grinding units designed for rural and small-scale applications. These heavy-duty machines run entirely on solar power, providing self-sustaining flour grinding for households and small businesses with zero operational cost.",
    features: [
      "100% solar-powered grinding",
      "Heavy-duty grinding stones",
      "Suitable for wheat, rice & spices",
      "Zero operational cost",
      "Easy to install & maintain",
    ],
    specs: "Capacity: 5kg to 50kg/hr | Heavy Duty | Solar Powered",
  },
];

const powerProducts = [
  {
    name: "Online UPS Systems",
    img: "/images/online-ups.png",
    desc: "Enterprise-grade Online UPS systems providing zero transfer time and pure sine wave output. Protect your critical IT infrastructure, medical equipment, and sensitive machinery from voltage fluctuations, surges, and power outages with our reliable double-conversion UPS solutions.",
    features: [
      "Zero transfer time",
      "Pure sine wave output",
      "Double conversion technology",
      "Wide input voltage range",
      "Remote monitoring capability",
    ],
    specs: "1kVA to 200kVA | Single & Three Phase | Tower & Rack Mount",
  },
  {
    name: "Servo Stabilizers",
    img: "/images/servo-stabilizer.png",
    desc: "High-precision servo voltage stabilizers for industrial, commercial, and residential applications. With ultra-fast correction speed and wide input voltage range, our stabilizers protect your expensive equipment from erratic voltage fluctuations common in Indian power grid conditions.",
    features: [
      "99% efficiency rating",
      "± 1% output accuracy",
      "Fast correction speed",
      "Overload & short circuit protection",
      "Digital display with alerts",
    ],
    specs: "1kVA to 2000kVA | Air & Oil Cooled | Single & Three Phase",
  },
  {
    name: "Solar Inverters",
    img: "/images/inverter.png",
    desc: "High-efficiency solar inverters for On-Grid, Off-Grid, and Hybrid solar systems. Our range includes string inverters, micro-inverters, and hybrid inverters from leading brands. Designed for Indian conditions with wide MPPT range and built-in Wi-Fi monitoring.",
    features: [
      "MPPT tracking for max efficiency",
      "Built-in Wi-Fi monitoring",
      "IP65 protection rating",
      "Wide voltage input range",
      "Compatible with all panel types",
    ],
    specs: "1kW to 100kW | On-Grid / Off-Grid / Hybrid | MNRE Approved",
  },
  {
    name: "Solar Batteries",
    img: "/images/battery.png",
    desc: "Premium quality solar batteries including Lithium-ion, Tubular Lead Acid, and Gel batteries. Designed for deep cycle applications with high charge-discharge efficiency, longer lifespan, and maintenance-free operation. Essential for Off-Grid and Hybrid solar systems.",
    features: [
      "Lithium-ion & Tubular options",
      "Deep cycle – 80% DoD",
      "10+ year lifespan (Lithium)",
      "Maintenance-free options available",
      "BMS integrated (Lithium)",
    ],
    specs: "12V/24V/48V | 100Ah to 500Ah | Lithium / Tubular / Gel",
  },
];

export default function Products() {
  const [tab, setTab] = useState("solarSystems");
  const tabs = [
    { key: "solarSystems", label: "☀ Solar Systems", icon: "☀" },
    { key: "specialty", label: "🌟 Specialty Solar Products", icon: "🌟" },
    { key: "powerUnits", label: "⚡ Power & Voltage Units", icon: "⚡" },
  ];

  const openPopup = () => window.dispatchEvent(new Event("openPopup"));

  const handleTabClick = (key) => {
    setTab(key);
    setTimeout(() => {
      document
        .getElementById("details-section")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      {/* Page Header */}
      <section className="page-header products-hero">
        <div className="container">
          <h1>
            Our <span className="highlight">Products</span>
          </h1>
          <p>
            EKOSYS offers a comprehensive range of solar energy solutions, power
            systems, and specialty products to meet every energy need — from
            residential rooftops to large-scale industrial setups across Bihar
            and India.
          </p>
        </div>
      </section>

      {/* Hero Banner Section */}
      <section className="products-showcase">
        <div className="container">
          <div className="products-hero-banner">
            <img src="/images/products.png" alt="EKOSYS Product Range" />
            <div className="products-hero-overlay">
              <h2>Complete Solar & Power Solutions</h2>
              <p>
                From rooftop solar panels to industrial UPS systems — everything
                under one roof
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs - Big & Attractive with Images */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Browse By <span className="highlight">Category</span>
          </h2>
          <p className="section-subtitle">
            Select a category to explore our premium product range
          </p>

          <div className="category-tabs-grid">
            {tabs.map((t) => (
              <div
                key={t.key}
                className={`category-tab-card ${tab === t.key ? "active" : ""}`}
                onClick={() => handleTabClick(t.key)}
              >
                <div className="category-tab-img">
                  <img
                    src={categoryBanners[t.key].img}
                    alt={categoryBanners[t.key].title}
                  />
                  <div className="category-tab-overlay">
                    <span className="category-icon">{t.icon}</span>
                  </div>
                </div>
                <div className="category-tab-content">
                  <h3>{categoryBanners[t.key].title}</h3>
                  <p>{categoryBanners[t.key].subtitle}</p>
                  <button
                    className={`btn ${tab === t.key ? "btn-primary" : "btn-outline"}`}
                    style={{
                      marginTop: "16px",
                      width: "100%",
                      padding: "10px",
                    }}
                  >
                    {tab === t.key ? "Viewing Details" : "View Details ↓"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div id="details-section">
            {/* Solar Systems Tab Content */}
            {tab === "solarSystems" && (
              <div className="tab-content-wrapper" id="solar-systems-section">
                <div className="tab-content-header">
                  <h2>
                    ☀ Solar <span className="highlight">Systems</span>
                  </h2>
                  <p>
                    Choose the right solar system for your home, business, or
                    industry. We design, supply, and install complete solar
                    power plants with end-to-end support.
                  </p>
                </div>

                {/* Bihar Home Showcase */}
                <div className="bihar-showcase">
                  <img
                    src="/images/bihar-home.png"
                    alt="Solar Installation Bihar"
                  />
                  <div className="bihar-showcase-content">
                    <h3>🏠 Powering Homes Across Bihar</h3>
                    <p>
                      EKOSYS has successfully installed solar systems in
                      hundreds of homes across Vaishali, Patna, Muzaffarpur, and
                      other districts. Our systems are designed specifically for
                      Bihar's climate and grid conditions, ensuring maximum
                      power generation and savings.
                    </p>
                    <div className="bihar-stats">
                      <div className="bihar-stat">
                        <strong>500+</strong>
                        <span>Installations</span>
                      </div>
                      <div className="bihar-stat">
                        <strong>25+</strong>
                        <span>Districts Served</span>
                      </div>
                      <div className="bihar-stat">
                        <strong>90%</strong>
                        <span>Bill Reduction</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Solar System Cards */}
                {solarSystemsDetailed.map((system, i) => (
                  <div
                    className={`solar-system-detail ${i % 2 !== 0 ? "reverse" : ""}`}
                    key={i}
                  >
                    <div className="solar-system-img-wrapper">
                      <img src={system.img} alt={system.name} />
                    </div>
                    <div className="solar-system-info">
                      <h3>{system.name}</h3>
                      <p className="solar-system-specs">{system.specs}</p>
                      <p>{system.desc}</p>
                      <p className="solar-system-extra">{system.extraDesc}</p>
                      <div className="solar-system-features">
                        {system.features.map((f, j) => (
                          <div className="solar-feature-item" key={j}>
                            <span className="feature-check">✅</span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                      <div className="solar-system-btns">
                        <button className="btn btn-primary" onClick={openPopup}>
                          Get Free Quote →
                        </button>
                        <Link to="/contact" className="btn btn-outline">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Hero Banner - Solar Energy Benefits */}
                <div className="solar-benefits-section">
                  <img
                    src="/images/hero-banner.png"
                    alt="Solar Energy Benefits"
                    className="solar-benefits-img"
                  />
                  <div className="solar-benefits-grid">
                    <div className="solar-benefit-card">
                      <span className="benefit-icon">💰</span>
                      <h4>Save up to 90%</h4>
                      <p>
                        Dramatically reduce your electricity bills with solar
                        power. Most customers see 80-90% savings from month one.
                      </p>
                    </div>
                    <div className="solar-benefit-card">
                      <span className="benefit-icon">🏛️</span>
                      <h4>Government Subsidy</h4>
                      <p>
                        Get up to ₹78,000 subsidy under PM Surya Ghar Yojana. We
                        handle all paperwork and approvals for you.
                      </p>
                    </div>
                    <div className="solar-benefit-card">
                      <span className="benefit-icon">🌍</span>
                      <h4>Go Green</h4>
                      <p>
                        Reduce your carbon footprint. A 5kW system offsets
                        approximately 7 tons of CO₂ emissions per year.
                      </p>
                    </div>
                    <div className="solar-benefit-card">
                      <span className="benefit-icon">📈</span>
                      <h4>25+ Year Returns</h4>
                      <p>
                        Solar panels last 25+ years with minimal maintenance.
                        Your investment pays for itself within 3-5 years.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Specialty Products Tab Content */}
            {tab === "specialty" && (
              <div className="tab-content-wrapper">
                <div className="tab-content-header">
                  <h2>
                    🌟 Specialty{" "}
                    <span className="highlight">Solar Products</span>
                  </h2>
                  <p>
                    Beyond solar panels — discover our range of specialized
                    solar-powered products designed for diverse applications
                    from street lighting to water pumping.
                  </p>
                </div>
                <div className="products-cards-grid">
                  {specialtyProducts.map((p, i) => (
                    <div className="enhanced-product-card" key={i}>
                      <div className="enhanced-product-img">
                        <img src={p.img} alt={p.name} />
                      </div>
                      <div className="enhanced-product-info">
                        <h3>{p.name}</h3>
                        <p className="enhanced-specs">{p.specs}</p>
                        <p className="enhanced-desc">{p.desc}</p>
                        <div className="enhanced-features">
                          {p.features.map((f, j) => (
                            <span className="feature-tag" key={j}>
                              ✓ {f}
                            </span>
                          ))}
                        </div>
                        <button
                          className="btn btn-primary"
                          onClick={openPopup}
                          style={{ width: "100%", justifyContent: "center" }}
                        >
                          Get Quote →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Power & Voltage Units Tab Content */}
            {tab === "powerUnits" && (
              <div className="tab-content-wrapper">
                <div className="tab-content-header">
                  <h2>
                    ⚡ Power & <span className="highlight">Voltage Units</span>
                  </h2>
                  <p>
                    Protect your equipment and ensure uninterrupted power with
                    our range of industrial-grade UPS systems, stabilizers,
                    inverters, and batteries.
                  </p>
                </div>
                <div className="products-cards-grid">
                  {powerProducts.map((p, i) => (
                    <div className="enhanced-product-card" key={i}>
                      <div className="enhanced-product-img">
                        <img src={p.img} alt={p.name} />
                      </div>
                      <div className="enhanced-product-info">
                        <h3>{p.name}</h3>
                        <p className="enhanced-specs">{p.specs}</p>
                        <p className="enhanced-desc">{p.desc}</p>
                        <div className="enhanced-features">
                          {p.features.map((f, j) => (
                            <span className="feature-tag" key={j}>
                              ✓ {f}
                            </span>
                          ))}
                        </div>
                        <button
                          className="btn btn-primary"
                          onClick={openPopup}
                          style={{ width: "100%", justifyContent: "center" }}
                        >
                          Get Quote →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Why Choose EKOSYS - Always Visible */}
          <div className="why-choose-section">
            <h2 className="section-title">
              Why Choose <span className="highlight">EKOSYS?</span>
            </h2>
            <div className="why-choose-grid">
              <div className="why-card">
                <span className="why-icon">🏆</span>
                <h4>Trusted Brand</h4>
                <p>
                  500+ installations across Bihar with 4.8★ rating. We are the
                  preferred solar EPC partner for homes and industries.
                </p>
              </div>
              <div className="why-card">
                <span className="why-icon">🔧</span>
                <h4>End-to-End Service</h4>
                <p>
                  From site survey to installation to after-sales maintenance —
                  we handle everything. One call, complete solution.
                </p>
              </div>
              <div className="why-card">
                <span className="why-icon">📋</span>
                <h4>Subsidy Assistance</h4>
                <p>
                  We handle all government subsidy paperwork, net metering
                  applications, and approvals on your behalf — hassle-free.
                </p>
              </div>
              <div className="why-card">
                <span className="why-icon">⚡</span>
                <h4>Premium Quality</h4>
                <p>
                  Only MNRE-approved, Tier-1 solar panels, inverters, and
                  equipment. 25-year performance warranty guaranteed.
                </p>
              </div>
            </div>
          </div>

          {/* Subsidy Quote */}
          <div className="subsidy-quote-banner">
            <div className="subsidy-quote-content">
              <p className="subsidy-quote-hindi">
                "प्रधानमंत्री सूर्य घर मुफ़्त बिजली योजना - अपने घर की छत पर
                सोलर पैनल लगाएं और ₹78,000 तक की सब्सिडी पाएं।"
              </p>
              <p className="subsidy-quote-english">
                PM Surya Ghar Free Electricity Scheme — Install solar panels on
                your rooftop and get up to ₹78,000 subsidy from Government of
                India.
              </p>
              <button className="btn btn-primary" onClick={openPopup}>
                Apply for Subsidy — Get Free Quote →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
