/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    } else {
      console.error("Invalid index");
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      console.error("Invalid index");
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      console.error("Invalid index");
      return null;
    }
  }

  clear() {
    this.todos = [];
  }
}




/* 
// Test the Todo class
const todoList_1 = new Todo();

// Add todos
todoList_1.add("Buy groceries");
todoList_1.add("Finish homework");
todoList_1.add("Go for a run");

// Get all todos
console.log("All todos:", todoList_1.getAll());

// Update a todo
todoList_1.update(1, "Finish final project");

// Get a specific todo
console.log("Todo at index 1:", todoList_1.get(1));

// Remove a todo
todoList_1.remove(0);

// Get all todos after removal
console.log("All todos after removal:", todoList_1.getAll());

// Clear all todos
todoList_1.clear();
console.log("All todos after clearing:", todoList_1.getAll());
 */

module.exports = Todo;
