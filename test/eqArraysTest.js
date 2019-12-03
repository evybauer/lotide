
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], ["1", 2, "3"]), false); // => should NOT PASS
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false); // => should NOT PASS
assertEqual(eqArrays(["Hello", "Lighthouse", "Labs"], ["Hello", "Lighthouse", "Labs"]), true); // => should PASS
assertEqual(eqArrays(["Hello", "Lighthouse", "Labs"], ["Hello"]), false); // => should NOT PASS
assertEqual(eqArrays(["Hello", "Lighthouse", "Labs"], [1, 2, 3]), false); // => should NOT PASS
