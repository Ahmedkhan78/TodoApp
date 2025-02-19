import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "5px",
        borderRadius: "5px",
        backgroundColor: todo.completed ? "#d4edda" : "#f8d7da",
      }}
    >
      <h3 style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.task}
      </h3>
      <p>Priority: {todo.priority}</p>
      <p>Category: {todo.category}</p>

      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        Mark as Complete
      </label>

      <button onClick={() => deleteTodo(todo.id)}>DeleteTodo</button>
    </div>
  );
};

export default TodoItem;
