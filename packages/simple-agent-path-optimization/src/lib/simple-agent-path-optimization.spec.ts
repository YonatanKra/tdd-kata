import { countSimilarElements } from '@tdd-kata/simple-agent-path-optimization';

describe(`simple agent path optimization`, function() {

  describe(`countSimilarElements`, function() {
    it(`should return null if given the last element`, function() {
      const input = [2,1,1,1,2];
      const startingIndex = input.length - 1;
      expect(countSimilarElements(input, startingIndex)).toEqual(null);
    });
  });
});
