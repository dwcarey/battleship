import './style.css';

const Gameboard = require('../src/gameboard');

const testBoard = new Gameboard();
testBoard.addShipToGameboard(4, true, [0, 0]);
testBoard.addShipToGameboard(4, false, [1, 1]);
testBoard.addShipToGameboard(2, true, [4, 4]);
console.log(testBoard.board);

const testBoard1 = new Gameboard();
testBoard1.addShipToGameboard(4, false, [0, 0]);
console.log(testBoard1.board);