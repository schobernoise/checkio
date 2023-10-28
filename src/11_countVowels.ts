// This function should take a string as an input and return the count of vowels (a, e, i, o, u) in the string.
// The function should be case-insensitive.

const VOWELS = ["a", "e", "i", "o", "u"];

function countVowels(text: string): number {
  var count = 0;
  for (let c of Array.from(text)) {
    VOWELS.some((t) => c.toLowerCase() == t) && count++;
  }
  return count;
}

// These "asserts" are used for self-checking
console.log(countVowels("hello"), 2);
console.log(countVowels("openai"), 4);
console.log(countVowels("typescript"), 2);
console.log(countVowels("a"), 1);
console.log(countVowels("b"), 0);
console.log(countVowels("aeiou"), 5);
console.log(countVowels("AEIOU"), 5);
console.log(countVowels("The quick brown fox"), 5);
console.log(countVowels("Jumps over the lazy dog"), 6);
console.log(countVowels(""), 0);
