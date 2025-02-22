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
          <button
            onClick={handleDueDate}
            className="ml-2 bg-warm-brown text-light-beige px-4 py-2 rounded-md"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditingDate(false)}
            className="ml-2 bg-warm-brown text-light-beige px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <p
            style={{
              color:
                todo.dueDate && todo.dueDate < today ? "red" : "light-beige",
            }}
            className="text-light-beige"
          >
            Due Date: {todo.dueDate || "No DeadLine"}
          </p>
          <button
            onClick={() => setIsEditingDate(true)}
            className="mt-2 bg-light-beige text-dark-green px-4 py-2 rounded-md"
          >
            Edit due Date
          </button>
        </>
      )}
    </>
  );
};

export default EditDueDate;
