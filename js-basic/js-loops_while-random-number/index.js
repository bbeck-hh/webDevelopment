console.clear();

let number = 0;
let count = 0;
const numberToStop = 12;
console.log(`We look to beat the number: ${numberToStop}\n${'*'.repeat(30)}`);

// --v-- write or modify code below this line --v--
while (number <= numberToStop) {
  number = Math.floor(Math.random() * 20);
  console.log(`Number to check: ${number}`);

  count++;
}
// --^-- write or modify code above this line --^--

console.log(
  `${'*'.repeat(30)}\nThe number that ended the loop was ${number} and it took ${count} rounds to do this!`
);

