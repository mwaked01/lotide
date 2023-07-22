const eqArrays = function (firstArray, secondArray) {//checks if 2 arrays are identical in type and value
  let pass = 0; // keeps track of how many elements are identical at the same index
  if (firstArray.length === secondArray.length) {//first make sure that the arrays are the same length
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {//returns false if the elemnts are not identical
        return false;
      } else {
        pass++;
      }
    }
    if (pass === firstArray.length) {
      return true;//once all the lements have been checked as identical, returns true
    }
  } else {
    return false;// returns false right away if the arrays are not the same length
  }
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const map = function (array, callback) { //implemet to take in an array and a callback function
  const results = [];//conatins the result of items passed through the call back function
  for (let item of array) {
    results.push(callback(item));
  }
  return results;//return an array with items that went through the call back function
};

//test
const words = ["ground", "control", "to", "major", "tom"];
const numArrays = [[1, 2, 3], [4], 'five'];
const numTodouble = [1, 5, 9];

const results1 = map(words, word => word[0]);
const results2 = map(numArrays, nums => nums[0]);
const results3 = map(numTodouble, num => num * 2);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [1, 4, 'f']);
assertArraysEqual(results3, [2, 10, 18]);