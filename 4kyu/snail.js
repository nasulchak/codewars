// ❓ DESCRIPTION:
// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

// ✅ SOLUTION:
snail = function (M) {
    var topRow = 0
    var leftCol = 0
    var btmRow = M.length - 1
    var rightCol = M[0].length - 1
    const result = []

    while (topRow <= btmRow && leftCol <= rightCol) {
        for (var col = leftCol; col <= btmRow; col++) {
            result.push(M[topRow][col])
        }
        topRow++

        for (var row = topRow; row <= btmRow; row++) {
            result.push(M[row][rightCol])
        }
        rightCol--

        for (var col = rightCol; col >= leftCol; col--) {
            result.push(M[btmRow][col])
        }
        btmRow--

        for (var row = btmRow; row >= topRow; row--) {
            result.push(M[row][leftCol])
        }
        leftCol++

    }

    return result
}
// 🏁 Example usage:
console.log(snail([[1,2,3],[4,5,6],[7,8,9]]))