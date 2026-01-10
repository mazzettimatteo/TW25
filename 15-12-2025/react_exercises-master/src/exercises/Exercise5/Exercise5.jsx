import React, { useState, useEffect } from 'react';

/**
 * ESERCIZIO 5: useEffect e API
 * 
 * Obiettivo: Caricare dati da un'API al caricamento del componente
 * 
 * TODO:
 * 1. Creare uno stato per memorizzare i dati dell'utente
 * 2. Usare useEffect per fare la fetch all'API
 * 3. Salvare i dati nello stato
 * 4. Visualizzare nome ed email dell'utente
 */

function RandomUser() {
  const API_URL = 'https://randomuser.me/api/';

  // TODO: crea lo stato per l'utente
  // const [user, setUser] = useState(null);

  // TODO: usa useEffect per fare la fetch
  // useEffect(() => {
  //   fetch(API_URL)
  //     .then(response => response.json())
  //     .then(data => setUser(data.results[0]));
  // }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Random User</h2>
      {/* TODO: visualizza i dati dell'utente */}
      {/* Suggerimento: usa {user && <div>...</div>} 
      Significa: "Se condizione è vera, renderizza <elemento>, altrimenti non renderizzare nulla"*/}
    </div>
  );
}

export default RandomUser;