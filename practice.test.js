import { capitalizeString, reverseString } from './practice';

test('Capitalize string', () => {
  expect(capitalizeString('apple')).toBe('Apple');
});

test('Reverse string', () => {
  expect(reverseString('apple')).toBe('elppa');
});
