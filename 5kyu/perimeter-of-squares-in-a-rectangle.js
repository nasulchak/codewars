// ❓ DESCRIPTION:
// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. 
// It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 
// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing

// ✅ SOLUTION:
function perimeter(n) {
    const arrF = [1, 1]
    for (let i = 1; i < n; i++) arrF.push(arrF[i - 1] + arrF[i])
    return n == 0 ? 4 : 4 * arrF.reduce((a, i) => a += i, 0)
}

// 🏁 Example usage:
console.log(perimeter(7))