import { Greeter } from './greeter';

describe('greeter', () => {
  it(`should exist`, () => {
    expect(Greeter).toBeDefined();
  });

  describe(`greet`, function() {
    let greeter: Greeter;
    let dateService: Date;

    beforeEach(function() {
      dateService = new Date();
      dateService.setHours(7);
      dateService.setMinutes(0);
      greeter = new Greeter(dateService);
    });
    it(`should prepend hello to name input`, function() {
      const greeter = new Greeter();
      const name = 'Jon Doe';
      const expectedResult = 'Hello ' + name;
      expect(greeter.greet(name)).toEqual(expectedResult);
    });

    it(`should trim the input`, function() {
      const greeter = new Greeter();
      const name = 'Jon Doe';
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

    it(`should return Good morning when the time is 06:00-12:00`, function() {
      const hours = [6,7,8,9,10,11,12];
      const name = 'Jon Doe';
      const expectedResult = 'Good morning ' + name;

      hours.forEach(hour => {
        dateService.getHours = () => hour;
        expect(greeter.greet(name)).toEqual(expectedResult);
      })

    });
  });

});
