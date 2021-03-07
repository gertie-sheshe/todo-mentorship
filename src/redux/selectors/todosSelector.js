import { createSelector } from "reselect";

export const fetchTodos = (state) => state.todos;

export const fetchtActiveTodos = (state) => {
  return state.todos.filter((todo) => todo.completed === false);
};

export const clearCompleteTodos = (state) =>
  state.todos.filter((todo) => todo.completed === true);
