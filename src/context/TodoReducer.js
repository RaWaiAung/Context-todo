export default (state, action) => {
  switch (action.type) {
    case "add-Todo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "delete-Todo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "toggle-Todo":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
      };
    default:
      return state;
  }
};
