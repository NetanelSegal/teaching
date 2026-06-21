import { useState } from 'react';

function BooleanExample() {
  const [isOn, setIsOn] = useState(false);

  const handleOnClick = () => setIsOn(!isOn);

  return (
    <div className='example' style={{ textAlign: 'center' }}>
      <h2>Toggle Image</h2>
      <button
        onClick={handleOnClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>

      <div
        style={{
          width: '200px',
          height: '200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #ddd',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        {isOn ? (
          <img
            src='https://images.unsplash.com/photo-1747747004644-4ab29224deee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Light on'
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default BooleanExample;
