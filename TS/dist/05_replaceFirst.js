function replaceFirst(arr) {
    if (arr.length <= 1) {
        console.log(arr);
        return arr;
    }
    else {
        arr.splice(arr.length - 1, 1, arr[0]);
        arr.splice(0);
        console.log(arr);
        return arr;
    }
}
replaceFirst([1, 2, 3, 4]); // == [2, 3, 4, 1]
replaceFirst([1]); // == [1]
replaceFirst([]); // == []
