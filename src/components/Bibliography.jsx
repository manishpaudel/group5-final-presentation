// Bibliography.jsx
import React from 'react';
import "./Bibliography.css";

const Bibliography = () => {
 
  return (
    <div className="bibliography-container">
      <h1>Bibliography</h1>
      <ul className="reference-list">
        
          <li  className="reference-item">
            <p className="reference-text">
            Microsoft. (n.d.). Windows processor requirements Windows 11 supported Intel processors. Windows processor requirements Windows 11 supported Intel processors | Microsoft Learn. <a target='_blank'  rel="noreferrer" href="https://learn.microsoft.com/en-us/windows-hardware/design/minimum/supported/windows-11-supported-intel-processors">https://learn.microsoft.com/en-us/windows-hardware/design/minimum/supported/windows-11-supported-intel-processors</a> 
            </p>
          </li>
          <li  className="reference-item">
            <p className="reference-text">
               Luetgebrune, J. (2018, November 30). Best practices for large-scale deployments. DeployBot. <a target='_blank'  rel="noreferrer" href='https://deploybot.com/blog/best-practices-for-large-scale-deployments'>https://deploybot.com/blog/best-practices-for-large-scale-deployments</a> 
               </p>
          </li>
               <li  className="reference-item">
            <p className="reference-text">
               Isaacs, M. (2021, July 29). The DOS and don’ts of large-scale deployments. TechBeacon. <a target='_blank'  rel="noreferrer" href='https://techbeacon.com/app-dev-testing/dos-donts-large-scale-deployments'>https://techbeacon.com/app-dev-testing/dos-donts-large-scale-deployments</a> 
               </p>
          </li>
               <li  className="reference-item">
            <p className="reference-text">
             A prime example of a large scale deployment (and best practices). redapt. (n.d.). <a target='_blank'  rel="noreferrer" href='https://www.redapt.com/blog/a-prime-example-of-a-large-scale-deployment-and-best-practices'>https://www.redapt.com/blog/a-prime-example-of-a-large-scale-deployment-and-best-practices</a> 
            </p>
          </li>
        
      </ul>
    </div>
  );
};

export default Bibliography;
