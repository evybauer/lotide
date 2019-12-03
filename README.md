# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Evelyn Louise Bauer as part of a Bootcamp - Web Development Program at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @evybauer/lotide`

**Require it:**

`const _ = require('@evybauer/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual([array1], [array2]): Checks if arrays are equal or not. Console.log a positive assertion message if the passed arrays are equal, and console.log a failure message if they are different.

* assertEqual(actual, expected): Compares if two data types passed into the function are strictly equal or not. If the data types are strictly equal, console.log a positive assertion message. If the data type are not equal, console.log a failed assertion message. 

* assertObjectsEqual({object1}, {object2}): takes in two objects. Console.log a positive assertion message if the passed objects are equal, and console.log a failure message if they are different.

* countLetters('string'): takes in a string and returns a count of each one of the letters containing in the string.

* countOnly([array1], arg): takes in an array and an object. Returns an object containing counts of everything listed in the object.

* eqArrays([array]): takes in two arrays. Returns true if they are equal or false if they are not equal.

* eqObjects({object1}, {object2}): takes in two objects. Returns true if there's a perfect match and false if the objects do not match.

* flatten([array]): takes in an array of arrays and returns a "flattened" version of the array (single level array).

* findKey({obj}, callback): takes in an object and a callback function. Scans the object and returns the first key with a truthy value. If no key is found, returns undefined.

* findKeyByValue({object}): takes in an object and a value, scans the object and returns the first key which contains the given value. Returns undefined, if no key with that given value is found.

* head([array]): takes an array and returns the first item in the array.

* letterPositions([array]): takes in a string and returns an object containing all the indexes of each respective letter.

* map([array], callback): takes in an array to map
and a callback function. Returns a new array depending on the results of the callback function.

* middle([array]): takes in an array and returns the middle element(s) of the given array. For arrays with one or two elements, returns and empty array. For arrays with odd number of elements, returns an array with a single element.For arrays with an even number of elements, returns the two middle elements.

* tail([array]): returns the "tail" of an array, everything except for the first item (head) of the provided array.

* takeUntil([array], callback): takes an array and a callback function, it returns the beginning part of the array. The slice is determined by the callback function.

* without([array1], [array2]): takes an array, scans the arrays using strict equality comparison, and creates an array excluding all provided values.