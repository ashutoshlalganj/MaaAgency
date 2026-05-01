import { Link } from "react-router-dom";

export default function SolarSystems() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>
            <span className="highlight">Solar Systems</span>
          </h1>
          <p>
            Explore our diverse range of solar systems tailored to your specific
            needs.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content-grid" style={{ marginBottom: 60 }}>
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: 16 }}>
                On-Grid <span className="highlight">Solar System</span>
              </h2>
              <p
                style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 16 }}
              >
                Connected to the main grid, ideal for reducing electricity bills
                with net metering benefits. It exports excess generated power
                back to the grid, saving you money.
              </p>
              <ul
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.8,
                  marginBottom: 16,
                  paddingLeft: 20,
                }}
              >
                <li>No batteries required</li>
                <li>Net metering benefits</li>
                <li>Highest return on investment</li>
              </ul>
              <Link to="/contact" className="btn btn-outline">
                Get Quote
              </Link>
            </div>
            <img
              src="/images/ongrid.png"
              alt="On Grid Solar"
              style={{ borderRadius: 16, width: "100%" }}
            />
          </div>

          <div className="content-grid" style={{ marginBottom: 60 }}>
            <img
              src="/images/offgrid.png"
              alt="Off Grid Solar"
              style={{ borderRadius: 16, width: "100%" }}
            />
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: 16 }}>
                Off-Grid <span className="highlight">Solar System</span>
              </h2>
              <p
                style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 16 }}
              >
                Battery-based system for areas with limited or no grid
                access—ensuring complete energy independence. Stores energy
                during the day for use at night.
              </p>
              <ul
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.8,
                  marginBottom: 16,
                  paddingLeft: 20,
                }}
              >
                <li>Complete energy independence</li>
                <li>24/7 battery backup</li>
                <li>Immune to grid failures</li>
              </ul>
              <Link to="/contact" className="btn btn-outline">
                Get Quote
              </Link>
            </div>
          </div>

          <div className="content-grid">
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: 16 }}>
                Hybrid <span className="highlight">Solar System</span>
              </h2>
              <p
                style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 16 }}
              >
                A smart mix of grid and battery backup for uninterrupted power
                and maximum reliability. Enjoy net metering benefits while
                staying protected from power cuts.
              </p>
              <ul
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.8,
                  marginBottom: 16,
                  paddingLeft: 20,
                }}
              >
                <li>Grid connection + Battery</li>
                <li>Automatic switchover</li>
                <li>Highest reliability</li>
              </ul>
              <Link to="/contact" className="btn btn-outline">
                Get Quote
              </Link>
            </div>
            <img
              src="/images/hybrid.png"
              alt="Hybrid Solar"
              style={{ borderRadius: 16, width: "100%" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
