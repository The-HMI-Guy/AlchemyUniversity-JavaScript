const assert = require("assert");
const { x, a, b, c, d, f, g } = require("../Week1/Week1");

it("should store a number", () => {
  //const result = x.storeNumber(10);
  assert.equal(typeof x, "number");
});

it("should check if a is equal to b", () => {
  assert.equal(a, b);
});

it("should check for c to be true and d to be false", () => {
  assert.equal(c, true);
  assert.equal(d, false);
});

it("should check that e equals Hello World", () => {
  assert.equal(f, "Hello World");
});

it("should check if g is equal to 7", () => {
  assert.equal(g, 7);
});
