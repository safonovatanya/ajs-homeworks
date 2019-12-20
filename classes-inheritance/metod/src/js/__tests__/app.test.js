import sum from '../app';

test('Работа метода', () => {
  const hero = new Character('Name', 10);
  const expected = {
    name: 'Name',
    level: 2,
    health: 100,
    defence: 12,
    attack: 48,
  };

  hero.levelUp();
  expect(hero).toEqual(expected);
});

test('Метод levelUp при health = 0 ошибка', () => {
  const hero = new Character('Name', 0);

  const received = () => hero.levelUp();
  expect(received).toThrow();
})