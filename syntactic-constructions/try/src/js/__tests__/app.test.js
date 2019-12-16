import try from '../app';

test('Integer', () => {
  expect(try(7)).toBe(7);
});

test('Not Integer', () => {
  expect(try('7.57')).toEqual(Error('Ввод некорректен'));
});

test('String', () => {
  expect(try('seven')).toEqual(Error('Ввод некорректен'));
});

test('Hexadecimal', () => {
  expect(try('0x23')).toEqual(Error('Ввод некорректен'));
});

test('Negative', () => {
  expect(try('-3')).toEqual(Error('Ввод некорректен'));
});

test('Symbols and integer', () => {
  expect(try('df5')).toEqual(Error('Ввод некорректен'));
});

test('Octagonal', () => {
  expect(try('0232')).toEqual(Error('Ввод некорректен'));
});

test('Empty', () => {
  expect(try('')).toEqual(Error('Ввод некорректен'));
});