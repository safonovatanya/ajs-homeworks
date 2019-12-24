import Validator from '../app';

test('Успешная валидация', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Thd111bt');
  expect(received).toBe(true);
});

test('Начинается с цифры', () => {
  const validator = new Validator();
  const received = validator.validateUsername('7volt');
  expect(received).toBe(false);
});

test('Заканчивается цифрой', () => {
  const validator = new Validator();
  const received = validator.validateUsername('T800');
  expect(received).toBe(false);
});

test('Более трех цифр подряд', () => {
  const validator = new Validator();
  const received = validator.validateUsername('T1000-th');
  expect(received).toBe(false);
});

test('Кириллица', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Угнетатель');
  expect(received).toBe(false);
});

test('Начинается с тире', () => {
  const validator = new Validator();
  const received = validator.validateUsername('-Grut');
  expect(received).toBe(false);
});

test('Заканчивается подчеркиванием', () => {
  const validator = new Validator();
  const received = validator.validateUsername('tortuga_');
  expect(received).toBe(false);
});