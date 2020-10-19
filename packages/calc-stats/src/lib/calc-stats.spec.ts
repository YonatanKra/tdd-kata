describe(`calcStats`, function() {
  describe(`minimumValue`, function() {
    it(`should throw error if array is empty`, function() {
      const input = [];
      expect(() => minimumValue(input)).toThrow('Array cannot be empty.');
    });
  });
});
