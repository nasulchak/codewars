// ❓ DESCRIPTION:
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.

// ✅ SOLUTION:
function scramble(str1, str2) {
    var charCountStr1 = {};
    var charCountStr2 = {};

    for (var char of str1) {
        charCountStr1[char] = (charCountStr1[char] || 0) + 1;
    }

    for (var char of str2) {
        charCountStr2[char] = (charCountStr2[char] || 0) + 1;
    }

    for (var key in charCountStr2) {
        if (!charCountStr1[key] || charCountStr1[key] < charCountStr2[key]) {
            return false;
        }
    }

    return true;
}

// 🏁 Example usage:
console.log(scramble('rkqodlw', 'world'))