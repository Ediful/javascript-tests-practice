import {
  capitalizeString,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './practice';

test('Capitalize string', () => {
  expect(capitalizeString('apple')).toBe('Apple');
});

test('Reverse string', () => {
  expect(reverseString('apple')).toBe('elppa');
});

test('Calculator Addition', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Calculator Subtraction', () => {
  expect(calculator.sub(2, 1)).toBe(1);
});

test('Calculator Multiplication', () => {
  expect(calculator.mul(2, 3)).toBe(6);
});

test('Calculator Division', () => {
  expect(calculator.div(6, 2)).toBe(3);
});

test('Caesar Cipher', () => {
  expect(caesarCipher('Czar!', 1)).toBe('Dabs!');
});

test('Analyze Array', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
