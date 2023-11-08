// RACI.jsx
import React from 'react';
import './RACI.css'; // Make sure the CSS file is named RACI.css and is in the same directory

const RACI = () => {
  return (
    <div className="overview-container">
      <h1>RACI Chart</h1>
      <h2>Project Roles and Responsibilities</h2>
      <div className="raci-chart">
        <table>
          <thead>
            <tr>
              <th>Activities/Tasks</th>
              <th>Project Manager</th>
              <th>Hardware Vendors</th>
              <th>Technicians</th>
              <th>Technician Supervisors</th>
              <th>Sponsor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Decision Making</td>
              <td>R/A</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Project Execution</td>
              <td>R/A</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Hardware Delivery</td>
              <td>I</td>
              <td>R/A</td>
              <td></td>
              <td>C</td>
              <td>I</td>
            </tr>
            <tr>
              <td>Windows Licence Purchase</td>
              <td>R</td>
              <td>A</td>
              <td></td>
              <td></td>
              <td>I</td>
            </tr>
            <tr>
              <td>Installation of Windows</td>
              <td>I</td>
              <td></td>
              <td>R</td>
              <td>A</td>
              <td></td>
            </tr>
            <tr>
              <td>Hardware Upgrades</td>
              <td>I</td>
              <td></td>
              <td>R</td>
              <td>A</td>
              <td></td>
            </tr>
            <tr>
              <td>Supervision of Technicians</td>
              <td>I</td>
              <td></td>
              <td></td>
              <td>A/R</td>
              <td></td>
            </tr>
            <tr>
              <td>Financial Activity Reporting</td>
              <td>R</td>
              <td></td>
              <td></td>
              <td></td>
              <td>I</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RACI;
