import React from 'react';
import './Home.css'; // Importing the external CSS file

const Home = () => {
  // Example data, you can replace this with actual data
  const presentationDetails = {
    title: "Final Presentation",
    members: [
      { name: "Kishore Buddi", id: "23077403" },
      { name: "Manish Paudel", id: "23046522" },
      { name: "Suraj Timsina", id: "23033821" }
    ],
    collegeName: "Sault College in partnership with TriOS College",
    instructorName: "Ali Nadeem",
    date: "November 08, 2023"
  };

  return (
    <div className="cover-page">
      <div className="left-column">
        <img src="/biglogo.webp" alt="College Logo" className="cover-logo" />
        <div className="presentation-info">
          <h1 className="cover-title">{presentationDetails.title}</h1>
          <p className="college-name"><strong>College:</strong> {presentationDetails.collegeName}</p>
          <p className="instructor-name"><strong>Instructor:</strong> {presentationDetails.instructorName}</p>
          <p className="presentation-date"><strong>Date:</strong> {presentationDetails.date}</p>
        </div>
      </div>
      <div className="right-column">
        <h2>Team Members:</h2>
        <ul className="members-list">
          {presentationDetails.members.map(member => (
            <li key={member.id} className="member-item">
              {member.name} ({member.id})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
