import React, { useState, useRef, useContext, createContext } from 'react';

// --- 1. PREPARAZIONE CONTEXT (per useContext) ---
// Creiamo una "scatola globale" per i dati.
// Immagina che questo sia un dato dell'utente loggato che serve ovunque.
const UtenteContext = createContext();


// --- COMPONENTE PRINCIPALE ---
export default function App() {
  const user = { nome: "Mario Rossi", ruolo: "Admin" };

  return (
    // Il Provider "inizietta" i dati nell'albero dei componenti
    <UtenteContext.Provider value={user}>
      <div style={{ padding: "20px" }}>
        <h1>Laboratorio React Hooks 🧪</h1>
        <hr />

        {/* ESEMPIO 1: useState e Binding */}
        <EsempioState />
        <hr />

        {/* ESEMPIO 2: useRef */}
        <EsempioRef />
        <hr />

        {/* ESEMPIO 3: useContext */}
        <EsempioContext />
      </div>
    </UtenteContext.Provider>
  );
}

// --- SOTTO-COMPONENTE 1: useState (Binding "Manuale") ---
function EsempioState() {
  // useState restituisce: [il valore attuale, la funzione per cambiarlo]
  const [testo, setTesto] = useState("");

  // Funzione che gestisce il cambio (Binding)
  const gestisciCambio = (e) => {
    setTesto(e.target.value); // Scrivo nel "database" di React (State)
  };

  return (
    <div>
      <h2>1. useState & Binding Bidirezionale</h2>
      <p>In React il binding non è automatico. Devi collegare value e onChange.</p>
      
      {/* BINDING BIDIREZIONALE:
         1. value={testo} -> Legge dallo stato (Output)
         2. onChange={...} -> Scrive nello stato (Input)
      */}
      <input 
        type="text" 
        value={testo} 
        onChange={gestisciCambio} 
        placeholder="Scrivi qui..." 
      />
      
      <p>Risultato in tempo reale: <strong>{testo}</strong></p>
    </div>
  );
}

// --- SOTTO-COMPONENTE 2: useRef (Valori "Silenziosi") ---
function EsempioRef() {
  // useRef crea un oggetto che persiste ma NON causa re-render quando cambia
  const contatoreSilenzioso = useRef(0);
  
  // useState serve solo per forzare l'aggiornamento grafico quando vogliamo noi
  const [renderCount, setRenderCount] = useState(0);

  const incrementaRef = () => {
    contatoreSilenzioso.current = contatoreSilenzioso.current + 1;
    console.log("Valore Ref attuale:", contatoreSilenzioso.current);
    alert(`Ho incrementato il Ref a ${contatoreSilenzioso.current}, ma l'interfaccia NON cambia!`);
  };

  const forzaRender = () => {
    setRenderCount(renderCount + 1);
  };

  return (
    <div>
      <h2>2. useRef (Memoria senza Render)</h2>
      <p>Il valore Ref cambia in memoria, ma React non ridisegna la pagina.</p>
      
      <p>Valore visualizzato del Ref: <strong>{contatoreSilenzioso.current}</strong></p>
      
      <button onClick={incrementaRef}>
        Incrementa Ref (Guarda la Console/Alert)
      </button>
      
      <br /><br />
      
      <button onClick={forzaRender}>
        Forza un Re-render (Aggiorna la vista)
      </button>
      <p><small>(Render eseguiti: {renderCount})</small></p>
    </div>
  );
}

// --- SOTTO-COMPONENTE 3: useContext (Teletrasporto Dati) ---
function EsempioContext() {
  // "Teletrasportiamo" i dati definiti in cima all'App direttamente qui
  // senza passarli tramite props.
  const datiUtente = useContext(UtenteContext);

  return (
    <div>
      <h2>3. useContext (Dati Globali)</h2>
      <p>Non ho ricevuto props, ma ho letto il contesto globale:</p>
      <ul>
        <li>Nome: <strong>{datiUtente.nome}</strong></li>
        <li>Ruolo: <strong>{datiUtente.ruolo}</strong></li>
      </ul>
    </div>
  );
}