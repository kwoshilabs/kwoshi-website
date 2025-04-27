import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Add AnimatePresence
// Assuming Team.css is correctly located relative to this file
import '../styles/Team.css'; // No changes needed here

const TeamComponent = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  // --- Team Data and Roles (remain the same) ---
  const teamMembers = [
    { id: 1, name: "Vaskar Dhakal", role: "CEO & Founder", description: "With over 7 years of experience in tech, Vaskar leads our team with vision and expertise.", roles: ["Co-founder", "Back-end engineers"], image: "/vaskar.JPG" },
    { id: 2, name: "Nitesh Tripathi", role: "CTO", description: "Nitesh's innovative approach to technology drives our cutting-edge solutions.", roles: ["Co-founder", "Back-end engineers", "Infrastructure"], image: "/Nitesh.JPG" },
    { id: 3, name: "Bibek Bhandari", role: "Lead Designer", description: "Bibek's creative designs bring our clients' visions to life with stunning visuals.", roles: ["Co-founder", "Designer", "Back-end engineers"], image: "/bibek.jpg" },
    { id: 4, name: "Ramesh Chapagain", role: "Senior Developer", description: "Ramesh's coding wizardry turns complex problems into elegant solutions.", roles: ["Co-founder", "Front-end engineers", "Integration"], image: "/Ramey.jpeg" },
    { id: 5, name: "Simanta Poudel", role: "Senior Developer", description: "Simanta's coding expertise helps build robust systems.", roles: ["Co-founder", "Front-end engineers", "Back-end engineers"], image: "/asaar.jpg" },
    { id: 6, name: "Kadarsha Kandel", role: "Senior Developer", description: "Aadarsha specializes in creating seamless user experiences.", roles: ["Co-founder", "Front-end engineers", "Integration"], image: "/aadarsh.jpg" }
  ];
  const roles = ["Co-founder", "Back-end engineers", "Front-end engineers", "Infrastructure", "Designer", "Integration"];

  // --- Handlers (remain the same) ---
  const handleMemberClick = (member) => {
    setSelectedMember(selectedMember?.id === member.id ? null : member);
  };
  const handleRoleClick = (role) => {
    setSelectedRole(selectedRole === role ? null : role);
    setSelectedMember(null);
  };

  // --- Filtering Logic (remains the same) ---
  const filteredMembers = selectedRole
    ? teamMembers.filter(member => member.roles.includes(selectedRole))
    : teamMembers;

  // --- Animation Variants ---
  const viewportSettings = {
    once: false, // Trigger animation every time
    amount: 0.2  // Trigger when 20% of the element is in view (adjust if needed)
  };

  const sectionFadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const itemFadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 }, // Container itself doesn't fade, just orchestrates children
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Delay between each child animation
      }
    }
  };


  return (
    // Wrap the main container for a subtle overall fade-in (optional)
    <motion.div
      className="team-container"
      id='team'
      initial="hidden"
      whileInView="visible"
      variants={sectionFadeIn} // Use a simple fade for the whole section container
      viewport={viewportSettings}
    >
      {/* Animate the title */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={itemFadeInUp}
        viewport={viewportSettings}
      >
        Our Team
      </motion.h2>

      {/* Animate the role filters container with staggering children */}
      <motion.div
        className="role-filters"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={viewportSettings}
      >
        {roles.map(role => (
          // Animate each filter button
          <motion.button
            key={role}
            className={`role-filter ${selectedRole === role ? 'active' : ''}`}
            onClick={() => handleRoleClick(role)}
            variants={itemFadeInUp} // Each button fades/slides up
          >
            {role}
          </motion.button>
        ))}
      </motion.div>

      {/* Animate the team members container with staggering children */}
      {/* Note: We use AnimatePresence from framer-motion if filtered items need exit animations */}
      {/* For simplicity here, we'll just animate the container and items on appear */}
      <AnimatePresence mode='wait'>
  <motion.div
    key={selectedRole || 'all'} // This forces re-animation when filter changes
    className="team-members"
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
  >
    {filteredMembers.map(member => (
      <motion.div
        key={member.id}
        className={`member-circle ${selectedMember?.id === member.id ? 'selected' : ''}`}
        onClick={() => handleMemberClick(member)}
        variants={itemFadeInUp}
        layout // Smooth layout transitions
      >
        <div className="circle-content">
              <img
                src={member.image}
                alt={member.name}
                className="member-photo"
              />
              {/* Conditionally rendered info doesn't need separate motion wrapper unless desired */}
              {selectedMember?.id === member.id && (
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="description">{member.description}</p>
                </div>
              )}
            </div>
      </motion.div>
    ))}
  </motion.div>
</AnimatePresence>
    </motion.div>
  );
};

export default TeamComponent;

