# Esercizio 1: Props e Componenti Base

## Obiettivi
- Creare componenti funzionali
- Utilizzare props per passare dati
- Scrivere JSX

## Consegna

Crea un componente `UserCard` che visualizza le informazioni di un utente.

Il componente deve:
1. Ricevere tre props: `nome`, `cognome`, `eta`
2. Visualizzare questi dati in una card con la seguente struttura:
   - Un titolo con nome e cognome
   - Un paragrafo con l'età
   - Uno stile minimo per la card (border, padding, margin)

### Esempio di utilizzo
```javascript

```

### Output atteso
```
┌─────────────────────┐
│  Mario Rossi        │
│  Età: 30 anni       │
└─────────────────────┘
```

## Suggerimenti

- Usa una funzione per definire il componente
- Accedi alle props tramite `props.nomeProp`
- Puoi usare uno style inline per lo styling di base
- Ricorda le graffe `{}` per inserire variabili JavaScript in JSX

## Concetti Chiave

- **Componenti funzionali**: funzioni che ritornano JSX
- **Props**: oggetto che contiene le proprietà passate al componente
- **JSX**: sintassi che combina JavaScript e HTML