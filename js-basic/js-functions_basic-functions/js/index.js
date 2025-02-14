console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--
const book = {
  title: "Kochbuch",
  author: "KennstDu Nicht",
  rating: 5.8,
  sales: 20000,
}
console.log(book);
console.log(`${'*'.repeat(10)}  ${'*'.repeat(10)}`);
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--

book.sales++;
book.rating = 8.9;
console.log(`Update: ${book.sales}, ${book.rating}  `);
console.log(`${'*'.repeat(10)}  ${'*'.repeat(10)}`);

// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
- Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--
function logBookData(bookToCheck) {
  console.log(`Aus der Funktion:\n${bookToCheck.title}\n${bookToCheck.author}\n${bookToCheck.rating}\n${bookToCheck.sales}`);
  bookToCheck.sales += 2;
  console.log(`${bookToCheck.sales} `);
}

logBookData(book);
console.log(`${'*'.repeat(10)}  ${'*'.repeat(10)}`);
// --^-- write your code here --^--
