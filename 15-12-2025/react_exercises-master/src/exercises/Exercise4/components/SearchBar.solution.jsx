import React from 'react';

/**
 * SOLUZIONE COMPONENTE CHILD: SearchBar
 */

function SearchBar(props) {
  const inputStyle = {
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="search">Cerca: </label>
      <input 
        id="search"
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        style={inputStyle}
        placeholder="Digita per filtrare..."
      />
    </div>
  );
}

export default SearchBar;