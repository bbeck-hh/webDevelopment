const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');
const waitingYearsOutput = document.querySelector('[data-js="waiting-year-output"]');
const highlightBox = document.querySelector('[data-js="highlight-adult"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);
  const minAge = 18;
  const adult = age >= minAge;
  const waitingYears = minAge - age;

  adult ? (output.textContent = "You are an adult. 😀") : (output.textContent = "You are not an adult.👶");

  waitingYears < minAge && waitingYears > 0 ? (waitingYearsOutput.textContent = ` You are a teen, so you have to wait ${waitingYears} years to be an adult. 😊 `) : (waitingYearsOutput.textContent = ` You don't have to wait. Come in and start having fun 🥳😎`);

  // adult ? highlightBox.classList.add("adultSentence") : highlightBox.classList.remove("adultSentence");
  // https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
  highlightBox.classList.toggle("adultSentence", adult);

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
});
