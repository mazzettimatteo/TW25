# Esercizio 6: React + MongoDB

## Obiettivi
- Connettere React a MongoDB tramite un backend Express
- Leggere dati (GET)
- Aggiungere dati (POST)

## Setup Prerequisiti

### 1. MongoDB Compass
- Installa MongoDB Compass
- Connetti a: `mongodb://localhost:27017`
- Crea database: `react_exercises`
- Crea collection: `students`

### 2. Backend
```bash
mkdir backend
cd backend
npm init -y
npm install express mongodb cors
```

Crea `server.js` e avvia con `node server.js`

### 3. Frontend

Importa `Exercise6` in `App.js` e avvia React.

## Consegna

Crea un componente che:
1. Carica la lista di studenti da MongoDB
2. Mostra i nomi in una lista
3. Ha un input e un pulsante per aggiungere nuovi studenti

## Output atteso
```
Lista Studenti

[Input: nome]  [Pulsante: Aggiungi]

- Mario
- Luigi
- Peach
```

## Concetti Chiave

- **API REST**: GET per leggere, POST per creare
- **fetch()**: per comunicare con il backend
- **MongoDB**: database NoSQL