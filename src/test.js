import { evenAndOddNumberChecker } from './main'

describe('evenAndOddNumberChecker', () => {
  describe(`should handle invalid inputs`, () => {
    it(`should return an error if input is a string`, () => {
       expect(evenAndOddNumberChecker('1, 2, 3, 4'))
        .toBe(`Invalid input, input should be a number or an array of number(s)`);
    });
    it(`should return an error if input is an object`, () => {
      expect(evenAndOddNumberChecker({ 1: 2, 2: 5, 3: 7, 4: 9 }))
      .toBe(`Invalid input, input should be a number or an array of number(s)`);
    });
    it(`should return an error if input is an array but not an 
        array of numbers`, () => {
      expect(evenAndOddNumberChecker([ '1', '2', '3', '4' ]))
      .toBe(`Invalid input, input should be a number or an array of number(s)`);
    });
    it(`should return an error if no input is passed in`, () => {
      expect(evenAndOddNumberChecker()
      .toBe(`Invalid input, input should be a number or an array of number(s)`);
    });
  });

  describe('should handle valid inputs correctly', () => {
    it(`should return an object containing an array of even numbers and an array of odd numbers if 
        input is an array of numbers`, () => {
      expect(evenAndOddNumberChecker([ 1, 2, 3, 4 ]))
        .toBe({ evenNumbers:[ 2, 4 ], oddNumbers:[ 1, 3 ] });
    });
    it(`should return an object containing an array of the even numbers and an array of the odd 
        numbers between 0 and the input, if the input is a number`, () => {
      expect(evenAndOddNumberChecker( 6 ))
      .toBe({ evenNumbers:[ 2, 4, 6 ], oddNumbers:[ 1, 3, 5 ] });
    });
    it(`should return an object containing an array of the even numbers and an array of the odd 
        numbers between 0 and the number in the array, if the input is an 
        array containing one number`, () => {
      expect(evenAndOddNumberChecker([ 6 ]))
      .toBe({ evenNumbers:[ 2, 4, 6 ], oddNumbers:[ 1, 3, 5 ] });
    });
  });  
});

