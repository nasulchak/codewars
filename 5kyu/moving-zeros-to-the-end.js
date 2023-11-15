// ❓ DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// ✅ SOLUTION:
function moveZeros(arr) {
    const arrRemove = arr.map((item, index) => {
      if (item === 0) {
        arr.push(0)
        return index
      }
    })
  
    return arr.filter((item, index) => !arrRemove.includes(index))
  }
  
// 🏁 Example usage:
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))