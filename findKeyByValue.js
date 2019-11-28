const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`);
  }
};


const findKeyByValue = function(string) {
    return Object.keys(bestTVShowsByGenre).filter((key) => {
      const values = bestTVShowsByGenre[key].split(',');
      if (values.indexOf(string) !== -1) {
        return key
      }
    })[0]
  }

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
