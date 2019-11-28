// ASSERTION TEST:

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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`);
  }
};



// EQOBJECTS FUNCTION

const eqObjects = function (object1, object2) {
  let answer = true;

  if (Object.keys(object1).length !== Object.keys(object2).length) {
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


//TESTS:

// CD -- DC
const cd = {
  c: "1",
  d: ["2", 3]
};
const dc = {
  d: ["2", 3],
  c: "1"
};

// CD -- CD2
const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};

// => EQ Objects Test:
console.log(eqObjects(cd, dc)); // => true
console.log(eqObjects(cd, cd2)); // => false
eqObjects(cd, cd2);
eqObjects(cd, dc);

// => EQ Arrays Test:
eqArrays(eqObjects(cd, dc), true);
eqArrays(eqObjects(cd, cd2), false);

// => Assertion Test
assertEqual(eqObjects(cd, dc), true); 
assertEqual(eqObjects(cd, cd2), false);  






// PREVIOUS TESTS:

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// console.log(ab["a"]);
// console.log(Object.keys(ba).length);

// const da = { a: "1", b: "1" };
// const ad = { a: "1", b: "1" };
// eqObjects(da, ad); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// // const ab = { a: "1", b: "2" };
// // const ba = { b: "2", a: "1" };
// // eqObjects(ab, ba); // => true
// console.log(eqObjects(ab, ba)); // => true
// assertEqual(eqObjects(ab, ba), true);

// assertEqual(eqObjects(da, ad));

// // const abc = { a: "1", b: "2", c: "3" };
// // eqObjects(ab, abc); // => false
// console.log(eqObjects(ab, abc)); // => false
// assertEqual(eqObjects(ab, abc), false);