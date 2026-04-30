const express = require('express');
const router = express.Router();

// POST - Calculate solar savings
router.post('/', async (req, res) => {
  try {
    const { monthlyBill, roofArea, city, electricityRate } = req.body;

    const bill = parseFloat(monthlyBill) || 2000;
    const rate = parseFloat(electricityRate) || 8;
    const monthlyUnits = bill / rate;
    const dailyUnits = monthlyUnits / 30;

    // 1 kW generates ~4 units/day average in India
    const systemSizeKW = Math.ceil(dailyUnits / 4);

    // Cost per kW (average market rate in India 2026)
    const costPerKW = 55000;
    const totalCost = systemSizeKW * costPerKW;

    // Subsidy calculation (PM Surya Ghar Yojana 2026)
    let subsidy = 0;
    if (systemSizeKW <= 2) {
      subsidy = systemSizeKW * 30000;
    } else if (systemSizeKW <= 3) {
      subsidy = 60000 + (systemSizeKW - 2) * 18000;
    } else {
      subsidy = 78000;
    }

    const costAfterSubsidy = totalCost - subsidy;
    const annualSavings = bill * 12;
    const paybackPeriod = Math.round((costAfterSubsidy / annualSavings) * 10) / 10;
    const savingsOver25Years = annualSavings * 25;

    // Environmental impact
    const co2OffsetPerYear = systemSizeKW * 1040; // kg CO2 per kW per year
    const treesEquivalent = Math.round(co2OffsetPerYear / 22); // ~22kg CO2 per tree per year

    res.json({
      success: true,
      data: {
        systemSizeKW,
        totalCost,
        subsidy,
        costAfterSubsidy,
        monthlyBill: bill,
        annualSavings,
        paybackPeriodYears: paybackPeriod,
        savingsOver25Years,
        co2OffsetPerYear,
        treesEquivalent,
        dailyGeneration: systemSizeKW * 4,
        monthlyGeneration: systemSizeKW * 120,
        annualGeneration: systemSizeKW * 1440,
        roofAreaRequired: systemSizeKW * 100, // sq ft per kW
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Calculation failed', error: error.message });
  }
});

module.exports = router;
