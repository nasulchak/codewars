// ❓ DESCRIPTION:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// ✅ SOLUTION:

function evenOrOdd(number) {
    return number % 2 == 0 ? "Even" : "Odd"
}

[2, 7, -42, -7, 0].forEach(number => console.log(`Number ${number} is ${evenOrOdd(number)}`))