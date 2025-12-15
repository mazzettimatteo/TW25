import React, { useState } from 'react';
import SearchBar from './components/SearchBar';

/**
 * ESERCIZIO 4: One-way Data Flow
 * 
 * Obiettivo: Creare un sistema parent-child dove il parent gestisce
 * lo stato e il child comunica tramite callback
 * 
 * TODO:
 * 1. Creare uno stato per l'array di nomi
 * 2. Creare uno stato per il termine di ricerca
 * 3. Creare una funzione di callback per aggiornare searchTerm
 * 4. Filtrare l'array in base a searchTerm
 * 5. Passare valore e callback a SearchBar
 * 6. Renderizzare la lista filtrata
 */

function FilteredList() {
  // TODO: definisci l'array di nomi
  // const names = [ ... ];

  // TODO: crea gli stati per names e searchTerm

  // TODO: crea la funzione handleSearchChange

  // TODO: filtra l'array
  // const filteredNames = ...

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Lista Filtrata</h2>
      {/* TODO: aggiungi SearchBar e lista */}
    </div>
  );
}

export default FilteredList;