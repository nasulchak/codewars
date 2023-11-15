// ❓ DESCRIPTION:
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// ✅ SOLUTION:
function duplicateCount(input) {
    const charCount = {};
    const normalizedInput = input.toLowerCase();

    for (const char of normalizedInput) {
        if (/[a-z0-9]/.test(char)) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    let duplicateCount = 0;
    for (const count of Object.values(charCount)) {
        if (count > 1) {
            duplicateCount++;
        }
    }

    return duplicateCount;
}

// 🏁 Example usage:
console.log(duplicateCount('Indivisibilities'))