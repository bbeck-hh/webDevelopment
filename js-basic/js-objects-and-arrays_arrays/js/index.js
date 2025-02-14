console.clear();
console.log(`
${'*'.repeat(10)} EXERCISE 1 ${'*'.repeat(10)}`);
// EXERCISE 1
// Modify the array `exampleArray` so that it contains a number and a string.

const exampleArray = [true, 23, "string"];
console.log(exampleArray);

console.log(`
${'*'.repeat(10)} EXERCISE 2 ${'*'.repeat(10)}`);
// EXERCISE 2
// Nest an array inside `nestedArray`. After completing this, `nestedArray` should contain an array as one of its elements.

const nestedArray = ["example", 10, true, [2, 3, 4]];
console.log(nestedArray);

console.log(`
${'*'.repeat(10)} EXERCISE 3 ${'*'.repeat(10)}`);
// EXERCISE 3
// Change the value of `firstNumber` to equal the first value in the `numbers` array using bracket notation.

const numbers = [20, 10, 50];

const firstNumber = numbers[0];
console.log(firstNumber);

console.log(`
${'*'.repeat(10)} EXERCISE 4 ${'*'.repeat(10)}`);
// EXERCISE 4
// Update the first fruit in `fruits` to be "mango" instead of "apple".

const fruits = ["apple", "banana", "grapefruit"];
fruits[0] = "mango";
console.log(fruits);

console.log(`
${'*'.repeat(10)} EXERCISE 5 ${'*'.repeat(10)}`);
// EXERCISE 5
// Set the value of `nestedNumber` to the fourth number in the `nestedNumbers` array using bracket notation.

const nestedNumbers = [10, [20, 30, [40, 50]]];

const nestedNumber = nestedNumbers[1][2][0];
console.log(nestedNumber);

console.log(`
${'*'.repeat(10)} EXERCISE 6 ${'*'.repeat(10)}`);
// EXERCISE 6
// Use the `.push()` array method to add "rat" to the end of `petsWithPush`.

const petsWithPush = ["dog", "cat", "rabbit"];
petsWithPush.push("rat");
console.log(petsWithPush);

console.log(`
${'*'.repeat(10)} EXERCISE 7 ${'*'.repeat(10)}`);
// EXERCISE 7
// Use the `.pop()` method to remove the last item from `fruitsWithPop`.

const fruitsWithPop = ["apple", "banana", "mango"];
fruitsWithPop.pop();
console.log(fruitsWithPop);


console.log(`
${'*'.repeat(10)} EXERCISE 8 ${'*'.repeat(10)}`);
// EXERCISE 8
// Use the `.unshift()` array method to add "hamster" to the beginning of `unshiftedPets`.

const unshiftedPets = ["dog", "cat", "rabbit"];
unshiftedPets.unshift("hamster");
console.log(unshiftedPets);

console.log(`
${'*'.repeat(10)} EXERCISE 9 ${'*'.repeat(10)}`);
// EXERCISE 9
// Use the `.shift()` method to remove the first item from `shiftedFruits`.

const shiftedFruits = ["apple", "banana", "mango"];
shiftedFruits.shift();
console.log(shiftedFruits);


export {
  exampleArray, firstNumber,
  fruits, fruitsWithPop, nestedArray, nestedNumber,
  petsWithPush, shiftedFruits, unshiftedPets
};

