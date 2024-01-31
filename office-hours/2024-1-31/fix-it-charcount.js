// This function is broken. Read through the function and the tests below
// to gain understanding of what the code is currently doing. From that
// understanding you can begin to formulate what needs to be fixed.
function countCharacters(text) {
  const chars = text.split(''); //array of strings, should be the characters
  const counts = {}; // object, in the form { "a": 2, "b": 1, ...  }

  for(let c = 0; c < chars.length; c++) {
    // How should we be using c?
    // chars[c] represents a character from the chars array ("T", "a", etc.)
    const char = chars[c];
    // What does char store?
    // The current letter from the chars away, which is a string
    // How should we be using char?
    if(counts[char] === undefined) {
      counts[char] = 1;
    } else {
      counts[char]++;
    }
  }

  return counts;
}

// These tests do not require changes. Use them
// as examples of the expected outcome.
const text1 = "This is a string with lots of s's."
console.log(countCharacters(text1));
// { "s": 6, "i": 4, ... }

const text2 = "abcABCxYZXyz";
console.log(countCharacters(text2));
// { a: 1, b: 1, ...  }