// ❓ DESCRIPTION:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// ✅ SOLUTION:

function filter_list(l) { 
    return l.filter(item => typeof(item) === 'number')
  }

// 🏁 Example usage:

console.log(filter_list([1,2,'a','b']))
console.log(filter_list([1,'a','b',0,15]))
console.log(filter_list([1,2,'aasf','1','123',123]))