import NumberNot from '../basic';

test.each([
  ['good', '15', 15],
  ['also good', 15, 15],
  ['bad', 'foo', 'Error'],
])(
  ('this case is %s'),
  (possibility, amount, expected) => {
    const result = NumberNot(amount);

    expect(result).toBe(expected);
  },
);