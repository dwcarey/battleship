import './style.css';
import {
  drawHits, drawShips, firstDOM, gameboardDOM,
  playerNameForm, getComputerName, playerMovesForm,
} from './DOMfunctions';

const Gameboard = require('./gameboard');
const Player = require('./player');

let playerOne;
let playerTwo;

async function setupPlayers(playerName) {
  // Create gameboard with 5 ships FOR EACH player
  const playerOneGameboard = new Gameboard();

  const playerMoves = await playerMovesForm();
  // await get player moves function which will;
  // create DOM elements for the players empty gameboard
  // create a Vertical? checkbox
  // create a submit button which returns an array(5) structured like follows;
  //  [ [ length: Number, isVertical: Boolean, [coord1, coord2] ], next item ]
  // for loop array 5 to add ships to player gameboard
  // playerOneGameboard.addShipToGameboard(5, false, [1, 1]);

  console.log(playerMoves);

  for (let i = 0; i < playerMoves.length; i += 1) {
    const length = playerMoves[i][0];
    const isVertical = playerMoves[i][1];
    const startCoord = playerMoves[i][2];

    playerOneGameboard.addShipToGameboard(length, isVertical, startCoord);
  }

  const playerTwoGameboard = new Gameboard();
  playerTwoGameboard.generateComputerPositions(playerTwoGameboard);
  console.log(playerTwoGameboard);
  const computerName = getComputerName();

  // Create player 1
  playerOne = new Player(playerName, playerOneGameboard, false);
  // Create player 2 (computer)
  playerTwo = new Player(computerName, playerTwoGameboard, true);

  // Draw gameboards
  gameboardDOM(playerOne, playerTwo);
  drawShips(playerOne);
}

async function gameSetup() {
  // First page load, generates skeleton of website, containers, and title
  firstDOM();

  // To start the game, collect the player name
  const playerName = await playerNameForm();
  console.log('Player Name:', playerName);

  await setupPlayers(playerName);

  // Start the game loop
  gameLoop(playerOne, playerTwo);
}

// Game over function
function gameover(playerOneObject, playerTwoObject) {
  if (playerOneObject.board.allShipsSunk()) {
    return playerTwoObject;
  }
  if (playerTwoObject.board.allShipsSunk()) {
    return playerOneObject;
  }

  return null;
}

// Start game loop
async function gameLoop(playerOne, playerTwo) {
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

// Call the gameSetup function to initiate the game
gameSetup();
