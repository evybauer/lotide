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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


assertArraysEqual(map([1,2,3],(x) => x*2),[2,4,6]); // => Pass
assertArraysEqual(map([2,4,6],(x) => x*2),[4,8,12]); // => Pass
assertArraysEqual(map([4,8,12],(x) => x*2),[8,16,24]); // => Pass
assertArraysEqual(map([2,4,6],(x) => x*2),[1,2,3]); // => Not Pass
assertArraysEqual(map([1,2,3],(x) => x*2),[7,8,9]); // => Not Pass
assertArraysEqual(map([1,2,3],(x) => x*2),[0,4,6]); // => Not Pass



// TEST:

//const results1 = map(words, word => word[0]);

//console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));
//console.log(assertArraysEqual(results1, [ 'a', 'b', 'c', 'd', 'e' ]));
//console.log(assertArraysEqual(results1, [ '1', 'c', '2', 'm', '7' ]));
