function replaceFirst(arr: number[]) {
  if (arr.length <= 1) {
    return arr;
  } else {
    arr.push(arr[0]);
    arr.splice(0, 1);
    return arr;
  }
}

replaceFirst([1, 2, 3, 4]); // == [2, 3, 4, 1]
replaceFirst([1]); // == [1]
replaceFirst([]); // == []
