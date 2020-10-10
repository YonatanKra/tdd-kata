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

    it(`should trim the input`, function() {
      const greeter = new Greeter();
      const name = 'some name';
      const nameWithSpaces = `   ${name}   `;
      const expectedResult = 'Hello ' + name;
      expect(greeter.greet(nameWithSpaces)).toEqual(expectedResult)
    });

    it(`should throw if input is not string`, function() {
      const greeter = new Greeter();
      const name = {a: 1};
      expect(() => greeter.greet(name as unknown as string)).toThrow('You must provide a string to Greeter.greet');
    });

    it(`should capitalize the first letter of the name`, function() {
      const greeter = new Greeter();
      const name = 'jon doe';
      const capitalizedName = 'Jon doe';
      const expectedResult = 'Hello ' + capitalizedName;
      expect(greeter.greet(name)).toEqual(expectedResult);
    });
  });

});
