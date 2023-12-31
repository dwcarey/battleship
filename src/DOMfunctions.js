import { doc } from 'prettier';

const Ship = require('./ship');
const Gameboard = require('./gameboard');

function firstDOM() {
  const contentContainer = document.createElement('div');
  contentContainer.id = 'contentContainer';
  const titleContainer = document.createElement('div');
  titleContainer.id = 'titleContainer';

  const titleText = document.createElement('h1');
  titleText.textContent = 'BATTLESHIP';
  titleContainer.appendChild(titleText);
  const playerOneGameboardContainer = document.createElement('div');
  playerOneGameboardContainer.id = 'playerOneGameboardContainer';
  playerOneGameboardContainer.classList.add('gameboardContainer');
  const playerTwoGameboardContainer = document.createElement('div');
  playerTwoGameboardContainer.id = 'playerTwoGameboardContainer';
  playerTwoGameboardContainer.classList.add('gameboardContainer');

  const informationContainer = document.createElement('div');
  informationContainer.id = 'informationContainer';

  const playerOneTurnText = document.createElement('h4');
  const playerTwoTurnText = document.createElement('h4');

  playerOneTurnText.id = 'playerOneTurnText';
  playerTwoTurnText.id = 'playerTwoTurnText';

  informationContainer.appendChild(playerOneTurnText);
  informationContainer.appendChild(playerTwoTurnText);

  contentContainer.appendChild(titleContainer);
  contentContainer.appendChild(playerOneGameboardContainer);
  contentContainer.appendChild(playerTwoGameboardContainer);
  contentContainer.appendChild(informationContainer);

  document.body.appendChild(contentContainer);
}

function gameboardDOM(playerOne, playerTwo) {
  const playerOneNameText = document.createElement('h2');
  playerOneNameText.id = 'playerOneNameText';
  playerOneNameText.textContent = playerOne.playerName;
  const playerTwoNameText = document.createElement('h2');
  playerTwoNameText.id = 'playerTwoNameText';
  playerTwoNameText.textContent = playerTwo.playerName;

  const informationContainer = document.getElementById('informationContainer');
  const VStext = document.createElement('h2');
  VStext.id = 'VSText';
  VStext.textContent = 'VS.';
  informationContainer.appendChild(playerOneNameText);
  informationContainer.appendChild(VStext);
  informationContainer.appendChild(playerTwoNameText);

  const playerOneBoardContainer = document.createElement('div');
  const playerTwoBoardContainer = document.createElement('div');

  for (let i = 0; i < playerOne.board.board.length; i += 1) {
    const rowHolder = document.createElement('div');
    rowHolder.id = `rowHolder-${i}`;
    rowHolder.classList.add('rowHolder');

    for (let j = 0; j < playerOne.board.board[i].length; j += 1) {
      const square = document.createElement('div');
      square.id = `square-${i}-${j}`;
      square.classList.add('square');
      rowHolder.appendChild(square);
    }

    playerOneBoardContainer.appendChild(rowHolder);
  }

  const mainPlayerOneContainer = document.getElementById('playerOneGameboardContainer');
  mainPlayerOneContainer.appendChild(playerOneBoardContainer);

  for (let i = 0; i < playerTwo.board.board.length; i += 1) {
    const rowHolder = document.createElement('div');
    rowHolder.id = `rowHolder-${i}`;
    rowHolder.classList.add('rowHolder');

    for (let j = 0; j < playerTwo.board.board[i].length; j += 1) {
      const square = document.createElement('div');
      square.id = `2square-${i}-${j}`;
      square.classList.add('square');
      rowHolder.appendChild(square);
    }

    playerTwoBoardContainer.appendChild(rowHolder);
  }

  const mainPlayerTwoContainer = document.getElementById('playerTwoGameboardContainer');
  mainPlayerTwoContainer.appendChild(playerTwoBoardContainer);
}

function drawShips(board) {
  for (let i = 0; i < board.board.length; i += 1) {
    for (let j = 0; j < board.board[i].length; j += 1) {
      const currentSquare = board.board[i][j];
      const currentSquareDOM = document.getElementById(`square-${i}-${j}`);
      if (currentSquare instanceof Ship) {
        currentSquareDOM.classList.add('shipSquare');
      }
    }
  }
}

function drawHits(playerOne, playerTwo) {
  for (let i = 0; i < playerOne.board.board.length; i += 1) {
    for (let j = 0; j < playerOne.board.board[i].length; j += 1) {
      const currentSquarePlayerOne = playerOne.board.board[i][j];
      const currentSquarePlayerTwo = playerTwo.board.board[i][j];
      const currentSquarePlayerOneDOM = document.getElementById(`square-${i}-${j}`);
      const currentSquarePlayerTwoDOM = document.getElementById(`2square-${i}-${j}`);

      // Player One
      if (playerOne.board.shotsReceived.some((coords) => coords[0] === i && coords[1] === j)) {
        if (currentSquarePlayerOne instanceof Ship) {
          currentSquarePlayerOneDOM.classList.add('hitShipSquare');
        } else {
          currentSquarePlayerOneDOM.classList.add('missedSquare');
        }
      }

      // Player Two
      if (playerTwo.board.shotsReceived.some((coords) => coords[0] === i && coords[1] === j)) {
        if (currentSquarePlayerTwo instanceof Ship) {
          currentSquarePlayerTwoDOM.classList.add('hitShipSquare');
        } else {
          currentSquarePlayerTwoDOM.classList.add('missedSquare');
        }
      }
    }
  }
}
function playerNameForm() {
  return new Promise((resolve, reject) => {
    // Create the form container
    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');

    // Create the backing overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Create the form element
    const form = document.createElement('form');
    form.id = 'nameForm';

    //create welcome header and paragraph text
    const headerText = document.createElement('h1');
    headerText.textContent = 'Welcome to BATTLESHIP!';
    const paraText = document.createElement('p');
    paraText.textContent = 'Enter your name below and click Submit to begin';
    paraText.id = 'paraText';

    formContainer.appendChild(headerText);
    formContainer.appendChild(paraText);

    // Create the text input for the player name
    const playerNameInput = document.createElement('input');
    playerNameInput.type = 'text';
    playerNameInput.name = 'playerName';
    playerNameInput.placeholder = 'Enter your name';
    playerNameInput.maxLength = 30;
    playerNameInput.id = 'playerNameInput';
    form.appendChild(playerNameInput);

    // Create the submit button
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    submitButton.id = 'nameSubmit';
    form.appendChild(submitButton);

    // Add the form to the form container
    formContainer.appendChild(form);

    // Add the form container and overlay to the document body
    document.body.appendChild(formContainer);
    document.body.appendChild(overlay);

    // Handle form submission
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (playerNameInput.value !== '') {

      const playerName = playerNameInput.value;

      // Remove the form and overlay from the document
      formContainer.remove();
      overlay.remove();

      resolve(playerName);
      }
      else {
        //
      }
    });
  });
}

function getComputerName() {
  let computerName;

  switch (Math.floor(Math.random() * 10)) {
    case 0:
      computerName = 'Computerina';
      break;
    case 1:
      computerName = 'Moustopher';
      break;
    case 2:
      computerName = 'Deskelle';
      break;
    case 3:
      computerName = 'Monitorette';
      break;
    case 4:
      computerName = 'Keyboardantha';
      break;
    case 5:
      computerName = 'Codella';
      break;
    case 6:
      computerName = 'Netalie';
      break;
    case 7:
      computerName = 'Browsedith';
      break;
    case 8:
      computerName = 'Datathony';
      break;
    case 9:
      computerName = 'Aaram';
      break;
    default:
      computerName = 'Unknown';
  }

  return computerName;
}

// Declare and initialise the isVertical variable
let isVertical = false;

// Create the ship display element
const shipDisplay = document.createElement('div');
shipDisplay.classList.add('shipDisplay');

// Helper function to update the ship display class
function updateShipDisplay(shipSize) {
  shipDisplay.className = `shipDisplay ship-${shipSize} ${isVertical ? 'vertical' : 'horizontal'}`;
}

const shipText = document.createElement('p');
shipText.classList.add('shipText');

function updateShipText(shipName, shipLength) {
  shipText.textContent = `${shipName}, ${shipLength} length`;
}

// Create the playerMovesForm function
function playerMovesForm(gameboard) {
  return new Promise((resolve, reject) => {
    // Create the form container
    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');

    // Create the backing overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Create the form element
    const form = document.createElement('form');

    // Add the form to the form container
    formContainer.appendChild(form);

    // Add the form container and overlay to the document body
    document.body.appendChild(formContainer);
    document.body.appendChild(overlay);

    // Generate DOM elements for gameboard
    const playerOneBoardContainer = document.createElement('div');
    playerOneBoardContainer.classList.add('formBoardHolder');

    // Helper function to create square elements
    function createSquare(row, column) {
      const square = document.createElement('div');
      square.id = `square-${row}-${column}`;
      square.classList.add('square');

      // add event listener for hover

      square.addEventListener('mouseover', () => {
        const coordinates = [row, column];
        const shipSize = gameboard.shipsOnBoard.length
        < 5 ? [5, 4, 3, 3, 2][gameboard.shipsOnBoard.length] : null;

        if (gameboard.isValidMove(shipSize, isVertical, coordinates)) {
          square.classList.add('valid');

          for (let i = shipSize - 1; i > 0; i -= 1) {
            if (isVertical) {
              const additionalSquare = document
                .querySelector(`#square-${coordinates[0] + i}-${coordinates[1]}`);
              additionalSquare.classList.add('valid');
            } else {
              const additionalSquare = document
                .querySelector(`#square-${coordinates[0]}-${coordinates[1] + i}`);
              additionalSquare.classList.add('valid');
            }
          }
        } else {
          square.classList.add('invalid');
       }
      });

      square.addEventListener('mouseout', () => {
        const shipSize = gameboard.shipsOnBoard.length
        < 5 ? [5, 4, 3, 3, 2][gameboard.shipsOnBoard.length] : null;
        const coordinates = [row, column];
        square.classList.remove('invalid');
        square.classList.remove('valid');

        for (let i = shipSize - 1; i > 0; i -= 1) {
          if (isVertical) {
            const additionalSquare = document
              .querySelector(`#square-${coordinates[0] + i}-${coordinates[1]}`);
              if (additionalSquare !== null) {
                additionalSquare.classList.remove('valid');
                additionalSquare.classList.remove('invalid');
                  }
          } else {
            const additionalSquare = document
              .querySelector(`#square-${coordinates[0]}-${coordinates[1] + i}`);

              if (additionalSquare !== null) {
            additionalSquare.classList.remove('valid');
            additionalSquare.classList.remove('invalid');
              }
          }
        }

      });

      // Add event listener for ship placement
      square.addEventListener('click', () => {
        const shipSize = gameboard.shipsOnBoard.length < 5 ? [5, 4, 3, 3, 2][gameboard.shipsOnBoard.length] : null;
        const coordinates = [row, column];

        if (shipSize && gameboard.isValidMove(shipSize, isVertical, coordinates)) {
          gameboard.addShipToGameboard(shipSize, isVertical, coordinates);
          drawShips(gameboard);

          // Update the ship display to NEXT placed ship
          updateShipDisplay([5, 4, 3, 3, 2][gameboard.shipsOnBoard.length]);

          // update ship text
          updateShipText(
            ['Carrier', 'Battleship', 'Submarine',
              'Cruiser', 'Destroyer'][gameboard.shipsOnBoard.length],
            [5, 4, 3, 3, 2][gameboard.shipsOnBoard.length],
          );

            // Check if all ships have been placed
          if (gameboard.shipsOnBoard.length === 5) {
            // remove UI
            formContainer.remove();
            overlay.remove();

            // Resolve the promise with the updated gameboard
            resolve(gameboard);
          }
        }
      });

      return square;
    }

    for (let i = 0; i < gameboard.board.length; i += 1) {
      const rowHolder = document.createElement('div');
      rowHolder.id = `rowHolder-${i}`;
      rowHolder.classList.add('rowHolder');

      for (let j = 0; j < gameboard.board[i].length; j += 1) {
        const square = createSquare(i, j);
        rowHolder.appendChild(square);
      }

      playerOneBoardContainer.appendChild(rowHolder);
    }

    // Create the "Is Vertical?" button
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Rotate Ship';
    toggleButton.classList.add('verticalButton');

    toggleButton.addEventListener('click', () => {
      isVertical = !isVertical; // Toggle the boolean value
      updateShipDisplay([5, 4, 3, 3, 2][gameboard.shipsOnBoard.length]);
    });

    // Append the ship display to the form container
    formContainer.appendChild(shipDisplay);
    updateShipDisplay(5);
    // update ship text
    updateShipText(
      ['Carrier', 'Battleship', 'Submarine',
        'Cruiser', 'Destroyer'][gameboard.shipsOnBoard.length],
      [5, 4, 3, 3, 2][gameboard.shipsOnBoard.length],
    );

    //create a text container
    const formTextContainer = document.createElement('div');
    formTextContainer.id = 'formTextContainer';
    
    const formHeaderText = document.createElement('h3');
    formHeaderText.textContent = 'Place your ships!';

    formTextContainer.appendChild(formHeaderText);
    formTextContainer.appendChild(shipText);


    // Append the toggle button to the form container
    formContainer.appendChild(toggleButton);
    formContainer.appendChild(formTextContainer);

    // Append the playerOneBoardContainer to the form container
    formContainer.appendChild(playerOneBoardContainer);
  });


}
  function drawTurnText(player, opponent, coords, turnText) {
    console.log(turnText);

    const computerText = document.querySelector('#playerTwoTurnText');
    const playerText = document.querySelector('#playerOneTurnText');

    if (player.isComputerPlayer) {
      computerText.replaceChildren();
      computerText.textContent = `Last Turn: ${player.playerName} shot ${coords} and ${turnText}`;
    }

    if (!player.isComputerPlayer) {
      playerText.replaceChildren();
      playerText.textContent = `Last Turn: ${player.playerName} shot ${coords} and ${turnText}`;
    }

  };

export {
  firstDOM, gameboardDOM, drawShips, drawHits,
  playerNameForm, getComputerName, playerMovesForm,
  drawTurnText,
};
