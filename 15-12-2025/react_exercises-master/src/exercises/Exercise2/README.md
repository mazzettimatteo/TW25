# Esercizio 2: State con useState

## Obiettivi
- Utilizzare l'hook `useState`
- Gestire eventi (onClick)
- Modificare lo stato del componente
- Comprendere il re-rendering

## Consegna

Crea un componente `ToggleButton` che implementa un pulsante con stato on/off.

Il componente deve:
1. Avere uno stato booleano che rappresenta on/off
2. Visualizzare un pulsante che mostra "ON" o "OFF" in base allo stato
3. Cambiare stato al click del pulsante
4. Cambiare il colore di sfondo del pulsante:
   - Verde quando ON
   - Rosso quando OFF

### Comportamento atteso

Click 1: OFF (rosso) → ON (verde)  
Click 2: ON (verde) → OFF (rosso)  
Click 3: OFF (rosso) → ON (verde)  
...

## Suggerimenti

- Importa `useState` da React: `import React, { useState } from 'react';`
- Usa `const [nomeStato, setNomeStato] = useState(valoreIniziale);`
- Per gestire il click: `<button onClick={funzione}>`
- Usa l'operatore ternario per il rendering condizionale: `condizione ? valore1 : valore2`
- Lo stile può essere un oggetto JavaScript

## Concetti Chiave

- **useState**: hook per aggiungere stato locale a un componente
- **Event handling**: gestione degli eventi utente
- **Re-rendering**: React ri-renderizza il componente quando lo stato cambia
- **Operatore ternario**: sintassi compatta per espressioni condizionali