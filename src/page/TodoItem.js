import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
const TodoItem = ({ text ,complete, clickToDelete , clickToToggle }) => {
  console.log('Name',text);
  return (
    <section className='todoList'>
      <p style={{color: complete ? "green" : "red"}}>{text}</p>
      <div className="btn-container">
        <button type="button" onClick={clickToToggle} className="edit-btn">
          <FaCheck />
        </button>
        <button type="button" onClick={clickToDelete} className="delete-btn">
          <FaTimes />
        </button>
      </div>
    </section>
  );
};

export default TodoItem;
