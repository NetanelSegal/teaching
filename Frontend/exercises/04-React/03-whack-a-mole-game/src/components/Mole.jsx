import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../context/gameContext';

// Inline simple SVG icon for the mole
const MoleIcon = () => (
  <svg viewBox="0 0 100 100" className="mole-svg" width="90%">
    <ellipse cx="50" cy="50" rx="35" ry="40" fill="#78350f" />
    <circle cx="35" cy="40" r="5" fill="#000" />
    <circle cx="65" cy="40" r="5" fill="#000" />
    <ellipse cx="50" cy="55" rx="10" ry="6" fill="#fecdd3" />
    <path d="M 45,65 Q 50,70 55,65" stroke="#000" strokeWidth="3" fill="none" />
  </svg>
);

export default function Mole({ id, activeMole }) {
  const { hitMole, missClick, isPlaying } = useContext(GameContext);
  const isVisible = activeMole === id;

  const handleMoleClick = (e) => {
    e.stopPropagation();
    if (!isPlaying || !isVisible) return;
    hitMole();
  };

  return (
    <div className="mole-hole" onClick={missClick}>
      <div 
        onClick={handleMoleClick} 
        className={`mole-character ${isVisible ? 'active' : ''}`}
      >
        <MoleIcon />
      </div>
      <div className="dirt-pile"></div>
    </div>
  );
}
