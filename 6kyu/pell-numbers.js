// ❓ DESCRIPTION:
// The Pell sequence is the sequence of integers defined by the initial values
// P(0) = 0, P(1) = 1
// and the recurrence relation
// P(n) = 2 * P(n-1) + P(n-2)
// The first few values of P(n) are
// 0, 1, 2, 5, 12, 29, 70, 169, 408, 985, 2378, 5741, 13860, 33461, 80782, 195025, 470832, ...
// Task
// Your task is to return the nth Pell number

// ✅ SOLUTION:
function pell(n) {
    let p = [0n, 1n];
  
    for (let i = 2; i <= n; i++) {
      p[i] = 2n * p[i - 1] + p[i - 2];
    }
    
    return p[n];
  }
  
// 🏁 Example usage:
console.log(pell(8))