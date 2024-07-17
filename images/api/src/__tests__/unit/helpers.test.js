const { checkPlayerDetails } = require('../../helpers/endpointHelpers');

test('checkPlayerDetails returns false for invalid details', () => {
  expect(checkPlayerDetails(null)).toBe(false);
  expect(checkPlayerDetails({})).toBe(false);
  expect(checkPlayerDetails({ first_name: 'Sterling' })).toBe(false);
  expect(checkPlayerDetails({ first_name: 'Sterling', last_name: '' })).toBe(false);
  expect(checkPlayerDetails({ first_name: 'Sterling', last_name: 'Sterling', age: 27, nationality: 'English', position: '', club_id: 1 })).toBe(false);
});

test('checkPlayerDetails returns true for valid details', () => {
  const validPlayer = { first_name: 'Sterling', last_name: 'Sterling', age: 27, nationality: 'English', position: 'Forward', club_id: 1 };
  expect(checkPlayerDetails(validPlayer)).toBe(true);
});

