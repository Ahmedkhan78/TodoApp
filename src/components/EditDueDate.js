import React, { useState } from "react";

const EditDueDate = ({ todo, editDueDate, isDarkMode }) => {
  const [isEditingDate, setIsEditingDate] = useState(false);
  const [newDueDate, setNewDueDate] = useState(todo.dueDate || "");
  const today = new Date().toISOString().split("T")[0];

  const handleDueDate = () => {
    editDueDate(todo.id, newDueDate);
    setIsEditingDate(false);
  };

  const isOverdue = todo.dueDate && todo.dueDate < today;

  return (
    <>
      {isEditingDate ? (
        <>
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
            className={`p-2 rounded-md border ${
              isDarkMode
                ? "bg-dark-green text-light-beige border-gray-500"
                : "bg-light-beige text-dark-green border-olive-green"
            }`}
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
            className={`${
              isOverdue
                ? "text-red-500"
                : isDarkMode
                ? "text-dark-green"
                : "text-light-beige"
            }`}
          >
            Due Date: {todo.dueDate || "No Deadline"}
          </p>
          <button
            onClick={() => setIsEditingDate(true)}
            className={`mt-2 px-4 py-2 rounded-md ${
              isDarkMode
                ? "bg-warm-brown text-light-beige"
                : "bg-light-beige text-dark-green"
            }`}
          >
            Edit Due Date
          </button>
        </>
      )}
    </>
  );
};

export default EditDueDate;
