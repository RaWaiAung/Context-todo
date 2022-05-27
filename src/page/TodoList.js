import React, { useContext } from "react";
import TodoItem from "../page/TodoItem";
import AddForm from "./AddForm";
import { GlobalContext } from "../context/GlobalContext";
const TodoList = () => {
  const { todos , deleteTodo , toggleTodo} = useContext(GlobalContext);
  return (
    <div className="container">
      <AddForm/>
      <div class="todo-items">
      {todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.name} complete={todo.complete} clickToDelete={() => deleteTodo(todo.id)} clickToToggle={() => toggleTodo(todo.id)}/>
      ))}
      </div>
    </div>
  );
};

export default TodoList;
