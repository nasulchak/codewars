// ❓ DESCRIPTION:
// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise

// ✅ SOLUTION:

function containAllRots(string, arr) {
    const arrString = string.split('')
    
    for (let i = 0; i < arrString.length; i++) {
      arrString.unshift(arrString.pop())
      
      if (!arr.includes(arrString.join(''))) {
        return false
      }
    }
    
    return true
  }

// 🏁 Example usage:

console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]))
console.log(containAllRots("Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]))