const Gameboard = require('../src/gameboard');
const Ship = require('../src/ship');

test('add vertical ship of length to board', () => {
  const testBoard = new Gameboard();
  testBoard.addShipToGameboard(4, true, [0, 0]);
  console.log(testBoard.board);
  expect(testBoard.board[0][0]).toBeInstanceOf(Ship);
  expect(testBoard.board[1][0]).toBeInstanceOf(Ship);
  expect(testBoard.board[2][0]).toBeInstanceOf(Ship);
  expect(testBoard.board[3][0]).toBeInstanceOf(Ship);
});

test('add NOT vertical ship of length to board', () => {
  const testBoard = new Gameboard();
  testBoard.addShipToGameboard(4, false, [0, 0]);
  console.log(testBoard.board);
  expect(testBoard.board[0][0]).toBeInstanceOf(Ship);
  expect(testBoard.board[0][1]).toBeInstanceOf(Ship);
  expect(testBoard.board[0][2]).toBeInstanceOf(Ship);
  expect(testBoard.board[0][3]).toBeInstanceOf(Ship);
});