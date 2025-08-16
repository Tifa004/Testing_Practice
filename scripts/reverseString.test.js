import reverseString from "./reverseString";

test("reverses a simple word", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverses a single character", () => {
  expect(reverseString("a")).toBe("a");
});

test("reverses an empty string", () => {
  expect(reverseString("")).toBe("");
});

test("reverses a string with spaces", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("reverses a string with punctuation", () => {
  expect(reverseString("Hello!")).toBe("!olleH");
});
