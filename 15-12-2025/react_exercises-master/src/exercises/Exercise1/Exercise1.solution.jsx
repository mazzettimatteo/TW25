import React from 'react';

/**
 * SOLUZIONE ESERCIZIO 1: Props e Componenti Base
 */

function UserCard(props) { 
  //stile
  const cardStyle = {
    border: '2px solid #333',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    maxWidth: '300px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <div style={cardStyle}>
      <h2>{props.nome} {props.cognome}</h2>
      <p>Età: {props.eta} anni</p>
    </div>
  );
}

export default UserCard;