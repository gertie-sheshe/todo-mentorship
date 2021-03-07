import todoItems from "./todos";
const INITIAL_STATE = todoItems;

// DO NOT FILTER IN REDUCER
const todosReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case "FETCH_ALL_TODOS":
      return state;
    case "CREATE_NEW_TODO":
      return [...state, action.payload];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todosReducer;
