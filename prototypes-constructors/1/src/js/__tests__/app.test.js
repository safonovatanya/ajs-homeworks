import Character from '../app';

test('Validation of erroneously transmitted data', () => {
  function newCharacter() {
    const character = new Character();
    character('ф', 'Sword');
  }
  expect(newCharacter).toThrow();
});

test('Verification of the formation Bowman', () => {
  const received = new Character('Лучник', 'Bowman');
  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});

test('Verification of the formation Swordsman', () => {
  const received = new Character('Лучник', 'Swordsman');
  const expected = {
    name: 'Лучник',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(received).toEqual(expected);
});

test('Verification of the formation Magician', () => {
  const received = new Character('Лучник', 'Magician');
  const expected = {
    name: 'Лучник',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});

test('Verification of the formation Magician', () => {
  const received = new Character('Лучник', 'Magician');
  const expected = {
    name: 'Лучник',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});

test('Verification of the formation Daemon', () => {
  const received = new Character('Лучник', 'Daemon');
  const expected = {
    name: 'Лучник',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});

test('Verification of the formation Undead', () => {
  const received = new Character('Лучник', 'Undead');
  const expected = {
    name: 'Лучник',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});

test('Verification of the formation Zombie', () => {
  const received = new Character('Лучник', 'Zombie');
  const expected = {
    name: 'Лучник',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(received).toEqual(expected);
});