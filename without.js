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

const without = function(source,itemsToRemove) {
  let resultArray = [];//contains the elements that are not in itemsToRemove
  let pass; // counter keeps track of how many itemsToRemove elements dont equal each source element
  for (let i of source) {
    pass = 0;//resets the counter everytime we check a new element from source
    for (let j of itemsToRemove) {
      if (i !== j) {
        pass++;
      }
      if (pass === itemsToRemove.length) {
        resultArray.push(i);//only adds an elemnt from source once that element did not match up with any itemsToRemove elements
      }
    }
  }
  return resultArray;
};

//test cases for correct result
assertArraysEqual(without([1, 2, 3], [1]),[2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]) ,["1","2"]);
assertArraysEqual(without([1,2,3,2,1,3,2,4,2],[3,1,3,2]),[4]);
assertArraysEqual(without([1,2,3,2,1,3,2,4,2],[1,2]),[3,3,4]);
assertArraysEqual(without([1, 2, 3], [1,5,34]),[2,3]);

//test cases to make sure the original array is not being modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);