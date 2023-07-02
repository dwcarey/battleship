class Gameboard {
  constructor() {
    this.board = this.createGameboard();
  }

  // returns an EMPTY 10x10 array, 0, 0 is top left
  createGameboard() {
    this.board = new Array(10);
    for (let i = 0; i < 10; i += 1) {
      this.board.push(new Array(10));
    }
    return this.board;
  }
}

module.exports = Gameboard;
