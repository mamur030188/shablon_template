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

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

// ** if we type Promice.all([...]) -> in  this case all Video will record same time.
// ** so avoid it and 1st video finish and 2nd start following:
Promise.race([
    recordVideoOne, 
    recordVideoTwo, 
    recordVideoThree
]).then((message) => {
    console.log(message)   // Video 1 Recorder
})



// *** How to Callback works ***

const userLeft = false
const userWatchingCatMeme = false

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}

watchTutorialCallback((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})


// *** How to convert Callback to Promise ***
const userLeft = false
const userWatchingCatMeme = false

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })    
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})