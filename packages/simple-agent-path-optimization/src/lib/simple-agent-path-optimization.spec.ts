import { countSimilarElements, optimizeAgent } from '@tdd-kata/simple-agent-path-optimization';



describe(`simple agent path optimization`, function() {

  describe(`countSimilarElements`, function() {
    it(`should return null if given the last element`, function() {
      const input = [2,1,1,1,2];
      const startingIndex = input.length - 1;
      expect(countSimilarElements(input, startingIndex)).toEqual(null);
    });

    it(`should return the index of the next different element`, function() {
      const input = [2,1,1,1,2];
      const startingIndex = 1;
      expect(countSimilarElements(input, startingIndex)).toEqual(4);
    });
  });

  describe(`optimizeAgent`, function() {
    it(`should return empty array if given empty array`, function() {
      const input = [];
      expect(optimizeAgent(input)).toStrictEqual([]);
    });
  });
});
