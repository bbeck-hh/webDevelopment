let undef;
const data = null;
// 0/0 -> NaN
// undef -> undefined
// function () { console.log("Ich bin eine Funktion!"); } -> function
// [1, 2, 3] -> Array https://www.mediaevent.de/javascript/typeof.html
// null -> https://www.mediaevent.de/javascript/null-undefined.html

console.log(`Analysiere den Typ als: ${typeof (data)} `);
console.log(`${'*'.repeat(35)}  `);
const typeOutput = typeof (data);

let outputTyp = console.log(`Ich bin ein: ${typeof (data)}`);
switch (typeOutput) {
    case "string":
        outputTyp
        break;
    case "boolean":
        outputTyp
        break;
    case "undefined":
        outputTyp
        break;
    case "number":
        if (Number.isNaN(data)) {
            console.log("Ich bin NaN");
        } else {
            outputTyp
        }
        break;
    case "not a number":
        outputTyp
        break;
    case "function":
        outputTyp
        break;
    case "object":
        if (Array.isArray(data)) {
            console.log("Ich bin ein Objekt aber vom Typ ein Array");
        } else if (Object.name === null) {
            console.log(`nichts da`);

        } else {
            console.log(outputTyp);
        }
        break;
    case "boolean":
        outputTyp
        break;
    default:
        console.log(`Was gibt es noch zu tun?`);
}

console.log(`
${'*'.repeat(10)} NULL ${'*'.repeat(10)}`);
const elem = null;
typeof (elem);
console.log(typeof (elem));

if (elem) {
    console.log("Hier gibts was zu holen");
} else {
    console.log("Nichts in Sicht, LEER");
}

