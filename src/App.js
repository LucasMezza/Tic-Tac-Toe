import { useState } from 'react';
import './App.css';

import { Square } from './components/Square.js';
import { BoardModal } from './components/BoardModal.js';
import { WinnerModal } from './components/WinnerModal.js';
import { checkWinner } from './utils/board.js';
import { TURNS } from './constants.js';

function App() {
  const [board, setBoard] = useState(() => {
      const boardLocalStorage = window.localStorage.getItem('board');
      return boardLocalStorage ? JSON.parse(boardLocalStorage) : Array(9).fill(null)
  }),
  [turn, setTurn] = useState(() => {
    const turnLocalStorage = window.localStorage.getItem('turn');
    return turnLocalStorage ? turnLocalStorage : TURNS.X
  }),
 [winner, setWinner] = useState(null);

  const restartGame = () => {
   setBoard(Array(9).fill(null));
   setTurn(TURNS.X);
   setWinner(null);

    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const _board  = [...board];
    _board[index] = turn;
    setBoard(_board);

    window.localStorage.setItem('board', JSON.stringify(_board));
    window.localStorage.setItem('turn', turn);

    const isWinner = checkWinner(_board)

    if(isWinner) {
      setWinner(isWinner);
    } else if (_board.every((row) => row !== null)) {
      setWinner(false);
    }

    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
  }

  return (
    <main>
      <header>
        <h1>Tic Tac Toe</h1>
        <button onClick={restartGame}>Restart</button>
      </header>
      <section className='turns'>
        <Square isSelected={ turn === TURNS.X }>
          {TURNS.X}
        </Square>
        <Square isSelected={ turn === TURNS.O }>
          {TURNS.O}
        </Square>
      </section>

      <BoardModal board={board} updateBoard={updateBoard}/>

      <WinnerModal winner={winner} restartGame={restartGame}/>
    </main>
  );
}

export default App;
