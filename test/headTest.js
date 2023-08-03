const head = require('../head');
const assert = require('chai').assert;
//const assertEqual = require('../assertEqual');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  }),
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  }),
  it("returns '5' for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  }),
  it("returns 'Labs' for ['Labs', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Labs", "Lighthouse", "Labs"]), 'Labs');
  });
  it("returns 'you' for ['you',6,'hi']", () => {
    assert.strictEqual(head(['you',6,'hi']), 'you');
  });
});

