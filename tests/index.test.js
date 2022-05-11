const Todos = require("../src/index");
const assert = require("assert").strict;

describe("Integration Test", () => {
  it("Should be able to add and complete TODOs", () => {
    let todos = new Todos();
    assert.strictEqual(todos.list().length, 0);

    todos.add("run code");
    assert.strictEqual(todos.list().length, 1);
    assert.deepStrictEqual(todos.list(), [{title: "run code", completed: false}]);

    todos.add("test everything");
    assert.strictEqual(todos.list().length, 2);
    assert.deepStrictEqual(todos.list(),
      [
        { title: "run code", completed: false },
        { title: "test everything", completed: false }
      ]
    );

    todos.complete("run code");
    assert.deepStrictEqual(todos.list(),
      [
        { title: "run code", completed: true },
        { title: "test everything", completed: false }
      ]
    );
  });
});

describe("About complete() function", function() {
    it("Should fail if there are no TODOs", function() {
        let todos = new Todos();
        const expectedError = new Error("You have no TODOs stored. Why don't you add one first?");

        assert.throws(() => {
            todos.complete("doesn't exist");
        }, expectedError);
    });
});