import React from 'react';
import '../styles/Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Vaskar Dhakal",
      role: "CEO & Founder",
      description: "With over 7 years of experience in tech, Vaskar leads our team with vision and expertise.",
      image: "/vaskar.JPG"
    },
    {
      name: "Nitesh Tripathi",
      role: "CTO",
      description: "Nitesh's innovative approach to technology drives our cutting-edge solutions.",
      image: "/Nitesh.JPG"
    },
    {
      name: "Bibek Bhandari",
      role: "Lead Designer",
      description: "Bibek's creative designs bring our clients' visions to life with stunning visuals.",
      image: "/bibek.jpg"
    },
    {
      name: "Ramesh Chapagain",
      role: "Senior Developer",
      description: "Ramesh's coding wizardry turns complex problems into elegant solutions.",
      image: "/Ramey.jpeg"
    },
    {
      name: "Simanta Poudel",
      role: "Senior Developer",
      description: "Simanta's coding wizardry turns complex problems into elegant solutions.",
      image: "/asaar.jpg"
    },
    {
      name: "Aadarsha Kandel",
      role: "Senior Developer",
      description: "Aadarsh's coding wizardry turns complex problems into elegant solutions.",
      image: "/aadarsh.jpg"
    }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="member-image" />
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;