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

  it(`should return the number of values in the sequence`, function() {
    const input = [5, 1, 6, 7, -3];
    const { sequenceLength } = calcStats(input);
    expect(sequenceLength).toEqual( 5);
  });

  it(`should return the average of the sequence`, function() {
    const input = [5, 1, 6, 7, -3];
    const { average } = calcStats(input);
    expect(average).toEqual( 3.2);
  });
});
