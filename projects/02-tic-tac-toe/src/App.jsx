import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import Square from './components/Square'
import { TURNS } from './components/constants'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal'
import DashBoard from './components/DashBoard'

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null) // null there's not winner, false is tie

  const updateBoard = (index) => {
    // this position doesnt update if it has something
    if (board[index] || winner) return
    // update the board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // change the turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Save match
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    // check if there's a winner
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti({
        angle: 90,
        spread: 500,
        particleCount: 200
      })
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // tie
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.clear()
  }
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Resetear el juego</button>
      <DashBoard board={board} updateBoard={updateBoard} />
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
