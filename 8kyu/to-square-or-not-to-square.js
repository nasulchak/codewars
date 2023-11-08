// ❓ DESCRIPTION:
// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

// ✅ SOLUTION:

function squareOrSquareRoot(array) {
    return array.map(i => Math.sqrt(i) % 1 === 0 ? Math.sqrt(i) : Math.pow(i, 2));  
}

const arrayArraysTest = [
    [4, 3, 9, 7, 2, 1],
    [100, 101, 5, 5, 1, 1],
    [1, 2, 3, 4, 5, 6]
]

arrayArraysTest.forEach((array, index) => console.log(`${++index}. Input array: [${array}]\nNew array: [${squareOrSquareRoot(array)}]`))
