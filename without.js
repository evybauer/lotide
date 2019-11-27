// TEST/ASSERTION FUNCTIONS

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
}

const assertArraysEqual = function(arr1, arr2) {
  let isEqual
  if (arr1.length !== arr2.length){
  console.log(`🛑 Failed: ${arr1}  !== ${arr2}`);
  return;
  }
  for (let i = 0; i < arr1.length; i++ ){
    if(arr1[i] === arr2[i] ){
      isEqual = true;
    } if (arr1[i] !== arr2[i] ){
      isEqual = false;
      break;
    }
  }
  if (isEqual === true){
    console.log(`✅ Passed: ${arr1}  ===  ${arr2}`);
  } else {
    console.log(`🛑 Failed: ${arr1}  !== ${arr2}`);
  }
}


// WITHOUT FUNCTION

const without = function(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
      let restriction = false;

      for (let j = 0; j < arr2.length; j++) {
          if (arr1[i] === arr2[j]) {
              restriction = true;
          }
          // if arr1[i] is the restricted on the list don't let into the answer
          // otherwise, keep looking
      }
      if (restriction === true) {
          // did see a problem?  then do nothing, just skip you
      } else {
          // if there's no problems, add to the answer
          // answer += arr1[i]; Does not work!!! 
          answer.push(arr1[i]);
      }
  }
  return answer;
}


//TESTS

const source1 = [1, 2, 3, 4];
const itemsToRemove1 = [1, 2, 3, "4"]
const myAnswer1 = without(source1, itemsToRemove1);
console.log(myAnswer1); // prints out [4]
assertArraysEqual(source1, itemsToRemove1, without(source1, itemsToRemove1));

const source2 = [5, 4, 3, 2, 1];
const itemsToRemove2 = [2, 4, 6, 8];
const myAnswer2 = without(source2, itemsToRemove2);
console.log(myAnswer2); // prints out [5, 3, 1]
assertArraysEqual(source2, itemsToRemove2, without(source2, itemsToRemove2));

const source3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const itemsToRemove3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myAnswer3 = without(source3, itemsToRemove3);
console.log(myAnswer3); // prints out [4]
assertArraysEqual(source3, itemsToRemove3, without(source3, itemsToRemove3));