// ❓ DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.


// ✅ SOLUTION:
function findOdd(A) {
    let result = 0;

    for (let i = 0; i < A.length; i++) {
      result ^= A[i];
    }

    return result;
}

// 🏁 Example usage:
console.log(findOdd([1,1,2,4,2,4,3]))

