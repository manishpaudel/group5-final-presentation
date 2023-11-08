import React from 'react';
import { useSpring, animated } from 'react-spring';

import "./Overview.css";

function Overview() {
  // Animation for the container
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={fadeIn} className="overview-container">
      <h1>Project Overview</h1>
      <div className="objective-section">
        <h2>Objective</h2>
        <p>Upgrade Contoso Consulting's global IT infrastructure to Windows 11 to centralize operations and achieve ISO certification readiness.</p>
      </div>
      <div className="key-points-section">
        <h2>Key Points</h2>
        
          <div className='key-points'><b>Global Upgrade Scope:</b> Standardize IT operations across 5,000 employees, 20 countries, and 5,200 computers.</div>
          <div className='key-points'><b>Enhanced Services:</b> Support expanded consulting offerings with robust, modern IT systems.</div>
          <div className='key-points'><b>Regional Distribution:</b> Upgrade all over North American, Asian, South Pacific, European, and Latin American headquarters.</div>
          <div className='key-points'><b>IT Environment Overhaul:</b> Transition from diverse operating systems to a unified Windows 11 platform.</div>
          <div className='key-points'><b>Hardware Refresh:</b> Procure new hardware for compatibility with Windows 11, ensuring future-proof operations.</div>
          <div className='key-points'><b>Training:</b> Upskill employees for a smooth transition.</div>
        
      </div>
      <div className="outcome-section">
        <h2>Outcome Anticipation</h2>
        <p><ul>
          <li>Streamlined operations and increased efficiency in service delivery.</li>
          <li>A robust platform for the in-house software system catering to all organizational needs.</li>
           <li> Positioning for ISO certification, enhancing global business credentials and compliance.</li>
        </ul>
        </p>
      </div>
      <div className="commencement-section">
        <h2>Project Commencement</h2>
        <p>Slated for the upcoming financial quarter, within a 3-month strategic launch window.</p>
      </div>
    </animated.div>
  );
}

export default Overview;
