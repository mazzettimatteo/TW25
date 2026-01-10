import React, { useState, useEffect } from 'react';

/**
 * SOLUZIONE ESERCIZIO 6: React + MongoDB
 */

function StudentList() {
  const API_URL = 'http://localhost:5000/api/students';
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    loadStudents();
  }, []);

  async function loadStudents() {
    const response = await fetch(API_URL);
    const data = await response.json();
    setStudents(data);
  }

  async function addStudent() {
    if (!name) return;
    
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    
    setName('');
    loadStudents();
  }

  return (
    <div>
      <h2>Lista Studenti</h2>
      
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome studente"
      />
      <button onClick={addStudent}>Aggiungi</button>
      
      <ul>
        {students.map(student => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;