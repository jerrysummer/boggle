const board = require('./diceRoller');

test('board should be 25-die large', () => {
  expect(board.length).toBe(25);
});
