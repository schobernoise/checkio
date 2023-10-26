function maxDigit(num) {
    var digits = num.toString().split('');
    var realDigits = digits.map(Number);
    return Math.max(...realDigits);
}
maxDigit(0); // == 0
maxDigit(52); // == 5
maxDigit(634); // == 6
maxDigit(1); // == 1
maxDigit(10000); // == 1
