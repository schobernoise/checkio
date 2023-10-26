function splitPairs(str: string) {
  let arr = str.split("");
  if (arr.length % 2 != 0) {
    arr.push("_");
  }

  let newArr = arr.reduce(function (result, value, index, array) {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);
  return newArr.map((item) => item.join(""));
}

splitPairs("abcd"); //== ['ab', 'cd']
splitPairs("abc"); //== ['ab', 'c_']
splitPairs("abcdf"); //== ['ab', 'cd', 'f_']
splitPairs("a"); //== ['a_']
splitPairs(""); //== []
