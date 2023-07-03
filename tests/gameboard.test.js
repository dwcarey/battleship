const Gameboard = require('../src/gameboard');
const Ship = require('../src/ship');

test('add vertical ship of length to board', () => {
  const testBoard = new Gameboard();
  testBoard.addShipToGameboard(4, true, [0, 0]);
  expect(testBoard.board[0][0]).toBeInstanceOf(Ship);
  expect(testBoard.board[1][0]).toBeInstanceOf(Ship);
  expect(testBoard.board[2][0]).toBeInstanceOf(Ship);
  expect(testBoard.board[3][0]).toBeInstanceOf(Ship);

  testBoard.addShipToGameboard(1, true, [9, 0]);

  expect(testBoard.board[9][0]).toBeInstanceOf(Ship);
});

test('add NOT vertical ship of length to board', () => {
  const testBoard = new Gameboard();
  testBoard.addShipToGameboard(4, false, [0, 0]);
  expect(testBoard.board[0][0]).toBeInstanceOf(Ship);
  expect(testBoard.board[0][1]).toBeInstanceOf(Ship);
  expect(testBoard.board[0][2]).toBeInstanceOf(Ship);
  expect(testBoard.board[0][3]).toBeInstanceOf(Ship);
  //ADDED TEST FOR SHIP THAT INCLUDES INDEX 9
  testBoard.addShipToGameboard(4, false, [0, 6]);
  expect(testBoard.board[0][6]).toBeInstanceOf(Ship);
  expect(testBoard.board[0][7]).toBeInstanceOf(Ship);
  expect(testBoard.board[0][8]).toBeInstanceOf(Ship);
  expect(testBoard.board[0][9]).toBeInstanceOf(Ship);

});

test('ship is not entirely within gameboard returns invalid move', () => {
  const testBoard = new Gameboard();
  expect(testBoard.addShipToGameboard(4, true, [7, 0])).toBe('invalid move');
  expect(testBoard.addShipToGameboard(4, false, [7, 7])).toBe('invalid move');
});

test('otherwise valid move within 1 square of another ship returns invalid move', () => {
  const testBoard = new Gameboard();
  testBoard.addShipToGameboard(4, false, [2, 2]);
  expect(testBoard.addShipToGameboard(4, true, [1, 6])).toBe('invalid move');
  expect(testBoard.addShipToGameboard(4, false, [3, 0])).toBe('invalid move');
});

test('make valid move near other ship (> 1 square away)', () => {
  const testBoard = new Gameboard();
  testBoard.addShipToGameboard(4, false, [2, 2]);
  testBoard.addShipToGameboard(3, true, [1, 7]);
  testBoard.addShipToGameboard(4, false, [4, 0]);

  expect(testBoard.board[1][7]).toBeInstanceOf(Ship);
  expect(testBoard.board[2][7]).toBeInstanceOf(Ship);
  expect(testBoard.board[3][7]).toBeInstanceOf(Ship);

  expect(testBoard.board[4][0]).toBeInstanceOf(Ship);
  expect(testBoard.board[4][1]).toBeInstanceOf(Ship);
  expect(testBoard.board[4][2]).toBeInstanceOf(Ship);
  expect(testBoard.board[4][3]).toBeInstanceOf(Ship);

});

test('invalid shot if shot already in shotsRecevied array', () => {
  const testBoard = new Gameboard();
  testBoard.receiveHit([0, 0]);
  expect(testBoard.receiveHit([0, 0])).toBe('invalid shot');
});

test('invalid shot if the shot is not on the game board', () => {
  const testBoard = new Gameboard();
  expect(testBoard.receiveHit([-1, 0])).toBe('invalid shot');
  expect(testBoard.receiveHit([2, 120])).toBe('invalid shot');
  expect(testBoard.receiveHit([45, 2])).toBe('invalid shot');
  expect(testBoard.receiveHit([10, 2])).toBe('invalid shot');

});

test('shot is valid but missed', () => {
  const testBoard = new Gameboard();
  expect(testBoard.receiveHit([0, 0])).toBe('shot missed');
  expect(testBoard.receiveHit([2, 0])).toBe('shot missed');
  expect(testBoard.receiveHit([5, 5])).toBe('shot missed');
  expect(testBoard.receiveHit([6, 2])).toBe('shot missed');
});


test('shot is valid and hits, does not sink ship', () => {
  const testBoard = new Gameboard();
  testBoard.addShipToGameboard(4, false, [2, 2]);
  expect(testBoard.receiveHit([2, 2])).toBe('hit ship');
});

test('shot is valid and hits, sinking ship', () => {
  const testBoard = new Gameboard();
  testBoard.addShipToGameboard(4, false, [2, 2]);
  testBoard.receiveHit([2, 2]);
  testBoard.receiveHit([2, 3]);
  testBoard.receiveHit([2, 4]);
  expect(testBoard.receiveHit([2, 5])).toBe('sunk ship');
});


test('check that ships can be added to board, sunk and then gameboard can report all ships sunk', () => {
  const testBoard = new Gameboard();
  testBoard.addShipToGameboard(4, false, [2, 2]);
  testBoard.receiveHit([2, 2]);
  testBoard.receiveHit([2, 3]);
  testBoard.receiveHit([2, 4]);
  expect(testBoard.receiveHit([2, 5])).toBe('sunk ship');

  testBoard.addShipToGameboard(4, true, [4, 3]);
  testBoard.receiveHit([4, 3]);
  testBoard.receiveHit([5, 3]);
  expect(testBoard.receiveHit([6, 3])).toBe('hit ship');
  expect(testBoard.receiveHit([7, 3])).toBe('sunk ship');

  //current board contains 2 sunk ships, all sunk = true
  expect(testBoard.allShipsSunk()).toBe(true);

  //add ship
  testBoard.addShipToGameboard(3, false, [6, 6]);

  //board now contains 2 sunk ships and 1 new ship, all sunk = false
  expect(testBoard.allShipsSunk()).toBe(false);

  testBoard.receiveHit([6, 6]);
  testBoard.receiveHit([6, 7]);
  expect(testBoard.receiveHit([6, 8])).toBe('sunk ship');

  //3rd ship is now sunk, all sunk = true
  expect(testBoard.allShipsSunk()).toBe(true);
});
