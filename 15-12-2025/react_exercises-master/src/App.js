import React from 'react';
import './App.css';

// ============================================
// IMPORTA GLI ESERCIZI
// ============================================
// Decomenta l'esercizio che vuoi testare

// Esercizio 1: Props e Componenti Base
// import Exercise1 from './exercises/Exercise1/Exercise1';
// import Exercise1 from './exercises/Exercise1/Exercise1.solution';

// Esercizio 2: State con useState
// import Exercise2 from './exercises/Exercise2/Exercise2';
// import Exercise2 from './exercises/Exercise2/Exercise2.solution';

// Esercizio 3: Liste e Rendering Condizionale
// import Exercise3 from './exercises/Exercise3/Exercise3';
// import Exercise3 from './exercises/Exercise3/Exercise3.solution';

// Esercizio 4: One-way Data Flow
// import Exercise4 from './exercises/Exercise4/Exercise4';
// import Exercise4 from './exercises/Exercise4/Exercise4.solution';

// Esercizio 5: useEffect e API
// import Exercise5 from './exercises/Exercise5/Exercise5';

// Esercizio 6: React + MongoDB
// import Exercise6 from './exercises/Exercise6/Exercise6.solution';

function App() {
  return (
    <div className="App">
      <header style={{ 
        backgroundColor: '#282c34', 
        padding: '20px', 
        color: 'white',
        textAlign: 'center'
      }}>
        <h1>React Exercises - Web Technologies</h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '14px', opacity: 0.8 }}>
          Decomenta l'esercizio che vuoi testare in App.js
        </p>
      </header>
      
      <main style={{ padding: '20px' }}>
        {/* ============================================ */}
        {/* DECOMENTA L'ESERCIZIO CHE VUOI TESTARE */}
        {/* ============================================ */}
        
        {/* Esercizio 1: Props e Componenti Base */}
        {/* <Exercise1 nome="Mario" cognome="Rossi" eta={30} /> */}
        
        {/* Esercizio 2: State con useState */}
        {/* <Exercise2 /> */}
        
        {/* Esercizio 3: Liste e Rendering Condizionale */}
        {/* <Exercise3 /> */}
        
        {/* Esercizio 4: One-way Data Flow */}
        {/* <Exercise4 /> */}
        
        {/* Esercizio 5: useEffect e API */}
        {/* <Exercise5 /> */}
        
        {/* Esercizio 6: React + MongoDB */}
        {/*<Exercise6 />*/}
      </main>
      
      <footer style={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        textAlign: 'center',
        marginTop: '40px',
        borderTop: '1px solid #ddd'
      }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          Web Technologies Course - University of Bologna
        </p>
      </footer>
    </div>
  );
}

export default App;