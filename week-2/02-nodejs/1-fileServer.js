/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// 1. GET /files - Returns a list of files present in `./files/` directory
app.get('/files', (req, res) => {
  // const files = fs.readdirSync(path.join(__dirname, './files')); // returns an array of filenames, __dirname is the directory name of the current module it is given by node
  // //                                                                path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
  // //                                                                fs.readdirSync() method returns an array of all the file names in the directory excluding '.' and '..'. The difference between readdir and readdirSync is that readdir is asynchronous function and readdirSync is synchronous function.
  fs.readdir(path.join(__dirname, "./files"),(err, data) =>{
    if(err) res.status(500).json({error: "Failed to retrieve files"});
    else res.json(data);//                                           res.json() method sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify(). here it used JSON.stringify() method to convert the array object to JSON string.

  });
});

// 2. GET /file/:filename - Returns content of given file by name

app.get('/file/:filename', (req, res) => {
  const filePath = path.join(__dirname, './files/', req.params.filename);
  //                                                                req.params.filename is the filename which is passed in the url when we write http://localhost:3000/file/example.txt, here example.txt is the filename
  
  //                                                                Now we know the filePath so we can read the file using fs.readFile() method
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) res.status(404).send('File not found'); 
    else res.send(data); 
  })
});

// For all the other routes, return 404
app.all('*', (req, res) => {//                                      app.all handles all the http methods like get, post, put, delete etc. And here * means all the routes, 
  res.status(404).send('Route not found');
});


//The server is listening on port 3000
app.listen(PORT, () => console.log(`The fileServer listening on port ${PORT}`));

module.exports = app;