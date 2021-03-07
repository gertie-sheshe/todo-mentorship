import { createSelector } from "reselect";

export const fetchTodos = (state) => state.todos;

export const fetchtActiveTodos = (state) => {
  console.log("TESST", state);
  return state.todos.filter((todo) => todo.status === "active");
};

export const clearCompleteTodos = (state) =>
  state.todos.filter((todo) => todo.completed === true);
