console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const secondInput = document.querySelector('[data-js="second-input"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const switchButton = document.querySelector('[data-js=button-upper-lowercase]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
  secondInput.value = secondInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
  secondInput.value = secondInput.value.toLowerCase();
});

switchButton.addEventListener("click", () => {
  // vertausche die Werte der beiden Inputs
  const temp = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = temp;


});
