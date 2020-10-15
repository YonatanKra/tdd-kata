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

    it(`should return a valid array back`, function() {
      const input = ["UP", "UP", "LEFT", "DOWN"];
      expect(optimizeAgent(input)).toStrictEqual(input);
    });

    it(`should return an empty array when sent two opposites`, function() {
      const input = ["UP", "DOWN"];
      expect(optimizeAgent(input)).toStrictEqual([]);
    });

    it(`should return the third value when sent two opposites and a different value`, function() {
      const input = ["UP", "DOWN", "LEFT"];
      expect(optimizeAgent(input)).toStrictEqual(["LEFT"]);
    });

    it(`should return an empty value when sent two pairs of opposites`, function() {
      const input = ["UP", "DOWN", "LEFT", "RIGHT"];
      expect(optimizeAgent(input)).toStrictEqual([]);
    });

    it(`should return an empty value when sent two non adjacent pairs of opposites`, function() {
      const input = ["UP", "LEFT", "RIGHT", "DOWN"];
      expect(optimizeAgent(input)).toStrictEqual([]);
    });

    it(`should return the right output`, function() {
      const input = ["UP", "UP", "RIGHT", "DOWN", "LEFT", "RIGHT", "UP"];
      expect(optimizeAgent(input)).toStrictEqual(["UP", "UP", "RIGHT"]);
    });
  });
});
