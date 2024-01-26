const readline = require('readline');
/* 
## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
for x seconds. (x being a number you can choose)
*/


const rl = readline.createInterface({ // create interface for readline which is a module that reads input from users
    input: process.stdin,
    output: process.stdout
});

rl.question('Counter for (in seconds): ', (answer) => {
    const x = parseInt(answer);
    let counter = 0;

    let theCounter = setInterval(() => {
        counter++;
        console.log(counter);
        if (counter === x) {
            clearInterval(theCounter);
            rl.close();
        }
    }, 1000);
});


/* 
    let theCounter = setInterval(() => {
    counter++;
    console.log(counter);
    if (counter === x) {
        clearInterval(theCounter)
    }
    }   , 1000)
 
*/