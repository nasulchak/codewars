// ❓ DESCRIPTION:
// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. 
// The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. 
// For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// ✅ SOLUTION:
function solution(inputList) {
    let result = []

    for (let i = 0; i < inputList.length; i++) {
        let start = inputList[i];
        let end = inputList[i];

        while (inputList[i + 1] - inputList[i] === 1) {
            end = inputList[i + 1]
            i++
        }

        if (end - start >= 2) {
            result.push(`${start}-${end}`)
        } else {
            result.push(start)
            if (end !== start) {
                result.push(end)
            }
        }
    }

    return result.join(',')
}

// 🏁 Example usage:
console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))