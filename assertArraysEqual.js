const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1,arr2);
  if (result) {
    console.log(`✅ ✅ ✅  Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;
