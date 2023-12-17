/* 
    ## Write to a file
    Using the fs library again, try to write to the contents of a file.
    You can use the fs library to as a black box, the goal is to understand async tasks.
*/
import { writeFile } from 'node:fs';
// import { Buffer } from 'node:buffer';

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('4-write-to-file.txt', 'This file was created, using writeFile', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});