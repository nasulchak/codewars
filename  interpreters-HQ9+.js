// ❓ DESCRIPTION:
// You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

// If the input is 'H', return 'Hello World!'
// If the input is 'Q', return the input
// If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
// ...
// ...
// ...
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// For everything else, don't return anything (return null in C#, None in Rust, and "" in Haskell).
// (+ has no visible effects so we can safely ignore it.)

// ✅ SOLUTION:

function HQ9(input) {
    const actions = {
      'H': () => 'Hello World!',
      'Q': () => 'Q',
      '9': () => bottlesOfBeer(),
    };
  
    return actions[input] ? actions[input]() : undefined;
  }
  
  function bottlesOfBeer() {
    let lyrics = '';
    for (let i = 99; i > 0; i--) {
      lyrics += `${i} bottle${i !== 1 ? 's' : ''} of beer on the wall, ${i} bottle${i !== 1 ? 's' : ''} of beer.\n`;
      lyrics += `Take one down and pass it around, ${i - 1 === 0 ? 'no more' : i - 1} bottle${i - 1 !== 1 ? 's' : ''} of beer on the wall.\n`;
    }
    lyrics += 'No more bottles of beer on the wall, no more bottles of beer.\n';
    lyrics += 'Go to the store and buy some more, 99 bottles of beer on the wall.';
    return lyrics;
  }
  
  // Example usage:
  console.log(HQ9('H')); // Output: Hello World!
  console.log(HQ9('Q')); // Output: Q
  console.log(HQ9('9')); // Output: (Lyrics of 99 Bottles of Beer)
  console.log(HQ9('A')); // Output: null