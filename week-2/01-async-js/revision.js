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

// ---------------------------------------- fs (FileSystem) ---------------------------------------- //

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


*/
// Example: Reading a file asynchronously using Node.js

   /*  import { readFile } from 'node:fs';  // import the readFile function from the fs module
    readFile('/etc/passwd', (err, data) => { 
        if (err) throw err;
        console.log(data);
    }); */

//--------------------------------------Creating Promises--------------------------------------//

/* 
    const promise_1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async task was completed")
            resolve();
        }, 1000);

    });

    promise_1.then(() => {
        console.log("promise Consumed")
    }
    ) 

*/


/*
    const promise_2 = new Promise((resolve, reject) => {
        console.log(
            `
            You can pass arguments in 'resolve'
            Here we are passing an OBJECT,
            which will appear after 2000 ms
            `);
        setTimeout(() => {
            resolve({
                name: " Monal",
                age: "19",
                college: "IIT (BHU)"
            });
        }, 2000);
    });

    promise_2.then((data) => { // Here, `data` is the object we passed in resolve
        console.log(data); // {name: " Monal", age: "19", college: "IIT (BHU)"}
    });
 
*/

/*
    const promise_3 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            let error = false;
            if(!error){
                resolve({                       //resolve use
                    name: " Monal",
                    age: "19",
                    college: "IIT (BHU)"
                });
            }else{
                reject("There was some error");  //reject use
            }
        }, 1000);
    })

    promise_3.then((user)=>{
        console.log(`${JSON.stringify(user)}`);
        return user.name;
    }).then((ans)=>{
        console.log(ans);
    }).catch((err)=>{
        console.log(err);
    }).finally(()=>console.log("Promise was either completed or rejected.")) 

*/

//-----------------Async/Await Syntax---------------//
/* 


    const promise_4 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            let error = false;
            if(!error){
                resolve({
                    username: "Monal",
                    password: "26198"
                })
            }else{
                reject("There was some error");
            }
            
        }, 1000);
    })

    async function consumePromise_4() {
        try {
            const sys = await promise_4;
            console.log(sys);
        } catch (error) {
            console.log(error);
        }
    }
    consumePromise_4(); 
    

 */