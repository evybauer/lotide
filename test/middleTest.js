const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {

  it('returns [] for ["hello", "world"]', () => {
    assert.deepEqual(middle(["hello", "world"]), []);
  });

  it('returns [] for [1,2]', () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it('returns [2,3] for [1,2,3,4]', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });

  it('returns [5,6] for [1,2,3,4,5,6,7,8,9,10]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9,10]), [5,6]);
  });

});