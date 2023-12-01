function getPositiveNumber(array) {
  return array.filter((x) => x > 0);
}
const input = [2, -5, 10, -3, 8, -1, 0, 7];
const positiveNumber = getPositiveNumber(input);
console.log(positiveNumber);
