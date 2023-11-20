// ❓ DESCRIPTION:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// ✅ SOLUTION:
function generateHashtag(str) {
    const result = str.replace(/^\s+|\s+$/g, '')
        .replace(/\s+/g, ' ')
        .split(' ')
        .reduce((acc, item) => acc += item[0] ? item[0].toUpperCase() + item.slice(1) : '', '')

    return result.length == 0 || result.length >= 140 ? false : `#${result}`
}
// 🏁 Example usage:
console.log(generateHashtag(' Hello there thanks for trying my Kata'))
