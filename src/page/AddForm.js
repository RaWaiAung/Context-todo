import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AddForm = () => {
  const [name, setName] = useState("");
  const { addTodo} = useContext(GlobalContext)
  const saveTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: (Math.random() * 100 ).toFixed(2),
      name,
    };
    addTodo(newTodo);
    setName("");
  };
  const canSave = Boolean(name);
  return (
    <div>
      <div className="form-control">
        <input
          type="text"
          className="formlist"
          id="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter ....."
        />
        <button type="submit" onClick={saveTodo} className="btn" disabled={!canSave}>Save</button>
      </div>
    </div>
  );
};

export default AddForm;
