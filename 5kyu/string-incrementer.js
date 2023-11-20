// ❓ DESCRIPTION:
// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// ✅ SOLUTION:
function incrementString(s) {
    const num = (/(\d+$)/g).exec(s)
    return num ? s.replace(/(\d+$)/g, (n) => (parseInt(num) + 1).toString().padStart(num[0].length, '0')) : `${s}1`
}

// 🏁 Example usage:
console.log(incrementString('foobar23'))