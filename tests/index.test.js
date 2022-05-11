const Todos = require("../src/index");
const assert = require("assert").strict;

describe("Integration Test", () => {
  it("Should be able to add and complete TODOs", () => {
    let todos = new Todos();
    assert.strictEqual(todos.list().length, 0);
  });
});