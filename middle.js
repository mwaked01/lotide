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

const middle = function(arr) {
  let resultArr = [];//holds the middle elements of the arr array
  if (arr.length > 2) {//checks that the length of the array is greater than 2
    if (arr.length % 2 === 0) {//check if the length is an even number
      //push the two middle values of the array when the length of the array is even
      resultArr.push(arr[Math.floor(arr.length / 2) - 1]);
      resultArr.push(arr[Math.floor(arr.length / 2)]);
    } else {
      resultArr.push(arr[Math.floor(arr.length / 2)]);//adds the middle value when the length of the array is an odd number
    }
  }
  return resultArr;
};

//test
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);
assertArraysEqual(middle([1,2,'4',4,5]),['4']);
assertArraysEqual(middle([]),[]);
assertArraysEqual(middle([1,2,3,4,5,6,true,8,9,0,11,12,13]),[true]);


