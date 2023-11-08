import React from 'react';
import "./RisksAnalysis.css"

const RiskAnalysis = () => {
  const risks = [
    {
      name: 'Resource shortage',
      severity: 'M',
      mitigation: 'Replacement of resources'
    },
    {
      name: 'Incorrect requirements',
      severity: 'H',
      mitigation: 'Verification of requirement has been made compulsory'
    },
    {
      name: 'Selection of costly vendor',
      severity: 'H',
      mitigation: 'Analysis of proposal should be done properly and should be verified'
    },
    {
      name: 'Post-Installation issues like not booting up, and peripherals not functioning, bad weather',
      severity: 'H',
      mitigation: 'As these can\'t be predicted before installation, solving these as soon as possible whether it demands addition of resources'
    },
    {
      name: 'Faulty hardwares, weather',
      severity: 'H',
      mitigation: 'Vendors will be asked to test the hardware before shipping, and even if it arises, they should be prompted to change them as soon as possible'
    },
    {
      name: 'Legacy system might not be able to run',
      severity: 'H',
      mitigation: 'Software upgrade can solve most of the issues. Also, the legacy system providers must be contacted before updating to know if they support the upgrade'
    },
  ];

  return (
    <div className="risk-analysis-container">
      <h1>Risk Analysis</h1>
      <ul className="risk-list">
        {risks.map((risk, index) => (
          <li key={index} className="risk-item">
            <div className="risk-description">
              <span className="risk-name">{risk.name}</span>
              <span className={`risk-severity risk-severity-${risk.severity}`}>{risk.severity}</span>
            </div>
            <p className="risk-mitigation">{risk.mitigation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RiskAnalysis;
