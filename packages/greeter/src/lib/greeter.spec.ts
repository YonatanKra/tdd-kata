import { Greeter } from './greeter';

describe('greeter', () => {
  it(`should exist`, () => {
    expect(Greeter).toBeDefined();
  });

  describe(`greet`, function() {
    it(`should prepend hello to name input`, function() {
      const greeter = new Greeter();
      const name = 'some name';
      const expectedResult = 'Hello ' + name;
      expect(greeter.greet(name)).toEqual(expectedResult)
    });
  });

});
