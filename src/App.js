import React, { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');

  const addStudent = () => {
    if (name.trim()) {
      setStudents([...students, name]);
      setName('');
    }
  };

  const removeStudent = (index) => {
    const newStudents = students.filter((_, i) => i !== index);
    setStudents(newStudents);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Счетчик студентов</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите имя студента"
        />
        <button onClick={addStudent}>Добавить студента</button>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student} <button onClick={() => removeStudent(index)}>Удалить</button>
            </li>
          ))}
        </ul>
        <p>Общее количество студентов: {students.length}</p>
      </header>
    </div>
  );
}

export default App;
