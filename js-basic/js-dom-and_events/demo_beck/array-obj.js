// Objects

const name = "Peter";
const lastname = "Smith";
const profession = "programmer";
const age = 25;

const user = {
    name: "Peter", // key : value pair
    lastname: "Smith",
    profession: "programmer",
    age: 25,
    "email adress": "max@mustermann"
};

console.log(`
${'*'.repeat(10)} use entire object ${'*'.repeat(10)}`);
// use entire object
console.log(user);

console.log(`
${'*'.repeat(10)} use entries of an object: object.key ${'*'.repeat(10)}`);
// use entries of an object: object.key
console.log(`Name: ${user.name}`);
console.log(`Nachname: ${user["lastname"]}`);

console.log(`Nachname: ${user.lastname}`);
console.log(`Mailadresse: ${user["email adress"]}`);

console.log(`
${'*'.repeat(10)} post ${'*'.repeat(10)}`);
const post = {
    content: "Lorem ipsum dolor sit amet",
    title: "My blog post",
    published: new Date(),
    likes: 34,
    user: {
        name: "Peter", // key : value pair
        lastname: "Smith",
        profession: "programmer",
        age: 25,
        "email adress": "max@mustermann"
    },
};


console.log(post.published);
console.log(post.user);
console.log(post["likes"]);
console.log(post.user.name);




