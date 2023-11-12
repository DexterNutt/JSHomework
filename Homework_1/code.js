// Task 1 - Fizz Buzz 

let i = 15

if (i % 15 == 0 ) {
        console.log("FizzBuzz")  
}   else if (i % 5 == 0) {
        console.log ("Buzz")
}   else if (i % 3 == 0) {
        console.log ("Fizz") 
}   else {
        console.log (i)
}

// Task 2 - If Else Statements

// I'm cold

let weather = 8 

if (weather <= 12) {
    console.log ("It's cold outside!")
}

// Go to bed

let hour = 24 

if (hour == 24) {
    console.log ("Go to bed now, or you will feel tired tomorrow!")
}

// Empty house 

let light = true 

if (light = true) {
    console.log ("Someone's home!")
}   else {
    console.log ("Noone's home")
}

// Dog walkies


if (hour >= 18) {
    console.log ("It is time to walk the dog!")
} else {
    console.log ("It is too early to walk the dog!")
}

// Do I hit

let AC = 16
let roll = 20

if (roll<AC) {
    console.log("You do not hit the enemy")
}   else {
    console.log ("You hit the enemy")
}  

// Did I crit 

if (roll == 20) {
    console.log ("You crit and deal double the damage!")
} else {
    console.log ("You do not crit")
}

// Check string 

let string = "Hello, World!";

if (string.length > 10) {
    console.log("The string has more than 10 characters.")
} else {
    console.log("The string has 10 or fewer characters.")
}

// Leap Years

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.")
} else {
    console.log(year + " is not a leap year.")
}


// Teen or Adult

let age = 15

if (age < 13){
    console.log("You are a pre-teen")
} else if (age >= 13 && age <= 19) {
    console.log ("You are a teenager")
} else {
    console.log ("You are an adult")
}

// Time of year

let month = 11 

if (month >= 3 && month <= 5) {
    console.log("It's spring!")
} else if (month >= 6 && month <= 8) {
    console.log("It's summer!")
} else if (month >= 9 && month <= 11) {
    console.log("It's autumn!")
} else if (month === 12 || month <= 2) {
    console.log("It's winter!")
} else {
    console.log("Invalid month, please enter a valid month from 1 to 12");
}


//Task 3 Basic Math

a = 2 
b = 3
c = 6
d = 8
e = 10
f = 1
g = 4

console.log ( a + b + c + d + e + f + g)

console.log ( a + b * (c+d-e) - f * g)

console.log ( a**b / c + d ** a + (d + e + f) /g )

console.log ( (g - a ) + c / b + d * e *(e / g))
 
console.log ( e + f + (c*a) / (d + f - a))