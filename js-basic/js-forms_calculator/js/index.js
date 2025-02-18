console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Get all the data in the form
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    switch (data.operator) {
      case "addition":
        resultOutput.textContent = add(Number(data.numberA), Number(data.numberB));
        break;
      case "subtraction":
        resultOutput.textContent = subtract(Number(data.numberA), Number(data.numberB));
        break;
      case "multiplication":
        resultOutput.textContent = multiply(Number(data.numberA), Number(data.numberB));
        break;
      case "division":
        resultOutput.textContent = divide(Number(data.numberA), Number(data.numberB));
        break;
      default:
        console.log(`Nichts zum rechnen da`);
    }

  });
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
