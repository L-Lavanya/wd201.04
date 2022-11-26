/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todo List Test Suite", () => {
  beforeAll(() => {
    const today = new Date();
    const oneDay = 86400000;
    [
      {
        title: "Writing the Notes",
        completed: false,
        dueDate: new Date(today.getTime() - oneDay).toLocaleDateString("en-CA"),
      },
      {
        title: "Purchase Groceries",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "Prepare for Exams",
        completed: false,
        dueDate: new Date(today.getTime() + oneDay).toLocaleDateString("en-CA"),
      },
    ].forEach(add);
  });
  test("checks creating a new todo", () => {
    expect(all.length).toEqual(3);
    add({
      title: "Go to The Park",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });

  test("checks marking a todo as completed", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("checks retrieval of overdue items", () => {
    expect(overdue().length).toEqual(1);
  });

  test("checks retrieval of due today items", () => {
    expect(dueToday().length).toEqual(2);
  });

  test("checks retrieval of due later items", () => {
    expect(dueLater().length).toEqual(1);
  });
});