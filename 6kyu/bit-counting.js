// ❓ DESCRIPTION:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
// You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// ✅ SOLUTION:
var countBits = function(n) {
    return n.toString(2).split('').filter(item => Number(item) === 1).length
};

// 🏁 Example usage:
console.log(countBits(13245))