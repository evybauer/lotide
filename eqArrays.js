const eqArrays = function(arr) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++ ){
    if (arr1.length === arr2.length)
    return true;
  } if (Array.isArray(arr) && arr.length === 0)
    return true;
  }


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`);
  }
};


// TESTS:
assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], ["1", 2, "3"]), false); // => should NOT PASS
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false); // => should NOT PASS
assertEqual(eqArrays(["Hello", "Lighthouse", "Labs"], ["Hello", "Lighthouse", "Labs"]), true); // => should PASS
assertEqual(eqArrays(["Hello", "Lighthouse", "Labs"], ["Hello"]), false); // => should NOT PASS
assertEqual(eqArrays(["Hello", "Lighthouse", "Labs"], [1, 2, 3]), false); // => should NOT PASS


