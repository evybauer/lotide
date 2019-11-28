// EQ ARRAYS

const eqArrays = function (arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}


//EQ OBJECTS

const eqObjects = function (object1, object2) {
  let answer = true;
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);

  if (array1.length !== array2.length) {
    return false;
  }

  for (let key of Object.keys(object1)) {

    if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) {

      if (eqArrays(object1[key], object2[key])) {
        return true;

      } else {
        return false;
      }

    } else {
      if (object1[key] === object2[key]) {
        answer = true;

      } else {
        return false;
      }
    }
  }
  return answer;
}


// ASSERT OBJECTS EQUAL:

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  //console.log(`Example label: ${inspect(actual)}`);

  if (!eqObjects(actual, expected)) 
    return (console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
    return (console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`));
};





//TESTS:

// CD -- DC
const cd = {c: "1", d: ["2", 3]};
const dc = {d: ["2", 3], c: "1"};
const cd2 = {c: "1", d: ["2", 3, 4]};

// => EQ Objects Test:
assertObjectsEqual(cd, dc); // => Pass
assertObjectsEqual(dc, cd); // => Pass
assertObjectsEqual(cd, cd2); // => Not Pass
assertObjectsEqual(cd2, cd); // => Not Pass


