function findMissingNumber(array) {
  const n = array.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actulSum = array.reduce((acc, num) => acc + num, 0);
  return expectedSum - actulSum;
}
const inputArray = [1, 2, 3, 5, 6, 7, 8];
const misingNumber = findMissingNumber(inputArray);
console.log(misingNumber);
