// Homework 3 Loops

// Task 1 Print every other even number from 1 to 100

for ( let i = 2; i <= 100; i += 4){
    console.log(i)
}

// OR

let evenNumber = 0

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0){
        evenNumber++

        if(evenNumber == 2){
        console.log(i)
        evenNumber = 0
        }
    }
}

// Task 2 Print every odd number from 1 to 50

let oddNumbers = 0

for (let i = 0; i <= 50 ; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}
