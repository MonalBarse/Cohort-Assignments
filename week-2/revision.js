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
 // }); */
//------------------------------------------fs.readdir-----------------------------------------//

// fsPromises.readdir(path[, options])

//       import { readdir } from 'node:fs/promises';
/* 
    - path:         <string> | <Buffer> | <URL>

    - options:      <string> | <Object>
        1. encoding <string> Default: 'utf8'
        2. withFileTypes <boolean> Default: false
        3. recursive <boolean> If true, reads the contents of a directory recursively. In recursive mode, it will list all files, sub files, and directories. Default: false.
        
    - Returns:      <Promise> Fulfills with an array of the names of the files in the directory excluding '.' and '..'



*/
/* //Example:
        import { readdir } from 'node:fs/promises';

        try {
            const files = await readdir(path);
            for (const file of files)
                console.log(file);
        } catch (err) {
            console.error(err);
        }

 */
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

// ----------------------------------Difference between Arrow function and normal function---------------------------------- //

/* 
Syntax:

Normal Function:
    function add(a, b) {
        return a + b;
    }

Arrow Function:

    const add = (a, b) => { 
        return a + b;
    }

1. 'this' Binding:

    Normal Function:
        In normal functions, the value of the 'this' keyword depends on how the function is called. The 'this' value is dynamically determined at runtime.

    Arrow Function:
        Arrow functions capture the 'this' value from their surrounding lexical context. They don't have their own 'this' binding and inherit it from the enclosing scope.

2. Arguments Object:

    Normal Function:
        Normal functions have their own arguments object that provides access to all the arguments passed to the function. This means that the arguments object is local to a function and can only be accessed inside that function.

    Arrow Function:
        Arrow functions do not have their own arguments object. Instead, they inherit the arguments object from their enclosing scope.

3. Use of new keyword:

    Normal Function:
        Normal functions can be used as constructors with the new keyword to create instances of objects.

    Arrow Function:
        Arrow functions cannot be used as constructors. They do not have their own 'this', and calling them with new will result in an error.

4. prototype Property:

    Normal Function:
        Normal functions have a prototype property, which can be used for inheritance.

    Arrow Function:
        Arrow functions do not have a prototype property. They cannot be used as constructors for creating objects with shared properties and methods.

*/


//Example of 'this' Binding

    /* 
    function NormalFunction() {
    'this'.value = 1;

    setTimeout(function () {
        'this'.value++;
        console.log("Inside normal function:", 'this'.value); // 'this' is not the instance of NormalFunction
    }, 1000);
    }

    function ArrowFunction() {
    'this'.value = 1;

    setTimeout(() => {
        'this'.value++;
        console.log("Inside arrow function:", 'this'.value); // 'this' is the instance of ArrowFunction
    }, 1000);
    }

    const instance1 = new NormalFunction(); // Inside normal function: undefined
    const instance2 = new ArrowFunction();  // Inside arrow function: 2
    console.log(instance1.value); // 1
    console.log(instance1)

    */

// Example of Arguments Object

    /* 
    //Arrow functions don't have their own arguments object.

    // Normal Function
    function showArguments() {
    console.log(arguments); // Normal function has its own arguments object
    }

    showArguments(1, 2, 3); //[Arguments] { '0': 1, '1': 2, '2': 3 }

    // Arrow Function
    const showArgumentsArrow = () => {
    console.log(arguments); // Arrow function doesn't have its own arguments object
    };
    */

// Example of Use of new keyword

    /*
    
    // Normal Function
    function Person(name) {
        this.name = name;
    }
  
    const person1 = new Person("Alice");
    console.log(person1.name); // Alice
  
    // Arrow Function (will throw an error if used with new)
    const ArrowPerson = (name) => {
        this.name = name;
    };
  
    // const arrowPerson1 = new ArrowPerson("Bob"); // Error: ArrowPerson is not a constructor
    // console.log(arrowPerson1.name); // undefined  

    */

// Example of prototype Property

    /* 
    // Normal Function
    function Animal(name) {
        this.name = name;
    }
    
    Animal.prototype.sayName = function () {
        console.log("Normal Function:", this.name);
    };
    
    const dog = new Animal("Buddy");
    dog.sayName(); // Normal Function: Buddy
    
    // Arrow Function (no prototype property)
    const ArrowAnimal = (name) => {
        this.name = name;
    };
    
    // ArrowAnimal.prototype.sayName = function () {}; // TypeError: Cannot set property 'sayName' of undefined
    // const cat = new ArrowAnimal("Misty"); // TypeError: ArrowAnimal is not a constructor
  
    */

// ----------------------------------------Map Filter Reduce--------------------------------------- //
// ----------------filter--------------------//

/*     
    
    let arr =[0,1,2,3,4,5];
    let my = arr.filter((n)=> {
        return n;
    })

    console.log(my);

*/

// ------------------Map----------------- //

// The map() method creates a new array by applying a provided function to every element in the calling array. 
// It doesn't mutate the original array.
/*
    let arr = [0, 1, 2, 3, 4, 5];
    let myarr = arr.map((n) => {
        return n + 3;
    })
    console.log(myarr); //

*/

// --------------Chaining of Map and filter-----------//

/* 
    
    let arr = [0, 1, 2, 3, 4, 5];
    let myarr = arr 
    .map((n) => n * 5)
    .filter((m) => m >= 5);         //Here, 'n' is passed in 'm'
    console.log(myarr); 

*/

// -----------------Array reduce method---------------//

/*      

        let arr = [0, 1, 2, 3];
        let myArray = arr.reduce((accumualator, currentValue) => {
            console.log("accumalator: " + accumualator + ", currentValue: " + currentValue);
            return accumualator + currentValue
        }, 5);
        console.log("myArray = "+ myArray); 

*/   
//------------------------------------------------//
