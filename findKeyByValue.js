const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, keyVal) {
  for (let i in obj) { // cycle through the keys in the given object
    //console.log (`${i}: ${obj[i]}`); check values at each key for debugging
    if (obj[i] === keyVal) {// check if teh key value matches with the required input value
      return i;
    }
  }
  //no need to return undefined as the function will do so if nothing is returned.
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = { // place keys in '' to keep eslint happy
  'sci_fi': "The Expanse",
  'comedy': "Brooklyn Nine-Nine",
  'drama':  "The Wire"
};
const bestFoodsByGenre = {
  breaky: "steak and eggs",
  lunch: 0,
  dinner:  undefined
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestFoodsByGenre, 0), "lunch");
assertEqual(findKeyByValue(bestFoodsByGenre, "fruit"), undefined);
assertEqual(findKeyByValue(bestFoodsByGenre, undefined), "dinner");