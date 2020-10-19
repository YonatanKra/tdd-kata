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

  it(`should return the minimal value`, function() {
    const input = [5, 1, 6, 7, -3];
    const { minimumValue } = calcStats(input);
    expect(minimumValue).toEqual( -3);
  });

  it(`should return the maximum value`, function() {
    const input = [5, 1, 6, 7, -3];
    const { maximumValue } = calcStats(input);
    expect(maximumValue).toEqual( 7);
  });
});
