function isAllUpper(str) {
    return str === str.toUpperCase();
}
isAllUpper('ALL UPPER'); // == true
isAllUpper('all lower'); // == false
isAllUpper('mixed UPPER and lower'); //== false
isAllUpper(''); // == true
