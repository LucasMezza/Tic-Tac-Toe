import { WINNER_COMBOS } from '../constants.js';

export const checkWinner = (board) => {
  for(const row of WINNER_COMBOS) {
    const [a,b,c] = row;

    if(board[a] && 
        board[a] === board[b] && 
        board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}