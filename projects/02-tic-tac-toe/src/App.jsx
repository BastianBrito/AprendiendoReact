import { useState } from 'react'
import { Square } from './components/Square'
import { TURN } from './logic/constants.js'
import { checkWinnerFrom } from './board.js'
import confetti from 'canvas-confetti'
import './App.css'
import { WinnerModal } from './components/WinnerModal.jsx'






function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURN.X);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURN.X);
    setWinner(null);
  }
 

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    setTurn(newTurn)
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti(); setWinner(newWinner)
    } else if (newBoard.every((square) => square !== null)) {
      setWinner(false)
    }
  }


  return (
    <main className="board">
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>Resetear el juego</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURN.X}>{TURN.X}</Square>
        <Square isSelected={turn === TURN.O}>{TURN.O}</Square>
      </section>

     <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>

  )
}

export default App
