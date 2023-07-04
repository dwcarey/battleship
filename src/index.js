import './style.css';
import {
  drawHits, drawShips, firstDOM, gameboardDOM,
} from './DOMfunctions';

const Gameboard = require('./gameboard');
const Player = require('./player');

// first page load, generates skeleton of website, containers and title
firstDOM();
// game setup
// create gameboard with 5 ships FOR EACH player
const playerOneGameboard = new Gameboard();
playerOneGameboard.addShipToGameboard(5, false, [1, 1]);
playerOneGameboard.addShipToGameboard(3, false, [7, 1]);
playerOneGameboard.addShipToGameboard(4, true, [1, 7]);
playerOneGameboard.addShipToGameboard(3, true, [7, 8]);
playerOneGameboard.addShipToGameboard(2, true, [4, 2]);

const playerTwoGameboard = new Gameboard();
playerTwoGameboard.addShipToGameboard(5, false, [1, 1]);
playerTwoGameboard.addShipToGameboard(3, false, [7, 4]);
playerTwoGameboard.addShipToGameboard(4, true, [1, 7]);
playerTwoGameboard.addShipToGameboard(3, true, [7, 8]);
playerTwoGameboard.addShipToGameboard(2, true, [4, 2]);

// create player 1
const playerOne = new Player('Player One', playerOneGameboard, false);
// create player 2 (computer)
const playerTwo = new Player('Player Two', playerTwoGameboard, true);

// draw gameboards

gameboardDOM(playerOne, playerTwo);
drawShips(playerOne);

// game over function
function gameover(playerOneObject, playerTwoObject) {
  if (playerOneObject.board.allShipsSunk()) {
    return playerTwo;
  }
  if (playerTwoObject.board.allShipsSunk()) {
    return playerOne;
  }

  return null;
}
// start game loop
// while function that checks for both allshipssunk is null

async function gameLoop() {
  while (gameover(playerOne, playerTwo) === null) {
    // Player One's turn
    await playerTurn(playerOne, playerTwo);

    if (gameover(playerOne, playerTwo) !== null) {
      break; // Exit the loop if the game is over
    }

    // Player Two's turn
    await playerTurn(playerTwo, playerOne);
  }

  // Game over
  if (gameover(playerOne, playerTwo) === playerOne) {
    alert('Player One Wins');
  } else if (gameover(playerOne, playerTwo) === playerTwo) {
    alert('Player Two Wins');
  }
}

async function playerTurn(currentPlayer, opponent) {
  const coords = await currentPlayer.getTurnCoordinates(opponent);
  opponent.board.receiveHit(coords);
  drawHits(playerOne, playerTwo);

  if (!currentPlayer.isComputerPlayer) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

}

gameLoop(); // Start the game loop

