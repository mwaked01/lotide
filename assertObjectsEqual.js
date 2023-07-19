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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let pass = 0;// keep track of how many key values match
  let object1Keys = Object.keys(object1); //an array of the object's properties
  let object2Keys = Object.keys(object2);
  if (object1Keys.length === object2Keys.length) {//compares the number of keys within each object
    for (let i of object1Keys) {//cycles through the keys
      if (object1[i] === object2[i] || eqArrays(object1[i],object2[i])) {// checks for primative and array types
        pass ++;// increases by 1 whenever the key values match
        //the following console.log is for debugging
        //console.log (`Object1[${i}]: ${object1[i]} ; Object2[${i}] ${object2[i]}`);
      } else {
        return false;// return false when the key values do not match
      }
    }
    if (pass === object1Keys.length) {
      return true;// returns true when all the key values match up
    }
  }
  return false;// return false when the objects have a different number of keys
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const shirtObject = { color: ["red","white"], size: "medium" };
const anotherShirtObject = { size: "medium", color: ["red","white"] };
assertObjectsEqual(shirtObject , anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject , longSleeveShirtObject);
