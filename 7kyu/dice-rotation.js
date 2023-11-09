// ❓ DESCRIPTION:
// You are given an array of 6-faced dice. Each die is represented by its face up.
// Calculate the minimum number of rotations needed to make all faces the same.
// 1 will require one rotation to have 2, 3, 4 and 5 face up, but would require two rotations to make it the face 6, as 6 is the opposite side of 1.
// The opposite side of 2 is 5 and 3 is 4.

// ✅ SOLUTION:

const rotations = arr =>
    Math.min(...arr
             .map( el => 
                  arr.reduce( (acc, e)=> acc + (el !== e ) + ( el === 7 - e), 0 )
                 )
            )^0

// 🏁 TESTING
console.log(rotations([1, 1, 1, 1, 1, 6]))