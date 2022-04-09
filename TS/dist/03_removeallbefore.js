function removeAllBefore(array, number) {
    var position = array.indexOf(number);
    if (position == -1)
        return array;
    return array.slice(position);
}
removeAllBefore([1, 2, 3, 4, 5], 3); // == [3, 4, 5];
removeAllBefore([1, 1, 2, 2, 3, 3], 2); // == [2, 2, 3, 3];
removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2); // == [2, 4, 2, 3, 4];
removeAllBefore([1, 1, 5, 6, 7], 2); // == [1, 1, 5, 6, 7];
removeAllBefore([], 0); // == [];
