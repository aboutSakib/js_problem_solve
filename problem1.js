function calculateStrikeRate(runs, balls) {
  return parseFloat((runs / balls) * 100).toFixed(2);
}

console.log(calculateStrikeRate(45, 30));
console.log(calculateStrikeRate(100, 60));
console.log(calculateStrikeRate(24, 40));
