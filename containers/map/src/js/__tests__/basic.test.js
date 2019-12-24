import ErrorRepository from '../app';

test('Проверка на добавление ошибки', () => {
  const received = new ErrorRepository();
  received.errSet('test', 'test1');
  expect(received.translate('test')).toBe('test1');
});