import React from 'react';

/**
 * SOLUZIONE ESERCIZIO 3: Liste e Map
 */

function NameList() {
  const names = ['Mario', 'Luigi', 'Peach', 'Toad'];

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Lista Nomi</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;