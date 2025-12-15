import React, { useState } from 'react';

/**
 * SOLUZIONE ESERCIZIO 2: State con useState
 */

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn(!isOn);
  }

  const buttonStyle = {
    padding: '15px 30px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: isOn ? '#4CAF50' : '#f44336',
    transition: 'background-color 0.3s'
  };

  return (
    <div style={{ padding: '20px' }}>
      <button style={buttonStyle} onClick={handleToggle}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default ToggleButton;