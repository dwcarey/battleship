class Player {
  constructor(playerName, board, isComputerPlayer) {
    this.playerName = playerName;
    this.board = board;
    this.isComputerPlayer = isComputerPlayer;
  }

  getTurnCoordinates() {
    if (this.isComputerPlayer) {
      const a = Math.floor(Math.random() * 10);
      const b = Math.floor(Math.random() * 10);
      return [a, b];
    }
else {
    const promptResponse = prompt('enter coordinates i.e. 0-0 or 6-4');
    const a = parseInt(promptResponse.split('-')[0], 10);
    const b = parseInt(promptResponse.split('-')[1], 10);
    return [a, b];
  }
}
}

module.exports = Player;
