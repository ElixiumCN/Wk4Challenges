// Activity 2...
// The array method .map is an example of a higher-order
// function.
// Declare a variable with five numbers, then use .map to iterate
// through the array and multiply each array item by 3.


let arr = [3, 4, 5, 6, 8];

let modifiedArr = arr.map(function(element) {
    return element * 3;
});

console.log(modifiedArr);