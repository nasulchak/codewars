// ❓ DESCRIPTION:
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// ✅ SOLUTION:
const sortArray = (array) => {
    const oddNumbers = array.filter((value) => value % 2 !== 0).sort((a, b) => a - b);
    return array.map((value) => value % 2 !== 0 ? oddNumbers.shift() : value);
};

// 🏁 Example usage:
console.log(sortArray([1,2,5,7,3,6,89,3,6]))