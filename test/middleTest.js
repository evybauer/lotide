const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')


middle([]);
middle([1]);
middle([1, 2]);
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4, 5, 6, 7, 8]);
middle([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

const numbers = [1, 1, 2, 1, 1, 1];
assertArraysEqual(numbers, middle(numbers));
