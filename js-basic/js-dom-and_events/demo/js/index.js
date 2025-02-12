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
