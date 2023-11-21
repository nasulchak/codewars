// ❓ DESCRIPTION:
// Write a program that will calculate the number of trailing zeros in a factorial of a given number.
// N! = 1 * 2 * 3 *  ... * N
// Be careful 1000! has 2568 digits...

// ✅ SOLUTION:
function zeros (n) {
    var count = 0;
    for (var i = 5; i <= n; i *= 5) {
        count += Math.floor(n / i);
    }
    return count;
}

// 🏁 Example usage:
console.log(zeros(6))