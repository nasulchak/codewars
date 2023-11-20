// ❓ DESCRIPTION:
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// ✅ SOLUTION:
function maxSequence(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let maxEndingHere = 0;
    let maxSoFar = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar > 0 ? maxSoFar : 0;
}

// 🏁 Example usage:
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
