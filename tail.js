const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = arr.slice(1); // adds all the elemnts of the array to newArr except for the first element
  return newArr;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

console.log(result);

// Test Case: Check the original array
const words = ["Yo Yo", 61 , "Labs",5];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);