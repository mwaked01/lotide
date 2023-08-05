# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @waked01/lotide`

**Require it:**

`const _ = require('@waked01/lotide');`

**Call it:**
`const results = _AssertArraysEqual([1, 2, 3],[1,2,3]) // => ✅✅✅ Assertion Passed: [1, 2, 3] === [1, 2, 3]`

`const results = _.assertEqual('LHL', 'LHL') // => ✅✅✅ Assertion Passed: 'LHL' === 'LHL'`

`const results = _.assertObjectsEqual(object1,object1) // => ✅✅✅ Assertion Passed:object1 === object1`

`const results = _.countLetters(this is a sentance)['s'] // => 3`

`const results = _.countOnly(['Karl',Jay], {'Karl': true, Jay: false}) // => {Karl: 1}`

`const results = _.eqArrays([1, 2, 3], [1,2,3]) // => true`

`const results = _.eqObjects({ color: "red", size: "medium" }, { size: "medium", color: "red" }) // => true`

`const results = _.findKey({'Blue Hill': { stars: 1 }},x => x.stars === 1) // => 'Blue Hill'`

`const results = _.findKeyByValue({'sci_fi': "The Expanse", 'drama': "The Wire"}, 'The Wire') // => 'drama'`

`const results = _.flatten([1, 2, [3, 4], 5, [6]]) // => [1,2,3,4,5,6]`

`const results = _.head([1, 2, 3]) // => [1]`

`const results = _.letterPositions('hello')['l'] // => [2, 3]`

`const results = _.map([1, 5, 9], num => num * 2) // => [2, 10, 18]`

`const results = _.middle([1,2,3,4,5]) // => [3]`

`const results = _.tail([1, 2, 3]) // => [2, 3]`

`const results = _.takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)) // => [1, 2, 5, 7, 2]`

`const results = _.without([1, 2, 3], [1]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: logs a pass assertion statement when actual has the same value as expected and they are both array type. Otherwise, log a fail assertion statement.

* `assertEqual(actual, expected)`: logs a pass assertion statement when actual has the same value as expected and they are both of primative type values. Otherwise, log a fail assertion statement.

* `assertObjectsEqual(actual, expected)`: logs a pass assertion statement when actual has the same value as expected and they are both object type. Otherwise, log a fail assertion statement.

* `countLetters(sentance)`: returns an objects which stores each letter from sentance as a key in an object with the value containing the number of times that letter is peresent in the sentance.

* `countOnly(allItems, itemsToCount)`: takes in an array as the first argument and an object as the second. Then returns an objects which stores each value from the array as a key with the value of the number of times in which that array value appears in the array.

* `eqArrays(firstArray,secondArray)`: Takes in 2 arrays as arguments and returns true if the both are arrays with the same values. Otherwise, returns false.

* `eqObjects(object1, object2)`: Takes in 2 objects as arguments and returns true if the both are objects with the same values. Otherwise, returns false.

* `findKeyByValue(obj, keyVal)`: Returns the key of an object given an object as the first argument and a key value as the second.

* `flatten(nestedArray)`: Takes in the nested array values and returns a one dimentional array.

* `head(arr)`: Returns the head of an array (item at index 0)

* `letterPositions(sentance)`: given a sentance as teh argument, retuns an object conatining the letters of teh sentance as keys with the values of the indext location of where each letter is located within the sentance.

* `map(array, callback)`: passes the array from the first argument into a callback function in the second argument and returns an array which meets the callback functions results.

* `middle(arr) `: returns an array that conatins the middle elements of the array given as the argument. if the array length is an odd number, the middle number of the array will be returned. if the array is an even number then the 2 middle elements will be returned. if only one number is passed in the argument array, then an empty array will be returned. 

* `tail(arr) `: Returns the tail of an array (item after index 0)

* `takeUntil(array, callback)`: returns an array which has the first elements of the given array that match up to the callback function conditions.

* `without(source,itemsToRemove)`: given 2 arrays as the arguments, returns an array which contains the values from the source array excluding the elements indicated in the itemsToRemove array.
