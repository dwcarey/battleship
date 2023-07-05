const Ship = require('./ship');

function firstDOM() {
  const contentContainer = document.createElement('div');
  contentContainer.id = 'contentContainer';
  const titleContainer = document.createElement('div');
  titleContainer.id = 'titleContainer';

  const dragDropContainer = document.createElement('div');
  dragDropContainer.id = 'dragDropContainer';

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

  contentContainer.appendChild(titleContainer);
  contentContainer.appendChild(dragDropContainer);
  contentContainer.appendChild(playerOneGameboardContainer);
  contentContainer.appendChild(playerTwoGameboardContainer);
  contentContainer.appendChild(informationContainer);

  document.body.appendChild(contentContainer);


  const verticalCheckbox = document.createElement('input');
  verticalCheckbox.setAttribute('type', 'checkbox');
  verticalCheckbox.id = 'verticalCheckbox';

  const verticalText = document.createElement('h3');
  verticalText.textContent = 'Vertical?';

  const confirmButton = document.createElement('button');
  confirmButton.type = 'button';
  confirmButton.id = 'confirmButton';
  confirmButton.textContent = 'Confirm';

  const ship5 = document.createElement('div');
  ship5.id = 'ship5';
  ship5.classList.add('dragShip');
  ship5.setAttribute('draggable', 'true');

  const ship4 = document.createElement('div');
  ship4.id = 'ship4';
  ship4.classList.add('dragShip');
  ship4.setAttribute('draggable', 'true');

  const ship3x1 = document.createElement('div');
  ship3x1.id = 'ship3x1';
  ship3x1.classList.add('dragShip');
  ship3x1.setAttribute('draggable', 'true');

  const ship3x2 = document.createElement('div');
  ship3x2.id = 'ship3x2';
  ship3x2.classList.add('dragShip');
  ship3x2.setAttribute('draggable', 'true');

  const ship2 = document.createElement('div');
  ship2.id = 'ship2';
  ship2.classList.add('dragShip');
  ship2.setAttribute('draggable', 'true');

  dragDropContainer.appendChild(verticalCheckbox);
  dragDropContainer.appendChild(confirmButton);
  dragDropContainer.appendChild(verticalText);
  dragDropContainer.appendChild(ship2);
  dragDropContainer.appendChild(ship3x1);
  dragDropContainer.appendChild(ship3x2);
  dragDropContainer.appendChild(ship4);
  dragDropContainer.appendChild(ship5);
}

function gameboardDOM(playerOne, playerTwo) {
  const playerOneNameText = document.createElement('h2');
  playerOneNameText.textContent = playerOne.playerName;
  const playerTwoNameText = document.createElement('h2');
  playerTwoNameText.textContent = playerTwo.playerName;

  const informationContainer = document.getElementById('informationContainer');
  const VStext = document.createElement('h2');
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

function drawShips(playerOne) {
  for (let i = 0; i < playerOne.board.board.length; i += 1) {
    for (let j = 0; j < playerOne.board.board[i].length; j += 1) {
      const currentSquare = playerOne.board.board[i][j];
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

function dragDropDOM() {
  // add player ships UI box - dragDropContainer
const draggableShips = document.querySelectorAll('.dragShip');

function dragStart(e) {
 e.dataTransfer.setData('text/plain', e.target.id);
 setTimeout(() => {
   e.target.classList.add('hide');
 }, 0);
}

draggableShips.forEach((ship) => {
 ship.addEventListener('dragstart', dragStart);
});

const squares = document.querySelectorAll('.square');

squares.forEach(((square) => {
 square.addEventListener('dragenter', dragEnter);
 square.addEventListener('dragover', dragOver);
 square.addEventListener('dragleave', dragLeave);
 square.addEventListener('drop', drop);
}));

function dragEnter(e) {
 e.preventDefault();
 e.target.classList.add('drag-over');
}

function dragOver(e) {
 e.preventDefault();
 e.target.classList.add('drag-over');
}

function dragLeave(e) {
 e.target.classList.remove('drag-over');
}

function drop(e) {
 e.target.classList.remove('drag-over');

 // get the draggable element
 const id = e.dataTransfer.getData('text/plain');
 const draggable = document.getElementById(id);

 // add it to the drop target
 console.log(draggable);
 e.target.appendChild(draggable);

 // display the draggable element
 draggable.classList.remove('hide');
}
}

export {
  firstDOM, gameboardDOM, drawShips, drawHits, dragDropDOM,
};
