import React from 'react';
import { useSpring, animated } from 'react-spring';

function ProjectCharter() {
  // Animation for the container
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={fadeIn} className="charter-container">
      <h1>Project Charter: IT Infrastructure Upgrade</h1>
      <div className="budget-section">
        <h2>Estimated Budget</h2>
        <p>$3,884,800</p>
      </div>
      <div className="schedule-section">
        <h2>Schedule</h2>
        <p>90 days schedule starting from October 20, 2023, and concluding on January 18, 2024.</p>
      </div>
      <div className="manager-section">
        <h2>Designated Project Manager</h2>
        <p>Kishore Buddi</p>
      </div>
      <div className="signatures-section">
        <h2>Signatures</h2>
        <p>Signed by Project Sponsor: Suraj Timsina</p>
        <p>CEO of Contoso Consulting: Manish Paudel</p>
      </div>
    </animated.div>
  );
}

export default ProjectCharter;
