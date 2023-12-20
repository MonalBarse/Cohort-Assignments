/* 
## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       monal
```

After the program runs, the output should be

```
hello world my name is raman
```
*/



/* 

// import { readFile } from 'node:fs';
// import { writeFile } from 'node:fs';


let newData;
function clean(str){
    let cleanedStr = str.replace(/\s+/g, ' ').trim();
    return cleanedStr;
}
readFile('./1-file-cleaner.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    newData = clean(data)
    console.log(data);
    console.log(newData);
});
// console.log(typeof(newData)); this is undefined as readFile is an async function so the 'newData' isnot updated yet

writeFile('./1-file-cleaner.txt',newData,(err) => {
    if (err) {
        throw new Error("An error occurred: " + err);
    }
    console.log('The file has been saved!');
  }); 
*/

// This solution does not work .... Need to use prommise 
/* 
let readTheFile = new Promise((resolve, reject) => {
    let newData;
    function clean(str) {
        let cleanedStr = str.replace(/\s+/g, ' ').trim();
        return cleanedStr;
    }
    readFile('./1-file-cleaner.txt', 'utf-8', (err, data) => {
        newData = clean(data)
        console.log("Performing readFile");
        console.log("The file reads as: ", data);
        // console.log(newData);
        if (err) {
            reject(err); // Reject the promise with the error if readFile encounters an error
        } else {
            resolve(newData); // Resolve the promise with the file content if successful
        }

    });
})

readTheFile
    .then((data) => {
        writeFile('./1-file-cleaner.txt', data, (err) => {
            console.log("Performing writeFile");
            if (err) {
                throw new Error("An error occurred: " + err);
            }

        });
    }).then(() => { console.log('The file has been saved! and updated to: ', data); })
    .catch((error) => {
        console.error('Error:', error.message);
    });

 */

// WE CAN WRITE A MORE OPTIMISED CODE IN THE FOLLOWING WAY:

import { readFile, writeFile } from 'node:fs/promises';

/* class FileCleaner {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async readFile() {
        try {
            const data = await readFile(this.filePath, 'utf-8');
            console.log("The file reads as: ",data);
            return this.clean(data); //In the given code, clean is a method of the FileCleaner class, so you need to use this.clean(data) to call the method on the current instance of the class
        } catch (error) {
            throw new Error(`An error occurred while reading the file: ${error.message}`);
        }
    }

    async writeFile(data) {
        try {
            await writeFile(this.filePath, data);
            return data; // Return the data after writing

        } catch (error) {
            throw new Error(`An error occurred while writing to the file: ${error.message}`);
        }
    }

    clean(str) {
        const cleanedStr = str.replace(/\s+/g, ' ').trim();
        return cleanedStr;
    }
} */
class FileCleaner {
    constructor(filePath) {
        this.filePath = filePath;
    }

    readFile() {
        return readFile(this.filePath, 'utf-8')
            .then((data) => {
                console.log("Performing readFile");
                console.log(data)
                return this.clean(data)
            }) //In the given code, clean is a method of the FileCleaner class, so you need to use this.clean(data) to call the method on the current instance of the class
            .catch(error => {
                throw new Error(`An error occurred while reading the file: ${error.message}`);
            });
    }

    writeFile(data) {
        return writeFile(this.filePath, data)
            .then(() => data) // Return the data after writing
            .catch(error => {
                throw new Error(`An error occurred while writing to the file: ${error.message}`);
            });
    }

    clean(str) {
        const cleanedStr = str.replace(/\s+/g, ' ').trim();
        return cleanedStr;
    }
}


// Usage
const filePath = './1-file-cleaner.txt';
const fileCleaner = new FileCleaner(filePath);

fileCleaner.readFile()
    .then((cleanedData) => {
        console.log("Performing writeFile");
        return fileCleaner.writeFile(cleanedData);
    })
    .then((daat) => {
        console.log('The file has been saved! The new file reads as: ', daat);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
