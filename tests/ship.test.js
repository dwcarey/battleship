const Ship = require('../src/ship');

test('check that hit function increases hit count', () => {
  const testShip = new Ship(4);
  testShip.hit();
  expect(testShip.hits).toBe(1);
  testShip.hit();
  expect(testShip.hits).toBe(2);
});

test('check that ship is sunk when all hits are made', () => {
  const testShip = new Ship(3);
  testShip.hit();
  testShip.hit();
  expect(testShip.isSunk()).toBe(false);
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});
