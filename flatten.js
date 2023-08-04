const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = flatten;

//test
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]);
assertArraysEqual(flatten([true, 2, ['3', 4], 5, [6]]),[true,2,'3',4,5,6]);
assertArraysEqual(flatten([true, 2, ['3', 4], 5, [6,1,'8']]),[true,2,'3',4,5,6,1,'8']);