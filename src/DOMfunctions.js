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

  contentContainer.appendChild(titleContainer);
  contentContainer.appendChild(playerOneGameboardContainer);
  contentContainer.appendChild(playerTwoGameboardContainer);
  contentContainer.appendChild(informationContainer);

  document.body.appendChild(contentContainer);
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
      square.id = `square-${i}-${j}`;
      square.classList.add('square');
      rowHolder.appendChild(square);
    }
    
    playerTwoBoardContainer.appendChild(rowHolder);
  }

  const mainPlayerTwoContainer = document.getElementById('playerTwoGameboardContainer');
  mainPlayerTwoContainer.appendChild(playerTwoBoardContainer);
}

export { firstDOM, gameboardDOM };
