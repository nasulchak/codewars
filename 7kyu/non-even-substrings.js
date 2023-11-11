// ❓ DESCRIPTION:
// Given a string of integers, return the number of odd-numbered substrings that can be formed.
// For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.
// solve("1341") = 7. See test cases for more examples.
// Good luck!
// If you like substring Katas, please try

// ✅ SOLUTION:

function solve(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            const substring = str.substring(i, j + 1);
            const number = parseInt(substring, 10);

            if (isOddString(substring)) {
                count++;
            }
        }
    }

    return count;
}

function isOddString(str) {
    const lastDigit = parseInt(str.charAt(str.length - 1), 10);
    return lastDigit % 2 !== 0;
}

// 🏁 Example usage:
console.log(solve('2356345324234'))
