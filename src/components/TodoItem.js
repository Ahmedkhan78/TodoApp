import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div>
      <h3>{todo.task}</h3>
      <p>Priority: {todo.priority}</p>
      <p>Category: {todo.category}</p>
      <button onClick={() => deleteTodo(todo.id)}>DeleteTodo</button>
    </div>
  );
};

export default TodoItem;
