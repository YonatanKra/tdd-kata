import { minimumValue } from './calc-stats';

describe(`calcStats`, function() {
  describe(`minimumValue`, function() {
    it(`should throw error if array is empty`, function() {
      const input = [];
      expect(() => minimumValue(input)).toThrow('Array cannot be empty.');
    });

    it(`should throw an error if sequence is not an array`, function() {
      const input = {};
      expect(() => minimumValue(input as [])).toThrow('sequence must be an array');
    });

    it(`should return the minimal value`, function() {
      const input = [5, 1, 6, 7, -3];
      expect(minimumValue(input)).toEqual(-3);
    });
  });
});
