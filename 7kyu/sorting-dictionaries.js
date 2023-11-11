// ❓ DESCRIPTION:
// Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?
// Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).
// The list must be sorted by the value and be sorted largest to smallest.

// ✅ SOLUTION:
function sortDict(dict) {
    return Object.keys(dict).map(key => [+key ? +key : key, dict[key]]).sort((a, b) => b[1] - a[1]);
}

// 🏁 Example usage:
console.log(sortDict({3:1, 2:2, 1:3}))
console.log(sortDict({1:2, 2:4, 3:6}))
