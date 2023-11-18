// ❓ DESCRIPTION:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// ✅ SOLUTION:
const toCamelCase = (s) => s.replace(/[-_](.)/g, (m, g) => g.toUpperCase())

// 🏁 Example usage:
console.log(toCamelCase('the-stealth-warrior'))
