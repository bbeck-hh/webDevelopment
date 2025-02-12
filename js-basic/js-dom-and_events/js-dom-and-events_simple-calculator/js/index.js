console.clear();

const operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const addBtn = document.querySelector('[data-js="add"]');
const subtractBtn = document.querySelector('[data-js="subtract"]');
const multiplyBtn = document.querySelector('[data-js="multiply"]');
const divideBtn = document.querySelector('[data-js="divide"]');
const exponentBtn = document.querySelector('[data-js="exponent"]');
const moduloBtn = document.querySelector('[data-js="modulo"]');

// --^-- write your code here --^--

/*
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
addBtn.addEventListener('click', () => {
    console.log(`Addition: ${operand1} + ${operand2} = ${operand1 + operand2}`);
});
subtractBtn.addEventListener('click', () => {
    console.log(`Subtraction: ${operand1} - ${operand2} = ${operand1 - operand2}`);
});
multiplyBtn.addEventListener('click', () => {
    console.log(`Multiplication: ${operand1} * ${operand2} = ${operand1 * operand2}`);
});
divideBtn.addEventListener('click', () => {
    console.log(`Division: ${operand1} / ${operand2} = ${operand1 / operand2}`);
});
exponentBtn.addEventListener('click', () => {
    console.log(`Exponent: ${operand1} ** ${operand2} = ${operand1 ** operand2}`);
});
moduloBtn.addEventListener('click', () => {
    console.log(`Modulo: ${operand1} % ${operand2} = ${operand1 % operand2}`);
});
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
const increaseByOneBtn = document.querySelector('[data-js="increase-by-one"]');
const increaseByFiveBtn = document.querySelector('[data-js="increase-by-five"]');
const decreaseByOneBtn = document.querySelector('[data-js="decrease-by-one"]');
const decreaseByFiveBtn = document.querySelector('[data-js="decrease-by-five"]');
const multiplyByTwoBtn = document.querySelector('[data-js="multiply-by-two"]');
const divideByTwoBtn = document.querySelector('[data-js="divide-by-two"]');

/**
 * A new variable to store the value of const operand1.
 * @type {number}
 */
let operand1New = operand1;
increaseByOneBtn.addEventListener('click', () => {
    operand1New++;
    console.log(`Increase by One: ${operand1New}`);
});
increaseByFiveBtn.addEventListener('click', () => {
    operand1New += 5;
    console.log(`Increase by Five: ${operand1New}`);
});
decreaseByOneBtn.addEventListener('click', () => {
    operand1New--;
    console.log(`Decrease by One: ${operand1New}`);
});
decreaseByFiveBtn.addEventListener('click', () => {
    operand1New -= 5;
    console.log(`Decrease by Five: ${operand1New}`);
});
multiplyByTwoBtn.addEventListener('click', () => {
    operand1New *= 2;
    console.log(`Multiply by Two: ${operand1New}`);
});
divideByTwoBtn.addEventListener('click', () => {
    operand1New /= 2;
    console.log(`Divide by Two: ${operand1New}`);
});

// --^-- write your code here --^--
