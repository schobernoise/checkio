function beginningZeros(str) {
    let count = 0;
    for (let el of str.split("")) {
        if (el == "0") {
            count++;
        }
        else {
            return count;
        }
    }
    return count;
}
beginningZeros("100"); // == 0
beginningZeros("001"); // == 2
beginningZeros("100100"); // == 0
beginningZeros("001001"); // == 2
beginningZeros("012345679"); // == 1
beginningZeros("0000"); // == 4
