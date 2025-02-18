console.clear();

const form = document.querySelector('[data-js="form"]');

const calcAge = (age, badness) => age + badness;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    console.log(`The age-badness-sum from ${data.firstName} is ${calcAge(Number(data.age), Number(data.badness))} `);

});


