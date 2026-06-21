import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../context/gameContext';
import Mole from './Mole';

export default function Field() {
  const { isPlaying, difficulty, stopGame } = useContext(GameContext);
  const [activeMole, setActiveMole] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);

  // Speed mapping based on difficulty
  const speed = difficulty === 'easy' ? 1200 : difficulty === 'medium' ? 800 : 500;

  // 1. Mole jumping effect
  useEffect(() => {
    if (!isPlaying) {
      setActiveMole(null);
      return;
    }

    const interval = setInterval(() => {
      const randomHole = Math.floor(Math.random() * 9);
      setActiveMole(randomHole);
    }, speed);

    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  // 2. Countdown timer
  useEffect(() => {
    if (!isPlaying) return;
    if (timeLeft === 0) {
      stopGame();
      setTimeLeft(30);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isPlaying, timeLeft]);

  return (
    <div className="game-field-container">
      <div className="game-stats">
        <span>Time Left: <strong>{timeLeft}s</strong></span>
      </div>

      <div className="grid-field">
        {[...Array(9)].map((_, index) => (
          <Mole 
            key={index} 
            id={index} 
            activeMole={activeMole} 
          />
        ))}
      </div>
    </div>
  );
}
