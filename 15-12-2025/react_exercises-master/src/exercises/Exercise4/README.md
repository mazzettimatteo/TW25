# Esercizio 4: One-way Data Flow

## Obiettivi
- Comprendere il flusso unidirezionale dei dati in React
- Passare funzioni come props (callback)
- Creare componenti controllati (controlled components)
- Gestire la comunicazione parent-child

## Consegna

Crea due componenti che lavorano insieme: `FilteredList` (parent) e `SearchBar` (child).

### FilteredList (Parent)
Deve:
1. Contenere uno stato con un array di nomi
2. Contenere uno stato per il termine di ricerca
3. Passare il termine di ricerca e una funzione di callback a SearchBar
4. Filtrare e visualizzare solo i nomi che contengono il termine di ricerca
5. Se nessun nome corrisponde, mostrare "Nessun risultato"

### SearchBar (Child)
Deve:
1. Ricevere il valore corrente e la funzione di callback come props
2. Visualizzare un input controllato
3. Chiamare la callback quando l'utente digita

### Array di esempio
```javascript
const names = ['Mario', 'Luigi', 'Peach', 'Toad', 'Bowser', 'Yoshi'];
```

### Comportamento atteso

Input: "" → Mostra: tutti i nomi  
Input: "a" → Mostra: Mario, Peach, Toad  
Input: "yo" → Mostra: Yoshi  
Input: "xyz" → Mostra: "Nessun risultato"

## Suggerimenti

- Nel parent, usa due stati: uno per i nomi, uno per searchTerm
- Filtra l'array con: `names.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()))`
- Nel child, l'input deve essere controllato:
```javascript
  <input 
    value={props.value} 
    onChange={(e) => props.onChange(e.target.value)} 
  />
```
- La funzione nel parent aggiorna searchTerm: `setSearchTerm(newValue)`

## Concetti Chiave

- **One-way data flow**: i dati fluiscono dal parent ai child tramite props
- **Callback props**: funzioni passate come props per permettere ai child di comunicare col parent
- **Controlled component**: input il cui valore è controllato dallo stato React
- **Lifting state up**: lo stato condiviso viene gestito nel componente parent comune