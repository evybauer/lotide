const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], ["1", 2, "3"]); // => should NOT PASS
assertArraysEqual([1, 2, 3], ["1", "2", "3"]); // => should NOT PASS
assertArraysEqual(["Hello", "Lighthouse", "Labs"], ["Hello", "Lighthouse", "Labs"]); // => should PASS
assertArraysEqual(["Hello", "Lighthouse", "Labs"], ["Hello"]); // => should NOT PASS
assertArraysEqual(["Hello", "Lighthouse", "Labs"], [1, 2, 3]); // => should NOT PASS
