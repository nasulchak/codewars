// ❓ DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// ✅ SOLUTION:
function solution(s) {
    return s ? s.match(/(\w\w)|(\w)/g).map(p => p.length === 1 ? p + '_' : p) : []
}

// 🏁 Example usage:
console.log(solution("abcdef"))