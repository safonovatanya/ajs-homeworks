import health from '../health';

test.each([
  [
    { name: 'маг', health: 100 }, 'healthy',
  ],
  [
    { name: 'лучник', health: 50 }, 'wounded',
  ],
  [
    { name: 'мечник', health: 10 }, 'critical',
  ],
  [
    {}, null,
  ],
])(
  ('%s.name should have %i health'),
  (hero, expected) => {
    const result = health(hero);

    expect(result).toBe(expected);
  },

);