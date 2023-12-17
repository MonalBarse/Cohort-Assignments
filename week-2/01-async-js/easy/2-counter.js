// Without using setInterval, try to code a counter in Javascript.


/* Final logic
let x = 5;

for (let i = 0; i <= x; i++) {
    setTimeout(()=>{
        console.log(i);
    }, i*1000);

};
 */

import { createInterface } from 'readline'; //The readline module is a part of the Node.js standard library and provides an interface for reading data from a Readable stream (such as a file or the standard input).

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the duration for the counter (in seconds): ', (answer) => { //The question method of the rl interface is used to ask the user a question. The question is specified as the first parameter, and a callback function is provided as the second parameter. The callback function is invoked with the user's response.
    const x = parseInt(answer);
    if (isNaN(x) || x < 0) {
        console.log('Invalid input. Please enter a non-negative number.');
        rl.close();
        return;
    }
    for (let i = 0; i <= x; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
        
    }
    rl.close(); // After getting the response, the program does its job and then closes the interface using `rl.close()`
});
 

/*   
 About: 
  const rl = createInterface({
      input: process.stdin,
      output: process.stdout
   });

    process.stdin (Standard Input): This is the input stream where a program can read data from the user. 
    In this context, it represents the data coming from the user through the console. 
    When you use rl.question or similar methods, it reads input from this stream.

    process.stdout (Standard Output): This is the output stream where a program can write data to be displayed to the user. 
    In this context, it represents the console or terminal where the program's output will be shown. 
    When you use console.log or similar methods, it writes output to this stream.
*/

/*  IMPROVED CODE


import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function startCounter() {
    rl.question('Enter the duration for the counter (in seconds): ', (answer) => {
        const duration = parseInt(answer);

        if (isNaN(duration) || duration < 0) {
            console.log('Invalid input. Please enter a non-negative number.');
            rl.close();
            return;
        }

        console.log('Counting:');
        for (let i = 0; i <= duration; i++) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        }

        // Close the interface after the counter is done
        setTimeout(() => {
            rl.close();
        }, (duration + 1) * 1000);
    });
}

// Start the counter when the interface is ready
rl.on('close', () => {
    console.log('Counter finished.');
});

rl.on('SIGINT', () => {
    // Handle Ctrl+C by closing the interface
    rl.close();
});

startCounter();
*/