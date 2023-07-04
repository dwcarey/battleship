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
playerOneGameboard.receiveHit([1, 1]);
playerOneGameboard.receiveHit([2, 2]);
playerOneGameboard.receiveHit([3, 3]);
playerOneGameboard.receiveHit([4, 4]);
playerOneGameboard.receiveHit([5, 5]);
playerOneGameboard.receiveHit([6, 6]);
playerOneGameboard.receiveHit([7, 7]);

playerTwoGameboard.receiveHit([1, 1]);
playerTwoGameboard.receiveHit([2, 2]);
playerTwoGameboard.receiveHit([3, 3]);
playerTwoGameboard.receiveHit([4, 4]);
playerTwoGameboard.receiveHit([5, 5]);
playerTwoGameboard.receiveHit([6, 6]);
playerTwoGameboard.receiveHit([7, 7]);
drawHits(playerOne, playerTwo);

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

function gameLoop() {
  if (gameover(playerOne, playerTwo) === null) {
    playerTwo.board.receiveHit(playerOne.getTurnCoordinates());
    console.log(playerTwo.board);
    drawHits(playerOne, playerTwo);
    playerOne.board.receiveHit(playerTwo.getTurnCoordinates());
    console.log(playerOne.board);
    drawHits(playerOne, playerTwo);

    requestAnimationFrame(gameLoop); // Schedule the next iteration
  } else {
    // Game over
    if (gameover(playerOne, playerTwo) === playerOne) {
      alert('Player One Wins');
    } else if (gameover(playerOne, playerTwo) === playerTwo) {
      alert('Player Two Wins');
    }
  }
}

requestAnimationFrame(gameLoop); // Start the game loop