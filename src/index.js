const fs = require('fs').promises;

class Todos {
  constructor() {
    this.todos = [];
  }

  list() {
    return this.todos;
  }

  add(title) {
    let todo = {
      title: title,
      completed: false
    }

    this.todos.push(todo);
  }

  complete(title) {
    if (this.todos.length === 0) {
      throw new Error("You have no TODOs stored. Why don't you add one first?");
    }

    this.todos.forEach((todo) => {
      if (todo.title === title) {
        todo.completed = true;
        return;
      }
    });
  }

  saveToFile() {
    let fileContents = 'Title, Completed\n';
    this.todos.forEach((todo) => {
        fileContents += `${todo.title}, ${todo.completed}\n`
    });

    return fs.writeFile('todos.csv', fileContents);
  }
}

module.exports = Todos;