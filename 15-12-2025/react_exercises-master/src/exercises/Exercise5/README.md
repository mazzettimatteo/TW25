# Esercizio 5: useEffect e API

## Obiettivi
- Utilizzare l'hook `useEffect`
- Fare chiamate HTTP con `fetch`
- Visualizzare dati da un'API

## Consegna

Crea un componente `RandomUser` che carica e visualizza dati da un'API esterna.

Il componente deve:
1. Al caricamento della pagina, fare una fetch a `https://randomuser.me/api/`
2. Salvare i dati dell'utente in uno stato
3. Visualizzare nome completo e email dell'utente

### API Response Structure

```javascript
{
  results: [{
    name: { first: "John", last: "Doe" },
    email: "john.doe@example.com"
  }]
}
```

### Output atteso

```
Random User

Nome: John Doe
Email: john.doe@example.com
```

## Suggerimenti

- Importa useEffect: `import React, { useState, useEffect } from 'react';`
- Usa useState per memorizzare i dati dell'utente: `const [user, setUser] = useState(null);`
- useEffect syntax:
  ```javascript
  useEffect(() => {
    // codice da eseguire al caricamento
  }, []); // [] = esegui solo una volta
  ```
- Fetch pattern:
  ```javascript
  fetch(url)
    .then(response => response.json())
    .then(data => setUser(data.results[0]))
  ```
- Per visualizzare i dati solo quando sono disponibili, usa: `{user && <div>...</div>}`

## Concetti Chiave

- **useEffect**: hook per eseguire codice quando il componente viene caricato (side effects)
- **Dependency array**: `[]` vuoto significa "esegui solo al primo caricamento"
- **fetch()**: funzione per fare richieste HTTP
- **Conditional rendering**: visualizzare elementi solo quando i dati sono disponibili