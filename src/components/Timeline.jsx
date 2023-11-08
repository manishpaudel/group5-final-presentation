import {useState} from 'react'
import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import "./Timeline.css"


const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-section">
      <button className="collapsible-trigger" onClick={toggle}>
        {title}
      </button>
      {isOpen && (
        <div className="collapsible-content">
          <ul>
            {children.map((child, index) => (
              <li key={index}>{child}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const CollapsibleWBS = () => {
  const wbsData = [
    {
      "title": "Requirements Gathering",
      "children": [
        "Gather hardware details",
        "Analyze hardware details",
        "Verify the requirements",
        "Finalize the requirements"
      ]
    },
    {
      "title": "Procurement",
      "children": [
        "Start Hardware Vendor Selection",
        "Request Hardware Vendors for Proposals",
        "Evaluate Hardware Vendor Proposals",
        "Select Hardware Vendors and Make Contracts",
        "Release Hardware Purchase Order",
        "Request Microsoft Vendors for Licences",
        "Analyze the Licence Proposals",
        "Buy Windows Licenses in bulk"
      ]
    },
    {
      "title": "Operating System Upgrade",
      "children": [
        "Segregate the List of Windows 11-ready Machines",
        "Install Windows 11 on Ready Machines",
        "Upgrade the Hardware",
        "Install Windows 11 on Upgraded Machines"
      ]
    },
    {
      "title": "Testing",
      "children": [
        "Check Windows 11 Functionality",
        "Conduct Hardware and Software Compatibility Tests",
        "Perform System Wide Testing",
        "Identify and Rectify Issues",
        "Resolve Issues and Retest",
        "Ensure Compatibility with Legacy System",
        "User Acceptance Testing"
      ]
    },
    {
      "title": "Training and Documentation",
      "children": [
        "Develop Training Materials",
        "Conduct Online Training Session for Everyone at Once",
        "Train In-person for People Facing Difficulties",
        "Prepare and Submit Documentation"
      ]
    },
    {
      "title": "Wrap Up",
      "children": [
        "Verify All Tasks Completion",
        "Obtain Sign Off from Upper Management",
        "Celebrate Project Success",
        "Collect Feedback from Team",
        "Release the Resources"
      ]
    }
  ];  


  return (
    <div className="wbs-collapsible-container">
      {wbsData.map((task, index) => (
        <CollapsibleSection key={index} title={task.title} children={task.children}/>        
      ))}
    </div>
  );
};

export default function Timeline() {
  const tasks = [
    {
      start: new Date(2023, 9, 20),
      end: new Date(2023, 9, 26),
      name: "Requirements Gathering",
      id: "Requirements Gathering",
      type: "task",
      progress: 100,
      isDisabled: false,
      styles: { progressColor: "red", progressSelectedColor: "blue" }
    },
    {
      start: new Date(2023, 9, 27),
      end: new Date(2023, 10, 5),
      name: "Procurement",
      id: "Procurement",
      type: "task",
      progress: 100,
      isDisabled: false,
      styles: { progressColor: "blue", progressSelectedColor: "blue" }
    },
    {
      start: new Date(2023, 10, 6),
      end: new Date(2023, 10, 26),
      name: "Operating System Upgrade",
      id: "Operating System Upgrade",
      type: "task",
      progress: 100,
      isDisabled: false,
      styles: { progressColor: "green", progressSelectedColor: "blue" }
    },
    {
      start: new Date(2023, 10, 27),
      end: new Date(2023, 11, 10),
      name: "Testing",
      id: "Testing",
      type: "task",
      progress: 100,
      isDisabled: false,
      styles: { progressColor: "gray", progressSelectedColor: "blue" }
    },
    {
      start: new Date(2023, 11, 11),
      end: new Date(2023, 11, 14),
      name: "Training and Documentation",
      id: "Training and Documentation",
      type: "task",
      progress: 100,
      isDisabled: false,
      styles: { progressColor: "violet", progressSelectedColor: "blue" }
    },
    {
      start: new Date(2024, 0, 6),
      end: new Date(2024, 0, 18),
      name: "Wrap Up",
      id: "Wrap Up",
      type: "task",
      progress: 100,
      isDisabled: false,
      styles: { progressColor: "orange", progressSelectedColor: "blue" }
    }
  ];

  return (
    <div className="timeline-container">
      <h1>Project Timeline</h1>
      <Gantt tasks={tasks} viewMode={ViewMode.Week}  />
      <CollapsibleWBS />
    </div>
  );
}
