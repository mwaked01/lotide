const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentance) {
  let letters = {}; //object conataing the letters as properties with number of times ech property appears in sentance

  for (let i of sentance) { //cycle through each letter in the string held by 'sentance'
    if (i !== ' ') { //skips over empty spaces
      if (letters[i]) { //checks if the letter is already a key in the object 'letters'
        letters [i]++;// if teh key already exists, increase the count by 1
      } else {// set the initial value of each key to one
        letters [i] = 1;
      }
    }
  }
  return letters;
};

module.exports = countLetters;

const sentanceString = "this is a sentance";
const sentanceString1 = "lighthouse in the house";

console.log(countLetters(sentanceString1));
assertEqual(countLetters(sentanceString)["s"],3);
assertEqual(countLetters(sentanceString)["m"],undefined);