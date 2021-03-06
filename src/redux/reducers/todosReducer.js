import todoItems from "./todos";
const INITIAL_STATE = todoItems;

const todosReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case "FETCH_ALL_TODOS":
      return state;
    case "ALL_ACTIVE_TODOS":
      return state.filter((state) => state.status === "active");
    case "ALL_COMPLETED_TODOS":
      return state.filter((state) => state.completed === true);
    default:
      return state;
  }
};

export default todosReducer;
