// ❓ DESCRIPTION:
// A series or sequence of numbers is usually the product of a function and can either be infinite or finite.
// In this kata we will only consider finite series and you are required to return a code according to the type of sequence:
// Code	Type	Example
// 0	unordered	[3,5,8,1,14,3]
// 1	strictly increasing	[3,5,8,9,14,23]
// 2	not decreasing	[3,5,8,8,14,14]
// 3	strictly decreasing	[14,9,8,5,3,1]
// 4	not increasing	[14,14,8,8,5,3]
// 5	constant	[8,8,8,8,8,8]
// You can expect all the inputs to be non-empty and completely numerical arrays/lists - no need to validate the data; do not go for sloppy code, as rather large inputs might be tested.
// Try to achieve a good solution that runs in linear time; also, do it functionally, meaning you need to build a pure function or, in even poorer words, do NOT modify the initial input!

// ✅ SOLUTION:
function sequenceClassifier(arr) {
    const isIncreasing = arr.every((num, index) => index === 0 || num > arr[index - 1]);
    const isDecreasing = arr.every((num, index) => index === 0 || num < arr[index - 1]);
    const isConstant = arr.every((num, index) => index === 0 || num === arr[index - 1]);

    if (isIncreasing) return 1;
    if (isDecreasing) return 3;
    if (isConstant) return 5;

    const isNonDecreasing = arr.every((num, index) => index === 0 || num >= arr[index - 1]);
    const isNonIncreasing = arr.every((num, index) => index === 0 || num <= arr[index - 1]);

    if (isNonDecreasing) return 2;
    if (isNonIncreasing) return 4;

    return 0;
}

// 🏁 Example usage:
console.log(sequenceClassifier([3, 5, 8, 1, 14, 3]))
console.log(sequenceClassifier([8, 8, 8, 8, 8, 8]))