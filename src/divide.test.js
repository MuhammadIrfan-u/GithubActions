
const { divide } = require('./divide');


  test('divide two numbers', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(-6, 3)).toBe(-2);
  });

  test('throw error on divide by zero', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
  });


