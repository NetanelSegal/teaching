import React from 'react';
import './index.css';

// Task 1: Define a ProfileCard component.
// It should accept the following props:
// - name (string)
// - role (string)
// - avatar (string, optional - use a fallback if not provided)
// - bio (string)
// - skills (array of strings)
// - isAvailableForHire (boolean)
// TODO: Implement the ProfileCard component here

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
      avatar: "", // Should trigger fallback avatar image
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
        {/* Task 2: Map over the developers array and render a ProfileCard for each developer */}
        {/* TODO: Implement the map logic here */}
      </div>
    </div>
  );
}

export default App;
