
const { multiply } = require('./multiply');

  test('multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 4)).toBe(-8);
  });

