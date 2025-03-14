const people = [
    {
        id: 1,
        firstName: "Jane",
        lastName: "Doe",
        age: 21,
    },
    {
        id: 2,
        firstName: "John",
        lastName: "Doe",
        age: 18,
    },
    {
        id: 3,
        firstName: "Max",
        lastName: "Mustermann",
        age: 32,
    },
    {
        id: 4,
        firstName: "Erika",
        lastName: "Musterfrau",
        age: 38,
    },
    {
        id: 5,
        firstName: "Luke",
        lastName: "Skywalker",
        age: 23,
    },
];

function getPeopleNamesOlderThan(people, age) {
    const peopleAge = people.filter((person) => person.age > age);
    // Ausgabe der Länge des Arrays
    console.log(`peopleAge.length: ${peopleAge.length}`);

    // Wer ist in dem Array?
    peopleAge.forEach(person => {
        console.log(`peopleAge: ${person.firstName} ${person.lastName}`);
    });

    return peopleAge
}
getPeopleNamesOlderThan(people, 30);