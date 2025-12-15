import React, { useState, useEffect } from 'react';

/**
 * SOLUZIONE ESERCIZIO 5: useEffect e API
 */

function RandomUser() {
  const API_URL = 'https://randomuser.me/api/';
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setUser(data.results[0]));
  }, []);

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '20px'
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Random User</h2>
      {user && (
        <div style={cardStyle}>
          <h3>{user.name.first} {user.name.last}</h3>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default RandomUser;