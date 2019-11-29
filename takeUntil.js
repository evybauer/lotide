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




//TAKE UNTIL FUNCTION

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  let answer = [];
  for (let item of array) {
    if (!callback(item)) {
      answer.push(item);
    } else {
      break;
    }
  }
  return answer;
};
      


// TEST:

const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');

console.log('\n');
console.log(results1);
console.log('---');
console.log(results2);

console.log('\n');
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
console.log('\n');


