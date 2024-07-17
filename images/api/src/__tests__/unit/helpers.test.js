const { checkPlayerName } = require('../../helpers/endpointHelpers');

test('checkPlayerName returns false for invalid names', () => {
  expect(checkPlayerName(null)).toBe(false);
  expect(checkPlayerName(123)).toBe(false);
  expect(checkPlayerName('')).toBe(false);
  expect(checkPlayerName('   ')).toBe(false);
  expect(checkPlayerName(false)).toBe(false);
  expect(checkPlayerName(undefined)).toBe(false);
  expect(checkPlayerName('ksjdkvnsdkjnvksdjnvkslbdsfsdfbhsdfsdbfjqfdfhsgdhjkfdsqgfsjdqhkfsdfqjnvsd')).toBe(false); // Long string
});

test('checkPlayerName returns true for valid names', () => {
  expect(checkPlayerName('Sterling')).toBe(true);
  expect(checkPlayerName('Lamine Yamal')).toBe(true);
});


