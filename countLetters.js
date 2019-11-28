
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const countLetters = function(string){
  let answer = {};

  for (let character of string) {

    if (answer[character]) {
      answer[character] += 1;
    } else {
    answer[character] = 1;
   }
  }
   
  return answer;
};





const string = "Lighthouse in the house_";
const answer = countLetters(string);

//TESTS:
console.log(countLetters(string));

assertEqual(answer['L'], 1);
assertEqual(answer['l'], 1);
assertEqual(answer['i'], 2);
assertEqual(answer['g'], 1);
assertEqual(answer['h'], 2);
assertEqual(answer['t'], 2);
assertEqual(answer['a'], undefined);
assertEqual(answer['z'], 1);
assertEqual(answer['x'], undefined);
assertEqual(answer['w'], 2);
assertEqual(answer['y'], 9);

