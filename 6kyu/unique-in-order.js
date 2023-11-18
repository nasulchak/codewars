// ❓ DESCRIPTION:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// ✅ SOLUTION:
const uniqueInOrder = (s) => {
    return (typeof s === 'string' ? s : s.join(''))
        .replace(/(.)\1+/g, '$1')
        .split('')
        .map(item => isNaN(item) ? item : parseInt(item));
}

// 🏁 Example usage:
console.log(uniqueInOrder('AAAABBBCCDAABBB'))