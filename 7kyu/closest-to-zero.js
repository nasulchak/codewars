// ❓ DESCRIPTION:
// Simply find the closest value to zero from the list. Notice that there are negatives in the list.

// List is always not empty and contains only integers. Return None if it is not possible to define only one of such values. 
// And of course, we are expecting 0 as closest value to zero.

// ✅ SOLUTION:

function closest(arr) {
    const min = Math.min(...arr.map(item => Math.abs(item)))

    return [...new Set(arr)].reduce((acc, i) => {
        return Math.abs(i) == min ? acc + 1 : acc
    }, 0) > 1 ? null
        : arr.includes(-min) ? -min : min

}

function closestRefactoring(arr) {
    const sorted = [...new Set(arr)].sort((a, b) => Math.abs(a) - Math.abs(b));
    return Math.abs(sorted[0]) !== Math.abs(sorted[1]) ? sorted[0] : null;
}

// 🏁 Example usage:
console.log(`The closest value to zero is : ${closest([2, 4, -1, -3])}`)
console.log(`The closest value to zero is : ${closestRefactoring([2, 4, -1, -3])}`)
