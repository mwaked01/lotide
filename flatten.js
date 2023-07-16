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

const flatten = function(nestedArray) {
  let flattened = [];//holds the elemts from the nested array
  for (let i of nestedArray) {
    if (Array.isArray(i)) {//checks if element is a nested array
      for (let j of i) {
        flattened.push(j);//adds elements from the nested array to the result
      }
    } else {
      flattened.push(i);//adds elemts from the array that are not inside nested arrays
    }
  }
  return flattened;
};


//test
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]);
assertArraysEqual(flatten([true, 2, ['3', 4], 5, [6]]),[true,2,'3',4,5,6]);
assertArraysEqual(flatten([true, 2, ['3', 4], 5, [6,1,'8']]),[true,2,'3',4,5,6,1,'8']);