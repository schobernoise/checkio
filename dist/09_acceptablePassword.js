// the length should be bigger than 6;
// should contain at least one digit, but it cannot consist of just digits;
// if the password is longer than 9 - previous rule is not required.
// a string should not contain the word "password" in any case.
//  must contain at least 3 different (case-sensitive) letters (or digits) even if it is longer than 10
const isAcceptablePassword = (password) => Array.from(new Set(password)).length > 2 &&
    !password.toLowerCase().includes("password") &&
    Array.from(password).length > 6
    ? Array.from(password).length > 9
        ? true
        : Array.from(password).some((item) => item == " " ? false : !isNaN(+item)) && !Array.from(password).every((val) => !isNaN(+val))
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
console.log(isAcceptablePassword("password12345"), false);
console.log(isAcceptablePassword("PASSWORD12345"), false);
console.log(isAcceptablePassword("pass1234word"), true);
console.log(isAcceptablePassword("aaaaaa1"), false);
console.log(isAcceptablePassword("aaaaaabbbbb"), false);
console.log(isAcceptablePassword("aaaaaabb1"), true);
console.log(isAcceptablePassword("abc1"), false);
console.log(isAcceptablePassword("abbcc12"), true);
console.log(isAcceptablePassword("aaaaaaabbaaaaaaaab"), false);
