import React, { createContext, useReducer } from "react";
import TodoReducer from "./TodoReducer";
const initialState = {
  todos: [
    // { id: 1, name: "wash the clothes", complete: false },
    // { id: 2, name: "clean the bed room", complete: false },
    // { id: 3, name: "wake up 4 A.m", complete: true },
  ],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const deleteTodo = (id) => {
    dispatch({
      type: "delete-Todo",
      payload: id,
    });
  };

  const toggleTodo = (id) => {
    dispatch({
      type: "toggle-Todo",
      payload: id,
    });
  };
  const addTodo = (todo) => {
    dispatch({
      type: "add-Todo",
      payload: todo,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
        toggleTodo
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
