import { useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const biharCities = ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Hajipur', 'Vaishali', 'Darbhanga', 'Purnia', 'Other'];

export default function Calculator() {
  const [form, setForm] = useState({ monthlyBill: '', roofArea: '', city: 'Hajipur', electricityRate: '7.5' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const calculate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/calculator`, form);
      setResult(data.data);
    } catch {
      const bill = parseFloat(form.monthlyBill) || 2000;
      const rate = parseFloat(form.electricityRate) || 7.5;
      const kw = Math.ceil((bill / rate / 30) / 4);
      const cost = kw * 55000;
      let sub = kw <= 2 ? kw * 30000 : kw <= 3 ? 60000 + (kw - 2) * 18000 : 78000;
      setResult({ systemSizeKW: kw, totalCost: cost, subsidy: sub, costAfterSubsidy: cost - sub, monthlyBill: bill, annualSavings: bill * 12, paybackPeriodYears: Math.round(((cost - sub) / (bill * 12)) * 10) / 10, savingsOver25Years: bill * 12 * 25, co2OffsetPerYear: kw * 1040, treesEquivalent: Math.round((kw * 1040) / 22), dailyGeneration: kw * 4, monthlyGeneration: kw * 120, annualGeneration: kw * 1440, roofAreaRequired: kw * 100 });
    }
    setLoading(false);
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Solar Savings <span className="highlight">Calculator</span></h1>
          <p>Find out how much you can save with a Maa Agencies rooftop solar system</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="calc-wrapper">
            <div>
              <h2 style={{ color: '#fff', marginBottom: 24 }}>Enter Your Details</h2>
              <form className="calc-form" onSubmit={calculate}>
                <label>Monthly Electricity Bill (₹)</label>
                <input type="number" placeholder="e.g. 3000" value={form.monthlyBill} onChange={e => setForm({ ...form, monthlyBill: e.target.value })} required />
                <label>Electricity Rate (₹/unit)</label>
                <input type="number" step="0.5" placeholder="e.g. 7.5" value={form.electricityRate} onChange={e => setForm({ ...form, electricityRate: e.target.value })} />
                <label>Roof Area (sq ft)</label>
                <input type="number" placeholder="e.g. 500" value={form.roofArea} onChange={e => setForm({ ...form, roofArea: e.target.value })} />
                <label>City</label>
                <select value={form.city} onChange={e => setForm({ ...form, city: e.target.value })}>
                  {biharCities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  {loading ? <span className="spinner"></span> : 'Calculate Savings ☀'}
                </button>
              </form>
              <div style={{ marginTop: '20px', background: 'rgba(245,158,11,.1)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                <p style={{ color: '#f59e0b', fontStyle: 'italic', margin: 0 }}>
                  "PM सूर्य घर योजना के तहत ₹78,000 तक की सब्सिडी!"
                </p>
              </div>
            </div>
            <div className="calc-results">
              {result ? (
                <>
                  <h2 style={{ marginBottom: 20 }}>Your Solar <span className="highlight">Report</span></h2>
                  <div className="calc-result-card"><div className="val">{result.systemSizeKW} kW</div><div className="lbl">Recommended System Size</div></div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div className="calc-result-card"><div className="val">₹{(result.totalCost / 1000).toFixed(0)}K</div><div className="lbl">Estimated Total Cost</div></div>
                    <div className="calc-result-card"><div className="val" style={{ color: '#22c55e' }}>₹{(result.subsidy / 1000).toFixed(0)}K</div><div className="lbl">Govt Subsidy</div></div>
                    <div className="calc-result-card"><div className="val">₹{(result.costAfterSubsidy / 1000).toFixed(0)}K</div><div className="lbl">Your Cost (After Subsidy)</div></div>
                    <div className="calc-result-card"><div className="val">{result.paybackPeriodYears} Yrs</div><div className="lbl">Payback Period</div></div>
                    <div className="calc-result-card"><div className="val" style={{ color: '#22c55e' }}>₹{(result.savingsOver25Years / 100000).toFixed(1)}L</div><div className="lbl">25-Year Savings</div></div>
                    <div className="calc-result-card"><div className="val">{result.monthlyGeneration}</div><div className="lbl">Monthly Generation (Units)</div></div>
                  </div>
                  <div className="calc-result-card" style={{ marginTop: 12 }}><div className="lbl">🌍 Environmental Impact: {(result.co2OffsetPerYear / 1000).toFixed(1)} Tons CO₂/yr = {result.treesEquivalent} Trees Planted</div></div>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <div style={{ fontSize: '4rem', marginBottom: 16 }}>☀️</div>
                  <h3>Enter your details to generate your solar savings report</h3>
                  <p style={{ color: '#94a3b8', marginTop: 12 }}>Instant estimation of system size, cost, subsidy, and 25-year savings.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
