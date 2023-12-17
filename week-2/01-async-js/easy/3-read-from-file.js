/* ## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

 */
import { readFile } from 'node:fs';

readFile('./3-read-from-file.md', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});


setTimeout(() => {
    console.log("Settimeout done");
}, 2000);


let a =0;
for (let i = 0; i < 5000000000; i++) {
    
    a = a+i;
}
console.log(a);  


// Even after the the expensive task the async task (that is read file here) is executed once all the other task have been completed