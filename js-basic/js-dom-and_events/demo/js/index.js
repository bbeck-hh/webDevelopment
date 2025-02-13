console.log(`It works! 🎉`);
const body = document.querySelector('[data-js="root"]');
const addButton = document.querySelector('[data-js="add-button"]');
const removeButton = document.querySelector('[data-js="remove-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');
console.log(body);


body.classList.add('dark');
body.classList.remove('dark');


addButton.addEventListener('click', () => {
    body.classList.add('dark');
});
removeButton.addEventListener('click', () => {
    body.classList.remove('dark');
});

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
});

console.log(`
${'*'.repeat(10)} ternary operator ${'*'.repeat(10)}`);
// condition ? expressionIfTrue : expressionIfFalse;

const numberDisplay = document.querySelector('[data-js="lucky-number-display"]');
const button = document.querySelector('[data-js="button"]');
const outcomeDisplay = document.querySelector('[data-js="outcome-display"]');


console.log(numberDisplay);


button.addEventListener('click', () => {
    const luckyNumber = Math.random().toFixed(2);
    numberDisplay.classList.add('highlight');
    numberDisplay.textContent = luckyNumber;
    outcomeDisplay.textContent = luckyNumber > .7 ? 'You win 🥳 ' : 'No luck 🥺, try again';
});

