import React, { useState } from 'react';
import SearchBar from './components/SearchBar.solution';

/**
 * SOLUZIONE ESERCIZIO 4: One-way Data Flow
 */

function FilteredList() {
  const names = ['Mario', 'Luigi', 'Peach', 'Toad', 'Bowser', 'Yoshi'];
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearchChange(value) {
    setSearchTerm(value);
  }

  const filteredNames = names.filter(name => 
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const listStyle = {
    listStyleType: 'none',
    padding: 0
  };

  const itemStyle = {
    padding: '8px',
    borderBottom: '1px solid #eee'
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Lista Filtrata</h2>
      <SearchBar 
        value={searchTerm} 
        onChange={handleSearchChange} 
      />
      {filteredNames.length === 0 ? (
        <p>Nessun risultato</p>
      ) : (
        <ul style={listStyle}>
          {filteredNames.map((name, index) => (
            <li key={index} style={itemStyle}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilteredList;