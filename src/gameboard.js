const Ship = require('./ship');

class Gameboard {
  constructor() {
    this.board = this.createGameboard();
    this.shipsOnBoard = [];
  }

  // returns an EMPTY 10x10 array, 0, 0 is top left
  createGameboard() {
    const board = new Array(10);
    for (let i = 0; i < 10; i += 1) {
      board[i] = new Array(10);
    }
    return board;
  }

  addShipToGameboard(length, isVertical, startIndex) {
    const newShip = new Ship(length);

    const indexZero = parseInt(startIndex[0], 10);
    const indexOne = parseInt(startIndex[1], 10);

    if (isVertical === true) {
      for (let i = indexZero; i < length; i += 1) {
        this.board[i][indexOne] = newShip;
      }
    } else {
      for (let i = indexOne; i < length; i += 1) {
        this.board[indexZero][i] = newShip;
      }
    }
  }
}

module.exports = Gameboard;
