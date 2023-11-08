import React from 'react';
import { useSpring, animated } from 'react-spring';
import "./WBS.css" 

function WBS() {
  // Animation for the container
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={fadeIn} className="wbs-container">
      <h1>Work Breakdown Structure (WBS)</h1>
      <div className="wbs-section">
        <img src={process.env.PUBLIC_URL+'images/wbs.jpg'} alt="Work Breakdown Structure" className="wbs-image"/>
      </div>
    </animated.div>
  );
}

export default WBS;
