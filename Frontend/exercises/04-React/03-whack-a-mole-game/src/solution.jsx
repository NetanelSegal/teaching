import React, { useContext } from 'react';
import Game from './components/Game';
import GameContextProvider, { GameContext } from './context/gameContext';
import './index.css';

// Modified Game component with reset high score capability
function GameWithReset() {
  return <Game />;
}

function App() {
  const handleResetHighScore = () => {
    localStorage.removeItem('mole-highscore');
    window.location.reload(); // Quick refresh to sync state
  };

  return (
    <GameContextProvider>
      <div className="app-container">
        <header>
          <h1>Whack-a-Mole 3D</h1>
          <p>Learn global state sharing using React Context API</p>
        </header>

        <GameWithReset />
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button 
            onClick={handleResetHighScore}
            style={{ 
              backgroundColor: 'transparent', 
              color: '#9ca3af', 
              border: '1px solid #4b5563', 
              padding: '6px 12px', 
              borderRadius: '6px', 
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            Reset High Score
          </button>
        </div>
      </div>
    </GameContextProvider>
  );
}

export default App;
