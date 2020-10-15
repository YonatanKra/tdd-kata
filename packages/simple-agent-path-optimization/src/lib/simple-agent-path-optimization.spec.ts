import { optimizeAgent } from '@tdd-kata/simple-agent-path-optimization';



describe(`simple agent path optimization`, function() {

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
