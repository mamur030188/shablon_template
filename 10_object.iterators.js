// Home made iterable (takrorlanadigan) with next() method:

function myNumber() {
    let n = 0;
    return {
        next: function() {
            n += 10;
            return {value: n, done: false};  // next() method returns 2 prop (value, done)
        }
    };
}

// create Iterable (takrorlanadigan):
const n = myNumber();
n.next();  // return 10
n.next();  // return 20
n.next();  // return 30 ... etc.,

console.log(n.next().value)


// 