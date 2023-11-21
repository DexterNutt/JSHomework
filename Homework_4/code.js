// Homework 4 Objects & Arrays
// Task - Analyze an array of cities

const city = [
    {name: "Vancouver", population: 2642000},
    {name: "Zurich", population: 415000},
    {name: "New York", population: 8468000},
    {name: "London", population: 8799000},
    {name: "Amsterdam", population: 1457000},
    {name: "Tokyo", population: 13960000},
    {name: "Hamburg", population: 1841000}
];

// Task 1 = sort by population

city.sort((a, b) => b.population - a.population);
console.log(city);

// Task 2 = Which are the three most populous cities

console.log(`The three most populous cites are ${city[0].name}, ${city[1].name} and ${city[2].name}`) //This works provided we've already sorted them

// Task 3 = What are the cities starting with A and have more than 1mil population

let findCityA = city.find(city => city.name.startsWith('A') && city.population > 1000000);
console.log(findCityA)

// OR

let findA = city.filter(city => city.name.startsWith('A') && city.population > 1000000);
console.log(findA); // This however returns an array of one object

// Task 4 = What is the mean population of all cities

let totalCityPopulation = city.reduce((total, city)=> total + city.population, 0);
let meanCityPopulation = totalCityPopulation / city.length;

console.log(meanCityPopulation.toFixed(2))