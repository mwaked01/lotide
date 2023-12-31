const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  }),
  it("returns [] for[1] ", () => {
    assert.deepEqual(middle([1]),[]);
  }),
  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  }),
  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  }),
  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  }),
  it("returns ['4'] for [1,2,'4',4,5]", () => {
    assert.deepEqual(middle([1,2,'4',4,5]),['4']);
  }),
  it("returns [] for []", () => {
    assert.deepEqual(middle([]),[]);
  }),
  it("returns [true] for ([1,2,3,4,5,6,true,8,9,0,11,12,13])", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,true,8,9,0,11,12,13]),[true]);
  });
});

