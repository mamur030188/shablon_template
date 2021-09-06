
// 1st example of sum function here
function sum(a, b) {
    return a + b
}

// if we convert it to arrow function as below:
let sum2 = (a, b) => a + b     // this " => " arrow function will return "a + b"



// 2nd example of isPositive function here
function isPositive(number) {
    return number >= 0
}

// convert to arrow function as below:
let isPositive2 = (number) => number >= 0 // or
let isPositive2 = number => number >= 0  // cz, we have only 1 parameter (nuber) so we dont need braces -> ()

// 3rd example randomNumber function here:
function randomNumber() {
    return Math.random
}

// convert to arrow function as below:
let randomNumber2 = () => Math.random



// 4th example normal function
document.addEventListener('click', function() {
    console.log('Click')    
})

// converting to arrow function as below:
documnet.addEventListener('click', () => console.log('Click'))