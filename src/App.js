import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [board, setBoard] = useState([
    ["", "", ""],
    [null, null, ""],
    [null, null, null]
  ])
  const [current, setCurrent] = useState("X")
  const [condition, setConditin] = useState("ongoing") 

  const sample = [["X", "O", "X"], [null, "X", "O"], ["O", null, null]]

  return (
    <div className="App">
      <main>
        <section>
          <div className="cell" onClick={() => setBoard(sample)}>{board[0][0]}</div>
          <div className="cell" onClick={() => 3}>{board[0][1]}</div>
          <div className="cell" onClick={() => 3}>{board[0][2]}</div>
        </section>
        <section>
          <div className="cell" onClick={() => 3}>{board[1][0]}</div>
          <div className="cell" onClick={() => 3}>{board[1][1]}</div>
          <div className="cell" onClick={() => 3}>{board[1][2]}</div>
        </section>
        <section>
          <div className="cell" onClick={() => 3}>{board[2][0]}</div>
          <div className="cell" onClick={() => 3}>{board[2][1]}</div>
          <div className="cell" onClick={() => 3}>{board[2][2]}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
