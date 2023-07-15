const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  return arr[0]; // returns the first element in the array
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Labs", "Lighthouse", "Labs"]), "Labs");
console.log(head([]));
console.log(head(['you',6,'hi']));