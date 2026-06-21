import React, { createContext, useState, useEffect } from 'react';

export const GameContext = createContext(null);

export default function GameContextProvider({ children }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('mole-highscore') || '0', 10);
  });
  const [difficulty, setDifficulty] = useState('medium'); // easy, medium, hard
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('mole-highscore', score.toString());
    }
  }, [score, highScore]);

  const startGame = () => {
    setScore(0);
    setIsPlaying(true);
  };

  const stopGame = () => {
    setIsPlaying(false);
  };

  const hitMole = () => {
    if (!isPlaying) return;
    setScore((prev) => prev + 10);
  };

  const missClick = () => {
    if (!isPlaying) return;
    setScore((prev) => Math.max(0, prev - 5));
  };

  return (
    <GameContext.Provider value={{
      score,
      highScore,
      difficulty,
      setDifficulty,
      isPlaying,
      startGame,
      stopGame,
      hitMole,
      missClick
    }}>
      {children}
    </GameContext.Provider>
  );
}
