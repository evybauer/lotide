
const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([])); // => Should pass
assertEqual(head([]), 0); // => Should not pass
assertEqual(head([0]), 5); // => Should not pass
assertEqual(head([0]), 0); // => Should pass
assertEqual(head([5,6,7]), 5); // => Should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // => Should pass
assertEqual(head(["Lighthouse", "Labs"]), "Hello"); // => Should not pass
assertEqual(head([]), "Hello"); // => Should not pass
assertEqual(head(["Hello", "Lighthouse", "Labs"])); // => Should not pass
