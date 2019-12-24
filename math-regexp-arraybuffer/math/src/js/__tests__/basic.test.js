import Daemon from '../daemon';
import Magician from '../magician';

test('Атака Magician без расстояния без stoned', () => {
  const expected = 100;
  const magician = new Magician('Gandalf');
  magician.distance = 1;
  const received = magician.attack;
  expect(received).toBe(expected);
});

test('Атака Daemon на расстоянии без stoned', () => {
  const expected = 60;
  const daemon = new Daemon('Azrael');
  daemon.distance = 5;
  const received = daemon.attack;
  expect(received).toBe(expected);
});

