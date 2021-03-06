import actionTypes from "./actionTypes";

export const fetchTodos = () => ({
  type: actionTypes.FETCH_ALL_TODOS,
  payload: null,
});

export const fetchAllActive = () => ({
  type: actionTypes.ALL_ACTIVE_TODOS,
});

export const clearCompleted = () => ({
  type: actionTypes.ALL_COMPLETED_TODOS,
});
