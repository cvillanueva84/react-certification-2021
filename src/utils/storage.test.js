import { storage } from './storage';

it('Should set a value into a key on local Storage', () => {
  const storageEntry = { key: 'Challenge', value: 2 };
  storage.set(storageEntry.key, storageEntry.value);
  // validate against localStorage value
  const storedValue = Number(window.localStorage.getItem(storageEntry.key));
  expect(storedValue).toBe(storageEntry.value);
});
