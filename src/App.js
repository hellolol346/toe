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

	function setMove(id) {
		if (condition === "ongoing") {
			// setBoard to the new board, based on the id passed to setMove
		}
		else {
			console.log("We did nothing because the game is over.")
		}

		// board.forEach(row => {
		// 	if (row.every(cell => cell === "O")) { setCondition("win") }
		// 	if (row.every(cell => cell === "X")) { setCondition("win") }
		// 	if (board[1][1] != null && board[1][1] === board[0][0] && board[1][1] === board[2][2] ) { setCondition("win") }
		// 	if (board[1][1] != null && board[1][1] === board[0][2] && board[1][1] === board[2][0] ) { setCondition("win") }
		// 	if (board[1][0] != null && board[1][0] === board[0][0] && board[1][0] === board[2][0] ) { setCondition("win") }
		// 	if (board[0][1] != null && board[0][1] === board[1][1] && board[1][1] === board[2][1] ) { setCondition("win") }
		// 	if (board[1][2] != null && board[1][2] === board[0][2] && board[1][2] === board[2][2] ) { setCondition("win") }
    	// 	// checking if there's even one null then game is not drawn
    	// 	// that means all conditions after are non-tie ones
      // 	if (board.some(x => x !== null) && condition !== "win") {
      // 	  setCondition("tie")
      // 	  return true
		// 	}
		// })
	}

	/*

	When a player clicks a cell, what should happen? These are the possibilities:

	1. Game is already won by X.
	2. Game is already won by O.
	3. Game is already tied.
	4. Game is ongoing.

	If the game is over, then don't allow any change.
	If the game is ongoing, then record the change by the current player.

When a player moves, the state of the game can change from ONGOING to WIN-X, WIN-O,
or TIE.

	If the game is ongoing, you must allow a player move.
	After a player moves, you determine if a game is still ongoing.

	*/

	return (
   	 <div id="App">
   	   <main>
   	     	<section>
   	     	  <div className="cell" onClick={() => {
   	     	    // run setMove(r, c) where r, c is the row and column of the cell
   	     	  }}>{board[0][0]}</div>
   	     	  <div className="cell" onClick={(e) => setMove(e.target.value)}>{board[0][1]}</div>
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
  )
}

export default App;
