//Date class
/*

 // Create a new Date object
const currentDate = new Date();

// Getting Components
const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // Month is zero-indexed (0-11)
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log('Current Date:', currentDate);
console.log('Year:', year);
console.log('Month:', month + 1); // Adding 1 to month to display it in the regular format (1-12)
console.log('Day:', day);
console.log('Hours:', hours);
console.log('Minutes:', minutes);
console.log('Seconds:', seconds);

// Setting Components
currentDate.setFullYear(2023);
currentDate.setMonth(6); // Setting month to July
currentDate.setDate(15);
currentDate.setHours(12);
currentDate.setMinutes(30);
currentDate.setSeconds(45);

console.log('Updated Date:', currentDate);

// Formatting
const formattedDate = currentDate.toLocaleString();
console.log('Formatted Date:', formattedDate);

// Timestamps
const timestamp = currentDate.getTime();
console.log('Timestamp:', timestamp);

const options = { weekday: 'long', day: 'numeric' , month: 'long', year: 'numeric' };
const formattedDateWithOptions = currentDate.toLocaleString('en-UK', options);

console.log('Formatted Date with Options:', formattedDateWithOptions);

*/

// ----------------------------------------XX---------------------------------------- //

/* 

fs.readFile(path[, options], callback)#
(Added in: v0.1.8)
  History
    1. path     :    <string> | <Buffer> | <URL> | <integer> filename or file descriptor
    2. options  :    <Object> | <string>
            encoding :    <string> | <null> Default: null
            flag     :    <string>  Default: 'r'.
            signal   :    <AbortSignal> allows aborting an in-progress readFile
    3. callback :    <Function>
            err      :    <Error> | <AggregateError>
            data     :    <string> | <Buffer>

    readFile(path[, options], callback)
        
    Here, `options` is an optional argument where you can specify encoding, flag, and other settings.

    Specifies the character encoding for the file contents. If not provided, the raw buffer is returned. Common values include: ('utf8' (default), 'ascii', 'base64', 'binary', 'hex', 'ucs2', 'utf16le', 'latin1')        
        'utf8' (default): Returns a string with UTF-8 encoding.
        'ascii': Returns a string with ASCII encoding.
        'base64': Returns a string with base64 encoding.
        `null`: Returns a Buffer.
        'binary': Returns a string with binary encoding. 
        `ucs2`: Returns a string with UCS-2 encoding. 
        
So, readFile(path[, options], callback) Asynchronously reads the entire contents of a file.

Example: Reading a file asynchronously using Node.js

    import { readFile } from 'node:fs';  // import the readFile function from the fs module
    readFile('/etc/passwd', (err,'utf-8', data) => { 
        if (err) throw err;
        console.log(data);
    });

*/