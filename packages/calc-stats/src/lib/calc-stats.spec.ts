import { calcStats } from './calc-stats';

describe(`calcStats`, function() {

  it(`should throw error if array is empty`, function() {
    const input = [];
    expect(() => calcStats(input)).toThrow('Array cannot be empty.');
  });

  it(`should throw an error if sequence is not an array`, function() {
    const input = {};
    expect(() => calcStats(input as [])).toThrow('sequence must be an array');
  });

  describe(`Minimum Value`, function() {
    it(`should return the minimal value`, function() {
      const input = [5, 1, 6, 7, -3];
      expect(calcStats(input)).toEqual({
        minimumValue: -3
      });
    });
  });
});
