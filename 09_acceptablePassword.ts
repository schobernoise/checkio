// the length should be bigger than 6;
// should contain at least one digit, but it cannot consist of just digits;
// if the password is longer than 9 - previous rule is not required.

const isAcceptablePassword = (password: string) =>
  Array.from(password).length > 6
    ? Array.from(password).length > 9
      ? true
      : Array.from(password).some((item: any) =>
          item == " " ? false : !isNaN(+item)
        ) && !Array.from(password).every((val: any) => !isNaN(+val))
      ? true
      : false
    : false;

console.log(isAcceptablePassword("short"), false); // false
console.log(isAcceptablePassword("short54"), true); // true
console.log(isAcceptablePassword("muchlonger"), true); // true
console.log(isAcceptablePassword("ashort"), false); // false
console.log(isAcceptablePassword("notshort"), false); // false
console.log(isAcceptablePassword("muchlonger5"), true); // true
console.log(isAcceptablePassword("sh5"), false); // false
console.log(isAcceptablePassword("1234567"), false); // false
console.log(isAcceptablePassword("12345678910"), true); // true
