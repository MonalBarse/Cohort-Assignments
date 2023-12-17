/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Async wait1 was completed")
            resolve();
        }, t*1000);
    });

}

function wait2(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Async wait2 was completed")
            resolve();
        }, t*1000);
    });

}

function wait3(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Async wait3 was completed")
            resolve();
        }, t*1000);
    });
    

}

function calculateTime(t1, t2, t3) {
    let start = new Date();
    return Promise.all([wait1(t1), wait2(t2), wait3(t3)])
        .then(() => {
            let end = new Date();
            // console.log("All promises were completed");
            // console.log(`Total time taken: ${end - start} ms`);
            let num = end - start;
            // console.log(num);
            return num;

        })
        .catch(error => {
            console.error(error);
            throw error; // Rethrow the error if needed
        });
}
// console.log(calculateTime(1, 2, 4));

module.exports = calculateTime;
