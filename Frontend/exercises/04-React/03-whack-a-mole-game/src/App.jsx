import React from 'react';
import Game from './components/Game';
import GameContextProvider from './context/gameContext';
import './index.css';

// Task: In this lab, we provide a complete Whack-a-Mole game.
// Currently, the state is managed in various components.
// Your task is to inspect how components consume the GameContext 
// to render global data (like scores, game active flags, and difficulty).
// Add a feature: Add a button to reset the High Score back to 0.
function App() {
  return (
    <GameContextProvider>
      <div className="app-container">
        <header>
          <h1>Whack-a-Mole 3D</h1>
          <p>Learn global state sharing using React Context API</p>
        </header>

        <Game />
      </div>
    </GameContextProvider>
  );
}

export default App;
