const assertEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject),true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject),false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject),true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject),false); // => false