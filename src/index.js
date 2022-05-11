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
    this.todos.forEach((todo) => {
      if (todo.title === title) {
        todo.completed = true;
        return;
      }
    });
  }
}

module.exports = Todos;