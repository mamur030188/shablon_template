// *** PROMISE ***

let p = new Promise ((resolve, reject) => {
    let a = 1 + 1

if (a == 2) {
    resolve('Success')      // if do success Resolve will call .then
} else {
    reject('Failed')        // if do failed Reject will call .catch (error)
}
})

p.then((message) => {
    console.log('This is in .then ' + message)
}).catch((message) => {
    console.log('This is in .catch ' + message)
})

// ** Example to Promise ***



// *** How to convert Callback to Promise ***


