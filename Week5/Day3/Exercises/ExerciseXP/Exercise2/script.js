// Exercise 2
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
function resolvePromise() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (1 === 1) {
                resolve("Success");
            } else {
                reject("Ooops something went wrong.")
            }
        }, 4000);
    })
    return promise;
}
resolvePromise()
    .then(result => console.log(result))
    .catch(err => console.log(err));
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
function resolvePromise1() {
    const promise1 = Promise.resolve(
        setTimeout(() => {
            console.log("Success");
        }, 4000)
    );
    return promise1;
}
resolvePromise1()
    .then(result => console.log(result));
// Add code to catch errors and console.log ‘Ooops something went wrong’.