import React, { useContext } from 'react';
import { GameContext } from '../context/gameContext';
import Field from './Field';

export default function Game() {
  const { score, highScore, isPlaying, startGame, difficulty, setDifficulty } = useContext(GameContext);

  return (
    <div className="game-panel">
      <div className="scoreboard">
        <div className="score-box">
          <span className="label">SCORE</span>
          <span className="value">{score}</span>
        </div>
        <div className="score-box">
          <span className="label">HIGH SCORE</span>
          <span className="value text-gold">{highScore}</span>
        </div>
      </div>

      {!isPlaying && (
        <div className="menu-overlay">
          <h3>Choose Difficulty</h3>
          <div className="diff-selectors">
            {['easy', 'medium', 'hard'].map((d) => (
              <button 
                key={d}
                onClick={() => setDifficulty(d)}
                className={`btn-diff ${difficulty === d ? 'active' : ''}`}
              >
                {d.toUpperCase()}
              </button>
            ))}
          </div>
          <button onClick={startGame} className="btn-start">START GAME 🏁</button>
        </div>
      )}

      {isPlaying && <Field />}
    </div>
  );
}
