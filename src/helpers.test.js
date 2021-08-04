import { buildQueryParams } from './helpers';

describe('Test helpers', () => {
  test('This should be query params', () => {
    const query = 'test';
    const queryParams = buildQueryParams({
      q: query,
    });
    expect(queryParams === 'q=test').toBeTruthy();
  });
});
