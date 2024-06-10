import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const subjects = [
    {
      name: "Matemática",
      teacher: "Repezza",
      marks: [1, 2, 3],
      year: 2020,
      id: 0
    },
    {
      name: "Lengua",
      teacher: "De Michele",
      marks: [4, 5, 6],
      year: 2020,
      id: 1
    },
    {
      name: "Programación II",
      teacher: "Garcia",
      marks: [10, 10, 10, 10],
      year: 2024,
      id: 2
    },
    {
      name: "Física",
      teacher: "Monti",
      marks: [7, 8, 5, 9],
      year: 2023,
      id: 4

    },
    {
      name: "Informática Aplicada II",
      teacher: "Virgolini",
      marks: [10, 10],
      year: 2024,
      id: 5
    },
    {
      name: "Química",
      teacher: "Franco",
      marks: [4, 10, 2, 8],
      year: 2022,
      id: 6
    }
  ];

  const [currentYear, setCurrentYear] = useState(0)
  const [currentTeacher, setCurrentTeacher] = useState("Repezza")
  const moreThan3Notes = subjects.filter(subject => subject.marks.length > 3);
  const AverageGreaterThan6 = subjects.filter(subject => {
    let count = 0;
    for (let i = 0; i < subject.marks.length; i++) {
      count += subject.marks[i];
    }
    return count / subject.marks.length > 6
  })

  return (
    <div>
      <header className="App-header">

        <div>
          <h3>Materias con mas de 3 notas</h3>
          <ul>
            {moreThan3Notes.map((subject) => <li key={subject.id} >{subject.name}</li>)}
          </ul>
        </div>

        <div>
          <h3>Materias con promedio mayor a 6</h3>
          <ul>
            {AverageGreaterThan6.map((subject) => <li key={subject.id} >{subject.name}</li>)}
          </ul>
        </div>

        <div>
          <h3>Materias segun el año</h3>
          <select value={currentYear} onChange={(e => setCurrentYear(e.target.value))}>
            {subjects.map((subject) => <option value={subject.year} >{subject.year}</option>)}
          </select>
          <ul>
            {subjects.filter(subject => subject.year == currentYear).map((subject) => <li key={subject.id} >{subject.name}</li>)}
          </ul>
        </div>

        <div>
          <h3>Materias segun profesor</h3>
          <select value={currentTeacher} onChange={(e => setCurrentTeacher(e.target.value))}>
            {subjects.map((subject) => <option value={subject.teacher} >{subject.teacher}</option>)}
          </select>
          <ul>
            {subjects.filter(subject => subject.teacher == currentTeacher).map((subject) => <li key={subject.id} >{subject.name}</li>)}
          </ul>
        </div>

      </header>
    </div>
  );
}
export default App;