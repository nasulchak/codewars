// ❓ DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// ✅ SOLUTION:
function pigIt(str) {
    return str.split(' ').map(el => /\w/.test(el) ? `${el.slice(1, el.length)}${el[0]}ay` : el).join(' ')
}

// 🏁 Example usage:
console.log(pigIt('Pig latin is cool'))
console.log(pigIt('Hello world !'))