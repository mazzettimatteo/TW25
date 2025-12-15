# Esercizio 3: Liste e Map

## Obiettivi
- Renderizzare liste di elementi con `map()`
- Utilizzare l'attributo `key` nelle liste

## Consegna

Crea un componente `NameList` che visualizza una lista di nomi.

Il componente deve:
1. Partire con un array di nomi predefiniti (almeno 4 nomi)
2. Visualizzare ogni nome in un elemento `<li>`
3. Aggiungere l'attributo `key` correttamente a ogni elemento della lista

### Array di esempio

```javascript
const names = ['Mario', 'Luigi', 'Peach', 'Toad'];
```

### Output atteso

```
Lista Nomi
• Mario
• Luigi
• Peach
• Toad
```

## Suggerimenti

- Usa `map()` per iterare sui nomi: `array.map((item, index) => ...)`
- La sintassi base per renderizzare una lista è:
  ```javascript
  {names.map((name, index) => (
    <li key={index}>{name}</li>
  ))}
  ```
- L'attributo `key` è obbligatorio quando usi `map()` per aiutare React a identificare gli elementi
- Ricorda le parentesi graffe `{}` per inserire codice JavaScript nel JSX

## Concetti Chiave

- **Array.map()**: metodo JavaScript per trasformare un array in un altro array. In React, lo usiamo per trasformare array di dati in array di elementi JSX
- **Key prop**: attributo speciale richiesto da React per identificare univocamente ogni elemento di una lista. Aiuta React a ottimizzare il rendering quando la lista cambia