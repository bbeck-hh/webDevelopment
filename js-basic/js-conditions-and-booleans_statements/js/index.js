console.clear();

console.log(`
${'*'.repeat(10)} Part 1: Password ${'*'.repeat(10)}`);
// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";
// if(receivedPassword === SUPER_SECRET_PASSWORD) {
//     console.log(`Welcome! You are logged in as Brunhilde1984.`);
// } else {
//     console.log(`Access denied!`);
// }

receivedPassword === SUPER_SECRET_PASSWORD ? console.log(`Welcome! You are logged in as Brunhilde1984.`) : console.log(`Access denied!`);

console.log(`
${'*'.repeat(10)} Part 2: Even / Odd ${'*'.repeat(10)}`);
//  Part 2: Even / Odd
const number = 3;
// if (number % 2 === 0) {
//     console.log(`${number} is an even number`)
// } else {
//     console.log(`${number} is an odd number`);
// }
number % 2 === 0 ? console.log(`${number} is an even number`) : console.log(`${number} is an odd number`);

console.log(`
${'*'.repeat(10)} Part 3 Hotdogs ${'*'.repeat(10)}`);
// Part 3: Hotdogs
const numberOfHotdogs = 2;
if (numberOfHotdogs < 5) {
    console.log(`You'll pay ${numberOfHotdogs * 2} euros for ${numberOfHotdogs} hotdogs.`);
} else if (numberOfHotdogs < 100) {
    console.log(`You'll pay ${numberOfHotdogs * 1.5} euros for ${numberOfHotdogs} hotdogs.`);
} else if (numberOfHotdogs < 1000000) {
    console.log(`You'll pay ${numberOfHotdogs} euros for ${numberOfHotdogs} hotdogs.`);
} else {
    console.log(`You'll pay ${numberOfHotdogs * 0.1} euros for ${numberOfHotdogs} hotdogs.`);
}

console.log(`
${'*'.repeat(10)} Part 4: Daytime ${'*'.repeat(10)}`);
// Part 4: Daytime
const currentHour = 12;
let statement = "";

currentHour < 17 ? statement = "Still need to learn..." : statement = "Partytime!!!";

console.log(statement);

console.log(`
${'*'.repeat(10)} Part 5: Greeting ${'*'.repeat(10)}`);
// Part 5: Greeting
const userName = "Archibald";
const coachName = "Archibald";

const greeting = "Hello " + (coachName === userName ? "Coach" : userName) + "!";

console.log(greeting);
