
const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Lighthouse Labs"); // => It should pass
assertEqual("Lighthouse Labs", "Bootcamp"); // => It should fail
assertEqual(1, 1); // => It should pass
assertEqual(1, 10); // => It should fail
