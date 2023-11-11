// ❓ DESCRIPTION:
// Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. 
//To pass the test, a student cannot accumulate more than 18 demerit points.
// At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.
// Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.

// ✅ SOLUTION:

function passed (list) { 
    const arrPass = list.filter(item => item <= 18)
    return (!arrPass.length ? "No pass scores registered." : Math.round(arrPass.reduce((acc, i) => acc + i, 0) / arrPass.length))
  } 

// 🏁 Example usage:
console.log(passed([10, 10 ,10 , 18, 20 ]))