class Player {
  constructor(playerName, board, isComputerPlayer) {
    this.playerName = playerName;
    this.board = board;
    this.isComputerPlayer = isComputerPlayer;
  }

  getTurnCoordinates(opponent) {
    if (this.isComputerPlayer) {
      const { shotsReceived } = opponent.board; // Get the opponent's shots received array
      const availableCoordinates = [];

      // Iterate over all possible coordinates and check if they are already in the shots received array
      for (let a = 0; a < 10; a += 1) {
        for (let b = 0; b < 10; b += 1) {
          const coordinate = [a, b];
          if (!shotsReceived.some(([x, y]) => x === a && y === b)) {
            availableCoordinates.push(coordinate);
          }
        }
      }

      if (availableCoordinates.length === 0) {
        throw new Error('No available coordinates'); // Handle the case where all coordinates have been tried
      }

      const randomIndex = Math.floor(Math.random() * availableCoordinates.length);
      const [a, b] = availableCoordinates[randomIndex];
      return Promise.resolve([a, b]); // Return a resolved promise with the random available coordinates
    }

    return new Promise((resolve) => {
      const targetGameboard = document.getElementById('playerTwoGameboardContainer');

      function handleClick(e) {
        if (e.target.classList.contains('square')) {
          const a = parseInt(e.target.id.split('-')[1], 10);
          const b = parseInt(e.target.id.split('-')[2], 10);

          const { shotsReceived } = opponent.board;
          const selectedCoordinate = [a, b];

          if (shotsReceived.some(([x, y]) => x === a && y === b)) {
          } else {
            targetGameboard.removeEventListener('click', handleClick);
            resolve(selectedCoordinate);
          }
        }
      }

      targetGameboard.addEventListener('click', handleClick);
    });
  }
}

module.exports = Player;
