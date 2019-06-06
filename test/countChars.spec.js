import { countChars } from '../src';

describe('countChars', () => {
  const str = 'hello, world!你好，世界！';

  it('should return the number of characters', () => {
    expect(countChars(str)).toBe(19);
  });

  it('should count 2 for each full width character and count 1 for each half width character', () => {
    expect(countChars(str, 1)).toBe(25);
  });

  it('should count 1 for each full width character and count 1/2 for each half width character', () => {
    expect(countChars(str, 2)).toBe(13);
  });
});
