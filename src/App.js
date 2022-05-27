import React from "react";
import { GlobalProvider } from "./context/GlobalContext";
import TodoList from "./page/TodoList";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <TodoList />
      </GlobalProvider>
    </>
  );
};

export default App;
