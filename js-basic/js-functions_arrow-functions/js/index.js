console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible.

HINT: You can find more information about arrow functions and implicit returns in the handout.
*/

function getCurrentHour() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}

const getCurrentHourArrow = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}
console.log(`Hier alte Schreibweise: ${getCurrentHour()} und hier Arrow Funktion: ${getCurrentHourArrow()}  `);


// function getVectorLength(x, y, z) {
//   return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
// }

// function cleanInput(string) {
//   return string.toLowerCase().trim();
// }
const getVectorLength = (x, y, z) => {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}
console.log(`Vectorlänge: ${getVectorLength(2, 3, 4).toFixed(3)} `);

console.log(`
${'*'.repeat(10)} toLowerCase ${'*'.repeat(10)}`);
const cleanInput = (string) => {
  return string.toLowerCase().trim();
}
console.log(`${cleanInput("MAL Schauen, ob das alles klein geschrieben wird")} `);

console.log(`
${'*'.repeat(10)} isOddAndSmall ${'*'.repeat(10)}`);
/*
Rewrite the following arrow functions as classic functions.
*/

/*
const isOddAndSmall = (number) => {
  if (number > 10) {
    return 'Zahl ist kleiner 10 ? ' + false;
  }

  if (number % 2 === 0) {
    return 'Ist eine gerade Zahl?' + false;
  }

  return 'Beide Prüfungen vorher sind: false. Daher -> ' + true;
};
 */
const isOddAndSmall = (number) => {
  console.log(`Es wird die Zahl ${number} geprüft. Größer als 10? Gerade Zahl? `);

  if (number > 10) {
    return 'Zahl ist kleiner 10 ? ' + false;
  }

  if (number % 2 === 0) {
    return 'Ist eine gerade Zahl? ' + false;
  }

  return 'Beide Prüfungen vorher sind: false  Daher -> ' + true;
}
console.log(`Ergebnis der Prüfung.: ${isOddAndSmall(7)} `);

console.log(`
${'*'.repeat(10)} add3 ${'*'.repeat(10)}`);
const add3 = (a, b, c) => a + b + c;
console.log(`Ergebnis: ${add3(1, 2, 5)} `);


console.log(`
${'*'.repeat(10)} repeat10 ${'*'.repeat(10)}`);
const repeat10 = (string) => string.repeat(10);
console.log(`Repeat: ${repeat10("Tee, ")} `);

