const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['Lighthouse','labs'] for ['Hello','Lighthouse','labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse","Labs"]);
  });
  // Test Case: Check the original array
  const words = ["Yo Yo", 61 , "Labs",5];
  tail(words);
  it("returns ['Yo Yo', 61 , 'Labs',5] for words ", () => {
    assert.deepEqual(words, ["Yo Yo", 61 , "Labs",5]);
  });
});
