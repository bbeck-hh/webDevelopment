console.clear();
const input = document.querySelector('[data-js="first-input"]');
const button = document.querySelector('[data-js="button-uppercase"]');

button.addEventListener('click', () => {
    const textToUppercase = input.value.toUpperCase();
    input.value = textToUppercase;
    console.log(` Nun der Text in uppercase: ${textToUppercase} `);

});

