// a = 4
// b = 5
// c = a + b
// console.log(c)

// a = true; 
// b = false;

// console.log(a == b)  false
// console.log(5 != 5)  false  (teng emas a?)
// console.log(5 != 6)  true   (teng emas a?)
// console.log(5 > 5)   false



// const a = 9;
// const b = 8;

// if (a > b) {
//   console.log('Bu yerda a > b shuning uchun a ning qiymati ' + (`${a}` **2) + ' ga teng')
// }
// else {
//   console.log('Bu yerda a < b shuning uchun b ning qiymati ' + (`${b}` **2) + ' ga teng')
// }


  // console.log(Math.min(0, 2, 55, -8, -255));     / return -255

  // console.log(Math.random())  => return any random number 0.21464645454xxxx

  // console.log(Math.log(10))


// const d = new Date();
// console.log(d.getTime())
// console.log(d.getFullYear())  2021
// console.log(d.getMonth())   8
// console.log(d.getMinutes())   12:15 (15)

// const cars = ['Saab', 'Volvo', 'Ford']
// console.log(cars.length); / returns 3 (we have a 3 cars)
// cars[3] = 'Cobalt'   / [ 'Saab', 'Volvo', 'Ford', 'Cobalt' ]
// console.log(cars[0])  / Saab
// console.log(cars[2])     / Ford
// console.log(cars)   
// let x = cars[2]
// x = cars[0]
// console.log(x) / Saab
// console.log(x)  / Ford

// * Object
// const person = {
//   firstName:"Mike1",
//   lastName:"Mike2", 
//   age: 34,
//   id: 5566,
//   fullName: function(){return this.firstName + " " + this.lastName;}
// }
// // console.log(person.age) / 34
// // console.log(person.lastName)  / Mike2
// const name = person.fullName();
// console.log(name + " " + person.id) 

// Bu yerda object => "car" is = variable, and {type, model, color} = value
// const car = {
//   type: "Matiz",
//   model: "M150",
//   color: "Grey"
// }
// console.log('This car model is ' + car.model)   / This car model is M150



// * Function
// let x = myFunction(5, 6)
// function myFunction(p1, p2) {
//   return p1*p2
// } 
// console.log(x)

// function myFunction() {
//   let carName = "Volvo";
//   console.log(typeof carName + " " + carName)
// }
// myFunction();

// let text1 = "Hello World";
// let text2 = text1.toLowerCase();
// console.log(text2)  / hello world

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3)  / Wello World

// let price = 10;
// let VAT = 0.25;

// let total1 = `Total: ${(price * (1 + VAT)).toFixed(3)}`;  / butun sondan keyin 3 tagacha (.000)
// let total2 = `Total: ${(price * (1 + VAT))/2}`;  / 6.25

// console.log(total1)

// let x = 100 / 'Apple';
// console.log(isNaN(x))

// let x = 123;
// let y = new Number(125);
// console.log(typeof y + " " + typeof x)


// const numbers1 = [4, 50, 6, 98, 72]
// const numbers2 = numbers1.map(myFunction);
// console.log(numbers2)

// function myFunction(value) { 
//   return value * 2
// }

// const numbers = [4, 50, 6, 98, 72]
// const over18 = numbers.filter(myFunction);
// console.log(over18)

// function myFunction(value, index, array) { 
//   return value > 18
// }

// ********* Dokonga rosa kk hisob un **********

// const prices = [
//   kartoshka = 10,
//   sabzi = 20,
//   guruch= 25, 
//   gosht = 70,
//   Non = 5]

// let sum = prices.reduce(myFunction);
// console.log('Umumiy harid summasi: ' + sum + " so`m boldi!");

// function myFunction(total, value, index, array) { 
//   return total + value
// }
// **********************************************

// Array.indexOf()
// const numbers = ["apple", "grape", "banana"]
// let position = numbers.indexOf("apple") + 1;

// console.log(position)


// let text = "";
// const t = 100; 
// const j = 100;
// let p = 1;
// if ((t >= 55) || (j >= 55))  {
//   if (p == 1) {
//     text = "Imtihondan otdingiz"

//   } else {
//     text = "Psixologiyadan otmadingiz"
// } 
// } else {
//   text = " Test yoki jisdan otolmadiz"

// }
// console.log(text)

// ***** if, else ***** 
// if (new Date().getMonth() < 8) {
//   console.log("Iyun")
// } else if (new Date().getMonth() < 7){
//   console.log("Avgust")
// } else {
//   console.log("Sentabr")
// }

// ***** Wh i l e *******


// ****** Class *******************
// here above syntax of the CLASS
// class ClassName {
//    constructor(value1, value2)
// }


// -- create new Car object from class Car --
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }  

// const myCar = new Car("Ford", 2004);
// console.log(myCar.name + " " + myCar.year);

// ?? Add method inside of constructor ??
// class ClassName {
//   constructor() { ... }
//   method_1() { ... }
//   method_2() { ... }
// }

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }  

// const myCar = new Car("Ford", 2004);
// console.log("My car " + myCar.name + " is " + myCar.age() + " years old");


// class Dog {
//   constructor(name, year) { 
//     this.name = name; 
//     this.year = year;
//   }
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// const myDog = new Dog("Olash", 2017)
// console.log("My dog " + myDog.name + " is " + myDog.age() + " years old")

// *** this ***
// const person1 = {
//   fullName: function() { 
//     return this.firstName + " " + this.lastName;
//   }
// } 
// const person2 = {
//   firstName: "Mike1",
//   lastName: "Mike2",
// }
// let x = person1.fullName.call(person2);
// console.log(x)




// * Arrays
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits[fruits.length -1])  / Mango

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Lemon")  / add "Lemon"
// console.log(fruits)  / [ 'Banana', 'Orange', 'Apple', 'Mango', 'Lemon' ]

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) { text += "<li>" + fruits[i] + "</li>";}
// text += "</ul>";

// console.log(text)



// *** JSON * ***
// JSON is a format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.



// Declare and initiate at the beginning
// let firstName = "",
// let lastName = "",
// let price = 0,
// let discount = 0,
// let fullPrice = 0,
// const myArray = [],
// const myObject = {};


const prices = [
  kartoshka = 10,
  sabzi = 20,
  guruch= 25, 
  gosht = 70,
  Non = 5]

function myFunction(total, value, index, array) { 
  return total + value
}
let sum = prices.reduce(myFunction);
// console.log('Umumiy harid summasi: ' + sum + " so`m boldi!");

let x = sum;
switch (x) {
  case 130:
    console.log("hello")
}