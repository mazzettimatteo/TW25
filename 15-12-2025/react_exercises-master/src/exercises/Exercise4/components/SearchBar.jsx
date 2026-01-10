import React from 'react';

/**
 * COMPONENTE CHILD: SearchBar
 * 
 * TODO:
 * 1. Ricevere props: value e onChange
 * 2. Creare un input controllato
 * 3. Chiamare onChange quando l'utente digita
 */

function SearchBar(/* aggiungi props */) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="search">Cerca: </label>
      {/* TODO: aggiungi input controllato */}
    </div>
  );
}

export default SearchBar;