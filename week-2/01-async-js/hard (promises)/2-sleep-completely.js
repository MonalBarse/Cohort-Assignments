/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// function sleep(milliseconds) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, milliseconds);
//     });
// }
function sleep(milliseconds) {
    // const start = Date.now();
    // while (Date.now() - start < milliseconds) {
    //     // Busy-wait loop, consuming CPU cycles
    // }
    return new Promise((resolve,reject) => {
        const start = Date.now();

        // Perform a busy wait (blocking loop)
        while (Date.now() - start < milliseconds) {
            // Continue looping until the specified duration has passed
        }

        // Resolve the Promise once the busy wait is done
        resolve(); });
}


// Example: Pause the thread for 3000 milliseconds (3 seconds)
// console.log('Before busyWait');
// sleep(3000);
// console.log('After busyWait');


module.exports = sleep;
