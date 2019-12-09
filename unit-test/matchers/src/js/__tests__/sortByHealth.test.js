import sortByHealth from '../sortByHealth';

test.each([
  [
    [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
    [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ],
  ],
  [
    [
      { name: 'мечник', health: 0 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 20 },
    ],
    [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 20 },
      { name: 'мечник', health: 0 },
    ],
  ],
  [
    [], false,
  ],
  [
    [
      { name: 'мечник', health: 100 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 100 },
    ],
    [
      { name: 'мечник', health: 100 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 100 },
    ],
  ],
])(
  ('should sort heroes'),
  (heroes, expected) => {
    const result = sortByHealth(heroes);

    expect(result).toEqual(expected);
  },
);