import React, { useState } from "react";

const EditDueDate = ({ todo, editDueDate }) => {
  const [isEditingDate, setIsEditingDate] = useState(false);
  const [newDueDate, setNewDueDate] = useState(todo.dueDate || "");
  const handleDueDate = () => {
    editDueDate(todo.id, newDueDate);
    setIsEditingDate(false);
  };
  const today = new Date().toISOString().split("T")[0];
  return (
    <>
      {isEditingDate ? (
        <>
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
          <button onClick={handleDueDate}>Save</button>
          <button onClick={() => setIsEditingDate(false)}>Cancel</button>
        </>
      ) : (
        <>
          <p
            style={{
              color: todo.dueDate && todo.dueDate < today ? "red" : "black",
            }}
          >
            Due Date: {todo.dueDate || "No DeadLine"}
          </p>
          <button onClick={() => setIsEditingDate(true)}>Edit due Date</button>
        </>
      )}
    </>
  );
};

export default EditDueDate;
