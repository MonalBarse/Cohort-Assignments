## JavaScript Assignments

This folder contains assignments related to asynchronous JavaScript.

### Assignments

Recommended order below but feel free to make a mess in any order you like.
1. Easy
   1. Counter
   2. Counter (no setInterval)
   3. Read from a file
   4. Write to a file
2. Medium
   1. File cleaner
   2. Clock
3. Hard
   1. Promisify setTimeout
   2. Sleep completely
   3. Promise all
   4. Promise chain

#### Development Setup
1. If you have Node.js locally, you should run these on your machine
2. If you don't, you can copy these over to repl.it and run it there.


### Things to revise and understand before starting with the assignment

1. Date Class

2. fs module from node (The Node.js fs module provides an interface to the underlying operating system's file system. It can be used to read, write, update, and delete files and directories.)

3. Classes & OOP 

4. Map, Filter, reduce

5. Promises

#### How to Run Tests
1. Your working directory must be /assignments/week-2/01-async-js 

2. Do npm install

3. To run tests run `npx jest ./tests/<filename-of-test>` 
   for example, `npx jest ./tests/1-promisify-setTimeout.test.js`

4. If the above does not work for you, to run tests run `npm run <name-of-test>`
   for example, `npm run 1-promisify-setTimeout`
   
5. To run all tests run `npx jest ./tests/` or `npm run all`
