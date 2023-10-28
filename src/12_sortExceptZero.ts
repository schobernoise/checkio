//  Sort the integers in sequence in sequence. But the position of zeros should not be changed.

function exceptZero(items: number[]): number[] {
  // your code here
  return [];
}

// These "asserts" are used for self-checking
console.log(
  exceptZero([5, 3, 0, 0, 4, 1, 4, 0, 7]),
  [1, 3, 0, 0, 4, 4, 5, 0, 7]
);
console.log(exceptZero([0, 2, 3, 1, 0, 4, 5]), [0, 1, 2, 3, 0, 4, 5]);
console.log(exceptZero([0, 0, 0, 1, 0]), [0, 0, 0, 1, 0]);
console.log(exceptZero([4, 5, 3, 1, 1]), [1, 1, 3, 4, 5]);
console.log(exceptZero([0, 0]), [0, 0]);
