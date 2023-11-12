// Homework 2

//Task 1 Switch

// Greeting in the day
let hour = 10;
let greeting;

switch (true) {
    case hour < 12:
        greeting = "Good morning!"
        break;
    case hour < 18:
        greeting = "Good afternoon!"
        break;
    default:
        greeting = "Good evening!"
}

console.log(greeting);


// Is it cold

let temperature = 28;
let category;

switch (true) {
    case temperature < 0:
        category = "Freezing"
        break;
    case temperature >= 0 && temperature < 15:
        category = "Cold"
        break;
    case temperature >= 15 && temperature < 25:
        category = "Mild"
        break;
    case temperature >= 25 && temperature < 35:
        category = "Warm"
        break;
    default:
        temperatureCategory = "Hot"
}

console.log("The temperature is", category)

//Season 

let month = 1;
let season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = "Winter"
        break
    case 3:
    case 4:
    case 5:
        season = "Spring"
        break
    case 6:
    case 7:
    case 8:
        season = "Summer"
        break
    case 9:
    case 10:
    case 11:
        season = "Autumn"
        break
    default:
        season = "Invalid month"
}

console.log("This month is in the season of", season)

// What should I eat

let menuItem = 2;
let selection ;

switch (menuItem) {
    case 1:
        selection = "Burger"
        break
    case 2:
        selection = "Pizza"
        break
    case 3:
        selection = "Cezar Salad"
        break
    case 4:
        selection  = "Ramen"
        break
    case 5:
        selection = "Sushi"
        break
    case 6:
        selection = "Tacos"
        break
    default:
        selection  = "Invalid choice please enter a number between 1 and 6"
}

console.log("You selected: " + selection)

//Are you connected

let online = true;
let connection;

switch (online) {
    case true:
        connection = "Connected"
        break
    default:
        connection = "Disconnected"
}

console.log("Network is currently " + connection);

// Task 2 Declare functions

// Add nums Function
function addNumbers (a,b){
    return a + b
}

console.log (addNumbers (1,5))




//Task 3 F to C

function toF(c) {
    return ((9/5*(c))+32);
}
let C2F = toF(-40);

console.log (C2F)

//Task 4 C to F

function toC (f) {
    return (5/9) * (f-32);
}
let F2C = toC(-40);

console.log (F2C)

//Task 5 Feet to Metersn

function toFeet(m) {
    return m*3.2808
}

let convert = toFeet(20)

console.log(convert)