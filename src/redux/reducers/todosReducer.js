import todoItems from "./todos";
const INITIAL_STATE = todoItems;

// DO NOT FILTER IN REDUCER
const todosReducer = (state = INITIAL_STATE, action = {}) => {
  console.log(action.type, "SEEET");
  switch (action.type) {
    case "FETCH_ALL_TODOS":
      return state;
    case "CREATE_NEW_TODO":
      console.log("OLA");
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todosReducer;
