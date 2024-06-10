import React from 'react';
import './App.css';
function App() {

  const subjects = [
    {
      name: "Matemática",
      teacher: "",
      marks: [],
      year: NaN,
      id: 0
    },
    {
      name: "Lengua",
      teacher: "",
      marks: [],
      year: NaN,
      id: 1
    },
    {
      name: "Programación II",
      teacher: " ",
      marks: [],
      year: NaN,
      id: 2
    },
    {
      name: "Física",
      teacher: " ",
      marks: [],
      year: NaN,
      id: 4

    },
    {
      name: "Informática Aplicada II",
      teacher: " ",
      marks: [],
      year: NaN,
      id: 5
    },
    {
      name: "Química",
      teacher: " ",
      marks: [],
      year: NaN,
      id: 6
    }
  ];

  return (
    <div>
      <header className="App-header">
        <h3>Materias ciclo lectivo 2023</h3>
        <ul>
          {subjects.map((subject) => <li key={subject.id} >{subject.name}</li>)}
        </ul>
      </header>
    </div>
  );
}
export default App;