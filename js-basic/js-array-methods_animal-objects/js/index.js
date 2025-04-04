console.clear();

const animals = [
  {
    name: "cat",
    weight: 4,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  {
    name: "dog",
    weight: 10,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "elephant", weight: 4000, continents: ["Africa", "Asia"] },
  {
    name: "rabbit",
    weight: 2,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "lion", weight: 200, continents: ["Africa"] },
  { name: "tiger", weight: 150, continents: ["Asia"] },
  {
    name: "horse",
    weight: 500,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "giraffe", weight: 600, continents: ["Africa"] },
  { name: "zebra", weight: 300, continents: ["Africa"] },
  {
    name: "penguin",
    weight: 12,
    continents: ["Africa", "Australia", "Antarctica", "South-America"],
  },
  {
    name: "polar bear",
    weight: 450,
    continents: ["North-America", "Asia", "Arctic"],
  },
  { name: "panda", weight: 120, continents: ["Asia"] },
  { name: "koala", weight: 13, continents: ["Australia"] },
  { name: "kangaroo", weight: 70, continents: ["Australia"] },
  {
    name: "monkey",
    weight: 20,
    continents: ["South-America", "Asia", "Africa"],
  },
  { name: "sloth", weight: 8, continents: ["South-America"] },
  { name: "hippo", weight: 1500, continents: ["Africa"] },
  { name: "rhino", weight: 2000, continents: ["Asia", "Africa"] },
];

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterG = null;

// Find the index of the first animal whose name starts with "m"
const firstAnimalStartingWithLetterMIndex = animals.findIndex((animal) =>
  animal.name.startsWith("m")
);

// Use the ternary operator to return the index or -1 if not found
const result = firstAnimalStartingWithLetterMIndex !== -1
  ? firstAnimalStartingWithLetterMIndex
  : -1;

console.log(`Index: ${result}`);

// Find the first animal whose name starts with "m" and log its name
const firstAnimalStartingWithLetterM = animals.find((animal) =>
  animal.name.startsWith("m")
);

if (firstAnimalStartingWithLetterM) {
  console.log(`Name: ${firstAnimalStartingWithLetterM.name}`);
} else {
  console.log("No animal found with a name starting with 'm'.");
}






const indexOfAnimalWithNameLongerFive = null;

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// Make sure to use toSorted() instead.

const animalsSortedAlphabetically = null;

const animalsSortedByWeightStartingWithLowest = null;

// Note:
// - reverse() mutates the original array (like sort() does), which is bad.
// Use toReversed() instead (or any other method to get the expected result)

const animalsSortedByWeightReversed = null;

const animalWithWeightMoreThanFivehundredExists = null;

// Hint: Filter for Europe first, then check every animal for its weight.
const allAnimalsInEuropeWeighLessThanOnehundred = null;

// Hint: filter + map + reduce
const weightOfAllAnimalsInAfrica = null;

// Hint: As above, but divided by the number of animals in Africa.
const averageWeightOfAllAnimalsInAfrica = null;

export {
  allAnimalsInEuropeWeighLessThanOnehundred, animalsSortedAlphabetically, animalsSortedByWeightReversed, animalsSortedByWeightStartingWithLowest, animalWithWeightMoreThanFivehundredExists, averageWeightOfAllAnimalsInAfrica, firstAnimalStartingWithLetterG,
  indexOfAnimalWithNameLongerFive, weightOfAllAnimalsInAfrica
};

