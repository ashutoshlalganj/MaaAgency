export default function Subsidy() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>
            PM Surya Ghar <span className="highlight">Subsidy</span>
          </h1>
          <p>
            Get up to ₹78,000 subsidy on your rooftop solar installation under
            the PM Surya Ghar Muft Bijli Yojana
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <img
              src="/images/subsidy.png"
              alt="PM Surya Ghar Subsidy"
              style={{ borderRadius: 16, width: "100%" }}
            />
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: 16 }}>
                What is <span className="highlight">PM Surya Ghar Yojana?</span>
              </h2>
              <p
                style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 16 }}
              >
                The PM Surya Ghar Muft Bijli Yojana is a central government
                initiative to provide up to 125 units of free electricity every
                month to 1 crore households across India. Through this scheme,
                the government offers substantial subsidies directly to the bank
                accounts of residential consumers who install grid-connected
                rooftop solar systems.
              </p>

              <div
                style={{
                  background: "rgba(245,158,11,.1)",
                  padding: "20px",
                  borderRadius: "10px",
                  borderLeft: "4px solid #f59e0b",
                  marginBottom: 20,
                }}
              >
                <p
                  style={{
                    color: "#f59e0b",
                    fontWeight: "bold",
                    margin: 0,
                    fontStyle: "italic",
                    fontSize: "1.2rem",
                  }}
                >
                  "पीएम सूर्य घर योजना - 125 यूनिट तक मुफ़्त बिजली और ₹78,000 तक
                  की डायरेक्ट बैंक ट्रांसफर (DBT) सब्सिडी!"
                </p>
              </div>
            </div>
          </div>

          <h2 className="section-title" style={{ marginTop: 60 }}>
            Subsidy <span className="highlight">Structure</span> (2024-2026)
          </h2>
          <div style={{ overflowX: "auto", marginBottom: 60 }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.05)" }}>
                  <th
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    Plant Capacity
                  </th>
                  <th
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    Applicable Subsidy
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    Up to 2 kW
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    ₹30,000 per kW (Max ₹60,000)
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    Additional capacity (2 kW to 3 kW)
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    ₹18,000 per kW
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    Systems larger than 3 kW
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    Fixed maximum of ₹78,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
