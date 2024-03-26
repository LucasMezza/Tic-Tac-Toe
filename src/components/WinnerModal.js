import { Square } from "./Square";

export const WinnerModal = ({winner, restartGame}) => {
  if(winner === null) return null;

  const winnerText = winner === false ? 'Empate' : 'Gano:'

  return (
    <section className='result'>
      <div>
        <header>
          {winnerText}
        </header>
        <div>
          {winner && <Square>{winner}</Square>}
        </div>
        <footer>
          <button onClick={restartGame}>Restart</button>
        </footer>
      </div>
    </section>
  )
}