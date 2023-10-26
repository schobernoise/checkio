// the length should be bigger than 6;
// should contain at least one digit.

const acceptablePassword = (str: string) =>
  str.length > 6 &&
  Array.from(str).some((item: any) => (item == " " ? false : !isNaN(+item))) &&
  !Array.from(str).every((val: any) => !isNaN(+val))
    ? true
    : false;

console.log(acceptablePassword("short"));
console.log(acceptablePassword("much longer"));
console.log(acceptablePassword("ashort"));
console.log(acceptablePassword("muchlonger5"));
console.log(acceptablePassword("sh5"));
console.log(acceptablePassword("1234567"));
