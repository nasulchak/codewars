// ❓ DESCRIPTION:
// In this kata you need to build a function to return either true/True or false/False 
//if a string can be seen as the repetition of a simpler/shorter subpattern or not.

// ✅ SOLUTION:
function hasSubpattern(string){
    const len = string.length;
  
    for (let patternLen = 1; patternLen <= len / 2; patternLen++) {
      if (len % patternLen === 0) {
  
        const pattern = string.slice(0, patternLen);
        let isRepeated = true;
  
        for (let i = patternLen; i < len; i += patternLen) {
          if (string.slice(i, i + patternLen) !== pattern) {
            isRepeated = false;
            break;
          }
        }
  
        if (isRepeated) {
          return true;
        }
      }
    }
  
    return false;
  }
  
// 🏁 Example usage:
console.log(hasSubpattern('abababab'))