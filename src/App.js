import React from 'react';
import './App.css';
function App() {

  const subjects = ["Matemática", "Lengua", "Programación II", "Física", "Informática Aplicada II", "Química", "Robótica" ]

  return (
    <div>
      <header className="App-header">
        <h3>Materias ciclo lectivo 2023</h3>
        <ul>
          {subjects.map((subject) => <li>{subject}</li>)}
        </ul>
      </header>
    </div>
  );
}
export default App;