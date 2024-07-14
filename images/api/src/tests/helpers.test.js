const { checkPlayerName } = require('../helpers/endpointHelpers');

test('checkPlayerName returns true for valid name', () => {
  expect(checkPlayerName('John Doe')).toBe(true);
});

test('checkPlayerName returns false for invalid name', () => {
  expect(checkPlayerName('')).toBe(false);
  expect(checkPlayerName('   ')).toBe(false);
});
