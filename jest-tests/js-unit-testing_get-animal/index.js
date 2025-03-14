export function getAnimal(animal) {
    if (animal === "dogs") {
        return "I like dogs!";
    }
    if (animal === undefined) {
        return "I do not like animals at all!";
    }
    return `I totally love ${animal}!`;
}
//getAnimal()