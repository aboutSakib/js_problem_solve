function isPalindrome(string) {
  const store = string.toLowerCase();
  return store === store.split("").reverse().join("");
}
console.log(isPalindrome("rotator"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("rotator"));
console.log(isPalindrome("peep"));
