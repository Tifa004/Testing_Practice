import analyzeArray from './analyzeArray';

describe('analyzeArray', () => {
  test('returns correct average, min, max, and length for a normal array', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test('works with a single element array', () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test('works with negative numbers', () => {
    const result = analyzeArray([-5, -10, 0, 5, 10]);
    expect(result).toEqual({
      average: 0,
      min: -10,
      max: 10,
      length: 5,
    });
  });

  test('returns null or throws on empty array', () => {
    expect(analyzeArray([])).toBeNull();
  });
});
