import ErrorRepository from '../app';

test('Проверка на добавление ошибки', () => {
  const received = new ErrorRepository();
  received.errSet('test', 'test1');
  expect(received.translate('test')).toBe('test1');
});

test('Проверка на отсутствие ошибки', () => {
  const received = new ErrorRepository();
  received.errSet('test1', 'test1');
  expect(received.translate('test')).toBe('Unknown error');
});