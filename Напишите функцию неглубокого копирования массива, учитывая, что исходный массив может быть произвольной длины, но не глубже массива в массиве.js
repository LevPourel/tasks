'use strict';
let arr1 = [[1,2], [3,4]];
let arr2 = aCopy(arr1);
function aCopy(massive) {
    return massive.slice();
}
arr1.push([5,6]);

console.log(arr1); // [[1,2], [3,4], [5,6]]
console.log(arr2); // [[1,2], [3,4]]

// --

arr1 = [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']];
arr2 = aCopy(arr1);

arr1.unshift(['z']);

console.log(arr1); // [['z'], ['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]
console.log(arr2); // [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]