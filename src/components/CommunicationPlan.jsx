import React from 'react';
import "./CommunicationPlan.css"

const CommunicationPlan = () => {
  const communicationItems = [
    {
      id: 1,
      communicationType: "Upper Management",
      objectives: [
        {
          objective: "Kickoff",
          medium: "In-Person",
          frequency: "Start of the Project",
          audience: "All Stakeholders",
          responsible: "Project Manager",
          timing: "First Day",
          deliverable: "Start of the Project"
        },
        {
          objective: "Project Updates",
          medium: "Online",
          frequency: "Monthly",
          audience: "Project Manager, Team leads",
          responsible: "Project Manager",
          timing: "First Monday",
          deliverable: "Status of the Project"
        }
      ]
    },
    {
      id: 2,
      communicationType: "Finance Department",
      objectives: [
        {
          objective: "Finance Updates",
          medium: "Online",
          frequency: "Weekly",
          audience: "Project Manager",
          responsible: "Project Manager",
          timing: "Fidy",
          deliverable: "Left Out Budobjectives"
      }
      ]
    },
    {
      id: 3,
      communicationType: "Vendors",
      objectives: [
        {
          objective: "Project Completion",
          medium: "Online",
          frequency: "Bi-Weekly",
          audience: "Project Manager, Team leads",
          responsible: "Project Manager",
          timing: "Monday",
          deliverable: "Hardware and Software Resources"
        }
      ]
    },
    {
      id: 4,
      communicationType: "IT Department",
      objectives: [
        {
          objective: "Upgrading of Computers",
          medium: "Online",
          frequency: "Weekly",
          audience: "Project Manager, Team leads",
          responsible: "Project Manager",
          timing: "Tuesday",
          deliverable: "Hardware and Software Resources"
        }
      ]
    },
    {
      id: 5,
      communicationType: "Team Meetings",
      objectives: [
        {
          objective: "Project Status",
          medium: "Online",
          frequency: "Twice in Week",
          audience: "Project Manager, Team leads",
          responsible: "Project Manager, Team leads",
          timing: "Monday, Thursday",
          deliverable: "Status of the Project"
        }
      ]
    },
    {
      id: 6,
      communicationType: "Feedback",
      objectives: [
        {
          objective: "Project Review",
          medium: "Online",
          frequency: "End of the Project",
          audience: "Team Members",
          responsible: "Project Manager, Team leads",
          timing: "Last Week of the Project",
          deliverable: "Project Feedback"
        }
      ]
    },
    {
      id: 7,
      communicationType: "Project Completion",
      objectives: [
        {
          objective: "End of Project",
          medium: "In-Person",
          frequency: "End of the Project",
          audience: "Team Members",
          responsible: "Project Manager",
          timing: "Last Day of the Project",
          deliverable: "Completion of the Project"
        }
      ]
    }
  ];

  return (
    <div className="communication-plan-container">
      <h1>Communication Plan</h1>
      <table className="communication-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Communication Type</th>
            <th>Objective Of Communication</th>
            <th>Medium</th>
            <th>Frequency</th>
            <th>Audience</th>
            <th>Responsible</th>
            <th>Timing</th>
            <th>Deliverable</th>
          </tr>
        </thead>
        <tbody>
          {communicationItems.map((item) => (
            item.objectives.map((objective, index) => (
              <tr key={index}>
                <td>{index === 0 ? item.id : ''}</td>
                <td>{index === 0 ? item.communicationType : ''}</td>
                <td>{objective.objective}</td>
                <td>{objective.medium}</td>
                <td>{objective.frequency}</td>
                <td>{objective.audience}</td>
                <td>{objective.responsible}</td>
                <td>{objective.timing}</td>
                <td>{objective.deliverable}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommunicationPlan;
