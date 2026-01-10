# React Exercises - Web Technologies Course

Questa repository contiene 6 esercizi progressivi per imparare i concetti fondamentali di React.

## Setup

```bash
npx create-react-app react-exercises
cd react-exercises
```

Copia i file degli esercizi nella cartella `src/exercises/`.

## Esercizi

1. **Exercise 1 - Props e Componenti Base**: Creazione di componenti con props
2. **Exercise 2 - State con useState**: Gestione dello stato interno
3. **Exercise 3 - Liste e Map**: Renderizzare liste con map()
4. **Exercise 4 - One-way Data Flow**: Comunicazione parent-child
5. **Exercise 5 - useEffect e API**: Chiamate HTTP e lifecycle
6. **Exercise 6 - React + MongoDB**: Connessione a database con backend Express

## Come Usare

1. Apri il file `README.md` nell'esercizio che vuoi completare
2. Leggi la consegna
3. Modifica il file `ExerciseN.jsx` con la tua soluzione
4. Importa il componente in `App.js` per testarlo
5. Confronta con `ExerciseN.solution.jsx` quando hai finito

## Testare gli Esercizi

In `src/App.js`:

```javascript
import Exercise1 from './exercises/Exercise1/Exercise1';
// import Exercise1 from './exercises/Exercise1/Exercise1.solution'; // Per vedere la soluzione

function App() {
  return (
    <div className="App">
      <Exercise1 />
    </div>
  );
}

export default App;
```

---

## Setup MongoDB Atlas (per Esercizio 6)

L'Esercizio 6 richiede un database MongoDB. Usa MongoDB Atlas (cloud gratuito) invece di un'installazione locale.

### 1. Crea un Account MongoDB Atlas

1. Vai su: https://www.mongodb.com/cloud/atlas/register
2. Registrati con email o Google
3. Completa la registrazione

### 2. Crea un Cluster Gratuito

1. Dopo il login, clicca **"Create"** per creare un nuovo cluster
2. Scegli il piano **M0 (FREE)**
3. Seleziona un **Provider** (AWS, Google Cloud, o Azure)
4. Scegli una **Region** vicina a te (es. Frankfurt per l'Europa)
5. Cluster Name: puoi lasciare il default o chiamarlo `tw-cluster`
6. Clicca **"Create Cluster"** (ci vorranno 1-3 minuti)

### 3. Configura Database Access

1. Nel menu laterale, clicca **"Database Access"**
2. Clicca **"Add New Database User"**
3. Scegli **"Password"** come metodo di autenticazione
4. Inserisci:
   - Username: `aschimmenti` (o il tuo nome)
   - Password: scegli una password sicura (es. `Dicembre_2025`)
   - **⚠️ Salva username e password** - ti serviranno dopo!
5. Database User Privileges: lascia **"Read and write to any database"**
6. Clicca **"Add User"**

### 4. Configura Network Access

1. Nel menu laterale, clicca **"Network Access"**
2. Clicca **"Add IP Address"**
3. Clicca **"Allow Access from Anywhere"** (aggiunge `0.0.0.0/0`)
4. Clicca **"Confirm"**

> **Nota**: Per produzione usa IP specifici, ma per esercizi `0.0.0.0/0` va bene.

### 5. Ottieni la Connection String

1. Torna a **"Database"** nel menu laterale
2. Clicca **"Connect"** sul tuo cluster
3. Scegli **"Connect your application"**
4. Driver: **Node.js**, Version: **5.5 or later**
5. Copia la connection string, sarà tipo:
   ```
   mongodb+srv://<username>:<password>@tw-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Sostituisci `<username>`, `<password>`, `<cluster>` e `xxxxx` con le tue credenziali:
   ```
   mongodb+srv://<username>:<password>@<cluster>.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### 6. Crea Database e Collection

**Opzione A: Da MongoDB Atlas (Web)**
1. Vai su **"Database"** → clicca **"Browse Collections"** sul tuo cluster
2. Clicca **"Add My Own Data"**
3. Database name: `react_exercises`
4. Collection name: `students`
5. Clicca **"Create"**

**Opzione B: Da MongoDB Compass (Desktop)**
1. Scarica MongoDB Compass: https://www.mongodb.com/try/download/compass
2. Apri Compass e incolla la tua connection string
3. Clicca **"Connect"**
4. Clicca **"Create Database"**
   - Database name: `react_exercises`
   - Collection name: `students`
5. Clicca **"Create Database"**

### 7. Setup Backend per Esercizio 6

```bash
# Crea la cartella backend
mkdir backend
cd backend

# Inizializza progetto Node.js
npm init -y

# Installa dipendenze
npm install express mongodb cors
```

Crea il file `backend/server.js` e inserisci la tua connection string:

```javascript
const MONGO_URL = 'mongodb+srv://<username>:<password>@<cluster>.xxxxx.mongodb.net/?retryWrites=true&w=majority';
```

### 8. Avvia Backend e Frontend

**Terminal 1 - Backend:**
```bash
cd backend
node server.js
```

Dovresti vedere: `Server on port 5000` e `Connected to MongoDB Atlas`

**Terminal 2 - Frontend:**
```bash
# Nella cartella principale del progetto React
npm start
```

Apri http://localhost:3000 e prova l'Esercizio 6!

---

## Verifica MongoDB Compass

Per visualizzare i dati in tempo reale:

1. Apri **MongoDB Compass**
2. Connetti con la tua connection string
3. Naviga a: `react_exercises` → `students`
4. Ogni volta che aggiungi uno studente in React, vedrai il documento apparire qui!

---

## Troubleshooting MongoDB

**Errore: "bad auth"**
- Verifica username e password nella connection string
- Assicurati di aver creato l'utente in "Database Access"

**Errore: "connection refused"**
- Verifica di aver aggiunto `0.0.0.0/0` in "Network Access"
- Controlla che la connection string sia corretta

**Cluster non si crea**
- Verifica la tua email (potrebbe servire conferma)
- Prova a rifare il login

---

## Prerequisiti

- Conoscenza base di JavaScript (ES6+)
- Familiarità con HTML e CSS
- Node.js installato
- Account MongoDB Atlas (gratuito) per Esercizio 6

## Riferimenti

- [Documentazione React](https://react.dev/)
- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)
- Materiale del corso Web Technologies