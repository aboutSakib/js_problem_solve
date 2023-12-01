function parseString(...args) {
  if (args.every((val) => !isNaN(val))) {
    return args.reduce((acc, val) => acc + parseFloat(val), 0);
  } else {
    return args.join(" ");
  }
}

console.log(parseString("21", "24", "40"));

console.log(parseString("Hello", "Alpha"));

console.log(parseString("Summer", "2022"));
