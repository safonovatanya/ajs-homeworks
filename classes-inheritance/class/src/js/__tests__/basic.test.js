import {
  Boweman, Daemon, Magician, Swordsman, Undead, Zombie,
} from '../class'; 

test('create class Boweman', () => {
  const character = new Boweman('Name');
  const expected = {
    name: 'Name',
    health: 100,
    level: 1,
    type: 'Boweman',
    attack: 25,
    defence: 25,
  };

  expect(character).toEqual(expected);
});

test('create class Daemon', () => {
  const character = new Daemon('Name');
  const expected = {
    name: 'Name',
    health: 100,
    level: 1,
    type: 'Daemon',
    attack: 25,
    defence: 25,
  };

  expect(character).toEqual(expected);
});

test('create class Magician', () => {
  const character = new Magician('Some name');
  const expected = {
    name: 'Some name',
    health: 100,
    level: 1,
    type: 'Magician',
    attack: 10,
    defence: 40,
  };

  expect(character).toEqual(expected);
});

test('create class Swordsman', () => {
  const character = new Swordsman('Another name');
  const expected = {
    name: 'Another name',
    health: 100,
    level: 1,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };

  expect(character).toEqual(expected);
});

test('create class Undead', () => {
  const character = new Undead('One more name');
  const expected = {
    name: 'One more name',
    health: 100,
    level: 1,
    type: 'Undead',
    attack: 40,
    defence: 10,
  };

  expect(character).toEqual(expected);
});

test('create class Zombie', () => {
  const character = new Zombie('Another name');
  const expected = {
    name: 'Another name',
    health: 100,
    level: 1,
    type: 'Zombie',
    attack: 10,
    defence: 40,
  };

  expect(character).toEqual(expected);
})