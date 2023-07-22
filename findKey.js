// Implement the assertEqual function which comapres if the given arguments are equal.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj,callback) {
  for (let i in obj) {//cycle through the keys in the object obj
    if (callback(obj[i])) {//checks if the value at the key returns true through the callback function
      return i;//returns the key
    }
  }
};


const starNum = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 6 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 0); //

assertEqual(starNum,undefined);