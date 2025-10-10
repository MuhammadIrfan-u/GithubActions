const {subtract } = require('./subtract');

  test('subtract two numbers', () => {
    expect(subtract(10, 3)).toBe(7);
    expect(subtract(5, 8)).toBe(-3);
  });

