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


//FLATTENED ARRAY FUNCTION: 

const flattenedArray = function(originalArray){
  let myNewArray = [];

  for (var i = 0; i < originalArray.length; ++i) {
    for (var j = 0; j < originalArray[i].length; ++j)
      myNewArray.push(originalArray[i][j]);
  }
  return myNewArray;
}

// TEST:

const originalArray = [[1], [2],[3, 4, 5], [6, 7, 8], [9], 10];

console.log(originalArray);  // Original Array
console.log(flattenedArray(originalArray)); // Flatennes Array 
assertArraysEqual(originalArray, flattenedArray(originalArray));  //Test Assertion