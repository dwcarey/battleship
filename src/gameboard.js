const Ship = require('./ship');

class Gameboard {
  constructor() {
    this.board = this.createGameboard();
    this.shipsOnBoard = [];
    this.shotsReceived = [];
  }

  // returns an EMPTY 10x10 array, 0, 0 is top left
  createGameboard() {
    const board = new Array(10);
    for (let i = 0; i < 10; i += 1) {
      board[i] = new Array(10);
    }
    return board;
  }

  isValidMove(length, isVertical, startIndex) {
    const positionArray = [];

    // ship is inside the gameboard
    if (isVertical === true) {
      if ((length + startIndex[0]) >= 10) {
        return false;
      }

      for (let i = 0; i < length; i += 1) {
        positionArray.push([
          startIndex[0] + i,
          startIndex[1],
        ]);
      }
    }

    if (isVertical === false) {
      if ((length + startIndex[1]) >= 10) {
        return false;
      }

      for (let i = 0; i < length; i += 1) {
        positionArray.push([
          startIndex[0],
          startIndex[1] + i,
        ]);
      }
    }

    // ship is not directly next to another ship
    const affectedSquaresArray = [];

    for (let i = 0; i < positionArray.length; i += 1) {
      // for each add the surrounding squares and self
      // to affected squares array
      // then check this.board for Ship objects in those positions

      affectedSquaresArray.push([
        positionArray[i][0] - 1,
        positionArray[i][1] - 1,
      ]);

      affectedSquaresArray.push([
        positionArray[i][0] - 1,
        positionArray[i][1],
      ]);

      affectedSquaresArray.push([
        positionArray[i][0] - 1,
        positionArray[i][1] + 1,
      ]);

      affectedSquaresArray.push([
        positionArray[i][0],
        positionArray[i][1] - 1,
      ]);

      affectedSquaresArray.push([
        positionArray[i][0],
        positionArray[i][1],
      ]);

      affectedSquaresArray.push([
        positionArray[i][0],
        positionArray[i][1] + 1,
      ]);

      affectedSquaresArray.push([
        positionArray[i][0] + 1,
        positionArray[i][1] - 1,
      ]);

      affectedSquaresArray.push([
        positionArray[i][0] + 1,
        positionArray[i][1],
      ]);

      affectedSquaresArray.push([
        positionArray[i][0] + 1,
        positionArray[i][1] + 1,
      ]);
    }

    for (let j = 0; j < affectedSquaresArray.length; j += 1) {
      const x = affectedSquaresArray[j][0];
      const y = affectedSquaresArray[j][1];

      if (x >= 0 && x <= 9 && y >= 0 && y <= 9) {
        if (this.board[x].includes(Ship, y)) {
          return false;
        }
      }
    }

    return true;
  }

  addShipToGameboard(length, isVertical, startIndex) {
    if (this.isValidMove(length, isVertical, startIndex)) {
      const newShip = new Ship(length);
      this.shipsOnBoard.push(newShip);

      const indexZero = parseInt(startIndex[0], 10);
      const indexOne = parseInt(startIndex[1], 10);

      if (isVertical === true) {
        for (let i = indexZero; i < length + indexZero; i += 1) {
          this.board[i][indexOne] = newShip;
        }
      } else {
        for (let i = indexOne; i < length + indexOne; i += 1) {
          this.board[indexZero][i] = newShip;
        }
      }
    } return 'invalid move';
  }

  receiveHit(hitLocation) {
    const x = hitLocation[0];
    const y = hitLocation[1];
    for (let i = 0; i < this.shotsReceived.length; i += 1) {
    if (x === this.shotsReceived[i][0] && y === this.shotsReceived[i][1]) {
      return 'invalid shot';
    }
  }
    this.shotsReceived.push(hitLocation);
  }
  //recevie attack function
  //takes coordinates
  //hitsRecevied includes? (has been hit before)
  //add to hitsReceived
  //if Ship on square;
    //Ship.hit()
    //ship isSunk?
    //return 'hit ship'
      //return 'sunk ship'

    //else
    //return 'shot missed'






    //function to find all ships (this should already exist, shipsonboard array)
    //function to check sunk status of all ships for end game
}

module.exports = Gameboard;
