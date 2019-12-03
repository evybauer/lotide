const assertEqual = require('./assertEqual');

const eqArrays = function(arr) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr1.length === arr2.length)
      return true;
  } if (Array.isArray(arr) && arr.length === 0)
    return true;
};

module.exports = eqArrays;
