import caesarCipher from './caesarCipher';

describe('Caesar Cipher', () => {
  test('shifts lowercase letters correctly', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
  });

  test('wraps around from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('preserves uppercase letters', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('leaves punctuation and spaces unchanged', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });

  test('negative shift works (left shift)', () => {
    expect(caesarCipher('def', -3)).toBe('abc');
  });

  test('large shift values still work (e.g. shift > 26)', () => {
    expect(caesarCipher('abc', 29)).toBe('def'); // 29 ≡ 3 mod 26
  });
});
