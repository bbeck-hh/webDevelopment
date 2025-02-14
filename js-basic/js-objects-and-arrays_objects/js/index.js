console.clear();
console.log(`
  ${'*'.repeat(10)} EXERCISE 1 ${'*'.repeat(10)}`);
// EXERCISE 1
// Create an object `personWithNameAgeEmail` with the properties "name", "age" and "email".
const personWithNameAgeEmail = {
  name: "Peter",
  age: 25,
  email: "peter@petermann.de",
};
console.log(personWithNameAgeEmail); // { name: 'Peter', age: 25, email: '

console.log(`
  ${'*'.repeat(10)} EXERCISE 2 ${'*'.repeat(10)}`);
// EXERCISE 2
// Set the values of `nameOfAlex` and `ageOfAlex` to match the corresponding values in the `personAlex` object.

const personAlex = {
  name: "Alex",
  age: 24,
};

const nameOfAlex = personAlex.name;
const ageOfAlex = personAlex.age;
console.log(nameOfAlex, ageOfAlex); // Alex

console.log(`
${'*'.repeat(10)} EXERCISE 3 ${'*'.repeat(10)}`);
// EXERCISE 3
// Change the `name` to "Alex" and `age` to "35" by updating the `personToChange`object: `person.existingProperty = newValue`.

const personToChange = {
  name: "Kim",
  age: 24,
};
personToChange.name = "Alex";
personToChange.age = 35;
console.log(personToChange.name, personToChange.age);

console.log(`
${'*'.repeat(10)} EXERCISE 4 ${'*'.repeat(10)}`);
// EXERCISE 4
// Add the properties `age` with value "5" and `breed` with value "husky" to the `petPluto` object: `pet.newProperty = newValue`.

const petPluto = {
  name: "Pluto",
  species: "dog",
  age: 5,
  breed: "husky",
};

console.log(petPluto);

export {
  ageOfAlex, nameOfAlex, personToChange, personWithNameAgeEmail, petPluto
};

