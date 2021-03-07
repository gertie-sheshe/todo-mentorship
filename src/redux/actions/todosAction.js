import actionTypes from "./actionTypes";

export const fetchTodos = () => ({
  type: actionTypes.FETCH_ALL_TODOS,
  payload: null,
});

export const createTodo = (todo) => {
  return {
    type: actionTypes.CREATE_NEW_TODO,
    payload: {
      id: Math.random(1000),
      name: todo,
      status: "active",
      completed: false,
    },
  };
};

// export const clearCompleted = () => ({
//   type: actionTypes.ALL_COMPLETED_TODOS,
// });
