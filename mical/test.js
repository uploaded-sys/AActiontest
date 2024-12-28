const { caltheta } = require('./index.js');

describe('Geometric Optics Calculator', () => {
  test('should return "infinite" when angle is 0', () => {
    expect(caltheta(0, true)).toBe("infinite");
  });

  test('should calculate correct number of images for 60 degrees', () => {
    expect(caltheta(60, true)).toBe(5);
  });

  test('should handle negative angles', () => {
    expect(caltheta(-45, true)).toBe(7);
  });
});
