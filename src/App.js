import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ])
  const [current, setCurrent] = useState("X")
  const [condition, setCondition] = useState("ongoing") 

  const dummyDataX = [
    ["X", null, null],
    [null, "X", null],
    [null, null, "X"]
  ]

  const dummyDataO = [
    [null, null, null],
    [null, null, null],
    ["O", "O", "O"]
  ]

  function isEndingMove() {

      // unfortunately, we have only checked 3 rows, and thus only 3 of the 8 win
      // conditions. we must go on.
      // Only use as inspiration, this code has some errors.
      // board.map(row => {
        if (row.every(cell => cell === "O")) {
          // O has won
         setCondition("win")
       }
        if (row.every(cell => cell === "X")) {
          // X has won
          setCondition("win")
        }
        if(board[1][1] != null && board[1][1] == board[0][0] && board[1][1] === board[2][2] ) {
          setCondition("win") 
        }
        if(board[1][1] != null && board[1][1] == board[0][2] && board[1][1] === board[2][0] ) {
         setCondition("win") 
       }
       if(board[1][0] != null && board[1][0] == board[0][0] && board[1][0] === board[2][0] ) {
         setCondition("win") 
       }
       if(board[0][1] != null && board[0][1] == board[1][1] && board[1][1] === board[2][1] ) {
         setCondition("win") 
       }
       if(board[1][2] != null && board[1][2] == board[0][2] && board[1][2] === board[2][2] ) {
         setCondition("win") 
       }
    // checking if there's even one null then game is not drawn
    // that means all conditions after are non-tie ones
      if (board.some(x => x !== null)) {
        setCondition("tie")
        return true
    }

      
  }

    // checking if there's even one null then game is not drawn
    // that means all conditions after are non-tie ones
    if (board.some(x => x !== null)) {
      setCondition("tie")
      return true
    }

      // unfortunately, we have only checked 3 rows, and thus only 3 of the 8 win
      // conditions. we must go on.
      // Only use as inspiration, this code has some errors.
      // board.map(row => {
      //   if (row.every(cell => cell === "O")) {
      //     // O has won
      //     setCondition("o-win")
      //   }
      //   if (row.every(cell => cell === "X")) {
      //     // X has won
      //     setCondition("x-win")
      //   }
      // })


      // explore a solution with for loops
      // remember that your data is an array of 3 numbers
      // create dummy data and see if you can detect a win
  }

  // given a row and column, setMove will try to move if it's legal
  // otherwise we will ignore the move
  function setMove(r, c) {
    if (condition === "ongoing") {
      // if cell is empty, update the cell with setBoard
      // if the cell is full, ignore the move

      // with every single move, we need to update whose turn it is
      // then run setBoard with the correct new board
    }
  }

  return (
    <div id="App">
      <main>
        <section>
          <div className="cell" onClick={() => {
            // run setMove(r, c) where r, c is the row and column of the cell
          }}>{board[0][0]}</div>
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


export default App;

// If the game is not over, and the cell is still fresh, then allow the next move.
// When a player makes a move, the game might end.
// First we check if someone won.
// Then we check if there's a tie.

// Otherwise game is not over.

// Otherwise game is not over.

