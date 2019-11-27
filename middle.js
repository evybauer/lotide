
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

const middle = function (array){
  if  ( array.length === 1 || array.length === 2) {
    return ([]);
  } else if (array.length % 2 == 0){
    return ([(array[(array.length/2)-1]) , (array[array.length/2])]);
  } else {
    return (array[Math.floor(array.length/2)]);
  }
}

// TEST CODE

middle([]);
middle([1]);
middle([1, 2]);
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4, 5, 6, 7, 8]);
middle([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

const numbers = [1, 1, 2, 1, 1, 1];
assertArraysEqual(numbers, middle(numbers));



