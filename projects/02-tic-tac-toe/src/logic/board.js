import { WINNER_COMBOS } from "../components/constants";
export const checkWinnerFrom = (boardToCheck) => {
    //check all the possibles winner combination to know if x or u won
  for (let combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) return boardToCheck[a];
  }
  return null;
};

export const checkEndGame = (newBoard) => {
    /*check if there're not empty cells and if the game was a draw*/
  return newBoard.every((cell) => cell !== null);
};
