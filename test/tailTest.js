const tail = require('../tail');
const assertEqual = require('../assertEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse");

console.log(result);

// Test Case: Check the original array
const words = ["Yo Yo", 61 , "Labs",5];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 4);