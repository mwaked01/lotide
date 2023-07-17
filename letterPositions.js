const eqArrays = function(firstArray,secondArray) {//checks if 2 arrays are identical in type and value
  let pass = 0; // keeps track of how many elements are identical at the same index
  if (firstArray.length === secondArray.length) {//first make sure that the arrays are the same length
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {//returns false if the elemnts are not identical
        return false;
      } else {
        pass ++;
      }
    }
    if (pass === firstArray.length) {
      return true;//once all the lements have been checked as identical, returns true
    }
  } else {
    return false;// returns false right away if the arrays are not the same length
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentance) {
  const results = {};//conatins the letters in 'sentance' as keys with array values ocntaining the index location of each letter in the sentance
  for (let i = 0; i < sentance.length; i++) {//cycle through the letters in 'sentance'
    if (sentance [i] !== " ") { //skip over empty spaces
      if (results [sentance[i]]) {// checks for repeating letters
        results [sentance[i]].push(i);// adds indecies to the arrays of repeated letters
      } else {
        results [sentance[i]] = [i];//set the key value to an array with the initial index number
      }
    }
  }
  return results;
};

//test

const greetingCount = (letterPositions("hello"));
const greetingCount1 = (letterPositions("lighthouse in the house"));
console.log(greetingCount);
assertArraysEqual(greetingCount['l'],[2, 3]);
assertArraysEqual(greetingCount1['h'],[3, 5, 15, 18]);