import capitalize from "./capitalize";

test('capitalizes the first letter of a single word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalizes the first letter of a sentence', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('returns an empty string if input is empty', () => {
  expect(capitalize('')).toBe('');
});

test('does not change already capitalized words', () => {
  expect(capitalize('Hello')).toBe('Hello');
});

test('works with one-letter strings', () => {
  expect(capitalize('a')).toBe('A');
});