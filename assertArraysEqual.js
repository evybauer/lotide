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




assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], ["1", 2, "3"]); // => should NOT PASS
assertArraysEqual([1, 2, 3], ["1", "2", "3"]); // => should NOT PASS
assertArraysEqual(["Hello", "Lighthouse", "Labs"], ["Hello", "Lighthouse", "Labs"]); // => should PASS
assertArraysEqual(["Hello", "Lighthouse", "Labs"], ["Hello"]); // => should NOT PASS
assertArraysEqual(["Hello", "Lighthouse", "Labs"], [1, 2, 3]); // => should NOT PASS
