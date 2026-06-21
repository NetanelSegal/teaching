import React from 'react';
import './index.css';

function ProfileCard({ name, role, avatar, bio, skills, isAvailableForHire }) {
  const fallbackAvatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200";
  
  return (
    <div className="card">
      <div className="avatar-container">
        <img 
          src={avatar || fallbackAvatar} 
          alt={name} 
          className="avatar"
        />
        {isAvailableForHire && <span className="badge">Available for Hire</span>}
      </div>
      
      <h2 className="dev-name">{name}</h2>
      <h4 className="dev-role">{role}</h4>
      <p className="dev-bio">{bio}</p>
      
      <div className="skills-section">
        <h5>Skills</h5>
        <div className="skills-tags">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const developers = [
    {
      id: 1,
      name: "Jane Doe",
      role: "Senior Frontend Engineer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      bio: "Building performant web applications with React, Tailwind, and TypeScript. Open-source enthusiast.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Zustand"],
      isAvailableForHire: true
    },
    {
      id: 2,
      name: "John Smith",
      role: "Full Stack Developer",
      avatar: "",
      bio: "Enthusiastic developer focused on Node.js backends and clean React dashboards. Loves debugging complex queries.",
      skills: ["Node.js", "Express", "React", "MongoDB", "Docker"],
      isAvailableForHire: false
    }
  ];

  return (
    <div className="container">
      <h1>Developer Profiles Directory</h1>
      <p className="subtitle">Learn React components, props, lists, and keys</p>
      
      <div className="profile-grid">
        {developers.map((dev) => (
          <ProfileCard key={dev.id} {...dev} />
        ))}
      </div>
    </div>
  );
}

export default App;
