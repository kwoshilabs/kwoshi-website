import React, { useState } from 'react';
 import '../styles/Team.css';

const TeamComponent = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Vaskar Dhakal",
      role: "CEO & Founder",
      description: "With over 7 years of experience in tech, Vaskar leads our team with vision and expertise.",
      roles: ["Co-founder","Back-end engineers" ],
      image: "/vaskar.JPG"
    },
    {
      id: 2,
      name: "Nitesh Tripathi",
      role: "CTO",
      description: "Nitesh's innovative approach to technology drives our cutting-edge solutions.",
      roles: ["Co-founder", "Back-end engineers", "Infrastructure"],
      image: "/Nitesh.JPG"
    },
    {
      id: 3,
      name: "Bibek Bhandari",
      role: "Lead Designer",
      description: "Bibek's creative designs bring our clients' visions to life with stunning visuals.",
      roles: ["Co-founder", "Designer", "Back-end engineers"],
      image: "/bibek.jpg"
    },
    {
      id: 4,
      name: "Ramesh Chapagain",
      role: "Senior Developer",
      description: "Ramesh's coding wizardry turns complex problems into elegant solutions.",
      roles: ["Co-founder", "Front-end engineers", "Integration"],
      image: "/Ramey.jpeg"
    },
    {
      id: 5,
      name: "Simanta Poudel",
      role: "Senior Developer",
      description: "Simanta's coding expertise helps build robust systems.",
      roles: ["Co-founder", "Front-end engineers", "Back-end engineers"],
      image: "/asaar.jpg"
    },
    {
      id: 6,
      name: "Kadarsha Kandel",
      role: "Senior Developer",
      description: "Aadarsha specializes in creating seamless user experiences.",
      roles: ["Co-founder", "Front-end engineers", "Integration"],
      image: "/aadarsh.jpg"
    }
  ];

  const roles = ["Co-founder", "Back-end engineers", "Front-end engineers", "Infrastructure", "Designer", "Integration"];

  const handleMemberClick = (member) => {
    setSelectedMember(selectedMember?.id === member.id ? null : member);
  };

  const handleRoleClick = (role) => {
    setSelectedRole(selectedRole === role ? null : role);
    setSelectedMember(null);
  };

  const filteredMembers = selectedRole 
    ? teamMembers.filter(member => member.roles.includes(selectedRole))
    : teamMembers;

  return (
    <div className="team-container" id='team'>
      <h2>Our Team</h2>
      
      <div className="role-filters">
        {roles.map(role => (
          <button
            key={role}
            className={`role-filter ${selectedRole === role ? 'active' : ''}`}
            onClick={() => handleRoleClick(role)}
          >
            {role}
          </button>
        ))}
      </div>
      
      <div className="team-members">
        {filteredMembers.map(member => (
          <div 
            key={member.id}
            className={`member-circle ${selectedMember?.id === member.id ? 'selected' : ''}`}
            onClick={() => handleMemberClick(member)}
          >
            <div className="circle-content">
            <img 
                src={member.image} 
                alt={member.name}
                className="member-photo"
              />
              {selectedMember?.id === member.id && (
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="description">{member.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamComponent;



// import React from 'react';
// import '../styles/Team.css';

// const Team = () => {
//   const teamMembers = [
//     {
//       name: "Vaskar Dhakal",
//       role: "CEO & Founder",
//       description: "With over 7 years of experience in tech, Vaskar leads our team with vision and expertise.",
//       image: "/vaskar.JPG"
//     },
//     {
//       name: "Nitesh Tripathi",
//       role: "CTO",
//       description: "Nitesh's innovative approach to technology drives our cutting-edge solutions.",
//       image: "/Nitesh.JPG"
//     },
//     {
//       name: "Bibek Bhandari",
//       role: "Lead Designer",
//       description: "Bibek's creative designs bring our clients' visions to life with stunning visuals.",
//       image: "/bibek.jpg"
//     },
//     {
//       name: "Ramesh Chapagain",
//       role: "Senior Developer",
//       description: "Ramesh's coding wizardry turns complex problems into elegant solutions.",
//       image: "/Ramey.jpeg"
//     },
//     {
//       name: "Simanta Poudel",
//       role: "Senior Developer",
//       description: "Simanta's coding wizardry turns complex problems into elegant solutions.",
//       image: "/asaar.jpg"
//     },
//     {
//       name: "Aadarsha Kandel",
//       role: "Senior Developer",
//       description: "Aadarsh's coding wizardry turns complex problems into elegant solutions.",
//       image: "/aadarsh.jpg"
//     }
//   ];

//   return (
//     <section id="team" className="team">
//       <div className="container">
//         <h2>Our Team</h2>
//         <div className="team-grid">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="team-member">
//               <img src={member.image} alt={member.name} className="member-image" />
//               <h3>{member.name}</h3>
//               <h4>{member.role}</h4>
//               <p>{member.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;