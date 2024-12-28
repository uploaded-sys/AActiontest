describe('Geometric Optics Calculator Tests', () => {
  const { caltheta } = require('./index.js');

  test('should return "infinite" when angle is 0', () => {
    expect(caltheta(0, true)).toBe("infinite");
    expect(caltheta(0, false)).toBe("infinite");
  });

  test('should handle symmetric object position', () => {
    expect(caltheta(60, true)).toBe(5);
    expect(caltheta(45, true)).toBe(7);
  });

  test('should handle asymmetric object position', () => {
    expect(caltheta(60, false)).toBe(5);
    expect(caltheta(72, false)).toBe(5);
  });

  test('should handle odd division results', () => {
    expect(caltheta(72, true)).toBe(4);
    expect(caltheta(72, false)).toBe(5);
  });

  test('should handle even division results', () => {
    expect(caltheta(60, true)).toBe(5);
    expect(caltheta(60, false)).toBe(5);
  });

  test('should handle negative angles', () => {
    expect(caltheta(-60, true)).toBe(5);
    expect(caltheta(-45, false)).toBe(7);
  });

  test('should handle special cases', () => {
    expect(caltheta(360, true)).toBe("infinite");
    expect(caltheta(180, false)).toBe(1);
  });
});
