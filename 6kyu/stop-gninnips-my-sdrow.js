// ❓ DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// ✅ SOLUTION:
function spinWords(string) {
    return string.split(" ").map(item => item.length > 4 ? item.split('').reverse().join('') : item).join(' ')
}

// 🏁 Example usage:
console.log(spinWords("This is another test"))