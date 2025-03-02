// https://github.com/wd-bootcamp/web-exercises/blob/main/sessions/mock-interview-1/simple-algorithms_solutions/index.js


// Find the maximum
function maxOfTwoNumbers(num1, num2) {
  // TODO:  
  if (num1 > num2) {
    return num1;
  }
  return num2;

  // return num1 > num2 ? num1 : num2;
}
console.log(">" + maxOfTwoNumbers(13, 5));
//#####################################################################

console.log(`
${'*'.repeat(10)} Find the longest word ${'*'.repeat(10)}`);
// Find the longest word

const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho",];

function findLongestWord(words) {
  let longestWord = "";
  words.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}
console.log(`The longest word is: ${findLongestWord(words)}`);
//#####################################################################

console.log(`
${'*'.repeat(10)} Calculate the sum ${'*'.repeat(10)}`);
// Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
}
console.log(`The sum of the numbers is: ${sumNumbers(numbers)}`);
//#####################################################################

console.log(`
${'*'.repeat(10)}  Calculate the average length of the words  ${'*'.repeat(10)}`);
// Calculate the average length of the words 

const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique"
];

function averageWordLength(words) {
  // Sum of the length of each word
  // Use array forEch to get the length of each word
  // sum = sum + word.length
  // Number of words
  // Divide by the number of words
  let sum = 0;
  words.forEach((word) => {
    sum += word.length;
  });
  return sum / words.length;

}
console.log(`The average length of the words is: ${averageWordLength(words2)}`);
//#####################################################################

console.log(`
${'*'.repeat(10)} Unique arrays - return an array without duplicates ${'*'.repeat(10)}`);
// Unique arrays - return an array without duplicates
const words3 = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(words) {
  // TODO:
  // Create a new array to store the unique words
  // itearate over the array && check if the word is already in the new array
  // if not, add it to the new array
  const uniqueWords = [];
  words3.forEach((word) => {
    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word);

    }
  })
  return uniqueWords;
}
console.log(`Here are the orignal words: ${words3}`);
console.log(`The unique words are: ${uniquifyArray(words3)}`);
//#####################################################################

console.log(`
${'*'.repeat(10)} Find elements ${'*'.repeat(10)}`);
// Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(haystack, needle) {
  // array method includes(true or false) to check if the word is in the array
  haystack.includes(needle);
}
console.log(`Here is the haystack: ${wordsFind}`);
console.log(`The needle(word) 'machine' is in the hasystack(array): ${doesWordExist(wordsFind, 'machine')}`);
//#####################################################################

console.log(`
${'*'.repeat(10)}  Count repetition ${'*'.repeat(10)}`);
// Count repetition

const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter',
  'machine',
];

function howManyTimes(haystack, needle) {
  // create a counter variable
  // Use an array(haystack) an iterate over it
  // use an if statement to check if the word is the same as the needle
  // if true set counter to counter + 1
  // return the counter -> after the loop!
  let counter = 0;
  let indexFromDuplicate = [];
  haystack.forEach((word, index) => {
    if (word === needle) {
      counter++;
      indexFromDuplicate.push(index + 1); // Start counting the index array from 1
    }
  })
  return { counter, indexFromDuplicate }; // store the counter and the index of the duplicate
}
const result = howManyTimes(wordsCount, 'matter');

console.log(`Here is the haystack: ${wordsCount}`);
console.log(`The index of the first occurence of the word 'matter' is: ${howManyTimes(wordsCount, 'matter').indexFromDuplicate}`);

console.log(`The needle(word) 'matter' occurs in the haystack(array) ${result.counter} times`);
//#####################################################################

console.log(`
${'*'.repeat(10)} A generic sum function ${'*'.repeat(10)}`);
// Bonus: A generic sum function
// for strings use the length of the string, for booleans use 1 and 0
const mixedArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  42,
  7,
  1995,
  23,
  true,
  false
];

function sum(array) {
  // create a sum variable
  // iterate over the array(mixedArray)
  // check the type of the element -> if statement
  // if string -> sum = sum + element.length
  // if number -> sum = sum + element
  // if boolean -> sum = sum + 1 or 0
  // return the sum
  let sum = 0;
  mixedArray.forEach((arrElement) => {
    if (typeof arrElement === 'string') {
      sum += arrElement.length;
    } else if (typeof arrElement === 'number') {
      sum += arrElement;
    } else if (typeof arrElement === 'boolean') {
      sum += arrElement ? 1 : 0;
    }
  })
  return sum;
}
console.log(`The sum of the mixed array is: ${sum(mixedArray)}`);
//#####################################################################


console.log(`
${'*'.repeat(10)} Write a function that calculates ... ${'*'.repeat(10)}`);
// Bonus: Write a function that calculates the greatest product of four
// numbers that is either horizontally or vertically in the array

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];
const matrixTest = [
  [1, 2, 2, 1, 4, 2, 2, 1],
  [2, 4, 2, 2, 3, 4, 1, 2],
  [1, 4, 2, 3, 2, 3, 4, 3],
  [1, 2, 2, 1, 2, 2, 4]
]

function greatestProduct(matrix) {
  // Create two variables (prodHorizontal, prodVertical) to store the greatest product
  // Iterate over the matrix and calculate the product of 2 numbers horizontally
  // NestedArray - Start(matrix) with the first row and multiply the first 2 numbers, then go to the next 2 numbers
  // Check with if statement wich product is graeter and store the greatest in prodHorizontal variable

  // Iterate over the matrix and calculate the product of 2 numbers vertically,
  //  and use the index row0[0] x row1[0] x row2[0] x row3[0] then go to row0[1] x row1[1] x row2[1] x row3[1]
  // Check with if statement wich product is graeter and store the greatest in prodVertical variable.

  let maxProduct = 0;
  // Horizontal  Loop every row in the matrix lentgh
  for (let i = 0; i < matrix.length; i++) {
    // Loop every rowElement in the row
    for (let rowElement = 0; rowElement < matrix[i].length - 3; rowElement++) {
      //console.log(matrix[i][rowElement]); // All the elements in the matrix
      const productHorizontal = matrix[i][rowElement] * matrix[i][rowElement + 1] * matrix[i][rowElement + 2] * matrix[i][rowElement + 3];
      if (productHorizontal > maxProduct) {
        maxProduct = productHorizontal;
      }
    }
  }
  console.log(`Max product horizontally is: ${maxProduct.toLocaleString('de-DE')}`);

  // Vertical
  for (let i = 0; i < matrix.length - 3; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const product =
        matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }
  console.log(`Max product vertically is: ${maxProduct.toLocaleString('de-DE')}`);
  return maxProduct;
}

console.log(`The greatest product of four numbers is: ${greatestProduct(matrix).toLocaleString('de-DE')}`);

module.exports = {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  sum,
  greatestProduct
}