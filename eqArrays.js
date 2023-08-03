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

module.exports = eqArrays;

