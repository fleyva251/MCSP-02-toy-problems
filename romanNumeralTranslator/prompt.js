/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  // TODO: Implement me!
  //return null if input is not a string
  if(typeof romanNumeral != 'string') {
    return null
  }
  //create holder variable
  let romanArray = [];

  //create result array
  let resultArr = [];
  //split input into holder
  romanArray = romanNumeral.split('');
  //helper function for reduce
  const addition = (accumulator, currentValue) => {
   return accumulator + currentValue;
  }
  //helper function for reduce
  const subtraction = (accumulator, currentValue) => {
    return currentValue - accumulator
  }
  //iterate through and check letter for value i.e if it is I then it is equal to 1
  for(let i = 0; i < romanArray.length; i++) {
    resultArr.push(DIGIT_VALUES[romanArray[i]]);
  }
    //example 'LVI' should be ['L', 'V', 'I']
  if(romanArray[0] === 'I') {
    return resultArr.reduce(subtraction)
  } else {
    return resultArr.reduce(addition)
  }
  //if an I is before any other letter excpet itself, perform subtraction instead of addition
  //add the outcome to the result variable
  //return result var
};
console.log(translateRomanNumeral('XIV'));