const assertObjectsEqual = require('./assertObjectsEqual'); 

const shirtObject = { color: ["red","white"], size: "medium" };
const anotherShirtObject = { size: "medium", color: ["red","white"] };
assertObjectsEqual(shirtObject , anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject , longSleeveShirtObject);
