import React, { useState } from "react";
import EditDueDate from "./EditDueDate";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo, editDueDate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id });

  const handleEdit = () => {
    editTodo(todo.id, newTask);
    setIsEditing(false);
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: "1px solid warm-brown",
    padding: "10px",
    margin: "5px",
    borderRadius: "5px",

    cursor: "grab",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${todo.completed ? "bg-warm-brown" : "bg-olive-green"}`}
    >
      {" "}
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border p-2 rounded-md"
          />
          <button
            onClick={handleEdit}
            className="ml-2 bg-olive-green text-light-beige px-4 py-2 rounded-md"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="ml-2 bg-warm-brown text-light-beige px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h3
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            className="text-5xl font-semibold text-center text-light-beige bg-warm-brown rounded-2xl"
          >
            {todo.task}
          </h3>
          <div className="flex justify-between">
            <div className="text-lg pl-5">
              <p className="text-lg text-light-beige">
                Priority: {todo.priority}
              </p>
              <p className="text-lg text-light-beige">
                Category: {todo.category}
              </p>
            </div>

            <div className="text-start pr-5">
              <EditDueDate todo={todo} editDueDate={editDueDate} />

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="text-dark-green"
                />
                <span className="text-light-beige">Mark as Complete</span>
              </label>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mb-4">
            <button
              onClick={() => setIsEditing(true)}
              className="mt-2 bg-light-beige text-dark-green px-4 py-2 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="ml-2 mt-2 bg-warm-brown text-white px-4 py-2 rounded-md"
            >
              Delete Todo
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
