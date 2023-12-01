function mergeArrays(arr1, arr2) {
  const mergeArrays = arr1.concat(arr2);
  const sortArrays = mergeArrays.sort((a, b) => a - b);
  return sortArrays;
}
console.log(mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
