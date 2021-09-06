// You can create a JavaScript Map by:
// * Passing an Array to new Map()
// * Create a Map and use Map.set()

const fruits = new Map([
    ["apple", 500],
    ["orange", 300],
    ["banana", 200]
]);

console.log(fruits.get("apple"))  // 500



// You can add elements to a Map with the set() method:

const fruit = new Map();

// set map values here:
fruits.set("apple", 500);
fruits.set("orange", 300);
fruits.set("banana", 200);

console.log(fruits.get("apple")) // 500


// or you can change the values:

const fruits = new Map([
    ["apple", 500],
    ["orange", 300],
    ["banana", 200]
]);
fruits.set("apple", 200)
fruits.delete("orange")

console.log(fruits.get("apple"))  // 200
console.log(fruits.size)  // 2


// Add the Objects to the Map
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const orange = {name: 'Oranges'};

const fruit = new Map ();

fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(fruits.get(apples)) // 500   key is not "apples"