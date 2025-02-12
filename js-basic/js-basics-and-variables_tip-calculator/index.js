console.clear();

/*
Create a program that calculates the total cost of a meal, including tip, 
based on the cost of the meal and the percentage of the tip.

1. Define two variables:
   - A variable that stores the value of the meal cost.
   - A variable that stores the value of the tip percentage.

2. Calculate the tip amount by multiplying the meal cost by the tip percentage, and store the result in a variable called `tipAmount`.

3. Calculate the total cost of the meal, including tip, by adding `mealCost` and `tipAmount`, and store the result in a variable called `totalCost`.

4. Log a message to the console that includes the meal cost, tip amount, and total cost.
*/
let totalCost = 0;
let mealCost = 100;
let tipPercentage = 0.12;
let tipAmount = mealCost * tipPercentage;
totalCost = mealCost + tipAmount;

console.log(`
The meal cost is : ${mealCost.toFixed(2).padStart(40)} EUR\n
The tip is 12% of the meal cost, so the amount is: ${tipAmount.toFixed(2).padStart(8)} EUR`); // The meal cost is $100, the tip amount is $20, and the total cost is $120.
console.log(`
${'*'.repeat(63)} `);
console.log(`The total cost is :${totalCost.toFixed(2).padStart(40)} EUR`);

console.log(`
${'*'.repeat(10)} Ausgabe als Tabelle ${'*'.repeat(10)}`);
console.log("--------------------------------------------------");
console.log("| Description                | Amount (EUR)       |");
console.log("--------------------------------------------------");
console.log(`| Meal cost                  | ${mealCost.toFixed(2).padStart(18)} |`);
console.log(`| Tip (${(tipPercentage * 100).toFixed(0)}%)                  | ${tipAmount.toFixed(2).padStart(18)} |`);
console.log("--------------------------------------------------");
console.log(`| Total cost                 | ${totalCost.toFixed(2).padStart(18)} |`);
console.log("--------------------------------------------------");


