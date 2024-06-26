/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  A] Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  B] Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json()); // this is a middleware that parses the request body and creates req.body object for us to use. 
//We get the parsed JSON object in req.body for eg: req.body.title will give us the title of the todo item sent by the client
let toDos = [];
// 1.GET /todos - Retrieve all todo items
app.get('/todos', (req, res) => {
  res.json(toDos);
});


function findThatTodo(toDos, req) {
  for (let i = 0; i < toDos.length; i++) {
    if (toDos[i].id === parseInt(req.params.id)) {
      return toDos[i];
    }
  }
};
// 2.GET /todos/:id - Retrieve a specific todo item by ID
app.get('/todos/:id', (req, res) => {
  let toGetTodo = findThatTodo(toDos, req);
  if (!toGetTodo) {
    res.status(404).send('Todo item not found');
  } else {
    res.json(toGetTodo);
  }
});


// 3. POST /todos - Create a new todo item
app.post('/todos', (req, res) => {
  let toPostTodo = {
    id: Math.floor(Math.random() * 1000000),
    title: req.body.title, // req.body is the JSON object sent by the client we can access it's properties using dot notation for example req.body.title
    description: req.body.description
  };

  toDos.push(toPostTodo);
  res.status(201).json(toPostTodo); // status 201 means created, we created a new resource on the server which here is a new TODO item.
});

// 4. PUT /todos/:id - Update an existing todo item by ID

app.put('/todos/:id', (req, res) => {
  const toUpdateTodo = findThatTodo(toDos, req);
  if(!toUpdateTodo) {
    res.status(404).send('Todo item not found');
  } else {
    toUpdateTodo.title = req.body.title;
    toUpdateTodo.description = req.body.description;
    res.status(200).json(toUpdateTodo);
  }
});

//5. DELETE /todos/:id - Delete a todo item by ID
app.delete('/todos/:id', (req, res) => {
  let toDeleteTodo = findThatTodo(toDos, req);
  if (!toDeleteTodo) {
    res.status(404).send('Todo item not found');
  } else {
    toDos.splice(toDos.indexOf(toDeleteTodo), 1);
    res.status(200).send('Todo item deleted');
  }
});
module.exports = app;