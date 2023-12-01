function findShortestWord(str) {
  let words = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");

  let shortWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortWord.length) {
      shortWord = words[i];
    }
  }
  return shortWord;
}
console.log(findShortestWord("the quick brown fox jumps over the lazy dog"));
